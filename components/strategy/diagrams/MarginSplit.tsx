// The same 3.0x measured against two break-even lines. One clears, one does
// not, and nothing about the creative changed. Break-even ROAS is one divided
// by contribution margin, so the threshold moves with the business.

const SCALE_MIN = 0;
const SCALE_MAX = 5;
const X0 = 150;
// track ends well short of the viewBox so the verdict text to its right has
// room to sit inside the frame
const X1 = 540;

const px = (v: number) => X0 + ((v - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * (X1 - X0);

const ROWS = [
  {
    y: 96,
    margin: "40% margin",
    breakeven: 2.5,
    beLabel: "break-even 2.50×",
    verdict: "Profit",
    tone: "#1a7f37",
    bar: "#1a7f37",
  },
  {
    y: 196,
    margin: "24% margin",
    breakeven: 4.17,
    beLabel: "break-even 4.17×",
    verdict: "Loss on every order",
    tone: "#b26a00",
    bar: "#f5a623",
  },
];

const ACTUAL = 3.0;

export function MarginSplit() {
  return (
    <figure>
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 700 300"
          role="img"
          aria-label="A 3.0 times ROAS shown against two break-even points. At 40 percent contribution margin break-even is 2.50 times, so 3.0 is profit. At 24 percent margin break-even is 4.17 times, so the same 3.0 loses money on every order."
          className="mx-auto h-auto w-full min-w-[520px] max-w-[660px]"
        >
          <text x="350" y="34" textAnchor="middle" fontSize="13" fontWeight="700" fill="#050505">
            The account reports 3.0× ROAS
          </text>

          {ROWS.map((r) => (
            <g key={r.margin}>
              {/* track */}
              <rect x={X0} y={r.y} width={X1 - X0} height="26" rx="4" fill="#e4e6eb" />
              {/* achieved */}
              <rect x={X0} y={r.y} width={px(ACTUAL) - X0} height="26" rx="4" fill={r.bar} fillOpacity="0.85" />

              {/* break-even marker */}
              <line
                x1={px(r.breakeven)}
                y1={r.y - 14}
                x2={px(r.breakeven)}
                y2={r.y + 40}
                stroke="#050505"
                strokeWidth="2"
              />
              <text
                x={px(r.breakeven)}
                y={r.y - 20}
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill="#050505"
              >
                {r.beLabel}
              </text>

              {/* row label */}
              <text x="20" y={r.y + 12} fontSize="13" fontWeight="700" fill="#050505">
                {r.margin}
              </text>
              <text x="20" y={r.y + 29} fontSize="11" fill="#65676b">
                contribution
              </text>

              {/* verdict */}
              <text x={X1 + 12} y={r.y + 18} fontSize="12.5" fontWeight="700" fill={r.tone}>
                {r.verdict}
              </text>
            </g>
          ))}

          {/* the 3.0 line running through both */}
          <line
            x1={px(ACTUAL)}
            y1="70"
            x2={px(ACTUAL)}
            y2="250"
            stroke="#1877F2"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <text x={px(ACTUAL)} y="266" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1877F2">
            3.0× achieved
          </text>

          <text x="350" y="290" textAnchor="middle" fontSize="11.5" fill="#8a8d91">
            Break-even ROAS = 1 ÷ contribution margin
          </text>
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-[12px] leading-snug text-[var(--color-text-secondary)]">
        The creative performed identically in both rows. Only the margin moved.
      </figcaption>
    </figure>
  );
}
