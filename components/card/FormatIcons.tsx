import type { Format } from "@/content/types";

// Where the real Ad Library card shows platform icons (Facebook, Instagram, etc.),
// this site shows format icons (Video, Static, Advertorial).

export function FormatIcons({ formats }: { formats: Format[] }) {
  return (
    <div className="flex items-center gap-1.5">
      {formats.map((f) => (
        <span
          key={f}
          aria-label={f}
          title={f}
          className="inline-flex h-5 w-5 items-center justify-center text-[var(--color-text-primary)]"
        >
          {ICONS[f]}
        </span>
      ))}
    </div>
  );
}

const ICONS: Record<Format, React.ReactNode> = {
  video: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  static: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <circle cx="9" cy="10" r="1.5" fill="currentColor" />
      <path d="M3 17l5-5 4 4 3-3 6 6" />
    </svg>
  ),
  advertorial: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <line x1="7" y1="9" x2="17" y2="9" />
      <line x1="7" y1="13" x2="17" y2="13" />
      <line x1="7" y1="17" x2="13" y2="17" />
    </svg>
  ),
};
