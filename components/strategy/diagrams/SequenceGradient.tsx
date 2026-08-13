// The lead exhibit. Reported ROAS and frequency both climb toward most-aware,
// which is why the opener looks like the worst ad in the account and the
// closer looks like the best. Plotted with three produced ads from the Library.
//
// The argument is the pair of rising lines. Everything else is labelling.

const STAGES = [
  { x: 150, label: "Unaware" },
  { x: 330, label: "Problem aware" },
  { x: 500, label: "Solution aware" },
  { x: 660, label: "Product aware" },
];

// y falls as value rises
const ROAS = [
  { x: 150, y: 232 },
  { x: 330, y: 186 },
  { x: 500, y: 126 },
  { x: 660, y: 74 },
];

const FREQ = [
  { x: 150, y: 254 },
  { x: 330, y: 238 },
  { x: 500, y: 202 },
  { x: 660, y: 152 },
];

const ADS = [
  {
    x: 150,
    y: 232,
    name: "Dog-to-Dog",
    brand: "PetHonesty",
    roas: "0.7×",
    freq: "freq 1.1",
    verdict: "cut" as const,
  },
  {
    x: 330,
    y: 186,
    name: "Caffeine and Meth",
    brand: "NeuroGum",
    roas: "2.1×",
    freq: "freq 1.6",
    verdict: null,
  },
  {
    x: 660,
    y: 74,
    name: "Office Authority",
    brand: "NeuroGum",
    roas: "6.4×",
    freq: "freq 3.6",
    verdict: "feed" as const,
  },
];

const pts = (a: { x: number; y: number }[]) =>
  a.map((p) => `${p.x},${p.y}`).join(" ");

export function SequenceGradient() {
  return (
    <figure>
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 760 400"
          role="img"
          aria-label="Reported ROAS and frequency both rise as ads move from unaware to product aware. Dog-to-Dog sits at 0.7 times ROAS with frequency 1.1, Caffeine and Meth at 2.1 times with frequency 1.6, Office Authority at 6.4 times with frequency 3.6. All three sit in one ad set, which is where the sequence's value is judged."
          className="mx-auto h-auto w-full min-w-[600px] max-w-[720px]"
        >
          {/* plot frame */}
          <line x1="80" y1="272" x2="710" y2="272" stroke="#ced0d4" strokeWidth="1" />
          <line x1="80" y1="50" x2="80" y2="272" stroke="#ced0d4" strokeWidth="1" />

          {/* stage gridlines */}
          {STAGES.map((s) => (
            <line
              key={s.label}
              x1={s.x}
              y1="50"
              x2={s.x}
              y2="272"
              stroke="#e4e6eb"
              strokeWidth="1"
            />
          ))}

          {/* axis caption */}
          <text x="80" y="40" fontSize="11" fontWeight="700" fill="#8a8d91">
            HIGHER
          </text>

          {/* frequency, dashed */}
          <polyline
            points={pts(FREQ)}
            fill="none"
            stroke="#8a8d91"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
          {/* roas, solid */}
          <polyline
            points={pts(ROAS)}
            fill="none"
            stroke="#1877F2"
            strokeWidth="2.5"
          />

          {/* ad markers */}
          {ADS.map((a) => (
            <g key={a.name}>
              <circle
                cx={a.x}
                cy={a.y}
                r="7"
                fill="#ffffff"
                stroke={
                  a.verdict === "cut"
                    ? "#f5a623"
                    : a.verdict === "feed"
                      ? "#1a7f37"
                      : "#1877F2"
                }
                strokeWidth="3"
              />
            </g>
          ))}

          {/* verdict callouts, kept to two words each */}
          <text x="150" y={232 - 22} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#b26a00">
            the one you&apos;d cut
          </text>
          <text x="660" y={74 - 22} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1a7f37">
            the one you&apos;d feed
          </text>

          {/* legend */}
          <g>
            <line x1="98" y1="62" x2="126" y2="62" stroke="#1877F2" strokeWidth="2.5" />
            <text x="132" y="66" fontSize="11.5" fontWeight="600" fill="#050505">
              Reported ROAS
            </text>
            <line
              x1="240"
              y1="62"
              x2="268"
              y2="62"
              stroke="#8a8d91"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
            <text x="274" y="66" fontSize="11.5" fontWeight="600" fill="#65676b">
              Frequency
            </text>
          </g>

          {/* stage labels */}
          {STAGES.map((s) => (
            <text
              key={s.label}
              x={s.x}
              y="292"
              textAnchor="middle"
              fontSize="11.5"
              fontWeight="600"
              fill="#65676b"
            >
              {s.label}
            </text>
          ))}

          {/* ad chips under the axis */}
          {ADS.map((a) => (
            <g key={`chip-${a.name}`}>
              <text x={a.x} y="320" textAnchor="middle" fontSize="12" fontWeight="700" fill="#050505">
                {a.name}
              </text>
              <text x={a.x} y="335" textAnchor="middle" fontSize="10.5" fill="#8a8d91">
                {a.brand}
              </text>
              <text x={a.x} y="351" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1877F2">
                {a.roas}
                <tspan fill="#65676b" fontWeight="400">
                  {"  "}
                  {a.freq}
                </tspan>
              </text>
            </g>
          ))}

          {/* the correction: one ad set spans all of it */}
          <path
            d="M110 370 L110 378 L690 378 L690 370"
            fill="none"
            stroke="#1877F2"
            strokeWidth="1.5"
          />
          <rect x="286" y="366" width="228" height="24" rx="4" fill="#f5f9ff" />
          <text x="400" y="382" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1877F2">
            one ad set · judge here
          </text>
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-[12px] leading-snug text-[var(--color-text-secondary)]">
        Both lines rise together, so the ad with the worst multiple is also the
        one still reaching new people.
      </figcaption>
    </figure>
  );
}
