"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Concept } from "@/content/types";
import { AWARENESS_LABELS, BRAND_META, FORMAT_LABELS } from "@/content/types";
import { SITE, SCREEN_3 } from "@/content/copy";
import { SpecPill } from "@/components/card/SpecPill";
import { FormatIcons } from "@/components/card/FormatIcons";
import { RationalePanel } from "./RationalePanel";
import { AnnotatedTeardown } from "@/components/teardown/AnnotatedTeardown";
import { NEUROGUM_TEARDOWN } from "@/content/teardowns";

/**
 * Ad Details modal. Two columns:
 * - Left: creative metadata, hook variants, preview card with caption + creative.
 * - Right: collapsible Strategy / Hook Logic / Research / Campaign Role panels,
 *   then About Adish and the honest line.
 *
 * Per PLAN.md: brand voice lives only on the left (captions, hook lines).
 * Adish's strategist voice lives only on the right (rationale panels).
 * The two voices are never mixed.
 */
export function AdDetailsModal({
  concept,
  standalone = false,
}: {
  concept: Concept;
  // standalone = hard nav / shareable URL (no history to pop). Intercepted modal
  // (soft nav from the grid) pops back to preserve scroll position.
  standalone?: boolean;
}) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDivElement>(null);

  const dismiss = () => {
    if (standalone) router.push("/adish-jain");
    else router.back();
  };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
      // Basic focus trap: keep Tab within the dialog.
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, input, video, [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, standalone]);

  // Lock body scroll, focus the dialog, restore focus to the trigger on close.
  useEffect(() => {
    const prev = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      previouslyFocused?.focus?.();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/60 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ad-details-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.97, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
        className="my-4 w-full max-w-[1100px] overflow-hidden rounded-lg bg-[var(--color-surface)] shadow-[var(--shadow-modal)] outline-none"
      >
        <ModalHeader onClose={dismiss} />

        {concept.id === NEUROGUM_TEARDOWN.conceptId && concept.asset ? (
          <div className="flex flex-col">
            <div className="border-b border-[var(--color-divider)] bg-[var(--color-surface-alt)] px-5 py-3">
              <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-meta-blue)]">
                Annotated Teardown · the analyst voice
              </p>
              <p className="mt-1 text-[14px] text-[var(--color-text-primary)]">
                A real ad account would show spend and reach here. This concept
                never ran, so it shows the per-second strategic reasoning instead.
              </p>
            </div>
            <div className="p-5">
              <AnnotatedTeardown
                videoSrc={concept.asset}
                poster={concept.poster}
                hotspots={NEUROGUM_TEARDOWN.hotspots}
              />
            </div>
            <div className="border-t border-[var(--color-divider)]">
              <RightRationale concept={concept} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-0 md:grid-cols-[1fr_1.05fr]">
            <LeftCreative concept={concept} />
            <RightRationale concept={concept} />
          </div>
        )}
      </motion.div>
    </div>
  );
}

function ModalHeader({ onClose }: { onClose: () => void }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--color-divider)] bg-[var(--color-surface)] px-4 py-3">
      <h2
        id="ad-details-title"
        className="text-[18px] font-bold text-[var(--color-text-primary)]"
      >
        Ad Details
      </h2>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-hover)] active:scale-95"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </header>
  );
}

function LeftCreative({ concept }: { concept: Concept }) {
  const brand = BRAND_META[concept.brand];
  return (
    <div className="border-r border-[var(--color-divider)] p-5">
      <div className="flex flex-col gap-2">
        <SpecPill />
        <p className="text-[13px] text-[var(--color-text-primary)]">
          <span className="font-semibold">Concept:</span> {concept.conceptName}
        </p>
        <p className="text-[13px] text-[var(--color-text-primary)]">
          {concept.builtDate}
        </p>
        <div className="flex items-center gap-2 text-[13px] text-[var(--color-text-primary)]">
          <span className="font-semibold">Format</span>
          <FormatIcons formats={[concept.format]} />
          <span className="text-[var(--color-text-secondary)]">
            ({FORMAT_LABELS[concept.format]}, {AWARENESS_LABELS[concept.awareness]})
          </span>
        </div>
      </div>

      {concept.hooks.length > 1 ? (
        <details
          open
          className="mt-4 rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-3"
        >
          <summary className="cursor-pointer text-[14px] font-semibold text-[var(--color-text-primary)]">
            This concept has {concept.hooks.length} hooks
          </summary>
          <ul className="mt-3 flex flex-col gap-3">
            {concept.hooks.map((h, i) => (
              <li
                key={i}
                className="rounded bg-[var(--color-surface)] p-3 text-[13px] text-[var(--color-text-primary)]"
              >
                <p className="font-semibold leading-snug">
                  {i + 1}. {h.line}
                </p>
                <p className="mt-1 text-[var(--color-text-secondary)]">
                  {h.rationale}
                </p>
              </li>
            ))}
          </ul>
        </details>
      ) : (
        <p className="mt-4 text-[13px] text-[var(--color-text-secondary)]">
          Single-hook concept.
        </p>
      )}

      {/* The ad-as-it-would-run preview */}
      <article className="mt-5 overflow-hidden rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)]">
        <header className="flex items-center gap-2 px-3 pt-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full">
            <Image
              src="/brand/Upwork Dp.jpeg"
              alt={SITE.advertiserName}
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[13px] font-semibold text-[var(--color-text-primary)]">
              {brand.displayName}
            </span>
            <span className="text-[12px] text-[var(--color-text-secondary)]">
              Sponsored
            </span>
          </div>
        </header>
        <p className="whitespace-pre-line px-3 py-2 text-[13px] leading-snug text-[var(--color-text-primary)]">
          {concept.caption}
        </p>
        <CreativeSlot concept={concept} />
      </article>
    </div>
  );
}

