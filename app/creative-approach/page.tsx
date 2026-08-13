import Link from "next/link";
import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";
import { MarkdownView } from "@/components/case-study/MarkdownView";
import { SectionRail } from "@/components/case-study/SectionRail";
import { APPROACH_INTRO, APPROACH_PARTS, type ApproachItem } from "@/content/creative-approach";
import { IdeationVenn } from "@/components/approach/IdeationVenn";
import { HookVenn } from "@/components/approach/HookVenn";
import { ConceptArchitecture } from "@/components/approach/ConceptArchitecture";
import { WorkflowLoop } from "@/components/approach/WorkflowLoop";

export const metadata = { title: "Creative Approach" };

// The creative half, merged. Five stages from research to what compounds, each
// with nested collapsible items (same toggle grammar as the case-study rooms)
// and, where a diagram says it better than prose, a diagram.

const DIAGRAMS = {
  // the hook petal opens into its own constraint diagram, latched under the main one
  ideation: (
    <>
      <IdeationVenn />
      <HookVenn />
    </>
  ),
  architecture: <ConceptArchitecture />,
  workflow: <WorkflowLoop />,
} as const;

export default function ApproachPage() {
  const sections = APPROACH_PARTS.map((p) => ({ id: p.id, label: p.title }));

  return (
    <>
      <TopBar active="creative-approach" />
      <SearchBarRow query="Adish Jain" />

      <main className="mx-auto max-w-[1200px] px-6 pb-20 pt-8">
        <header className="mb-6">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Creative Approach
          </p>
          <h1 className="mt-1 text-[32px] font-bold leading-tight text-[var(--color-text-primary)]">
            {APPROACH_INTRO}
          </h1>
          <p className="mt-2 max-w-[720px] text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            Five stages, from first principles to finished asset. The same
            pipeline produced every concept in the Library. Open any stage for
            the full working depth, and see{" "}
            <Link href="/strategy-approach" className="meta-link font-semibold">
              Strategy Approach
            </Link>{" "}
            for what happens once the assets run.
          </p>
        </header>

        {/* Mobile: horizontal section jump bar */}
        <nav
          aria-label="Approach sections"
          className="sticky top-[124px] z-20 -mx-6 mb-4 flex gap-2 overflow-x-auto border-y border-[var(--color-divider)] bg-[var(--color-surface)] px-6 py-2 md:hidden"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap rounded-full bg-[var(--color-surface-alt)] px-3 py-1.5 text-[13px] font-medium text-[var(--color-text-primary)]"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[210px_1fr]">
          <SectionRail sections={sections} />

          <div className="min-w-0 max-w-[840px]">
            {APPROACH_PARTS.map((part) => (
              <section
                key={part.id}
                id={part.id}
                className="scroll-mt-[150px] border-t border-[var(--color-divider)] py-8 first:border-t-0 first:pt-0"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[14px] font-bold text-[var(--color-meta-blue)] tabular-nums">
                    {part.n}
                  </span>
                  <h2 className="text-[22px] font-bold text-[var(--color-text-primary)]">
                    {part.title}
                  </h2>
                </div>
                <p className="mt-2 max-w-[70ch] pl-8 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                  {part.intro}
                </p>

                {part.diagram && (
                  <div className="mt-5 md:pl-8">{DIAGRAMS[part.diagram]}</div>
                )}

                <div className="mt-5 flex flex-col gap-2 md:pl-8">
                  {part.items.map((item, i) => (
                    <Toggle key={item.heading} item={item} open={i === 0} />
                  ))}
                </div>
              </section>
            ))}

            <p className="mt-8 text-[13px] text-[var(--color-text-secondary)]">
              See the pipeline&apos;s output in the{" "}
              <Link href="/case-studies" className="meta-link font-semibold">
                case studies
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

function Toggle({ item, open }: { item: ApproachItem; open: boolean }) {
  return (
    <details
      open={open}
      className="group rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] open:bg-[var(--color-surface-alt)]"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3">
        <span className="text-[15px] font-semibold text-[var(--color-text-primary)]">
          {item.heading}
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
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>
      <div className="border-t border-[var(--color-border-light)] bg-[var(--color-surface)] px-4 pb-4 pt-3">
        <MarkdownView>{item.markdown}</MarkdownView>
      </div>
    </details>
  );
}
