"use client";

import { useState } from "react";

// Collapsible panel modeled on Meta's "Transparency by location" pattern from the
// real Ad Details modal. The chevron rotates, the body slides open with a height-only
// (transform-only is impossible here without measuring) animation. Defaults to open
// on the Strategy panel, closed on the rest.

export function RationalePanel({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--color-divider)] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-[var(--color-surface-alt)]"
      >
        <span className="text-[15px] font-semibold text-[var(--color-text-primary)]">
          {title}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={
            "text-[var(--color-text-secondary)] transition-transform duration-200 " +
            (open ? "rotate-180" : "")
          }
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-4 text-[14px] leading-relaxed text-[var(--color-text-primary)]">
          {children}
        </div>
      )}
    </div>
  );
}
