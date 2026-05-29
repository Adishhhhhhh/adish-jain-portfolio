import Link from "next/link";
import { MetaLogo } from "./MetaLogo";
import { NavMenu } from "./NavMenu";

// Nav keys map to the Notion portfolio's own section names, re-housed in the
// Ad Library chrome. The shell proves the concept; the labels are Adish's.
type NavKey = "overview" | "approach" | "creative-strategy" | "case-studies";

const NAV: { key: NavKey; label: string; href: string }[] = [
  // Portfolio Overview points to the results grid (the consistent destination).
  // The entry/hero (/) is only reachable via the logo, so it never re-shows
  // itself when navigating between sections.
  { key: "overview", label: "Portfolio Overview", href: "/adish-jain" },
  { key: "approach", label: "Approach", href: "/approach" },
  { key: "creative-strategy", label: "Creative Strategy", href: "/creative-strategy" },
  { key: "case-studies", label: "Case Studies", href: "/case-studies" },
];

export function TopBar({ active = "overview" as NavKey }: { active?: NavKey }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border-light)] bg-[var(--color-surface)]">
      <div className="mx-auto flex h-[60px] max-w-[1400px] items-center justify-between px-6">
        <Link href="/" aria-label="Portfolio home" className="flex items-center">
          <MetaLogo />
        </Link>
        <nav className="flex items-center gap-7">
          {NAV.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={
                  "relative hidden py-[18px] text-[15px] font-semibold transition-colors md:inline-block " +
                  (isActive
                    ? "text-[var(--color-meta-blue)]"
                    : "text-[var(--color-text-primary)] hover:text-[var(--color-meta-blue)]")
                }
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-px h-[3px] bg-[var(--color-meta-blue)]"
                  />
                )}
              </Link>
            );
          })}
          <NavMenu />
        </nav>
      </div>
    </header>
  );
}
