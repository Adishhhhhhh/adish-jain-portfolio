"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SCREEN_1, SITE } from "@/content/copy";

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
          <h1 className="text-[40px] font-bold leading-[1.12] tracking-tight text-[var(--color-text-primary)]">
            {SCREEN_1.h1Top}
            <br />
            {SCREEN_1.h1Bottom}
          </h1>
          <p className="mt-4 text-[15px] leading-[1.46] text-[var(--color-text-primary)]">
            What you can see, openly, before any of his work runs:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] text-[var(--color-text-primary)]">
            {SCREEN_1.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <p className="mt-4 text-[15px] leading-[1.46] text-[var(--color-text-primary)]">
            {SCREEN_1.sub}
          </p>

          <p className="mt-4 text-[15px] text-[var(--color-text-primary)]">
            To find his work, search for the strategist.
          </p>

          <div className="mt-6 flex items-start gap-2 rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-3 text-[13px] text-[var(--color-text-primary)]">
            <InfoSvg />
            <p>{SCREEN_1.specDisclosure}</p>
          </div>
        </div>

        <div className="hero-item relative h-[300px] overflow-hidden rounded-md bg-[var(--color-surface-alt)] md:h-[360px]">
          <Image
            src="/brand/Upwork Dp.jpeg"
            alt="Adish Jain"
            fill
            sizes="(max-width: 768px) 100vw, 460px"
            className="object-cover object-center"
            priority
          />
        </div>
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
            className="flex h-10 items-center justify-center rounded-md bg-[var(--color-meta-blue)] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-meta-blue-hover)]"
          >
            Search
          </button>
        </form>

        <p className="mt-3 max-w-[620px] text-[13px] leading-[1.5] text-[var(--color-text-secondary)]">
          {SCREEN_1.attentionThesis}
        </p>
      </section>
    </motion.main>
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
