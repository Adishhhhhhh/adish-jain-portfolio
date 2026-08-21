import Link from "next/link";
import { TopBar } from "@/components/shell/TopBar";
import { SearchBarRow } from "@/components/shell/SearchBarRow";
import { AdvertiserHeader } from "@/components/shell/AdvertiserHeader";
import {
  ABOUT_PARAGRAPHS,
  BUILT_ENTRIES,
  BUILT_FOOTER_HANDLE,
  BUILT_FOOTER_HREF,
  BUILT_FOOTER_PREFIX,
  BUILT_HEADING,
  BUILT_SUBHEAD,
  CONTACT_HEADING,
  CONTACT_LEAD,
  CONTACT_ROWS,
  CURRENT_WORK_LINE,
} from "@/content/about";

export const metadata = { title: "About" };

// The About tab. Profile header, the about copy, the current-work line, the
// things built for myself, and contact, which used to live on its own route.

export default function AboutPage() {
  return (
    <>
      <TopBar active="overview" />
      <SearchBarRow query="Adish Jain" />
      <AdvertiserHeader activeTab="about" />

      <main className="mx-auto max-w-[1400px] px-6 pb-20 pt-8">
        <div className="max-w-[68ch]">
          {/* The about copy. No eyebrow, no section title. */}
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <p
              key={i}
              className={
                "text-[16px] leading-relaxed text-[var(--color-text-primary)] " +
                (i === 0 ? "" : "mt-4")
              }
            >
              {p}
            </p>
          ))}

          {/* Current work */}
          <p className="mt-6 text-[14px] italic leading-relaxed text-[var(--color-text-secondary)]">
            {CURRENT_WORK_LINE}
          </p>
        </div>

        {/* Built for myself */}
        <section className="mt-14 max-w-[68ch]">
          <h2 className="text-[20px] font-bold text-[var(--color-text-primary)]">
            {BUILT_HEADING}
          </h2>
          <p className="mt-1 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            {BUILT_SUBHEAD}
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {BUILT_ENTRIES.map((e) => (
              <article
                key={e.title}
                className="rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta-link text-[16px] font-bold"
                  >
                    {e.title}
                  </a>
                  <span className="text-[12.5px] text-[var(--color-text-secondary)]">
                    {e.label}
                  </span>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-text-primary)]">
                  {e.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-4 text-[13px] text-[var(--color-text-secondary)]">
            {BUILT_FOOTER_PREFIX}
            <a
              href={BUILT_FOOTER_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="meta-link font-semibold"
            >
              {BUILT_FOOTER_HANDLE}
            </a>
          </p>
        </section>

        {/* Contact, moved here from its own route */}
        <section id="contact" className="mt-14 max-w-[68ch] scroll-mt-[140px]">
          <h2 className="text-[20px] font-bold text-[var(--color-text-primary)]">
            {CONTACT_HEADING}
          </h2>
          <p className="mt-1 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            {CONTACT_LEAD}
          </p>

          <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-[var(--color-border-light)] bg-[var(--color-divider)] sm:grid-cols-2">
            {CONTACT_ROWS.map((r) => (
              <div key={r.label} className="bg-[var(--color-surface)] px-4 py-3">
                <dt className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                  {r.label}
                </dt>
                <dd className="mt-1 text-[15px] text-[var(--color-text-primary)]">
                  {r.href ? (
                    <Link href={r.href} className="meta-link font-semibold">
                      {r.value}
                    </Link>
                  ) : (
                    r.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </>
  );
}
