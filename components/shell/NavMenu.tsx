"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND_META, type Brand } from "@/content/types";

// The hamburger. In the real Ad Library this is the global menu; here it is the
// deep navigator, a slide-over that jumps straight into any brand's full case
// study, plus Contact. The doors to the deepest content.

const BRAND_ORDER: Brand[] = ["pethonesty", "neurogum", "mitoq", "ancient-nutrition"];

export function NavMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="ml-2 flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div
            className="absolute right-0 top-0 flex h-full w-[340px] max-w-[88vw] flex-col bg-[var(--color-surface)] shadow-[var(--shadow-modal)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--color-divider)] px-5 py-4">
              <span className="text-[16px] font-bold text-[var(--color-text-primary)]">
                Jump to
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-3">
              <p className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                Case studies
              </p>
              {BRAND_ORDER.map((b) => (
                <Link
                  key={b}
                  href={`/campaign/${b}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-[15px] font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)]"
                >
                  {BRAND_META[b].displayName}
                  <span className="block text-[12px] font-normal text-[var(--color-text-secondary)]">
                    {BRAND_META[b].oneLiner}
                  </span>
                </Link>
              ))}

              <p className="px-2 pb-1 pt-4 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                Portfolio
              </p>
              {[
                { href: "/adish-jain", label: "Portfolio Overview" },
                { href: "/approach", label: "Approach" },
                { href: "/creative-strategy", label: "Creative Strategy" },
                { href: "/case-studies", label: "All case studies" },
                { href: "/adish-jain/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-[15px] font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
