/**
 * Pulls every unproduced VSL script and expansion-map angle out of the four
 * case-study markdown files and emits them as typed Concept entries, so the
 * grid can show the full concept library without sending anyone into an
 * 1,800-line document.
 *
 * Produced assets already live in the hand-written brand files, so they are
 * skipped here by (brand, vsl number).
 */
const fs = require("fs");
const path = require("path");

const DIR = "C:/Users/User/OneDrive/Documents/Adish-Jain-CS-Portfolio/web/content/case-studies";

const BRANDS = [
  { slug: "pethonesty", file: "pethonesty.md", prefix: "ph", built: "Built May 2026" },
  { slug: "neurogum", file: "neurogum.md", prefix: "ng", built: "Built May 2026" },
  { slug: "ancient-nutrition", file: "ancient-nutrition.md", prefix: "an", built: "Built May 2026" },
  { slug: "mitoq", file: "mitoq.md", prefix: "mq", built: "Built May 2026" },
];

// VSL numbers already shipped as produced concepts in the hand-written files
const PRODUCED_VSL = {
  pethonesty: [1, 21],
  neurogum: [2, 9],
  "ancient-nutrition": [17],
  mitoq: [],
};

const AWARENESS = {
  unaware: "unaware",
  "problem aware": "problem-aware",
  "problem-aware": "problem-aware",
  "solution aware": "solution-aware",
  "solution-aware": "solution-aware",
  "product aware": "product-aware",
  "product-aware": "product-aware",
  "most aware": "most-aware",
  "most-aware": "most-aware",
};

const clean = (s) =>
  (s || "")
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();

// The four briefs use two dialects: bolded Title Case (**Hook Strategy:**) and
// plain sentence case (Hook strategy:). Match both, line based, and stop at the
// next known label so a value never swallows the field below it.
const LABELS = [
  "Angle",
  "ICP",
  "Awareness",
  "Format",
  "Hook Strategy",
  "Why This Works",
  "Strategic Intent",
  "Diverse Potential",
  "Campaign Role",
];

const labelRe = (label) =>
  new RegExp(`^\\s*(?:[-*]\\s*)?(?:\\*\\*)?${label}\\s*:?(?:\\*\\*)?\\s*:?\\s*(.*)$`, "i");

const anyLabelRe = new RegExp(
  `^\\s*(?:[-*]\\s*)?(?:\\*\\*)?(?:${LABELS.join("|")})\\s*:?(?:\\*\\*)?\\s*:`,
  "i",
);

