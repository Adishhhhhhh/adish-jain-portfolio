import Link from "next/link";
import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";
import { CAMPAIGNS } from "@/content/campaigns";
import { conceptsByBrand } from "@/content";
import { BRAND_META, type Brand } from "@/content/types";

export const metadata = { title: "Case Studies" };

// Index into the four deep brand case studies. The deepest doors in the
// portfolio, given their own nav slot.

export default function CaseStudiesPage() {
  const order: Brand[] = ["pethonesty", "neurogum", "mitoq", "ancient-nutrition"];

  return (
    <>
      <TopBar active="case-studies" />
      <SearchBarRow query="Adish Jain" />

      <main className="mx-auto max-w-[1100px] px-6 pb-20 pt-8">
        <header className="mb-8">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            Case Studies
          </p>
          <h1 className="mt-1 text-[32px] font-bold leading-tight text-[var(--color-text-primary)]">
            Four brands, four full strategies
          </h1>
          <p className="mt-2 max-w-[700px] text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            Each is a complete spec engagement: the research, the positioning, the
            angle library, the scripts, the campaign architecture. The deepest
            door a curious hirer can open.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {order.map((b) => {
            const spec = CAMPAIGNS[b];
            const count = conceptsByBrand(b).length;
            return (
              <Link
                key={b}
                href={`/campaign/${b}`}
                className="group flex flex-col rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)] transition-colors hover:border-[var(--color-meta-blue)]"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="text-[20px] font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-meta-blue)]">
                    {BRAND_META[b].displayName}
                  </h2>
                  <span className="text-[12px] text-[var(--color-text-secondary)]">
                    {count} {count === 1 ? "concept" : "concepts"}
                  </span>
                </div>
                <p className="mt-1 text-[14px] font-medium text-[var(--color-text-secondary)]">
                  {spec.title}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-text-primary)]">
                  {spec.tagline}
                </p>
                <span className="mt-4 text-[13px] font-semibold text-[var(--color-meta-blue)]">
                  Open the full case study →
                </span>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
