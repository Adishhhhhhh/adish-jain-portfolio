import Link from "next/link";
import type { Brand } from "@/content/types";
import { BRAND_META } from "@/content/types";
import { CAMPAIGNS } from "@/content/campaigns";
import { conceptsByBrand } from "@/content";
import { loadCaseStudy, type ToggleItem } from "@/lib/case-study";
import { AdCard } from "@/components/card/AdCard";
import { MarkdownView } from "./MarkdownView";
import { SectionRail } from "./SectionRail";

// Full-fidelity case study. Verbatim Notion content, bucketed into umbrella
// sections, every section split into collapsible toggles (native <details>, no
// JS) so nothing reads as a wall of text. Sidebar tracks the active section.

export function CaseStudyRoom({ brand }: { brand: Brand }) {
  const study = loadCaseStudy(brand);
  const meta = BRAND_META[brand];
  const spec = CAMPAIGNS[brand];
  const produced = conceptsByBrand(brand).filter((c) => c.state === "produced");

  const sections = study.umbrellas.map((u) => ({ id: u.id, label: u.label }));

  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-6">
      <header className="mb-8">
        <Link href="/case-studies" className="meta-link text-[14px] font-semibold">
          ← All case studies
        </Link>
        <p className="mt-3 text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
          Case study · {meta.displayName}
        </p>
        <h1 className="mt-1 text-[36px] font-bold leading-tight text-[var(--color-text-primary)]">
          {spec.title}
        </h1>
        <p className="mt-2 max-w-[760px] text-[16px] leading-snug text-[var(--color-text-secondary)]">
          {spec.tagline}
        </p>
      </header>

      {/* Mobile: horizontal section jump bar, sticky under the header. */}
      <nav
        aria-label="Case study sections"
        className="sticky top-[124px] z-20 -mx-6 mb-2 flex gap-2 overflow-x-auto border-y border-[var(--color-divider)] bg-[var(--color-surface)] px-6 py-2 md:hidden"
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

        <article className="min-w-0 max-w-[820px]">
          {study.umbrellas.map((u) => (
            <section
              key={u.id}
              id={u.id}
              className="scroll-mt-[150px] border-t border-[var(--color-divider)] py-8 first:border-t-0 first:pt-0"
            >
              <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                {u.label}
              </h2>

              {/* Produced assets strip at the top of Creative Assets */}
              {u.id === "creative" && produced.length > 0 && (
                <div className="mb-6">
                  <p className="mb-3 text-[13px] font-semibold text-[var(--color-text-primary)]">
                    Produced in this campaign ({produced.length})
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {produced.map((c) => (
                      <AdCard key={c.id} concept={c} />
                    ))}
                  </div>
                </div>
              )}

              {u.intro && (
                <div className="mb-4">
                  <MarkdownView>{u.intro}</MarkdownView>
                </div>
              )}

              {u.items.length > 0 && (
                <div className="flex flex-col gap-2">
                  {u.items.map((item, i) => (
                    <Toggle key={i} item={item} open={i === 0} />
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}

function Toggle({ item, open }: { item: ToggleItem; open: boolean }) {
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