function field(block, label) {
  const lines = block.split("\n");
  const re = labelRe(label);
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(re);
    if (!m) continue;
    const parts = m[1] ? [m[1]] : [];
    for (let j = i + 1; j < lines.length; j++) {
      const l = lines[j];
      if (!l.trim()) {
        if (parts.length) break;
        continue;
      }
      if (anyLabelRe.test(l)) break;
      if (/^\s*(?:[-*]\s*)?\*\*[A-Z][A-Z\s#0-9]*\*\*\s*$/.test(l)) break; // **FULL SCRIPT**
      if (/^#{2,}\s/.test(l)) break;
      parts.push(l);
    }
    const v = clean(parts.join(" "));
    if (v) return v;
  }
  return "";
}

function awarenessOf(block, fallback) {
  const raw = field(block, "Awareness").toLowerCase().replace(/\.$/, "");
  for (const k of Object.keys(AWARENESS)) if (raw.includes(k)) return AWARENESS[k];
  return fallback;
}

/**
 * Every **HOOK** / **HOOK 2** / **HOOK 3** section in the full script. Scripts
 * that carry alternates are the interesting ones, so each becomes a testable
 * hook on the card rather than being flattened into the first.
 */
function hookSections(block) {
  const lines = block.split("\n");
  const marks = [];
  lines.forEach((l, i) => {
    if (/^\s*\*\*HOOK(\s*#?\d+)?\*\*\s*$/i.test(l)) marks.push(i);
  });
  if (!marks.length) return [];
  const stop = (l) =>
    /^\s*\*\*(BODY|CTA|OFFER|CLOSE|FULL SCRIPT|STRATEGIC)/i.test(l) ||
    /^\s*\*\*HOOK(\s*#?\d+)?\*\*\s*$/i.test(l) ||
    /^#{2,}\s/.test(l);

  return marks
    .map((start) => {
      const parts = [];
      for (let j = start + 1; j < lines.length; j++) {
        if (stop(lines[j])) break;
        if (lines[j].trim()) parts.push(clean(lines[j]));
      }
      return parts.join(" ").trim();
    })
    .filter(Boolean);
}

/**
 * The FULL SCRIPT section, kept verbatim. His copy is data: no cleaning, no
 * smart-quote normalising, no rewrapping. Only the markdown indentation is
 * stripped, since the source nests the script under a bullet.
 */
function fullScript(block) {
  const lines = block.split("\n");
  const start = lines.findIndex((l) => /^\s*[-*]?\s*\*\*FULL SCRIPT\*\*/i.test(l));
  if (start < 0) return "";
  const body = lines.slice(start + 1);
  const indents = body.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length);
  const min = indents.length ? Math.min(...indents) : 0;
  return body
    .map((l) => l.slice(min))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const out = [];

for (const b of BRANDS) {
  const md = fs.readFileSync(path.join(DIR, b.file), "utf8");
  const lines = md.split("\n");

  // ── VSL blocks ────────────────────────────────────────────────────────
  // MitoQ splits its scripts into three ad sets, each restarting at VSL #1, so
  // the enclosing "## SOLUTION-AWARE AD SET" heading namespaces the id and
  // supplies the awareness stage.
  const SET_KEY = {
    unaware: { slug: "unaw", label: "Unaware", awareness: "unaware" },
    "problem-aware": { slug: "prob", label: "Problem Aware", awareness: "problem-aware" },
    "solution-aware": { slug: "sol", label: "Solution Aware", awareness: "solution-aware" },
    "product-aware": { slug: "prod", label: "Product Aware", awareness: "product-aware" },
  };

  const heads = [];
  let adSet = null;
  lines.forEach((l, idx) => {
    const sm = l.match(/^##\s+\*{0,2}(UNAWARE|PROBLEM-AWARE|SOLUTION-AWARE|PRODUCT-AWARE)[\s-]*(?:STAGE\s*)?AD SET/i);
    if (sm) {
      adSet = SET_KEY[sm[1].toLowerCase().replace(/\s+/g, "-")] || null;
      return;
    }
    const m = l.match(/^###\s+\*{0,2}VSL\s*#(\d+)\s*[:.]?\s*(.*?)\*{0,2}\s*$/i);
    if (m) heads.push({ idx, n: Number(m[1]), title: clean(m[2]), adSet });
  });

  heads.forEach((h, k) => {
    if (PRODUCED_VSL[b.slug].includes(h.n)) return;
    // Stop at the next VSL, or at any heading of the same level or higher, so
    // the last script in a section does not swallow the rest of the document.
    let end = k + 1 < heads.length ? heads[k + 1].idx : lines.length;
    for (let j = h.idx + 1; j < end; j++) {
      if (/^#{1,3}\s/.test(lines[j])) {
        end = j;
        break;
      }
    }
    const block = lines.slice(h.idx, end).join("\n");

    const angle = field(block, "Angle");
    if (!angle) return; // no documented rationale, skip rather than invent one

    const hookLines = hookSections(block);
    const hookStrategy = field(block, "Hook Strategy");
    const format = field(block, "Format").replace(/\.$/, "");

    out.push({
      id: h.adSet ? `${b.prefix}-${h.adSet.slug}-vsl-${h.n}` : `${b.prefix}-vsl-${h.n}`,
      brand: b.slug,
      format: "video",
      awareness: h.adSet ? h.adSet.awareness : awarenessOf(block, "problem-aware"),
      status: "spec",
      state: "concept",
      conceptName: h.adSet
        ? `${h.adSet.label} · VSL #${h.n}: ${h.title.replace(/^"|"$/g, "")}`
        : `VSL #${h.n}: ${h.title.replace(/^"|"$/g, "")}`,
      builtDate: b.built,
      caption: hookLines.length ? hookLines.join("\n\n") : angle,
      script: fullScript(block),
      hooks: hookLines.length
        ? hookLines.map((line, hi) => ({
            line,
            rationale:
              hi === 0
                ? hookStrategy || "Opening variant written for testing against the alternates."
                : "Alternate opening on the same script, written for hook testing.",
          }))
        : [],
      rationale: {
        angle,
        icp: field(block, "ICP"),
        hookStrategy,
        whyItWorks: field(block, "Why This Works"),
        strategicIntent: field(block, "Strategic Intent"),
        diversePotential: field(block, "Diverse Potential"),
        campaignRole: format ? `Format: ${format}. Scripted and mapped, held for production.` : "",
      },
    });
  });

  // ── Expansion map ─────────────────────────────────────────────────────
  const expStart = lines.findIndex((l) => /^###\s+.*Expansion Map/i.test(l));
  if (expStart >= 0) {
    let expEnd = lines.length;
    for (let j = expStart + 1; j < lines.length; j++) {
      if (/^###\s+/.test(lines[j]) && !/Tier [AB]/i.test(lines[j])) {
        expEnd = j;
        break;
      }
    }
    const chunk = lines.slice(expStart, expEnd);
    let tier = "";
    let n = 0;

    for (let j = 0; j < chunk.length; j++) {
      const l = chunk[j];
      const tm = l.match(/^###\s+(Tier [AB][^\n]*)/i);
      if (tm) {
        tier = clean(tm[1]);
        continue;
      }

      // **V1. Title** / **1. "Title"**  followed by a paragraph
      const bm = l.match(/^\*\*(?:V)?(\d+)[.)]\s*(.+?)\*\*\s*$/);
      if (bm) {
        const body = [];
        for (let k = j + 1; k < chunk.length && !/^\*\*|^###|^---/.test(chunk[k]); k++) {
          if (chunk[k].trim()) body.push(clean(chunk[k]));
        }
        n += 1;
        out.push(expEntry(b, n, clean(bm[2]), body.join(" "), tier));
        continue;
      }

      // - **Title:** description
      const dm = l.match(/^-\s+\*\*(.+?):?\*\*:?\s*(.+)$/);
      if (dm) {
        n += 1;
        out.push(expEntry(b, n, clean(dm[1]), clean(dm[2]), tier));
      }
    }
  }
}

function expEntry(b, n, title, body, tier) {
  const isStatic = /static|long-copy static/i.test(body) && !/vsl|ugc|reel|video/i.test(body);
  const dir = body.match(/Creative direction:\s*(.+)$/i);
  return {
    id: `${b.prefix}-exp-${n}`,
    brand: b.slug,
    format: isStatic ? "static" : "video",
    awareness: "problem-aware",
    status: "spec",
    state: "concept",
    conceptName: `Expansion: ${title.replace(/^"|"$/g, "")}`,
    builtDate: b.built,
    caption: body.replace(/Creative direction:\s*.+$/i, "").trim() || title,
    hooks: [],
    rationale: {
      angle: body.replace(/Creative direction:\s*.+$/i, "").trim() || title,
      hookStrategy: dir ? clean(dir[1]) : "",
      campaignRole: tier
        ? `Creative Expansion Map, ${tier}. Next-wave angle, held for Phase 2.`
        : "Creative Expansion Map. Next-wave angle, held for Phase 2.",
    },
  };
}

// strip empty strings so optional fields stay absent
for (const c of out) {
  for (const k of Object.keys(c.rationale)) {
    if (!c.rationale[k]) delete c.rationale[k];
  }
  if (!c.script) delete c.script;
}

const byBrand = {};
for (const c of out) (byBrand[c.brand] ||= []).push(c);
console.error("=== EXTRACTED ===");
for (const b of BRANDS) {
  const list = byBrand[b.slug] || [];
  console.error(
    `${b.slug.padEnd(18)} ${String(list.length).padStart(3)}  ` +
      `(vsl ${list.filter((c) => c.id.includes("-vsl-")).length}, exp ${list.filter((c) => c.id.includes("-exp-")).length})`,
  );
}
console.error("TOTAL".padEnd(18) + String(out.length).padStart(4));

const header = `import type { Concept } from "./types";

// Generated from the four case-study markdown files. Every VSL script and
// Creative Expansion Map angle that was written but never produced, so the
// grid can show the full concept library in place instead of sending a reader
// into an 1,800-line document.
//
// Produced assets live in the hand-written brand files and are excluded here.
// Regenerate rather than hand-edit: scripts/extract-concepts.js

export const CONCEPT_ONLY: Concept[] = `;

fs.writeFileSync(
  process.argv[2],
  header + JSON.stringify(out, null, 2).replace(/"([a-zA-Z][a-zA-Z0-9]*)":/g, "$1:") + ";\n",
  "utf8",
);
