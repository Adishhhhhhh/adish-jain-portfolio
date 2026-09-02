"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SCREEN_1, SITE } from "@/content/copy";
import { BRAND_META, type Brand } from "@/content/types";
import { Reception } from "@/components/screen-1/Reception";

const SEARCH_TARGET = SITE.advertiserName; // "Adish Jain"

export function Hero() {
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [typed, setTyped] = useState(reducedMotion ? SEARCH_TARGET : "");
  const [isLeaving, setIsLeaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-type effect for "Adish Jain" so the search itself reads as a small piece
  // of motion delight. Respects prefers-reduced-motion.
  useEffect(() => {
    if (reducedMotion) return;
    let i = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i += 1;
        setTyped(SEARCH_TARGET.slice(0, i));
        if (i >= SEARCH_TARGET.length) clearInterval(interval);
      }, 80);
      return () => clearInterval(interval);
    }, 1200);
    return () => clearTimeout(start);
  }, [reducedMotion]);

  function handleSearch() {
    if (reducedMotion) {
      router.push("/adish-jain");
      return;
    }
    setIsLeaving(true);
    // After the leave animation completes, navigate
    setTimeout(() => router.push("/adish-jain"), 360);
  }

  return (
    <motion.main
      // Start visible (SSR-safe, never a blank hero). Framer only drives the
      // user-triggered leave transition; entry delight comes from CSS (hero-enter).
      initial={false}
      animate={
        isLeaving
          ? { opacity: 0, y: -8, transition: { duration: 0.32, ease: [0.23, 1, 0.32, 1] } }
          : { opacity: 1, y: 0 }
      }
      className="mx-auto flex max-w-[1100px] flex-col gap-10 px-6 py-10"
    >
      <section className="grid grid-cols-1 gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
        <div className="hero-item">
          <h1 className="text-[52px] font-bold leading-none tracking-tight text-[var(--color-text-primary)]">
            {SCREEN_1.h1}
          </h1>
          <p className="mt-4 text-[15px] leading-[1.5] text-[var(--color-text-primary)]">
            {SCREEN_1.lead}
          </p>
          <p className="mt-3 text-[15px] leading-[1.5] text-[var(--color-text-primary)]">
            {SCREEN_1.valueBeat}
          </p>
          <p className="mt-4 text-[15px] leading-[1.5] text-[var(--color-text-primary)]">
            {SCREEN_1.libraryLine}
          </p>

          <div className="mt-6 flex items-start gap-2 rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-3 text-[13px] text-[var(--color-text-primary)]">
            <InfoSvg />
            <p>{SCREEN_1.specDisclosure}</p>
          </div>
        </div>

        <FeedAudition />
      </section>

      <section className="hero-item rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
        <h2 className="text-[20px] font-bold text-[var(--color-text-primary)]">
          Search ads
        </h2>
        <p className="mt-1 text-[13px] text-[var(--color-text-secondary)]">
          Set your location and choose an ad category to start your search.
        </p>

        <form
          className="mt-3 flex flex-wrap items-center gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <DropdownStatic label="India" />
          <DropdownStatic label="All ads" icon={<MonitorSvg />} />

          <div className="relative min-w-[280px] flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]">
              <SearchSvg />
            </span>
            <input
              ref={inputRef}
              type="text"
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              placeholder="Search by advertiser name"
              className="h-10 w-full rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] pl-10 pr-4 text-[15px] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-meta-blue)]"
            />
          </div>

          <button
            type="submit"
            data-tour="search"
            className="flex h-10 items-center justify-center rounded-md bg-[var(--color-meta-blue)] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-meta-blue-hover)]"
          >
            Search
          </button>
        </form>

        <p className="mt-3 max-w-[620px] text-[13px] leading-[1.5] text-[var(--color-text-secondary)]">
          {SCREEN_1.attentionThesis}
        </p>
      </section>

      <Reception />
    </motion.main>
  );
}

// ── The Feed Audition ──────────────────────────────────────────────────────
// The 200ms claim, dramatized. A recreated generic feed skeleton (no Meta
// chrome) loads, a 200ms tick fills, and one sponsored creative is cast into
// the slot. Rotates through three produced assets. Reduced motion renders the
// first creative statically with no shimmer or rotation.

const FEED_ADS: { src: string; brand: Brand; video?: boolean }[] = [
  { src: "/assets/energy-curve-comparison.png", brand: "neurogum" },
  { src: "/assets/The-Autocorrect.png", brand: "ancient-nutrition" },
  {
    src: "/assets/posters/The-Walk-That-Keeps-Getting-Shorter.jpg",
    brand: "pethonesty",
    video: true,
  },
];

const BRAND_AVATAR_COLORS: Record<Brand, string> = {
  neurogum: "#0e7490",
  "ancient-nutrition": "#4d7c0f",
  pethonesty: "#b45309",
  mitoq: "#7c2d12",
};

