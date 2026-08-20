"use client";

import { usePathname, useRouter } from "next/navigation";
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
  /** omitted on the opening cards, which are centred and highlight nothing */
  selector?: string;
  title: string;
  body: string;
  /** the pulsing ring, used only where the visitor has to act to continue */
  pulse?: boolean;
  /** drop the step below this width, for targets that are hidden there */
  minWidth?: number;
  /** centre card, no spotlight. Used for the framing cards before the walk */
  center?: boolean;
};

const STEPS: Step[] = [
  {
    route: "/",
    center: true,
    title: "None of this is client work",
    body: "Self-initiated spec work on four real DTC brands: PetHonesty, NeuroGum, Ancient Nutrition, and MitoQ. I have never worked with any of them, and none of it has run on a live account.",
  },
  {
    route: "/",
    center: true,
    title: "Why it looks like the Ad Library",
    body: "Swiping what works is standard practice in DTC, so I swiped the Ad Library interface to show my own work. Have a look through the creative, the approach, and the strategic thinking behind it.",
  },
  {
    route: "/",
    selector: '[data-tour="search"]',
    title: "Start here",
    body: "The whole portfolio sits behind this search, exactly like the real thing. Hit Search and the work opens up.",
    pulse: true,
  },
  {
    route: "/adish-jain",
    selector: '[data-tour="grid"]',
    title: "The produced work",
    body: "Finished assets first: videos, then advertorials, then statics. These are the ones I actually made, start to finish.",
  },
  {
    route: "/adish-jain",
    selector: '[data-tour="hero-creative"] [data-tour="creative"]',
    title: "Play it right here",
    body: "Click any creative to play the video in place, or open a static full size. This one reframes caffeine by way of a receptor claim, and it is the sharpest thing in the rotation.",
  },
  {
    route: "/adish-jain",
    selector: '[data-tour-card="first"] [data-tour="details"]',
    title: "The reasoning behind it",
    body: "Every card opens into the part a real ad account never shows you: the angle, the ICP, why the hook stops the scroll, and the job the asset does inside the campaign.",
  },
  {
    route: "/adish-jain",
    selector: '[data-tour="filters"]',
    title: "Filter to what you care about",
    body: "Cut the whole library by brand, format, or awareness stage.",
  },
  {
    route: "/adish-jain",
    selector: '[data-tour="concepts"]',
    title: "Then the concept library",
    body: "Below the produced work sits everything written but never shot, grouped by brand. Over a hundred pieces, each with its own strategy attached. You never have to leave this page to read them.",
  },
  {
    route: "/adish-jain",
    selector: '[data-tour="scripts"]',
    title: "Full VSL scripts",
    body: "Each of these is a complete script with its angle, ICP, awareness stage, and hook rationale. Several carry alternate openings written for hook testing.",
  },
  {
    route: "/adish-jain",
    selector: '[data-tour="expansion"]',
    title: "And the expansion map",
    body: "Next-wave angles, researched and tiered by confidence, held for the following round of testing. This is the ammunition a brand still has left after the first wave runs.",
  },
  {
    route: "/adish-jain",
    selector: '[data-tour="nav"]',
    title: "Three rooms above",
    body: "Creative Approach is how the work gets made, closing on what I believe. Strategic Approach is every call I would make once the money moves. Case Studies is the full campaign behind each brand.",
    // those links collapse into the menu below the md breakpoint, so the step
    // would ring an empty strip
    minWidth: 768,
  },
  {
    route: "/adish-jain/about",
    selector: '[data-tour="projects"]',
    title: "And the things I build on the side",
    body: "Agents, skills, and systems I write for myself: a research system that refuses unsourced claims, an agent that builds advertorials, and the skill chain that produced the work you just scrolled through.",
  },
  {
    route: "/adish-jain/about",
    selector: '[data-tour="menu"]',
    title: "Jump anywhere",
    body: "This opens the deep navigator, straight into any brand's campaign room. That is everything. Have a look around.",
  },
];

// sessionStorage rather than localStorage: the walkthrough runs once per visit
// and again on the next one, because the spec disclosure in the first two cards
// is something every arrival needs to see, not just the first ever.
const KEY = "ajTour.v2";
const PAD = 8;

