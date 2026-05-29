// The row below the TopBar on Screen 2 (Reference SS 2.png).
// Country dropdown, info icon, category dropdown, search field with active query, Saved searches.
import Link from "next/link";

export function SearchBarRow({
  query,
  country = "India",
  category = "All ads",
}: {
  query: string;
  country?: string;
  category?: string;
}) {
  return (
    <div className="sticky top-[60px] z-40 w-full border-b border-[var(--color-border-light)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-6 py-3">
        <Dropdown label={country} className="min-w-[140px]" />
        <button
          type="button"
          aria-label="Location info"
          className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </button>
        <Dropdown label={category} icon={<MonitorIcon />} className="min-w-[150px]" />

        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-[var(--color-text-secondary)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          {/* The query field routes to the results grid; the clear (X) resets to home.
              Keeps the search affordance live on every page, no dead UI. */}
          <Link
            href="/adish-jain"
            aria-label={`Search results for ${query}`}
            className="flex h-10 w-full items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] pl-10 pr-10 text-[15px] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]"
          >
            {query}
          </Link>
          <Link
            href="/"
            aria-label="Clear search"
            className="absolute right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-[15px] font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-hover)]"
        >
          <BookmarkIcon />
          Saved searches
        </button>
      </div>
    </div>
  );
}

function Dropdown({
  label,
  icon,
  className,
}: {
  label: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={
        "flex h-10 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-[15px] text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-hover)] " +
        (className ?? "")
      }
    >
      {icon}
      <span className="truncate">{label}</span>
      <svg
        className="ml-auto"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </button>
  );
}

function MonitorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}
