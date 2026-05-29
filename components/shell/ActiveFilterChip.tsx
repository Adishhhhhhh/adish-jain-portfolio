// Where the real Ad Library shows "Active status: Active ads",
// this site shows "Status: Spec" — neutral, never the green Active pill.

export function ActiveFilterChip() {
  return (
    <div className="mx-auto mt-3 flex max-w-[1400px] justify-end px-6">
      <div className="flex items-center gap-2 rounded-md bg-[var(--color-surface-alt)] px-3 py-2 text-[13px]">
        <span className="font-semibold text-[var(--color-text-primary)]">
          Status:
        </span>
        <span className="text-[var(--color-text-primary)]">Spec</span>
        <button
          type="button"
          aria-label="Remove filter"
          className="flex h-5 w-5 items-center justify-center rounded-full text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
