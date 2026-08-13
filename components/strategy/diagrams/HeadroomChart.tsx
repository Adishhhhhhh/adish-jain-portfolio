// Two ads at the same multiple. The one at low frequency has ceiling left to
// buy; the one at high frequency is already spending against a pocket it has
// saturated. Drawn as fill against a ceiling, because headroom is the argument.

const COLS = [
  {
    x: 120,
    label: "Frequency 1.2",
    sub: "still finding new people",
    fill: 0.34,
    tone: "#1a7f37",
    bg: "#e3f1df",
    verdict: "Raise ~20% every 2 days",
  },
  {
    x: 400,
    label: "Frequency 3.4",
    sub: "re-hitting the same pocket",
    fill: 0.93,
    tone: "#b26a00",
    bg: "#fdf3e3",
    verdict: "Hold. Spend it on cold reach",
  },
];

const TOP = 70;
const BOT = 250;
const W = 150;

export function HeadroomChart() {
  return (
    <figure>
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 700 330"
          role="img"
          aria-label="Two ads both at 4.1 times ROAS. The one at frequency 1.2 has used about a third of its spend ceiling and can be scaled. The one at frequency 3.4 has used nearly all of it and should be held."
          className="mx-auto h-auto w-full min-w-[520px] max-w-[660px]"
        >
          <text x="350" y="34" textAnchor="middle" fontSize="13" fontWeight="700" fill="#050505">
            Both ads report 4.1× ROAS
          </text>

          {COLS.map((c) => {
            const fillH = (BOT - TOP) * c.fill;
            return (
              <g key={c.label}>
                {/* ceiling frame */}
                <rect
                  x={c.x}
                  y={TOP}
                  width={W}
                  height={BOT - TOP}
                  rx="6"
                  fill={c.bg}
                  stroke="#ced0d4"
                  strokeWidth="1.5"
                />
                {/* spend absorbed */}
                <rect
                  x={c.x}
                  y={BOT - fillH}
                  width={W}
                  height={fillH}
                  rx="6"
                  fill={c.tone}
                  fillOpacity="0.75"
                />
                {/* ceiling line */}
                <line
                  x1={c.x - 10}
                  y1={TOP}
                  x2={c.x + W + 10}
                  y2={TOP}
                  stroke="#65676b"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                <text x={c.x + W / 2} y={TOP - 10} textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#65676b">
                  spend ceiling
                </text>

                {/* headroom bracket, only where there is room */}
                {c.fill < 0.6 && (
                  <>
                    <line
                      x1={c.x + W + 22}
                      y1={TOP}
                      x2={c.x + W + 22}
                      y2={BOT - fillH}
                      stroke="#1a7f37"
                      strokeWidth="2"
                    />
                    <text
                      x={c.x + W + 30}
                      y={(TOP + BOT - fillH) / 2}
                      fontSize="11.5"
                      fontWeight="700"
                      fill="#1a7f37"
                    >
                      headroom
                    </text>
                  </>
                )}

                <text x={c.x + W / 2} y={BOT + 26} textAnchor="middle" fontSize="13" fontWeight="700" fill="#050505">
                  {c.label}
                </text>
                <text x={c.x + W / 2} y={BOT + 43} textAnchor="middle" fontSize="11.5" fill="#65676b">
                  {c.sub}
                </text>
                <text x={c.x + W / 2} y={BOT + 66} textAnchor="middle" fontSize="12" fontWeight="700" fill={c.tone}>
                  {c.verdict}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-[12px] leading-snug text-[var(--color-text-secondary)]">
        The multiple is identical. The spend each one can still absorb is not.
      </figcaption>
    </figure>
  );
}
