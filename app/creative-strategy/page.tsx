import Link from "next/link";
import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";
import { MarkdownView } from "@/components/case-study/MarkdownView";
import {
  CREATIVE_STRATEGY_INTRO,
  CREATIVE_STRATEGY_PARTS,
} from "@/content/creative-strategy";

export const metadata = { title: "Creative Strategy" };

// Notion section: Creative Strategy. Minimalist editorial layout, verbatim
// content, no code-block styling.

export default function CreativeStrategyPage() {
  return (
    <>
      <TopBar active="creative-strategy" />
      <SearchBarRow query="Adish Jain" />

      <main className="mx-auto max-w-[760px] px-6 pb-24 pt-10">
        <header className="mb-10">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Creative Strategy
          </p>
          <h1 className="mt-2 text-[34px] font-bold leading-[1.15] tracking-tight text-[var(--color-text-primary)]">
            {CREATIVE_STRATEGY_INTRO}
          </h1>
        </header>

        <div className="flex flex-col">
          {CREATIVE_STRATEGY_PARTS.map((part, i) => (
            <section
              key={part.title}
              className="border-t border-[var(--color-divider)] py-8 first:border-t-0 first:pt-0"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[13px] text-[var(--color-text-tertiary)] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-[22px] font-bold text-[var(--color-text-primary)]">
                  {part.title}
                </h2>
              </div>
              <div className="mt-3 pl-8">
                <MarkdownView>{part.markdown}</MarkdownView>
              </div>
            </section>
          ))}
        </div>

        <p className="mt-10 text-[13px] text-[var(--color-text-secondary)]">
          See the philosophy applied across the{" "}
          <Link href="/case-studies" className="meta-link font-semibold">
            four case studies
          </Link>
          .
        </p>
      </main>
    </>
  );
}
