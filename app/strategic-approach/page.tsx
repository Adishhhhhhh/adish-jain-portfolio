import Link from "next/link";
import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";
import { SectionRail } from "@/components/case-study/SectionRail";
import { CallPanel } from "@/components/strategy/CallPanel";
import { DiagnosticPairs } from "@/components/strategy/DiagnosticPairs";
import { TriageLadder } from "@/components/strategy/TriageLadder";
import { CreativeReads } from "@/components/strategy/CreativeReads";
import { WeeklyLoop } from "@/components/strategy/WeeklyLoop";
import { AskedBlock } from "@/components/strategy/AskedBlock";
import {
  CALLS,
  CALLS_DISCLOSURE,
  CALLS_INTRO,
  CALLS_LEAD,
} from "@/content/calls";

export const metadata = { title: "Strategic Approach" };

// The analytical half. /approach ends where an asset is ready to deploy; this
// starts there. The unit is a decision, and a call only earns a panel when the
// obvious move is the wrong one.

export default function StrategyApproachPage() {
  const sections = [
    ...CALLS.map((c) => ({ id: c.id, label: `${c.n}  ${c.title}` })),
    { id: "pairs", label: "The four reads" },
    { id: "triage", label: "One diagnosis, in order" },
    { id: "reads", label: "Read on my own ads" },
    { id: "loop", label: "The week this runs on" },
    { id: "asked", label: "Two questions" },
  ];

  return (
    <>
      <TopBar active="strategic-approach" />
      <SearchBarRow query="Adish Jain" />

      <main className="mx-auto max-w-[1200px] px-6 pb-20 pt-8">
        <header className="mb-7">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Strategic Approach
          </p>
          <h1 className="mt-1 max-w-[20ch] text-[32px] font-bold leading-tight text-[var(--color-text-primary)]">
            {CALLS_INTRO}
          </h1>
          <p className="mt-3 max-w-[72ch] text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            {CALLS_LEAD}
          </p>
          <p className="mt-4 max-w-[72ch] text-[12.5px] leading-relaxed text-[var(--color-text-tertiary)]">
            {CALLS_DISCLOSURE}
          </p>
        </header>

        {/* Mobile: horizontal jump bar */}
        <nav
          aria-label="Exhibit list"
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

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[230px_1fr]">
          <SectionRail sections={sections} />

          <div className="flex min-w-0 max-w-[880px] flex-col gap-6">
            {CALLS.map((c) => (
              <CallPanel key={c.id} call={c} />
            ))}

            <DiagnosticPairs />
            <TriageLadder />
            <CreativeReads />
            <WeeklyLoop />
            <AskedBlock />

            <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
              The pipeline that produces the creative these calls are made about
              is in the{" "}
              <Link href="/creative-approach" className="meta-link font-semibold">
                Creative Approach
              </Link>
              , and the ads themselves are in the{" "}
              <Link href="/adish-jain" className="meta-link font-semibold">
                Library
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