const LOAD_MS = 900;
const CYCLE_MS = 3500; // 900 loading + ~2600 hold

function FeedAudition() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [cast, setCast] = useState(false);
  const [cycle, setCycle] = useState(0);
  const swapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      setCast(true);
      return;
    }
    const first = setTimeout(() => setCast(true), LOAD_MS);
    const loop = setInterval(() => {
      setCast(false);
      setCycle((c) => c + 1);
      swapTimer.current = setTimeout(() => {
        setIndex((i) => (i + 1) % FEED_ADS.length);
        setCast(true);
      }, LOAD_MS);
    }, CYCLE_MS);
    return () => {
      clearTimeout(first);
      clearInterval(loop);
      if (swapTimer.current) clearTimeout(swapTimer.current);
    };
  }, [reducedMotion]);

  const ad = FEED_ADS[index];
  const brand = BRAND_META[ad.brand];

  return (
    <div
      className="hero-item flex h-[300px] flex-col items-center justify-center md:h-[360px]"
      role="img"
      aria-label="A recreated feed loading: the skeleton resolves and one sponsored creative is cast into the slot."
    >
      <div
        aria-hidden
        className="flex h-[calc(100%-26px)] w-[210px] flex-col overflow-hidden rounded-[36px] bg-[var(--color-surface)] px-3 pb-3 pt-4 shadow-[var(--shadow-card)] ring-1 ring-[var(--color-border)]"
      >
        {/* Feed chrome: identity row */}
        <div className="flex items-center gap-2">
          <div className="feed-shimmer h-6 w-6 shrink-0 rounded-full bg-[var(--color-surface-alt)]" />
          <div className="flex-1 space-y-1">
            <div className="feed-shimmer h-1.5 w-2/3 rounded bg-[var(--color-surface-alt)]" />
            <div className="feed-shimmer h-1.5 w-1/3 rounded bg-[var(--color-surface-alt)]" />
          </div>
        </div>

        {/* Feed chrome: stories row */}
        <div className="mt-2.5 flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="feed-shimmer h-8 w-8 rounded-full bg-[var(--color-surface-alt)] ring-1 ring-[var(--color-border-light)]"
            />
          ))}
        </div>

        {/* The sponsored slot */}
        <div className="mt-2.5 flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-[var(--color-border-light)]">
          <div className="flex items-center gap-1.5 px-2 py-1.5">
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
              style={{ background: BRAND_AVATAR_COLORS[ad.brand] }}
            >
              {brand.displayName.charAt(0)}
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-[9px] font-semibold text-[var(--color-text-primary)]">
                {brand.displayName}
              </span>
              <span className="text-[8px] text-[var(--color-text-secondary)]">
                Sponsored
              </span>
            </span>
          </div>

          {/* Media area: skeleton beneath, creative cast on top */}
          <div className="relative min-h-0 flex-1 overflow-hidden bg-[var(--color-surface-alt)]">
            <div className="feed-shimmer absolute inset-0 bg-[var(--color-surface-alt)]" />
            {FEED_ADS.map((item, i) => (
              <Image
                key={item.src}
                src={item.src}
                alt=""
                fill
                sizes="200px"
                priority={i === 0}
                className={
                  "object-cover object-top transition-[opacity,transform] duration-200 ease-out " +
                  (i === index && cast
                    ? "scale-100 opacity-100"
                    : "scale-[0.98] opacity-0")
                }
              />
            ))}
            <span
              className={
                "absolute inset-0 flex items-center justify-center transition-opacity duration-200 " +
                (ad.video && cast ? "opacity-100" : "opacity-0")
              }
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/55">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </div>

          {/* The 200ms tick */}
          <div className="flex items-center gap-1.5 px-2 py-1">
            <span className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-[var(--color-surface-alt)]">
              <span
                key={cycle}
                className="feed-tick absolute inset-y-0 left-0 rounded-full bg-[var(--color-meta-blue)]"
              />
            </span>
            <span className="font-mono text-[8px] leading-none text-[var(--color-text-secondary)]">
              200ms
            </span>
          </div>

          {/* Thin CTA bar */}
          <div className="flex items-center justify-between bg-[var(--color-surface-alt)] px-2 py-1.5">
            <span className="text-[8.5px] font-semibold text-[var(--color-text-primary)]">
              Learn more
            </span>
            <svg
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-[var(--color-text-secondary)]"
            >
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </div>
        </div>
      </div>

      <p className="mt-2 text-[12px] text-[var(--color-text-secondary)]">
        The feed loads. One ad gets cast.
      </p>
    </div>
  );
}

function DropdownStatic({ label, icon }: { label: string; icon?: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-10 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-[14px] font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]"
    >
      {icon}
      <span>{label}</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </button>
  );
}

function SearchSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function MonitorSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function InfoSvg() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mt-0.5 shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
