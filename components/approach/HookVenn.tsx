// The zoom-in on the hook petal, opened from a disclosure under the main venn.
//
// The long list of things a great hook needs (relevance, curiosity, novelty,
// specificity, credibility, context, a problem or desire) resolves cleanly once
// you separate two questions that get tangled together:
//
//   WHAT IT IS BUILT FROM  → three carriers: visual, copy, audio. The venn.
//   WHAT IT MUST BE        → five tests, which every carrier is graded against.
//
// That split is why the diagram is small. Three circles, then a gate.

const CX = 300;
const CY = 200;
const RING_R = 60;
const CIRCLE_R = 105;

const CARRIERS = [
  { angle: -90, name: "Visual", sub: "the stop", note: "First frame, motion, the thing the eye catches before a word is read." },
  { angle: 30, name: "Copy", sub: "the claim", note: "The sentence on screen. Carries the curiosity gap and the specificity." },
  { angle: 150, name: "Audio", sub: "the voice", note: "First words spoken, tone, and the pattern break in the sound itself." },
];

const TESTS = [
  { name: "Contextual", q: "Does it fit where it appears?" },
  { name: "Relevant", q: "Is it about them, right now?" },
  { name: "Novel", q: "Have they already scrolled past this?" },
  { name: "Specific", q: "Could a competitor run it unchanged?" },
  { name: "Credible", q: "Does the claim survive the next line?" },
];

const rad = (d: number) => (d * Math.PI) / 180;
const at = (deg: number, r: number) => ({
  x: CX + r * Math.cos(rad(deg)),
  y: CY + r * Math.sin(rad(deg)),
});

export function HookVenn() {
  return (
    <details className="group mt-3 rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3">
        <span className="flex items-center gap-2.5">
          <svg
            className="shrink-0 text-[var(--color-meta-blue)] transition-transform group-open:rotate-90"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            aria-hidden
          >
            <polyline points="9 6 15 12 9 18" />
          </svg>
          <span className="text-[14.5px] font-semibold text-[var(--color-text-primary)]">
            Zoom in on the hook constraint
          </span>
        </span>
        <span className="text-[12px] text-[var(--color-text-secondary)]">
          three carriers, five tests
        </span>
      </summary>

      <div className="border-t border-[var(--color-border-light)] px-4 pb-4 pt-4">
        <p className="mb-4 max-w-[70ch] text-[13.5px] leading-relaxed text-[var(--color-text-secondary)]">
          A hook has more requirements than any other component, which makes the
          list feel unmanageable. It collapses once the carriers are separated
          from the tests. There are only three ways a hook can reach anyone, and
          whichever ones an asset uses get graded against the same five
          questions.
        </p>

        <figure className="rounded-md bg-[var(--color-surface-alt)] p-3">
          <div className="overflow-x-auto">
            <svg
              viewBox="0 0 600 400"
              role="img"
              aria-label="Three overlapping circles: visual, copy and audio. A hook that lands sits where they overlap. A static uses visual and copy; a video can use all three."
              className="mx-auto h-auto w-full min-w-[380px] max-w-[460px]"
            >
              {CARRIERS.map((c) => {
                const p = at(c.angle, RING_R);
                return (
                  <circle
                    key={c.name}
                    cx={p.x}
                    cy={p.y}
                    r={CIRCLE_R}
                    fill="#1877F2"
                    fillOpacity="0.09"
                    stroke="#1877F2"
                    strokeOpacity="0.4"
                    strokeWidth="1.2"
                  />
                );
              })}

              {CARRIERS.map((c) => {
                const l = at(c.angle, RING_R + 52);
                return (
                  <g key={`l-${c.name}`} textAnchor="middle">
                    <text x={l.x} y={l.y} fontSize="14" fontWeight="700" fill="#050505">
                      {c.name}
                    </text>
                    <text x={l.x} y={l.y + 15} fontSize="10.5" fill="#65676b">
                      {c.sub}
                    </text>
                  </g>
                );
              })}

              <text x={CX} y={CY - 3} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1877F2">
                a hook that
              </text>
              <text x={CX} y={CY + 12} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1877F2">
                lands
              </text>

              <text x={CX} y={382} textAnchor="middle" fontSize="11" fill="#8a8d91">
                A static reaches through two. A video can use all three, and usually wastes one.
              </text>
            </svg>
          </div>
        </figure>

        {/* the gate every carrier is graded against */}
        <div className="mt-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.07em] text-[var(--color-text-tertiary)]">
            Then each one clears the same five
          </p>
          <ul className="mt-2 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-[var(--color-border-light)] bg-[var(--color-divider)] sm:grid-cols-2 lg:grid-cols-3">
            {TESTS.map((t) => (
              <li key={t.name} className="bg-[var(--color-surface)] px-3.5 py-2.5">
                <p className="text-[13px] font-bold text-[var(--color-meta-blue)]">
                  {t.name}
                </p>
                <p className="mt-0.5 text-[12px] leading-snug text-[var(--color-text-secondary)]">
                  {t.q}
                </p>
              </li>
            ))}
            <li className="bg-[var(--color-surface-alt)] px-3.5 py-2.5">
              <p className="text-[12px] leading-snug text-[var(--color-text-secondary)]">
                A hook failing any one of these is rewritten, never re-shot.
              </p>
            </li>
          </ul>
        </div>

        <p className="mt-3 max-w-[70ch] text-[12.5px] leading-relaxed text-[var(--color-text-secondary)]">
          Underneath all five sits the same requirement: the hook has to name a
          problem the viewer already has or a desire they already hold. Curiosity
          with nothing behind it stops the scroll and loses the click.
        </p>
      </div>
    </details>
  );
}
