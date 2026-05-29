import fs from "node:fs";
import path from "node:path";
import type { Brand } from "@/content/types";

// Parses a brand's verbatim Notion markdown into umbrella sections (forward-only
// state machine so irregular brand structures still bucket correctly), then
// splits EVERY section into collapsible toggle items so no section is a wall of
// text. Split level is chosen per section: level-2 headings if present, else
// level-3.

export type ToggleItem = { heading: string; markdown: string };

export type Umbrella = {
  id: string;
  label: string;
  /** content before the first toggle (intro / lede) */
  intro: string;
  /** collapsible subsections */
  items: ToggleItem[];
};

export type CaseStudy = {
  brand: Brand;
  umbrellas: Umbrella[];
};

const ORDER = [
  "overview",
  "strategic-overview",
  "research",
  "creative",
  "architecture",
  "expected-impact",
] as const;

const LABELS: Record<(typeof ORDER)[number], string> = {
  overview: "Overview",
  "strategic-overview": "Strategic Overview",
  research: "Research Foundation",
  creative: "Creative Assets",
  architecture: "Campaign Architecture",
  "expected-impact": "Expected Impact",
};

function normalizeHeading(line: string): string {
  return line
    .replace(/^#+\s*/, "")
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .toLowerCase()
    .trim();
}

function umbrellaFor(heading: string): (typeof ORDER)[number] | null {
  if (/^strategic overview/.test(heading)) return "strategic-overview";
  if (
    /^research foundation/.test(heading) ||
    /^comprehensive deep research/.test(heading) ||
    /^deep research/.test(heading)
  )
    return "research";
  if (
    /^creative assets/.test(heading) ||
    /^vsl scripts/.test(heading) ||
    /^vsl\/video/.test(heading) ||
    /^static ads/.test(heading)
  )
    return "creative";
  if (/^campaign architecture/.test(heading)) return "architecture";
  if (/^expected impact/.test(heading) || /^performance forecast/.test(heading))
    return "expected-impact";
  return null;
}

function cleanHeading(line: string): string {
  return line
    .replace(/^#+\s*/, "")
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .trim();
}

function isHeadingLine(line: string): boolean {
  return /^#{1,4}\s/.test(line);
}

/** Split a section body into intro + toggle items at the chosen heading level. */
function splitIntoItems(bodyLines: string[]): {
  intro: string;
  items: ToggleItem[];
} {
  const hasH2 = bodyLines.some((l) => /^##\s/.test(l));
  const level = hasH2 ? 2 : 3;
  const headRe = new RegExp(`^#{${level}}\\s`);

  const intro: string[] = [];
  const items: ToggleItem[] = [];
  let current: ToggleItem | null = null;

  for (const line of bodyLines) {
    if (headRe.test(line)) {
      if (current) items.push(current);
      current = { heading: cleanHeading(line), markdown: "" };
    } else if (current) {
      current.markdown += line + "\n";
    } else {
      intro.push(line);
    }
  }
  if (current) items.push(current);

  // Trim, and fold pure-divider items (heading, no body) into the next item's lede.
  const cleaned: ToggleItem[] = [];
  for (const it of items) {
    const body = it.markdown.trim();
    if (!body) continue; // skip empty divider headings
    cleaned.push({ heading: it.heading, markdown: body });
  }

  return { intro: intro.join("\n").trim(), items: cleaned };
}

export function loadCaseStudy(brand: Brand): CaseStudy {
  const file = path.join(
    process.cwd(),
    "content",
    "case-studies",
    `${brand}.md`,
  );
  const raw = fs.readFileSync(file, "utf8");
  const lines = raw.split("\n");

  const buckets: Record<string, string[]> = {
    overview: [],
    "strategic-overview": [],
    research: [],
    creative: [],
    architecture: [],
    "expected-impact": [],
  };

  let currentIdx = 0;
  for (const line of lines) {
    // Only level-2 headings (##) define umbrella sections. Level-3 sub-items
    // (e.g. a "### Research Foundation" preview inside a TL;DR) must not switch
    // sections, or they'd swallow everything after them.
    const m = line.match(/^(#{1,4})\s/);
    if (m && m[1].length === 2) {
      const u = umbrellaFor(normalizeHeading(line));
      if (u) {
        const idx = ORDER.indexOf(u);
        if (idx > currentIdx) currentIdx = idx; // forward-only
      }
    }
    buckets[ORDER[currentIdx]].push(line);
  }

  const umbrellas: Umbrella[] = ORDER.map((id): Umbrella | null => {
    const all = buckets[id];
    if (all.join("").trim() === "") return null;

    // Drop the umbrella's own title heading (first heading line) from the body.
    const firstHeadingIdx = all.findIndex((l) => isHeadingLine(l));
    const body = firstHeadingIdx === -1 ? all : all.slice(firstHeadingIdx + 1);

    const { intro, items } = splitIntoItems(body);
    if (!intro && items.length === 0) return null;
    return { id, label: LABELS[id], intro, items };
  }).filter((u): u is Umbrella => u !== null);

  return { brand, umbrellas };
}
