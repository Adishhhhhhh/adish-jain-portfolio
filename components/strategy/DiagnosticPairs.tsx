// Four reads, not the full table. The full diagnostic table is reference
// material and skims as a data dump; four cards skim as judgment.
//
// Each card is a three-beat flow: what shows up, what it localises, what moves.

import { PAIRS, PAIRS_INTRO } from "@/content/calls";

export function DiagnosticPairs() {
  return (
    <section
      id="pairs"
      className="scroll-mt-[150px] overflow-hidden rounded-lg border border-[var(--color-border-light)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
    >
      <header className="border-b border-[var(--color-divider)] px-5 py-4">
        <h3 className="text-[19px] font-bold leading-snug tracking-tight text-[var(--color-text-primary)]">
          {PAIRS_INTRO}
        </h3>
        <p className="mt-1.5 text-[12.5px] text-[var(--color-text-secondary)]">
          Single metrics rarely diagnose anything. Every read below is a pair.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-px bg-[var(--color-divider)] sm:grid-cols-2">
        {PAIRS.map((p) => (
          <div key={p.seen} className="flex flex-col gap-2.5 bg-[var(--color-surface)] p-5">
            <p className="text-[14.5px] font-bold leading-snug text-[var(--color-meta-blue)]">
              {p.seen}
            </p>

            <div className="flex gap-2.5">
              <Rail />
              <div className="flex flex-col gap-2.5">
                <div>
                  <Label>Means</Label>
                  <p className="mt-0.5 text-[13.5px] leading-relaxed text-[var(--color-text-secondary)]">
                    {p.means}
                  </p>
                </div>
                <div>
                  <Label>Do</Label>
                  <p className="mt-0.5 text-[13.5px] leading-relaxed text-[var(--color-text-primary)]">
                    {p.doThis}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Rail() {
  return (
    <span
      aria-hidden
      className="mt-1 w-0.5 shrink-0 rounded-full bg-[var(--color-divider)]"
    />
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10.5px] font-bold uppercase tracking-[0.07em] text-[var(--color-text-tertiary)]">
      {children}
    </span>
  );
}
