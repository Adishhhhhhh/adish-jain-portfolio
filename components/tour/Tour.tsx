"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * The first-visit walkthrough.
 *
 * The problem it solves is specific: people land on the hero and do not realise
 * the portfolio lives behind the search button, so they bounce off the front
 * door. Step one puts a pulsing ring on that button.
 *
 * Two rules it holds to:
 * - The dimmer never captures clicks. The visitor can ignore the tour entirely
 *   and click anything at any point, which is the difference between a guide
 *   and a hostage situation.
 * - It runs once. Finishing or skipping writes to localStorage and it never
 *   reappears, except from the Replay entry in the menu.
 *
 * It spans two routes. When the pathname changes the tour advances to the first
 * step belonging to the new page, so clicking Search moves it along naturally.
 */

type Step = {
  route: string;
  selector: string;
  title: string;
  body: string;
  /** the pulsing ring, used only where the visitor has to act to continue */
  pulse?: boolean;
  /** drop the step below this width, for targets that are hidden there */
  minWidth?: number;
};

const STEPS: Step[] = [
  {
    route: "/",
    selector: '[data-tour="search"]',
    title: "Start here",
    body: "The whole portfolio sits behind this search, the same way the real Ad Library does. Hit Search and the work opens up.",
    pulse: true,
  },
  {
    route: "/adish-jain",
    selector: '[data-tour="grid"]',
    title: "The work",
    body: "Every produced asset, laid out as ad results. Videos first, then advertorials, then statics.",
  },
  {
    route: "/adish-jain",
    selector: '[data-tour-card="first"] [data-tour="creative"]',
    title: "Play it right here",
    body: "Click any creative to play the video or open a static full size. No detour needed.",
  },
  {
    route: "/adish-jain",
    selector: '[data-tour-card="first"] [data-tour="details"]',
    title: "The reasoning behind it",
    body: "This is the part a real ad account never shows you: the angle, the ICP, why the hook works, and the job the asset does in the campaign.",
  },
  {
    route: "/adish-jain",
    selector: '[data-tour="filters"]',
    title: "Filter to what you care about",
    body: "Cut by brand, format, or awareness stage. Filtering also reveals the concept work sitting behind the produced assets.",
  },
  {
    route: "/adish-jain",
    selector: '[data-tour="nav"]',
    title: "Three rooms above",
    body: "Creative Approach is how the work gets made, and it closes on what I believe. Strategic Approach is every call I make once the money moves. Case Studies is the full campaign behind each brand.",
    // those links collapse into the menu below the md breakpoint, so the step
    // would ring an empty strip
    minWidth: 768,
  },
  {
    route: "/adish-jain",
    selector: '[data-tour="menu"]',
    title: "Jump anywhere",
    body: "This opens the deep navigator, straight into any brand's campaign room. That is it. Have a look around.",
  },
];

const KEY = "ajTour.v1";
const PAD = 8;

