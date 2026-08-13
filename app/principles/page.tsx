import Link from "next/link";
import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";
import { SectionRail } from "@/components/case-study/SectionRail";
import { MarkdownView } from "@/components/case-study/MarkdownView";
import {
  PRINCIPLES,
  PRINCIPLES_INTRO,
  PRINCIPLES_LEAD,
  type Principle,
} from "@/content/principles";

export const metadata = { title: "Operating Principles" };

// The closing section. Everything before this is method; this is what the
// method rests on. Each principle leads with its claim, then argues it, then
// names the consequence it imposes on the work.

export default function PrinciplesPage() {
  const sections = PRINCIPLES.map((p) => ({
    id: p.id,
    label: `${p.n}  ${p.title}`,
  }));

  return (
    <>
      <TopBar active="principles" />
      <SearchBarRow query="Adish Jain" />

      <main className="mx-auto max-w-[1200px] px-6 pb-20 pt-8">
        <header className="mb-7">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Operating Principles
          </p>
          <h1 className="mt-1 max-w-[22ch] text-[32px] font-bold leading-tight text-[var(--color-text-primary)]">
            {PRINCIPLES_INTRO}
          </h1>
          <p className="mt-3 max-w-[72ch] text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            {PRINCIPLES_LEAD}
          </p>
        </header>

        {/* Mobile jump bar */}
        <nav
          aria-label="Principles"
          className="sticky top-[124px] z-20 -mx-6 mb-4 flex gap-2 overflow-x-auto border-y border-[var(--color-divider)] bg-[var(--color-surface)] px-6 py-2 md:hidden"
        >
          {PRINCIPLES.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="whitespace-nowrap rounded-full bg-[var(--color-surface-alt)] px-3 py-1.5 text-[13px] font-medium text-[var(--color-text-primary)]"
            >
              {p.n} {p.title}
            </a>
          ))}
        </nav>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[230px_1fr]">
          <SectionRail sections={sections} />

          <div className="flex min-w-0 max-w-[840px] flex-col">
            {PRINCIPLES.map((p) => (
              <PrincipleBlock key={p.id} principle={p} />
            ))}

            <p className="mt-8 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
              How these turn into a process is the{" "}
              <Link href="/creative-approach" className="meta-link font-semibold">
                Creative Approach
              </Link>
              . How they hold up against a live account is the{" "}
              <Link href="/strategy-approach" className="meta-link font-semibold">
                Strategy Approach
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

function PrincipleBlock({ principle }: { principle: Principle }) {
  return (
    <section
      id={principle.id}
      className="scroll-mt-[150px] border-t border-[var(--color-divider)] py-8 first:border-t-0 first:pt-0"
    >
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[14px] font-bold tabular-nums text-[var(--color-meta-blue)]">
          {principle.n}
        </span>
        <h2 className="text-[23px] font-bold leading-snug tracking-tight text-[var(--color-text-primary)]">
          {principle.title}
        </h2>
      </div>

      {/* the claim, pulled out as the one line worth remembering */}
      <p className="mt-3 border-l-2 border-[var(--color-meta-blue)] py-1 pl-4 text-[16px] font-medium leading-relaxed text-[var(--color-text-primary)] md:ml-8">
        {principle.claim}
      </p>

      <div className="mt-4 md:pl-8">
        <MarkdownView>{principle.markdown}</MarkdownView>
      </div>
    </section>
  );
}
