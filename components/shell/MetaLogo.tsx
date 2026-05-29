// Clean wordmark, no mark. Reads "Portfolio" in the brand font, sized to sit
// where the Meta logo sits in the real Ad Library chrome.

export function MetaLogo({ className }: { className?: string }) {
  return (
    <span
      className={
        "select-none text-[24px] font-bold leading-none tracking-[-0.02em] text-[var(--color-text-primary)] " +
        (className ?? "")
      }
      aria-label="Portfolio home"
    >
      Portfolio
    </span>
  );
}
