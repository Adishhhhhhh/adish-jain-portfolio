// Two questions that turn up on applications, answered short. The hypothesis
// format is rendered as a fill-in-the-blank artifact rather than described,
// because showing the sentence you actually write is the proof you write it.

import { ASKED, ASKED_TITLE, HYPOTHESIS_TEMPLATE } from "@/content/strategy-supports";

export function AskedBlock() {
  return (
    <section
      id="asked"
      className="scroll-mt-[150px] overflow-hidden rounded-lg border border-[var(--color-border-light)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
    >
      <header className="border-b border-[var(--color-divider)] px-5 py-4">
        <h3 className="text-[19px] font-bold leading-snug tracking-tight text-[var(--color-text-primary)]">
          {ASKED_TITLE}
        </h3>
      </header>

      {ASKED.map((a, i) => (
        <div
          key={a.q}
          className={i === 0 ? "px-5 py-5" : "border-t border-[var(--color-divider)] px-5 py-5"}
        >
          <p className="text-[15px] font-bold leading-snug text-[var(--color-meta-blue)]">
            {a.q}
          </p>
          <p className="mt-2 max-w-[70ch] text-[13.5px] leading-relaxed text-[var(--color-text-primary)]">
            {a.a}
          </p>

          {a.bullets && (
            <ul className="mt-3 flex flex-col gap-1.5">
              {a.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-2 text-[13.5px] leading-relaxed text-[var(--color-text-secondary)]"
                >
                  <span
                    aria-hidden
                    className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-border)]"
                  />
                  {b}
                </li>
              ))}
            </ul>
          )}

          {/* the hypothesis artifact rides with the testing answer */}
          {i === 1 && <HypothesisCard />}
        </div>
      ))}
    </section>
  );
}

function HypothesisCard() {
  return (
    <figure className="mt-4 rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-4">
      <figcaption className="mb-3 text-[10.5px] font-bold uppercase tracking-[0.07em] text-[var(--color-text-tertiary)]">
        The sentence written before every batch
      </figcaption>
      <p className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-[14px] leading-relaxed text-[var(--color-text-primary)]">
        {HYPOTHESIS_TEMPLATE.map((part) => (
          <span key={part.blank} className="inline-flex flex-wrap items-center gap-1.5">
            <span>{part.fixed}</span>
            <span className="rounded border border-dashed border-[var(--color-meta-blue)] bg-[#f5f9ff] px-2 py-0.5 font-mono text-[12px] text-[var(--color-meta-blue)]">
              {part.blank}
            </span>
          </span>
        ))}
        <span>.</span>
      </p>
    </figure>
  );
}
