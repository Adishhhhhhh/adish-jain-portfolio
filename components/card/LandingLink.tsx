import type { Concept } from "@/content/types";

// The Meta-style click-through link bar that sits under an ad's creative,
// mirroring the real Ad Library's destination card (source, headline, CTA
// button). Used on the grid card and in the Ad Details modal so an
// advertorial-driver static always shows where it clicks through to.

export function LandingLink({ concept }: { concept: Concept }) {
  if (!concept.landingUrl) return null;
  return (
    <a
      href={concept.landingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-3 border-t border-[var(--color-divider)] bg-[var(--color-surface-alt)] px-3 py-2.5 transition-colors hover:bg-[var(--color-surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-meta-blue)]"
    >
      <span className="flex min-w-0 flex-col leading-tight">
        {concept.landingSource && (
          <span className="truncate text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            {concept.landingSource}
          </span>
        )}
        <span className="truncate text-[13px] font-semibold text-[var(--color-text-primary)]">
          {concept.landingTitle ?? "View the landing page"}
        </span>
      </span>
      <span className="flex-none rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] px-3 py-1.5 text-[13px] font-semibold text-[var(--color-text-primary)] transition-colors group-hover:border-[var(--color-meta-blue)] group-hover:text-[var(--color-meta-blue)] group-active:scale-95">
        Learn More
      </span>
    </a>
  );
}
