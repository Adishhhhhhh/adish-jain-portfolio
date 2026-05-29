// Keyword field + Filters + Sort by + Save search (Reference SS 2.png, right-aligned).
// Phase 0 visual stub. Functional filtering lands in Phase 3.

export function FilterRow() {
  return (
    <div className="mx-auto mt-10 flex max-w-[1400px] items-center justify-end gap-3 px-6">
      <div className="relative w-[260px]">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]">
          <SearchSvg />
        </span>
        <input
          type="text"
          placeholder="Keyword"
          className="h-10 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] pl-10 pr-3 text-[15px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-meta-blue)]"
        />
      </div>
      <PillButton icon={<FiltersSvg />} label="Filters" />
      <PillButton icon={<SortSvg />} label="Sort by" trailingCaret />
      <PillButton icon={<BookmarkSvg />} label="Save search" />
    </div>
  );
}

function PillButton({
  icon,
  label,
  trailingCaret,
}: {
  icon: React.ReactNode;
  label: string;
  trailingCaret?: boolean;
}) {
  return (
    <button
      type="button"
      className="flex h-10 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 text-[15px] font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]"
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
