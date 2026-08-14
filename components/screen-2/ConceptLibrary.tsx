"use client";

import { AWARENESS_LABELS, BRAND_META, type Brand, type Concept } from "@/content/types";

/**
 * The written-but-unproduced work, listed rather than carded.
 *
 * Ad cards are the right container for something you can look at. These are
 * scripts and angles, so they get the same collapsible grammar the case studies
 * use: a title you can scan, opening into the strategy behind it. 122 ad cards
 * buried the produced work; 122 rows do not.
 */

export function ConceptLibrary({
  groups,
  total,
}: {
  groups: { brand: Brand; items: Concept[] }[];
  total: number;
}) {
  return (
    <div data-tour="concepts" className="mt-14">
      <div className="flex flex-col gap-3 border-t-2 border-[var(--color-border)] pt-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-[22px] font-bold text-[var(--color-text-primary)]">
            The concept library
          </h2>
          <span className="rounded-full bg-[var(--color-pill-bg)] px-2.5 py-0.5 text-[12px] font-semibold text-[var(--color-pill-text)]">
            {total} written, unproduced
          </span>
        </div>
        <p className="max-w-[70ch] text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
          Everything above was produced. Everything below was written and mapped:
          76 full VSL scripts with their angle, ICP, and hook rationale, plus the
          Creative Expansion Map angles held for the next wave. Open any one for
          the strategy, and the script itself where one was written.
        </p>
      </div>

      {groups.map((g, gi) => (
        <section key={g.brand} className="mt-9">
          <h3 className="mb-3 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-[18px] font-bold text-[var(--color-text-primary)]">
            {BRAND_META[g.brand].displayName}
            <span className="text-[13px] font-normal text-[var(--color-text-secondary)]">
              {g.items.length} concepts
            </span>
          </h3>

          <div className="flex flex-col gap-2">
            {g.items.map((c, i) => (
              <ConceptRow
                key={c.id}
                concept={c}
                // the tour rings the first script and the first expansion angle
                tourId={
                  gi === 0 && i === 0
                    ? "scripts"
                    : gi === 0 && c.id.includes("-exp-") && !g.items[i - 1]?.id.includes("-exp-")
                      ? "expansion"
                      : undefined
                }
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ConceptRow({ concept, tourId }: { concept: Concept; tourId?: string }) {
  const r = concept.rationale;
  const isExpansion = concept.id.includes("-exp-");

  return (
    <details
      data-tour={tourId}
      className="group rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] open:bg-[var(--color-surface-alt)]"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3">
        <span className="min-w-0 text-[15px] font-semibold text-[var(--color-text-primary)]">
          {concept.conceptName}
        </span>
        <span className="flex shrink-0 items-center gap-2.5">
          <span className="hidden rounded-full bg-[var(--color-pill-bg)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-pill-text)] sm:inline">
            {AWARENESS_LABELS[concept.awareness]}
          </span>
          <svg
            className="shrink-0 text-[var(--color-text-secondary)] transition-transform group-open:rotate-180"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </summary>

      <div className="flex flex-col gap-3 border-t border-[var(--color-border-light)] bg-[var(--color-surface)] px-4 pb-4 pt-3.5">
        {!isExpansion && concept.hooks.length > 0 && (
          <div>
            <Label>
              {concept.hooks.length > 1
                ? `${concept.hooks.length} hooks written for testing`
                : "Hook"}
            </Label>
            <ul className="mt-1.5 flex flex-col gap-1.5">
              {concept.hooks.map((h) => (
                <li
                  key={h.line}
                  className="border-l-2 border-[var(--color-meta-blue)] pl-3 text-[14px] leading-relaxed text-[var(--color-text-primary)]"
                >
                  {h.line}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Field label={isExpansion ? "The angle" : "Angle"}>{r.angle}</Field>
        <Field label="ICP">{r.icp}</Field>
        <Field label="Hook strategy">{r.hookStrategy}</Field>
        <Field label="Why it works">{r.whyItWorks}</Field>
        <Field label="Strategic intent">{r.strategicIntent}</Field>
        <Field label="Where it sits">{r.campaignRole}</Field>

        {concept.script && <ScriptToggle script={concept.script} />}
      </div>
    </details>
  );
}

/**
 * The script itself, nested one level down so the row stays scannable and the
 * copy is one click away. Rendered with a small formatter rather than the
 * markdown pipeline, because the format is only section labels and lines, and
 * 76 scripts is not worth shipping a parser to the browser for.
 */
function ScriptToggle({ script }: { script: string }) {
  const blocks = script.split("\n").map((l) => l.trim());

  return (
    <details className="group/script mt-1 rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface-alt)]">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3.5 py-2.5">
        <svg
          className="shrink-0 text-[var(--color-meta-blue)] transition-transform group-open/script:rotate-90"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          aria-hidden
        >
          <polyline points="9 6 15 12 9 18" />
        </svg>
        <span className="text-[13px] font-bold text-[var(--color-meta-blue)]">
          Read the full script
        </span>
      </summary>

      <div className="border-t border-[var(--color-border-light)] bg-[var(--color-surface)] px-4 pb-4 pt-3">
        {blocks.map((line, i) => {
          if (!line) return null;
          // **HOOK** / ### **HOOK & STORY OPENING** / **BODY** / **CTA**
          const label = line.match(/^#{0,4}\s*\*\*(.+?)\*\*\s*$/);
          if (label) {
            return (
              <p
                key={i}
                className="mb-1.5 mt-4 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[var(--color-text-tertiary)] first:mt-0"
              >
                {label[1].replace(/\*\*/g, "")}
              </p>
            );
          }
          return (
            <p
              key={i}
              className="mb-2 text-[14px] leading-relaxed text-[var(--color-text-primary)]"
            >
              {line.replace(/\*\*/g, "")}
            </p>
          );
        })}
      </div>
    </details>
  );
}

function Field({ label, children }: { label: string; children?: string }) {
  if (!children) return null;
  return (
    <div>
      <Label>{label}</Label>
      <p className="mt-0.5 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
        {children}
      </p>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10.5px] font-bold uppercase tracking-[0.07em] text-[var(--color-text-tertiary)]">
      {children}
    </span>
  );
}
