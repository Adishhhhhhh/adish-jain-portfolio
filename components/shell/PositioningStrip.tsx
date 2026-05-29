// Distributed-argument copy that sits between the advertiser header and result count.
// From PLAN.md §Screen 2 (the positioning strip).
import { SCREEN_2 } from "@/content/copy";

export function PositioningStrip() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-4">
      <div className="rounded-md border-l-[3px] border-[var(--color-meta-blue)] bg-[var(--color-surface-alt)] px-4 py-3">
        <p className="text-[14px] font-semibold leading-snug text-[var(--color-text-primary)]">
          {SCREEN_2.positioningOne}
        </p>
        <p className="mt-1 text-[14px] leading-snug text-[var(--color-text-secondary)]">
          {SCREEN_2.positioningTwo}
        </p>
      </div>
    </div>
  );
}
