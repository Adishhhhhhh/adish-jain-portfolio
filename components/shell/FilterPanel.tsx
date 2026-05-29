"use client";

import { useState } from "react";
import type { FilterState, Sort } from "@/lib/filter";
import type { Brand, Format, Awareness } from "@/content/types";
import { AWARENESS_LABELS, BRAND_META, FORMAT_LABELS } from "@/content/types";
import { SCREEN_2 } from "@/content/copy";

export function FilterPanel({
  value,
  onChange,
  matchCount,
}: {
  value: FilterState;
  onChange: (next: FilterState) => void;
  matchCount: number;
}) {
  const [open, setOpen] = useState<null | "filters" | "sort">(null);

  function update<K extends keyof FilterState>(key: K, v: FilterState[K]) {
    onChange({ ...value, [key]: v });
  }

  return (
    <div className="relative mx-auto flex max-w-[1400px] flex-wrap items-center justify-end gap-3 px-6">
      <div className="relative w-[260px]">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]">
          <SearchSvg />
        </span>
        <input
          type="text"
          value={value.query}
          onChange={(e) => update("query", e.target.value)}
          placeholder="Keyword"
          className="h-10 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] pl-10 pr-3 text-[15px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-meta-blue)]"
        />
      </div>

      <PillButton
        icon={<FiltersSvg />}
        label="Filters"
        active={open === "filters"}
        onClick={() => setOpen(open === "filters" ? null : "filters")}
      />

      <SortMenu
        value={value.sort}
        onChange={(s) => update("sort", s)}
        open={open === "sort"}
        onToggle={() => setOpen(open === "sort" ? null : "sort")}
      />

      <PillButton icon={<BookmarkSvg />} label="Save search" />

      {open === "filters" && (
        <FiltersPopover
          value={value}
          onChange={onChange}
          onClose={() => setOpen(null)}
          matchCount={matchCount}
        />
      )}
    </div>
  );
}

function PillButton({
  icon,
  label,
  active,
  onClick,
  trailingCaret,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  trailingCaret?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "flex h-10 items-center gap-2 rounded-md border px-3.5 text-[15px] font-semibold transition-colors " +
        (active
          ? "border-[var(--color-meta-blue)] bg-[var(--color-surface-alt)] text-[var(--color-meta-blue)]"
          : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]")
      }
    >
      {icon}
      <span>{label}</span>
      {trailingCaret && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      )}
    </button>
  );
}

function SortMenu({
  value,
  onChange,
  open,
  onToggle,
}: {
  value: Sort;
  onChange: (s: Sort) => void;
  open: boolean;
  onToggle: () => void;
}) {
  const labels: Record<Sort, string> = {
    newest: "Newest",
    format: "Format",
    awareness: "Awareness stage",
  };
  return (
    <div className="relative">
      <PillButton
        icon={<SortSvg />}
        label={`Sort by: ${labels[value]}`}
        active={open}
        onClick={onToggle}
        trailingCaret
      />
      {open && (
        <div className="absolute right-0 top-12 z-10 w-56 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-[var(--shadow-modal)]">
          {(Object.keys(labels) as Sort[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => {
                onChange(k);
                onToggle();
              }}
              className={
                "block w-full rounded px-3 py-2 text-left text-[14px] " +
                (k === value
                  ? "bg-[var(--color-surface-alt)] font-semibold text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]")
              }
            >
              {labels[k]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function FiltersPopover({
  value,
  onChange,
  onClose,
  matchCount,
}: {
  value: FilterState;
  onChange: (next: FilterState) => void;
  onClose: () => void;
  matchCount: number;
}) {
  return (
    <div className="absolute right-6 top-12 z-10 w-[360px] rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-modal)]">
      <FilterGroup label="Brand">
        {(Object.keys(BRAND_META) as Brand[]).map((b) => (
          <Chip
            key={b}
            label={BRAND_META[b].displayName}
            selected={value.brand === b}
            onClick={() =>
              onChange({ ...value, brand: value.brand === b ? null : b })
            }
          />
        ))}
      </FilterGroup>

      <FilterGroup label="Format">
        {(Object.keys(FORMAT_LABELS) as Format[]).map((f) => (
          <Chip
            key={f}
            label={FORMAT_LABELS[f]}
            selected={value.format === f}
            onClick={() =>
              onChange({ ...value, format: value.format === f ? null : f })
            }
          />
        ))}
      </FilterGroup>

      <FilterGroup
        label="Awareness stage"
        sublabel={SCREEN_2.schwartzLabel}
      >
        {(Object.keys(AWARENESS_LABELS) as Awareness[]).map((a) => (
          <Chip
            key={a}
            label={AWARENESS_LABELS[a]}
            selected={value.awareness === a}
            onClick={() =>
              onChange({
                ...value,
                awareness: value.awareness === a ? null : a,
              })
            }
          />
        ))}
      </FilterGroup>

      <div className="mt-4 flex items-center justify-between text-[13px]">
        <button
          type="button"
          onClick={() =>
            onChange({
              brand: null,
              format: null,
              awareness: null,
              query: value.query,
              sort: value.sort,
            })
          }
          className="text-[var(--color-meta-blue)] font-semibold hover:underline"
        >
          Clear all
        </button>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md bg-[var(--color-meta-blue)] px-4 py-2 font-semibold text-white hover:bg-[var(--color-meta-blue-hover)]"
        >
          Show {matchCount} {matchCount === 1 ? "result" : "results"}
        </button>
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  sublabel,
  children,
}: {
  label: string;
  sublabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <p className="text-[13px] font-semibold text-[var(--color-text-primary)]">
        {label}
      </p>
      {sublabel && (
        <p className="mt-0.5 text-[12px] leading-snug text-[var(--color-text-secondary)]">
          {sublabel}
        </p>
      )}
      <div className="mt-2 flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-full border px-3 py-1 text-[13px] transition-colors " +
        (selected
          ? "border-[var(--color-meta-blue)] bg-[var(--color-meta-blue)] text-white"
          : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]")
      }
    >
      {label}
    </button>
  );
}

function SearchSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function FiltersSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="3" y1="6" x2="14" y2="6" />
      <circle cx="18" cy="6" r="2.5" />
      <line x1="3" y1="18" x2="10" y2="18" />
      <circle cx="14" cy="18" r="2.5" />
      <line x1="3" y1="12" x2="20" y2="12" />
    </svg>
  );
}
function SortSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="6" y1="12" x2="18" y2="12" />
      <line x1="9" y1="18" x2="15" y2="18" />
    </svg>
  );
}
function BookmarkSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}
