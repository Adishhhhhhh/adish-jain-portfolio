// The AI ÷ human division of labor as a loop. Blue pills are machine steps,
// white pills are judgment steps; the return path is the compounding edge:
// every edit teaches the next generation pass.

const BLUE = "#1877F2";
const BLUE_FILL = "#e7f3ff";
const GRAY_STROKE = "#ced0d4";

const STEPS: { label: string; ai: boolean }[] = [
  { label: "AI generates volume", ai: true },
  { label: "I refine for strategy", ai: false },
  { label: "AI iterates on feedback", ai: true },
  { label: "I approve final assets", ai: false },
];

const W = 160;
const H = 40;
const Y = 45;
const XS = [25, 215, 405, 595];

export function WorkflowLoop() {
  return (
    <figure className="rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)]">
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 780 170"
          role="img"
          aria-label="The AI workflow loop: AI generates volume, I refine for strategy, AI iterates on feedback, I approve final assets, and every edit feeds back into the next generation pass."
          className="h-auto w-full min-w-[680px]"
        >
          {/* Forward arrows */}
          {XS.slice(0, -1).map((x, i) => {
            const from = x + W;
            const to = XS[i + 1];
            const y = Y + H / 2;
            return (
              <g key={`arrow-${i}`} stroke="#65676b" strokeWidth="1.4">
                <line x1={from + 3} y1={y} x2={to - 8} y2={y} />
                <polygon
                  points={`${to - 3},${y} ${to - 10},${y - 4} ${to - 10},${y + 4}`}
                  fill="#65676b"
                  stroke="none"
                />
              </g>
            );
          })}

          {/* Return loop: last pill back to the first */}
          <path
            d={`M ${XS[3] + W / 2} ${Y + H} L ${XS[3] + W / 2} 132 L ${XS[0] + W / 2} 132 L ${XS[0] + W / 2} ${Y + H + 8}`}
            fill="none"
            stroke="#65676b"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <polygon
            points={`${XS[0] + W / 2},${Y + H + 2} ${XS[0] + W / 2 - 4},${Y + H + 10} ${XS[0] + W / 2 + 4},${Y + H + 10}`}
            fill="#65676b"
          />
          <text x={390} y={152} textAnchor="middle" fontSize="11.5" fill="#8a8d91">
            every edit teaches the next generation pass
          </text>

          {/* Step pills */}
          {STEPS.map((s, i) => (
            <g key={s.label}>
              <rect
                x={XS[i]}
                y={Y}
                width={W}
                height={H}
                rx="8"
                fill={s.ai ? BLUE_FILL : "#ffffff"}
                stroke={s.ai ? BLUE : GRAY_STROKE}
                strokeWidth={s.ai ? 1.4 : 1}
              />
              <text
                x={XS[i] + W / 2}
                y={Y + H / 2 + 4}
                textAnchor="middle"
                fontSize="12.5"
                fontWeight="600"
                fill="#050505"
              >
                {s.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-[12px] leading-snug text-[var(--color-text-secondary)]">
        The workflow loop: machine volume, human judgment, alternating by
        design. Ten times traditional velocity, strategic coherence intact.
      </figcaption>
    </figure>
  );
}
