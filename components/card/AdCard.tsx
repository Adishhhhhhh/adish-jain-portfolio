"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Concept } from "@/content/types";
import { BRAND_META, conceptFormats } from "@/content/types";
import { SITE } from "@/content/copy";
import { SpecPill } from "./SpecPill";
import { FormatIcons } from "./FormatIcons";
import { LandingLink } from "./LandingLink";

/**
 * The Ad Library result card, re-tagged.
 *
 * Anatomy (matches Reference/Ad library SS 2.png):
 * - Spec pill (where Active sits)
 * - Concept name (where Library ID sits)
 * - Built date / awareness stage (where Started running sits)
 * - Format icons (where platform icons sit)
 * - "N hooks" line (where "multiple versions" sits)
 * - See details button
 * - Inner ad-preview panel: avatar + Sponsored + caption + creative
 */
export function AdCard({ concept }: { concept: Concept }) {
  const hookCount = concept.hooks.length;
  const brand = BRAND_META[concept.brand];
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] transition-shadow duration-200 [@media(hover:hover)]:hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
      {/* Metadata header */}
      <div className="flex flex-col gap-1.5 px-4 pt-4 pb-3">
        <div className="flex items-start justify-between">
          <SpecPill />
          <button
            type="button"
            aria-label={expanded ? "Collapse ad text" : "Expand ad text"}
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
            className="flex h-7 w-7 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-hover)] active:scale-95"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="12" r="1.6" />
              <circle cx="12" cy="12" r="1.6" />
              <circle cx="19" cy="12" r="1.6" />
            </svg>
          </button>
        </div>

        <p className="text-[13px] text-[var(--color-text-primary)]">
          Concept: {concept.conceptName}
        </p>
        <p className="text-[13px] text-[var(--color-text-primary)]">
          {concept.builtDate}
        </p>

        <div className="flex items-center gap-2 text-[13px] text-[var(--color-text-primary)]">
          <span>Format</span>
          <FormatIcons formats={conceptFormats(concept)} />
        </div>

        {hookCount > 1 && (
          <p className="flex items-center gap-1.5 text-[13px] text-[var(--color-text-primary)]">
            This concept has {hookCount} hooks
            <InfoSvg />
          </p>
        )}

        <Link
          href={`/ad/${concept.id}`}
          scroll={false}
          className="mt-1 flex h-9 items-center justify-center rounded-md bg-[var(--color-surface-alt)] text-[14px] font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-hover)] active:scale-[0.99]"
        >
          See ad details
        </Link>
      </div>

      {/* Inner ad-preview panel */}
      <div className="border-t border-[var(--color-border-light)] bg-[var(--color-surface)] px-4 pt-3 pb-4">
        <header className="mb-2 flex items-center gap-2">
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

        <p
          className={
            "whitespace-pre-line text-[13px] text-[var(--color-text-primary)] " +
            (expanded ? "" : "line-clamp-3")
          }
        >
          {concept.caption}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mb-3 mt-0.5 block text-left text-[13px] font-semibold text-[var(--color-text-secondary)] hover:underline"
        >
          {expanded ? "See less" : "See more"}
        </button>

        {/* Creative slot. Advertorial drivers get the click-through link bar
            attached flush below the creative, matching a real feed ad unit. */}
        {concept.landingUrl ? (
          <div className="overflow-hidden rounded-md border border-[var(--color-border-light)]">
            <CreativeSlot concept={concept} flush />
            <LandingLink concept={concept} />
          </div>
        ) : (
          <CreativeSlot concept={concept} />
        )}
      </div>
    </article>
  );
}

function CreativeSlot({
  concept,
  flush = false,
}: {
  concept: Concept;
  // flush = rendered inside a combined creative+link container, so the slot
  // drops its own corner rounding and lets the wrapper clip it.
  flush?: boolean;
}) {
  const rounding = flush ? "" : "rounded-md ";
  if (!concept.asset) {
    return (
      <div className={`flex aspect-square w-full items-center justify-center ${rounding}bg-[var(--color-surface-alt)] text-[13px] text-[var(--color-text-secondary)]`}>
        TODO: asset
      </div>
    );
  }
  if (concept.format === "video") {
    return <CardVideo concept={concept} rounding={rounding} />;
  }
  return <CardStatic concept={concept} rounding={rounding} />;
}

/**
 * Plays in place on click, the way a real Ad Library card does. Starts muted so
 * the first tap is never a surprise, then hands over native controls so sound
 * and scrubbing are one click away.
 */
function CardVideo({ concept, rounding }: { concept: Concept; rounding: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function start() {
    const v = ref.current;
    if (!v) return;
    setStarted(true);
    v.play().catch(() => {
      // Autoplay policy refused it. Controls are visible, so the user can start it.
    });
  }

  return (
    <div className={`relative w-full overflow-hidden ${rounding}bg-black`}>
      <video
        ref={ref}
        src={concept.asset}
        poster={concept.poster}
        muted
        playsInline
        preload="metadata"
        controls={started}
        onClick={() => started || start()}
        className="h-auto max-h-[440px] w-full bg-black object-contain"
      />
      {!started && (
        <button
          type="button"
          onClick={start}
          aria-label={`Play ${concept.conceptName}`}
          className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-105">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden>
              <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.5-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

/**
 * Statics render at their true dimensions, centered, never top-cropped, and
 * open full size on click so the copy inside them is actually readable.
 */
function CardStatic({ concept, rounding }: { concept: Concept; rounding: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge ${concept.conceptName}`}
        className={`flex w-full cursor-zoom-in items-center justify-center overflow-hidden ${rounding}bg-[var(--color-surface-alt)]`}
      >
        <Image
          src={concept.asset!}
          alt={concept.conceptName}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 320px"
          loading="lazy"
          className="h-auto max-h-[440px] w-full object-contain"
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={concept.conceptName}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <Image
            src={concept.asset!}
            alt={concept.conceptName}
            width={0}
            height={0}
            sizes="90vw"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-auto max-w-[92vw] cursor-default object-contain"
          />
        </div>
      )}
    </>
  );
}

function InfoSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-text-secondary)]">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
