"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Hotspot } from "@/content/teardowns";

/**
 * The one signature interaction. PLAN.md §7.
 *
 * Hotspots are absolute-positioned over the video frame. When the user clicks
 * one, the video seeks to that timestamp, pauses, and the side panel reveals
 * the mono analyst voice explanation.
 *
 * Reduced motion: hotspots render statically with all explanations expanded
 * inline below the video.
 */
export function AnnotatedTeardown({
  videoSrc,
  poster,
  hotspots,
}: {
  videoSrc: string;
  poster?: string;
  hotspots: Hotspot[];
}) {
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeId, setActiveId] = useState<string | null>(hotspots[0]?.id ?? null);

  const active = hotspots.find((h) => h.id === activeId) ?? null;

  function jumpTo(h: Hotspot) {
    setActiveId(h.id);
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = h.time;
    v.pause();
  }

  if (reducedMotion) {
    return <StaticFallback videoSrc={videoSrc} poster={poster} hotspots={hotspots} />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_1fr]">
      <div className="relative overflow-hidden rounded-md bg-black">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          className="aspect-square w-full bg-black object-cover md:aspect-[4/5]"
        />

        {/* Hotspot overlay */}
        <div className="pointer-events-none absolute inset-0">
          {hotspots.map((h) => (
            <motion.button
              type="button"
              key={h.id}
              onClick={() => jumpTo(h)}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.25 }}
              className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              aria-label={`Hotspot: ${h.title}`}
            >
              <span
                className={
                  "block h-6 w-6 rounded-full border-2 transition-all " +
                  (activeId === h.id
                    ? "border-white bg-[var(--color-meta-blue)] shadow-[0_0_0_4px_rgba(24,119,242,0.35)]"
                    : "border-white bg-[var(--color-meta-blue)]/80 hover:scale-110")
                }
              />
              <span className="sr-only">{h.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Time badge for the active hotspot */}
        {active && (
          <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 font-mono text-[12px] text-white">
            {formatTime(active.time)} · {active.label}
          </div>
        )}
      </div>

      {/* Mono analyst voice side panel */}
      <aside className="flex flex-col gap-3 font-mono">
        <p className="text-[11px] uppercase tracking-wide text-[var(--color-text-secondary)]">
          Annotated Teardown · click a hotspot to seek
        </p>
        {active ? (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-4"
          >
            <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-meta-blue)]">
              {formatTime(active.time)} · {active.label}
            </p>
            <p className="mt-2 text-[15px] font-semibold leading-snug text-[var(--color-text-primary)]">
              {active.title}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-primary)]">
              {active.body}
            </p>
          </motion.div>
        ) : (
          <p className="text-[13px] text-[var(--color-text-secondary)]">
            Click a marker to see the strategic choice at that frame.
          </p>
        )}

        <ol className="mt-2 flex flex-col gap-1 text-[12px]">
          {hotspots.map((h, i) => (
            <li key={h.id}>
              <button
                type="button"
                onClick={() => jumpTo(h)}
                className={
                  "flex w-full items-center gap-3 rounded px-2 py-1.5 text-left transition-colors " +
                  (activeId === h.id
                    ? "bg-[var(--color-surface-alt)] font-semibold text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-alt)]")
                }
              >
                <span className="font-mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-mono">{formatTime(h.time)}</span>
                <span>{h.label}</span>
              </button>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  );
}

function StaticFallback({
  videoSrc,
  poster,
  hotspots,
}: {
  videoSrc: string;
  poster?: string;
  hotspots: Hotspot[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <video
        src={videoSrc}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="aspect-square w-full rounded-md bg-black object-cover"
      />
      <ol className="flex flex-col gap-3 font-mono">
        {hotspots.map((h, i) => (
          <li
            key={h.id}
            className="rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-4"
          >
            <p className="text-[12px] uppercase tracking-wide text-[var(--color-meta-blue)]">
              {String(i + 1).padStart(2, "0")} · {formatTime(h.time)} · {h.label}
            </p>
            <p className="mt-2 text-[15px] font-semibold leading-snug text-[var(--color-text-primary)]">
              {h.title}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-primary)]">
              {h.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
