// One diagnosis, run top down, stopping at the first number that is off.
// The skipped steps are drawn deliberately: the discipline is visible in the
// checks that never ran.

import {
  TRIAGE,
  TRIAGE_CLOSE,
  TRIAGE_LEAD,
  TRIAGE_TITLE,
  type TriageStep,
} from "@/content/strategy-supports";

const STATE = {
  pass: {
    dot: "bg-[var(--color-meta-blue)] text-white border-[var(--color-meta-blue)]",
    rail: "bg-[var(--color-meta-blue)]",
    badge: "Continue",
    badgeClass: "bg-[#e7f0fe] text-[var(--color-meta-blue)]",
    body: "text-[var(--color-text-primary)]",
  },
  stop: {
    dot: "bg-[#f5a623] text-white border-[#f5a623]",
    rail: "bg-[#f5a623]",
    badge: "Stop here",
    badgeClass: "bg-[#fdf3e3] text-[#b26a00]",
    body: "text-[var(--color-text-primary)]",
  },
  skipped: {
    dot: "bg-[var(--color-surface)] text-[var(--color-text-tertiary)] border-[var(--color-border)] border-dashed",
    rail: "bg-[var(--color-divider)]",
    badge: "Never ran",
    badgeClass: "bg-[var(--color-surface-alt)] text-[var(--color-text-tertiary)]",
    body: "text-[var(--color-text-tertiary)]",
  },
} as const;

export function TriageLadder() {
  return (
    <section
      id="triage"
      className="scroll-mt-[150px] overflow-hidden rounded-lg border border-[var(--color-border-light)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
    >
      <header className="border-b border-[var(--color-divider)] px-5 py-4">
        <h3 className="text-[19px] font-bold leading-snug tracking-tight text-[var(--color-text-primary)]">
          {TRIAGE_TITLE}
        </h3>
        <p className="mt-1.5 max-w-[68ch] text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
          {TRIAGE_LEAD}
        </p>
      </header>

      <ol className="px-5 py-5">
        {TRIAGE.map((s, i) => (
          <Step key={s.n} step={s} last={i === TRIAGE.length - 1} />
        ))}
      </ol>

      <div className="border-t border-[var(--color-divider)] bg-[#f5f9ff] px-5 py-4">
        <p className="max-w-[70ch] text-[13.5px] leading-relaxed text-[var(--color-text-primary)]">
          <span className="font-bold">The conclusion.</span> {TRIAGE_CLOSE}
        </p>
      </div>
    </section>
  );
}

function Step({ step, last }: { step: TriageStep; last: boolean }) {
  const s = STATE[step.state];
  return (
    <li className="flex gap-4">
      {/* rail */}
      <div className="flex shrink-0 flex-col items-center">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full border-2 font-mono text-[11px] font-bold tabular-nums ${s.dot}`}
        >
          {step.n}
        </span>
        {!last && <span className={`w-0.5 flex-1 ${s.rail}`} />}
      </div>

      {/* body */}
      <div className={`pb-6 ${last ? "pb-0" : ""}`}>
        <div className="flex flex-wrap items-center gap-2">
          <p className={`text-[14.5px] font-bold leading-snug ${s.body}`}>
            {step.question}
          </p>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.06em] ${s.badgeClass}`}
          >
            {s.badge}
          </span>
        </div>

        {step.state !== "skipped" && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {step.reading.map((r) => (
              <span
                key={r}
                className="rounded bg-[var(--color-surface-alt)] px-2 py-1 font-mono text-[11.5px] text-[var(--color-text-primary)]"
              >
                {r}
              </span>
            ))}
          </div>
        )}

        <p
          className={`mt-2 max-w-[66ch] text-[13.5px] leading-relaxed ${
            step.state === "skipped"
              ? "text-[var(--color-text-tertiary)]"
              : "text-[var(--color-text-secondary)]"
          }`}
        >
          {step.verdict}
        </p>
      </div>
    </li>
  );
}
