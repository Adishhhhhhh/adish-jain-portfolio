import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/content/copy";

type Tab = "ads" | "about";

export function AdvertiserHeader({ activeTab = "ads" as Tab }: { activeTab?: Tab }) {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-6">
      <div className="flex items-center gap-4">
        <div className="relative h-[88px] w-[88px] overflow-hidden rounded-full ring-1 ring-[var(--color-border-light)]">
          <Image
            src="/brand/Upwork Dp.jpeg"
            alt={`${SITE.advertiserName} avatar`}
            fill
            sizes="88px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[28px] font-bold leading-tight text-[var(--color-text-primary)]">
            {SITE.advertiserName}
          </h1>
          <span className="text-[15px] text-[var(--color-text-secondary)]">
            {SITE.advertiserHandle}
          </span>
        </div>
      </div>

      <nav className="mt-5 flex items-center gap-7 border-b border-transparent">
        <TabLink href="/adish-jain" label="Ads" active={activeTab === "ads"} />
        <TabLink
          href="/adish-jain/about"
          label="About"
          active={activeTab === "about"}
        />
      </nav>
    </div>
  );
}

function TabLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        "relative pb-3 text-[15px] font-semibold transition-colors " +
        (active
          ? "text-[var(--color-meta-blue)]"
          : "text-[var(--color-text-primary)] hover:text-[var(--color-meta-blue)]")
      }
    >
      {label}
      {active && (
        <span
          aria-hidden
          className="absolute inset-x-0 -bottom-px h-[3px] bg-[var(--color-meta-blue)]"
        />
      )}
    </Link>
  );
}
