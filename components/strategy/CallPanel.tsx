// The workhorse. Obvious call on the left, the call on the right, mechanism as
// one line underneath. Every exhibit in the section uses this exact shape, so
// the reader learns the grammar once and skims the rest.
//
// The left panel is deliberately not styled as "wrong". It is the reasonable
// move, which is what makes the pairing land.

import type { Call } from "@/content/calls";
import { SequenceGradient } from "./diagrams/SequenceGradient";
import { HeadroomChart } from "./diagrams/HeadroomChart";
import { MarginSplit } from "./diagrams/MarginSplit";
import { ContainerCollapse } from "./diagrams/ContainerCollapse";
import { AngleGates } from "./diagrams/AngleGates";

const DIAGRAMS = {
  sequence: SequenceGradient,
  headroom: HeadroomChart,
  margin: MarginSplit,
  container: ContainerCollapse,
  gates: AngleGates,
} as const;

export function CallPanel({ call }: { call: Call }) {
  const Diagram = call.diagram ? DIAGRAMS[call.diagram] : null;

  return (
    <section
      id={call.id}
      className="scroll-mt-[150px] overflow-hidden rounded-lg border border-[var(--color-border-light)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
    >
      {/* Title block */}
      <header className="border-b border-[var(--color-divider)] px-5 py-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[13px] font-bold tabular-nums text-[var(--color-meta-blue)]">
            {call.n}
          </span>
          <h3 className="text-[19px] font-bold leading-snug tracking-tight text-[var(--color-text-primary)]">
            {call.title}
          </h3>
        </div>
        {call.appliedTo && (
          <p className="mt-1.5 pl-8 text-[12px] text-[var(--color-text-secondary)]">
            <span className="font-semibold text-[var(--color-text-primary)]">
              Argued on
            </span>{" "}
            {call.appliedTo}
          </p>
        )}
      </header>

      {Diagram && (
        <div className="border-b border-[var(--color-divider)] bg-[var(--color-surface-alt)] px-4 py-4">
          <Diagram />
        </div>
      )}

      {/* The pair */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b border-[var(--color-divider)] px-5 py-4 md:border-b-0 md:border-r">
          <PanelLabel tone="obvious">The obvious call</PanelLabel>
          <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
            {call.obvious}
          </p>
        </div>
        <div className="bg-[#f5f9ff] px-5 py-4">
          <PanelLabel tone="mine">The call I&apos;d make</PanelLabel>
          <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-primary)]">
            {call.mine}
          </p>
        </div>
      </div>

      {/* Mechanism */}
      <div className="flex items-start gap-2.5 border-t border-[var(--color-divider)] bg-[var(--color-surface-alt)] px-5 py-3">
        <GearSvg />
        <p className="text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
          <span className="font-semibold text-[var(--color-text-primary)]">
            Why.
          </span>{" "}
          {call.mechanism}
        </p>
      </div>
    </section>
  );
}

function PanelLabel({
  tone,
  children,
}: {
  tone: "obvious" | "mine";
  children: React.ReactNode;
}) {
  const style =
    tone === "obvious"
      ? "text-[#b26a00] before:bg-[#f5a623]"
      : "text-[var(--color-meta-blue)] before:bg-[var(--color-meta-blue)]";
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.07em] before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:content-[''] ${style}`}
    >
      {children}
    </span>
  );
}

function GearSvg() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mt-[2px] shrink-0 text-[var(--color-text-tertiary)]"
      aria-hidden
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