function CreativeSlot({ concept }: { concept: Concept }) {
  if (!concept.asset) {
    return (
      <div className="flex aspect-square w-full items-center justify-center bg-[var(--color-surface-alt)] text-[13px] text-[var(--color-text-secondary)]">
        TODO: asset
      </div>
    );
  }
  if (concept.format === "video") {
    return (
      <video
        src={concept.asset}
        poster={concept.poster}
        controls
        playsInline
        preload="metadata"
        className="h-auto max-h-[560px] w-full bg-black object-contain"
      />
    );
  }
  return (
    <div className="flex w-full items-center justify-center bg-[var(--color-surface-alt)]">
      <Image
        src={concept.asset}
        alt={concept.conceptName}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, 540px"
        className="h-auto max-h-[560px] w-full object-contain"
      />
    </div>
  );
}

function RightRationale({ concept }: { concept: Concept }) {
  return (
    <div className="flex flex-col bg-[var(--color-surface)] p-5">
      <div className="overflow-hidden rounded-md border border-[var(--color-border-light)]">
        <RationalePanel title="The Angle" defaultOpen>
          <p>{concept.rationale.angle}</p>
        </RationalePanel>
        <RationalePanel title="The ICP">
          <p>{concept.rationale.icp}</p>
        </RationalePanel>
        <RationalePanel title="The Hook Strategy">
          <p>{concept.rationale.hookStrategy}</p>
        </RationalePanel>
        <RationalePanel title="Why It Works">
          <p>{concept.rationale.whyItWorks}</p>
        </RationalePanel>
        <RationalePanel title="Strategic Intent">
          <p>{concept.rationale.strategicIntent}</p>
        </RationalePanel>
        {concept.rationale.diversePotential && (
          <RationalePanel title="Diverse Potential">
            <p>{concept.rationale.diversePotential}</p>
          </RationalePanel>
        )}
        <RationalePanel title="Campaign Role">
          <p>{concept.rationale.campaignRole}</p>
        </RationalePanel>
      </div>

      <div className="mt-5 overflow-hidden rounded-md border border-[var(--color-border-light)]">
        <div className="border-b border-[var(--color-divider)] px-4 py-3">
          <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
            {SCREEN_3.aboutAdvertiserHeading}
          </p>
        </div>
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="/brand/Upwork Dp.jpeg"
              alt={SITE.advertiserName}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[14px] font-semibold text-[var(--color-text-primary)]">
              {SITE.advertiserName}
            </span>
            <span className="text-[12px] text-[var(--color-text-secondary)]">
              DTC Creative Strategist, Mumbai
            </span>
          </div>
        </div>
        <div className="border-t border-[var(--color-divider)] px-4 py-3">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
            More info
          </p>
          <ul className="mt-2 flex flex-col gap-1 text-[14px]">
            <li>
              <Link href="/adish-jain/about" className="meta-link">
                {SCREEN_3.approachLink}
              </Link>
            </li>
            <li>
              <Link href={`/campaign/${concept.brand}`} className="meta-link">
                Open the {BRAND_META[concept.brand].displayName} campaign room
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-5 rounded-md bg-[var(--color-surface-alt)] px-4 py-3 text-[13px] italic leading-snug text-[var(--color-text-secondary)]">
        {SCREEN_3.honestLine}
      </p>
    </div>
  );
}
