// Neutral Meta-native pill — visually distinct from the green "Active" pill.
// Per PLAN.md: status reads "Spec," never "Active." This is the load-bearing honesty signal.

export function SpecPill() {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-pill-bg)] px-2.5 py-1 text-[12px] font-semibold text-[var(--color-pill-text)]"
      aria-label="Status: spec work"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      Spec
    </span>
  );
}
