"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ALL_CONCEPTS } from "@/content";
import { ResultCount } from "@/components/shell/ResultCount";
import { PositioningStrip } from "@/components/shell/PositioningStrip";
import { FilterPanel } from "@/components/shell/FilterPanel";
import { ActiveFilterChips } from "@/components/shell/ActiveFilterChips";
import { AdCard } from "@/components/card/AdCard";
import { applyFilters, INITIAL_FILTER, isFiltering } from "@/lib/filter";

export function WorkGrid() {
  const [filter, setFilter] = useState(INITIAL_FILTER);

  const visible = useMemo(() => applyFilters(ALL_CONCEPTS, filter), [filter]);
  const producedCount = ALL_CONCEPTS.filter((c) => c.state === "produced").length;

  return (
    <>
      <PositioningStrip />
      <ResultCount count={isFiltering(filter) ? visible.length : producedCount} />

      {/* Second panel lock: filters + status freeze below the search bar on scroll,
          with a soft shadow, matching the real Ad Library. */}
      <div className="sticky top-[124px] z-30 bg-[var(--color-surface)] pb-3 pt-7 shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
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
            <motion.div
              layout
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {visible.map((c) => (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                >
                  <AdCard concept={c} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>
      </div>
    </>
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
