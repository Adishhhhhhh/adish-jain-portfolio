"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
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
          data-tour="details"
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
        <div data-tour="creative">
          {concept.landingUrl ? (
            <div className="overflow-hidden rounded-md border border-[var(--color-border-light)]">
              <CreativeSlot concept={concept} flush />
              <LandingLink concept={concept} />
            </div>
          ) : (
            <CreativeSlot concept={concept} />
          )}
        </div>
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
    return <ConceptSlot concept={concept} rounding={rounding} />;
  }
  if (concept.format === "video") {
    return <CardVideo concept={concept} rounding={rounding} />;
  }
  return <CardStatic concept={concept} rounding={rounding} />;
}

/**
 * Written but never shot. Instead of an empty frame, the slot renders the
 * script's opening line as the artwork, because on a concept the hook is the
 * asset. Reads as a deliberate stage rather than a missing image.
 */
function ConceptSlot({ concept, rounding }: { concept: Concept; rounding: string }) {
  const line = concept.hooks[0]?.line ?? concept.caption.split("\n")[0] ?? "";
  const isExpansion = concept.id.includes("-exp-");
  const isNative = concept.nativeLongForm === true;

  return (
    <div
      className={`flex min-h-[168px] w-full flex-col justify-between gap-3 border border-dashed border-[var(--color-border)] ${rounding}bg-[var(--color-surface-alt)] p-4`}
    >
      <span className="text-[10.5px] font-bold uppercase tracking-[0.07em] text-[var(--color-text-tertiary)]">
        {isNative
          ? "Long-form native static"
          : isExpansion
            ? "Expansion angle"
            : "Script, not yet produced"}
      </span>
      <p className="line-clamp-5 text-[15px] font-semibold leading-snug text-[var(--color-text-primary)]">
        {line ? `“${line}”` : concept.conceptName}
      </p>
      <span className="text-[11.5px] text-[var(--color-text-secondary)]">
        {isNative
          ? "Copy written, art in production"
          : isExpansion
            ? "Angle mapped, held for Phase 2"
            : "Full script written"}
      </span>
    </div>
  );
}

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getReducedMotion() {
  return window.matchMedia(REDUCED_MOTION).matches;
}

/**
 * Autoplays muted and looping the moment it scrolls into view, which is how the
 * feed itself behaves. The only thing the card asks for is sound: a speaker
 * badge sits in the corner and one click unmutes and hands over native controls.
 *
 * Playback is gated on an IntersectionObserver so five videos are never all
 * decoding at once, and it respects prefers-reduced-motion by staying paused
 * behind a play button instead.
 */
function CardVideo({ concept, rounding }: { concept: Concept; rounding: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [unmuted, setUnmuted] = useState(false);
  const [started, setStarted] = useState(false);
  const reduced = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);

  // Play only while on screen. Off screen it pauses, so scrolling the grid does
  // not leave five decoders running.
  useEffect(() => {
    const v = ref.current;
    if (!v || reduced) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().then(() => setStarted(true)).catch(() => {
            // autoplay refused; the poster stays and the badge still works
          });
        } else {
          v.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduced]);

  function enableSound() {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    setUnmuted(true);
    v.play().then(() => setStarted(true)).catch(() => {});
  }

  return (
    <div className={`relative w-full overflow-hidden ${rounding}bg-black`}>
      <video
        ref={ref}
        src={concept.asset}
        poster={concept.poster}
        muted={!unmuted}
        loop
        playsInline
        // native autoplay rather than a JS kick, so muted playback does not
        // depend on IntersectionObserver firing. The observer below only
        // pauses off screen and resumes on the way back.
        autoPlay={!reduced}
        preload="metadata"
        controls={unmuted}
        onPlaying={() => setStarted(true)}
        aria-label={concept.conceptName}
        onClick={() => (unmuted ? undefined : enableSound())}
        className="h-auto max-h-[440px] w-full bg-black object-contain"
      />

      {/* Sound affordance. The whole point of the muted autoplay is that this is
          the one thing left to click. */}
      {!unmuted && (
        <button
          type="button"
          onClick={enableSound}
          aria-label={`Unmute ${concept.conceptName}`}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/80"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4 9v6h4l5 4V5L8 9H4z" />
            <path
              d="M17 8.5a5 5 0 0 1 0 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.45"
            />
            <line x1="16.5" y1="8" x2="21.5" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Sound off
        </button>
      )}

      {/* Reduced motion, or autoplay blocked: give back an explicit play control */}
      {(reduced || !started) && !unmuted && (
        <button
          type="button"
          onClick={() => {
            const v = ref.current;
            if (!v) return;
            v.play().then(() => setStarted(true)).catch(() => {});
          }}
          aria-label={`Play ${concept.conceptName}`}
          className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 shadow-lg backdrop-blur-sm">
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
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Art that has not landed yet degrades to the brief rather than a broken frame
  if (failed) return <ConceptSlot concept={concept} rounding={rounding} />;

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
          onError={() => setFailed(true)}
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
