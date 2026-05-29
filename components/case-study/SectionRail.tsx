"use client";

import { useEffect, useState } from "react";

// Sticky sidebar that highlights the section currently in view. Mirrors the
// Notion reading experience: always know where you are in a long document.

export function SectionRail({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Case study sections"
      className="hidden md:sticky md:top-[140px] md:block md:self-start"
    >
      <ul className="flex flex-col gap-1 text-[14px]">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={
                "block rounded px-3 py-1.5 transition-colors " +
                (active === s.id
                  ? "bg-[var(--color-surface-alt)] font-semibold text-[var(--color-meta-blue)]"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-text-primary)]")
              }
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
