import Link from "next/link";
import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";
import { MarkdownView } from "@/components/case-study/MarkdownView";
import { APPROACH_INTRO, APPROACH_PARTS } from "@/content/approach";

export const metadata = { title: "Approach" };

// Notion section: Approach (5 parts), verbatim. Each part is a collapsible
// section so the page stays scannable, not a wall.

export default function ApproachPage() {
  return (
    <>
      <TopBar active="approach" />
      <SearchBarRow query="Adish Jain" />

      <main className="mx-auto max-w-[840px] px-6 pb-20 pt-8">
        <header className="mb-8">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Approach
          </p>
          <h1 className="mt-1 text-[32px] font-bold leading-tight text-[var(--color-text-primary)]">
            {APPROACH_INTRO}
          </h1>
          <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            Five stages, run in order. The same pipeline produced every concept in
            the Library.
          </p>
        </header>

        <div className="flex flex-col gap-3">
          {APPROACH_PARTS.map((part, i) => (
            <details
              key={part.n}
              open={i === 0}
              className="group rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] open:bg-[var(--color-surface)]"
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4">
                <span className="font-mono text-[14px] font-bold text-[var(--color-meta-blue)] tabular-nums">
                  {part.n}
                </span>
                <span className="flex-1 text-[19px] font-bold text-[var(--color-text-primary)]">
                  {part.title}
                </span>
                <svg
                  className="shrink-0 text-[var(--color-text-secondary)] transition-transform group-open:rotate-180"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="border-t border-[var(--color-divider)] px-5 pb-5 pt-4">
                <MarkdownView>{part.markdown}</MarkdownView>
              </div>
            </details>
          ))}
        </div>

        <p className="mt-8 text-[13px] text-[var(--color-text-secondary)]">
          See the pipeline's output in the{" "}
          <Link href="/case-studies" className="meta-link font-semibold">
            case studies
          </Link>
          .
        </p>
      </main>
    </>
  );
}
