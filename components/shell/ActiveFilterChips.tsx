"use client";

import type { FilterState } from "@/lib/filter";
import { isFiltering } from "@/lib/filter";
import { AWARENESS_LABELS, BRAND_META, FORMAT_LABELS } from "@/content/types";

// Replaces the static "Status: Spec" chip with the actual applied filters.
// The "Status: Spec" pill stays pinned because it's the load-bearing honesty signal.
export function ActiveFilterChips({
  value,
  onChange,
}: {
  value: FilterState;
  onChange: (next: FilterState) => void;
}) {
  return (
    <div className="mx-auto mt-3 flex max-w-[1400px] flex-wrap items-center justify-end gap-2 px-6">
      <PinnedStatusChip />
      {value.brand && (
        <Chip
          label={`Brand: ${BRAND_META[value.brand].displayName}`}
          onRemove={() => onChange({ ...value, brand: null })}
        />
      )}
      {value.format && (
        <Chip
          label={`Format: ${FORMAT_LABELS[value.format]}`}
          onRemove={() => onChange({ ...value, format: null })}
        />
      )}
      {value.awareness && (
        <Chip
          label={`Awareness: ${AWARENESS_LABELS[value.awareness]}`}
          onRemove={() => onChange({ ...value, awareness: null })}
        />
      )}
      {value.query.trim() && (
        <Chip
          label={`Keyword: "${value.query.trim()}"`}
          onRemove={() => onChange({ ...value, query: "" })}
        />
      )}
      {!isFiltering(value) && (
        <p className="text-[12px] text-[var(--color-text-secondary)]">
          Showing produced work. Filter to reveal concept libraries.
        </p>
      )}
    </div>
  );
}

function PinnedStatusChip() {
  // Visual match to the real Ad Library's "Active status: Active ads" filter chip
  // (light blue), but pinned and honest: every concept here is spec.
  return (
    <div className="flex items-center gap-2 rounded-md bg-[#e7f3ff] px-3 py-2 text-[13px]">
      <span className="font-semibold text-[var(--color-text-primary)]">
        Status:
      </span>
      <span className="text-[var(--color-text-primary)]">Spec</span>
      <span
        title="Pinned. Every concept in this Library is spec work."
        className="text-[var(--color-meta-blue)]"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a4 4 0 00-4 4v3H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm-2 7V6a2 2 0 114 0v3h-4z" />
        </svg>
      </span>
    </div>
  );
}

function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-[var(--color-surface-alt)] px-3 py-2 text-[13px]">
      <span className="text-[var(--color-text-primary)]">{label}</span>
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${label}`}
        className="flex h-5 w-5 items-center justify-center rounded-full text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
