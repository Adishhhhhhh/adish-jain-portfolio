"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Concept } from "@/content/types";
import { BRAND_META } from "@/content/types";
import { SITE } from "@/content/copy";
import { SpecPill } from "./SpecPill";
import { FormatIcons } from "./FormatIcons";

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
          <FormatIcons formats={[concept.format]} />
        </div>

        {hookCount > 1 ? (
          <p className="flex items-center gap-1.5 text-[13px] text-[var(--color-text-primary)]">
            This concept has {hookCount} hooks
            <InfoSvg />
          </p>
        ) : (
          <p className="flex items-center gap-1.5 text-[13px] text-[var(--color-text-primary)]">
            Single hook
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

        {/* Creative slot */}
        <CreativeSlot concept={concept} />
      </div>
    </article>
  );
}

function CreativeSlot({ concept }: { concept: Concept }) {
  if (!concept.asset) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-md bg-[var(--color-surface-alt)] text-[13px] text-[var(--color-text-secondary)]">
        TODO: asset
      </div>
    );
  }
  if (concept.format === "video") {
    // Natural aspect ratio, full creative visible, never cropped.
    return (
      <video
        src={concept.asset}
        poster={concept.poster}
        muted
        playsInline
        preload="none"
        className="h-auto max-h-[440px] w-full rounded-md bg-black object-contain"
      />
    );
  }
  // Statics render at their true dimensions, centered, never top-cropped.
  // width/height 0 + w-full h-auto is the Next.js pattern for intrinsic-ratio images.
  return (
    <div className="flex w-full items-center justify-center overflow-hidden rounded-md bg-[var(--color-surface-alt)]">
      <Image
        src={concept.asset}
        alt={concept.conceptName}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, 320px"
        loading="lazy"
        className="h-auto max-h-[440px] w-full object-contain"
      />
    </div>
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
