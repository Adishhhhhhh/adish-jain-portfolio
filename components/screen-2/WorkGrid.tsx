"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ALL_CONCEPTS } from "@/content";
import { ResultCount } from "@/components/shell/ResultCount";
import { PositioningStrip } from "@/components/shell/PositioningStrip";
import { FilterPanel } from "@/components/shell/FilterPanel";
import { ActiveFilterChips } from "@/components/shell/ActiveFilterChips";
import { AdCard } from "@/components/card/AdCard";
import { ConceptLibrary } from "./ConceptLibrary";
import { type Brand, type Concept } from "@/content/types";
import { applyFilters, INITIAL_FILTER } from "@/lib/filter";

const BRAND_ORDER: Brand[] = ["pethonesty", "neurogum", "ancient-nutrition", "mitoq"];

export function WorkGrid() {
  const [filter, setFilter] = useState(INITIAL_FILTER);

  const visible = useMemo(() => applyFilters(ALL_CONCEPTS, filter), [filter]);

  // Two movements: everything actually produced, then the written concept
  // library grouped by brand.
  const { produced, conceptsByBrand, conceptCount } = useMemo(() => {
    const produced = visible.filter((c) => c.state === "produced");
    const rest = visible.filter((c) => c.state === "concept");
    const conceptsByBrand = BRAND_ORDER.map((b) => ({
      brand: b,
      items: rest.filter((c) => c.brand === b),
    })).filter((g) => g.items.length > 0);
    return { produced, conceptsByBrand, conceptCount: rest.length };
  }, [visible]);

  return (
    <>
      <PositioningStrip />
      <ResultCount count={visible.length} />

      {/* Second panel lock: filters + status freeze below the search bar on scroll,
          with a soft shadow, matching the real Ad Library. */}
      <div
        data-tour="filters"
        className="sticky top-[124px] z-30 bg-[var(--color-surface)] pb-3 pt-7 shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
      >
        <FilterPanel
          value={filter}
          onChange={setFilter}
          matchCount={visible.length}
        />
        <ActiveFilterChips value={filter} onChange={setFilter} />
      </div>

      {/* Creatives sit on a light-grey field that contrasts with the white cards. */}
      <div className="border-t border-[var(--color-border-light)] bg-[var(--color-surface-alt)]">
        <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-6">
          {visible.length === 0 ? (
            <EmptyState onClear={() => setFilter(INITIAL_FILTER)} />
          ) : (
            <>
              {produced.length > 0 && (
                <motion.div
                  layout
                  data-tour="grid"
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {produced.map((c, gi) => (
                    <Cell
                      key={c.id}
                      concept={c}
                      first={gi === 0}
                      tourId={c.id === "ng-coffee-meth" ? "hero-creative" : undefined}
                    />
                  ))}
                </motion.div>
              )}

              {conceptsByBrand.length > 0 && (
                <ConceptLibrary groups={conceptsByBrand} total={conceptCount} />
              )}
            </>
          )}

          {visible.length > 0 && <DeepLibraryCta />}
        </section>
      </div>
    </>
  );
}

function Cell({
  concept,
  first,
  tourId,
}: {
  concept: Concept;
  first?: boolean;
  tourId?: string;
}) {
  return (
    <motion.div
      layout
      data-tour-card={first ? "first" : undefined}
      data-tour={tourId}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
    >
      <AdCard concept={concept} />
    </motion.div>
  );
}

// End-of-grid door into the full campaign rooms, where these concepts sit
// inside their awareness architecture and campaign structure.
function DeepLibraryCta() {
  return (
    <div className="mx-auto mt-10 max-w-[640px] rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-8 text-center shadow-[var(--shadow-card)]">
      <p className="text-[17px] font-bold text-[var(--color-text-primary)]">
        Every concept above sits inside a campaign.
      </p>
      <p className="mx-auto mt-2 max-w-[480px] text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
        The four case studies hold the full architecture: research foundation,
        positioning, awareness distribution, and the campaign and ad set each
        of these assets was mapped to.
      </p>
      <Link
        href="/case-studies"
        className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-[var(--color-meta-blue)] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-meta-blue-hover)] active:scale-[0.99]"
      >
        See the four campaign rooms
      </Link>
    </div>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="mx-auto max-w-[500px] rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] px-6 py-10 text-center">
      <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
        No concepts match these filters.
      </p>
      <p className="mt-1 text-[13px] text-[var(--color-text-secondary)]">
        Adish has not built spec work in that intersection yet. Try widening one
        filter, or browse a campaign room.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-4 rounded-md bg-[var(--color-meta-blue)] px-4 py-2 text-[14px] font-semibold text-white hover:bg-[var(--color-meta-blue-hover)]"
      >
        Clear filters
      </button>
    </div>
  );
}