export function Tour() {
  const pathname = usePathname();
  const router = useRouter();
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
      sessionStorage.setItem(KEY, "done");
    } catch {
      // private mode, the tour simply runs again
    }
  }, []);

  // First visit only, after a beat so the hero's entrance animation lands first.
  useEffect(() => {
    let done = false;
    try {
      done = sessionStorage.getItem(KEY) === "done";
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
  const stepKey = step ? `${stepIndex}:${step.selector ?? "center"}` : "";

  // Measure the target, and keep the ring glued to it through scroll and resize.
  useEffect(() => {
    if (!step || !step.selector) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let tries = 0;
    let alive = true;

    function measure() {
      if (!alive) return;
      const el = document.querySelector(step!.selector!);
      if (!el) {
        // the grid mounts client-side, so poll briefly before giving up
        if (tries++ < 60) timer = setTimeout(measure, 100);
        return;
      }
      const r = el.getBoundingClientRect();
      if (scrolledFor.current !== stepIndex) {
        scrolledFor.current = stepIndex;
        const off = r.top < 140 || r.bottom > window.innerHeight - 220;
        if (off) {
          // Instant rather than smooth. A smooth scroll is skipped entirely in a
          // tab that is not compositing, which strands the ring off screen, and
          // a walkthrough reads better landing on its target anyway. The sticky
          // header and filter bar occupy the top ~140px, so tall targets are
          // pinned just below them instead of centred.
          const top = window.scrollY + r.top;
          const target =
            r.height > window.innerHeight - 220
              ? top - 150
              : top - Math.max(150, (window.innerHeight - r.height) / 2);
          window.scrollTo({ top: Math.max(0, target), behavior: "auto" });
        }
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

  // Hold the previous rect while the next target is being measured. The ring
  // then slides to its new position instead of blinking out, which matters on
  // steps that scroll a long way down the concept library.
  const rect = measured?.rect ?? null;
  if (!step) return null;
  // the very first spotlight step still waits, since there is nothing to hold
  if (!step.center && !rect) return null;

  const isLast = stepIndex === steps.length - 1;
  const mobile = vw < 640;

  // Card sits under the target when there is room, above when there is not.
  // Centred steps ignore all of this and sit in the middle of the screen.
  const cardW = step.center
    ? Math.min(vw - 24, 460)
    : mobile
      ? Math.min(vw - 24, 380)
      : 340;
  const below = rect ? rect.bottom + 190 < window.innerHeight : true;
  const top = rect
    ? below
      ? rect.bottom + PAD + 14
      : Math.max(12, rect.top - PAD - 14 - 186)
    : 0;
  let left = rect ? rect.left + rect.width / 2 - cardW / 2 : 0;
  left = Math.max(12, Math.min(left, vw - cardW - 12));

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-live="polite">
      {/* Dimmer. Cut out around the target on spotlight steps, flat on the
          framing cards. Never captures clicks either way. */}
      {rect && !step.center ? (
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
      ) : (
        <div
          aria-hidden
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.62)" }}
        />
      )}

      {/* The card */}
      <div
        role="dialog"
        aria-modal="false"
        aria-label={`Tour step ${stepIndex + 1} of ${steps.length}: ${step.title}`}
        className={
          "pointer-events-auto rounded-lg bg-[var(--color-surface)] shadow-[var(--shadow-modal)] " +
          (step.center ? "p-6" : "p-4")
        }
        style={
          step.center
            ? {
                position: "fixed",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: cardW,
              }
            : mobile
              ? { position: "fixed", left: 12, right: 12, bottom: 12, width: "auto" }
              : { position: "fixed", left, top, width: cardW }
        }
      >
        <div className="flex items-start justify-between gap-3">
          <p
            className={
              "font-bold leading-snug text-[var(--color-text-primary)] " +
              (step.center ? "text-[19px]" : "text-[15px]")
            }
          >
            {step.title}
          </p>
          <span className="shrink-0 font-mono text-[11px] tabular-nums text-[var(--color-text-tertiary)]">
            {stepIndex + 1}/{steps.length}
          </span>
        </div>

        <p
          className={
            "mt-2 leading-relaxed text-[var(--color-text-secondary)] " +
            (step.center ? "text-[14.5px]" : "text-[13.5px]")
          }
        >
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
              onClick={() => {
                if (isLast) return finish();
                const next = steps[stepIndex + 1];
                if (next && next.route !== pathname) router.push(next.route);
                setI(stepIndex + 1);
              }}
              className="rounded-md bg-[var(--color-meta-blue)] px-3.5 py-1.5 text-[13px] font-semibold text-white hover:bg-[var(--color-meta-blue-hover)]"
            >
              {isLast ? "Done" : step.center ? "Got it" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