export function Tour() {
  const pathname = usePathname();
  const [armed, setArmed] = useState(false);
  const [i, setI] = useState(0);
  // keyed so a stale measurement from the previous step never paints
  const [measured, setMeasured] = useState<{ key: string; rect: DOMRect } | null>(
    null,
  );
  const [vw, setVw] = useState(1024);
  const scrolledFor = useRef(-1);

  const finish = useCallback(() => {
    setArmed(false);
    try {
      localStorage.setItem(KEY, "done");
    } catch {
      // private mode, the tour simply runs again next visit
    }
  }, []);

  // First visit only, after a beat so the hero's entrance animation lands first.
  useEffect(() => {
    let done = false;
    try {
      done = localStorage.getItem(KEY) === "done";
    } catch {
      done = false;
    }
    if (done) return;
    const t = setTimeout(() => setArmed(true), 1400);
    return () => clearTimeout(t);
  }, []);

  // Replay, dispatched from the nav menu.
  useEffect(() => {
    function onStart() {
      scrolledFor.current = -1;
      setI(0);
      setArmed(true);
    }
    window.addEventListener("aj:tour:start", onStart);
    return () => window.removeEventListener("aj:tour:start", onStart);
  }, []);

  useEffect(() => {
    function onResize() {
      setVw(window.innerWidth);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Steps whose target is hidden at this width drop out entirely, so the
  // counter never promises a step the visitor cannot see.
  const steps = STEPS.filter((s) => !s.minWidth || vw >= s.minWidth);

  // Follow the visitor across routes, derived during render so no effect has to
  // write state. If the stored index belongs to another page, slide forward to
  // the first step that belongs to this one.
  const stepIndex = (() => {
    if (!armed) return -1;
    if (steps[i]?.route === pathname) return i;
    return steps.findIndex((s, idx) => idx >= i && s.route === pathname);
  })();

  const step = stepIndex >= 0 ? steps[stepIndex] : undefined;
  const stepKey = step ? `${stepIndex}:${step.selector}` : "";

  // Measure the target, and keep the ring glued to it through scroll and resize.
  useEffect(() => {
    if (!step) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let tries = 0;
    let alive = true;

    function measure() {
      if (!alive) return;
      const el = document.querySelector(step!.selector);
      if (!el) {
        // the grid mounts client-side, so poll briefly before giving up
        if (tries++ < 60) timer = setTimeout(measure, 100);
        return;
      }
      const r = el.getBoundingClientRect();
      if (scrolledFor.current !== stepIndex) {
        scrolledFor.current = stepIndex;
        const off = r.top < 120 || r.bottom > window.innerHeight - 220;
        if (off) el.scrollIntoView({ block: "center", behavior: "smooth" });
      }
      setMeasured({ key: stepKey, rect: el.getBoundingClientRect() });
    }

    // Deferred out of the effect body so layout has settled and no render
    // cascades off a synchronous write. Timers rather than rAF, because a
    // backgrounded tab never fires rAF and the tour would sit invisible until
    // the visitor came back to it.
    timer = setTimeout(measure, 0);
    window.addEventListener("scroll", measure, true);
    window.addEventListener("resize", measure);
    return () => {
      alive = false;
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", measure, true);
      window.removeEventListener("resize", measure);
    };
  }, [step, stepIndex, stepKey]);

  // Escape closes it, arrows move through it.
  useEffect(() => {
    if (!armed) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") finish();
      if (e.key === "ArrowRight")
        setI(Math.min(stepIndex + 1, steps.length - 1));
      if (e.key === "ArrowLeft") setI(Math.max(stepIndex - 1, 0));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [armed, finish, stepIndex, steps.length]);

  const rect = measured?.key === stepKey ? measured.rect : null;
  if (!step || !rect) return null;

  const isLast = stepIndex === steps.length - 1;
  const mobile = vw < 640;

  // Card sits under the target when there is room, above when there is not.
  const cardW = mobile ? Math.min(vw - 24, 380) : 340;
  const below = rect.bottom + 190 < window.innerHeight;
  const top = below ? rect.bottom + PAD + 14 : Math.max(12, rect.top - PAD - 14 - 186);
  let left = rect.left + rect.width / 2 - cardW / 2;
  left = Math.max(12, Math.min(left, vw - cardW - 12));

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-live="polite">
      {/* Dimmer with a cutout. Never captures clicks. */}
      <div
        aria-hidden
        className={step.pulse ? "aj-tour-pulse" : undefined}
        style={{
          position: "fixed",
          left: rect.left - PAD,
          top: rect.top - PAD,
          width: rect.width + PAD * 2,
          height: rect.height + PAD * 2,
          borderRadius: 12,
          boxShadow: "0 0 0 9999px rgba(0,0,0,0.55)",
          outline: "2px solid #1877F2",
          outlineOffset: 0,
          transition: "all 220ms cubic-bezier(0.23,1,0.32,1)",
        }}
      />

      {/* The card */}
      <div
        role="dialog"
        aria-modal="false"
        aria-label={`Tour step ${stepIndex + 1} of ${steps.length}: ${step.title}`}
        className="pointer-events-auto rounded-lg bg-[var(--color-surface)] p-4 shadow-[var(--shadow-modal)]"
        style={
          mobile
            ? { position: "fixed", left: 12, right: 12, bottom: 12, width: "auto" }
            : { position: "fixed", left, top, width: cardW }
        }
      >
        <div className="flex items-start justify-between gap-3">
          <p className="text-[15px] font-bold leading-snug text-[var(--color-text-primary)]">
            {step.title}
          </p>
          <span className="shrink-0 font-mono text-[11px] tabular-nums text-[var(--color-text-tertiary)]">
            {stepIndex + 1}/{steps.length}
          </span>
        </div>

        <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--color-text-secondary)]">
          {step.body}
        </p>

        {/* progress */}
        <div className="mt-3 flex gap-1" aria-hidden>
          {steps.map((_, idx) => (
            <span
              key={idx}
              className={
                "h-1 flex-1 rounded-full " +
                (idx <= stepIndex
                  ? "bg-[var(--color-meta-blue)]"
                  : "bg-[var(--color-divider)]")
              }
            />
          ))}
        </div>

        <div className="mt-3.5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={finish}
            className="text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:underline"
          >
            Skip tour
          </button>

          <div className="flex items-center gap-2">
            {stepIndex > 0 && (
              <button
                type="button"
                onClick={() => setI(Math.max(stepIndex - 1, 0))}
                className="rounded-md px-3 py-1.5 text-[13px] font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)]"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={() => (isLast ? finish() : setI(stepIndex + 1))}
              className="rounded-md bg-[var(--color-meta-blue)] px-3.5 py-1.5 text-[13px] font-semibold text-white hover:bg-[var(--color-meta-blue-hover)]"
            >
              {isLast ? "Done" : stepIndex === 0 ? "Show me" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
