// Four gates every angle clears before it earns production. Any single failure
// kills it, at zero cost. The taper is the point: curation is what produces a
// hit rate, and the survivors are the only things worth spending on.

const X_IN = 60;
const X_OUT = 660;
const TOP_IN = 76;
const TOP_OUT = 116;
const BOT_IN = 214;
const BOT_OUT = 174;

const edgeTop = (x: number) =>
  TOP_IN + ((x - X_IN) / (X_OUT - X_IN)) * (TOP_OUT - TOP_IN);
const edgeBot = (x: number) =>
  BOT_IN - ((x - X_IN) / (X_OUT - X_IN)) * (BOT_IN - BOT_OUT);

const GATES = [
  { x: 186, name: "Review", q: "in 5+ real reviews?", kills: "the invented problem", out: 6 },
  { x: 314, name: "Ad Library", q: "are rivals saturating it?", kills: "the commodity claim", out: 5 },
  { x: 442, name: "Mechanism", q: "does it explain how?", kills: "the bare claim", out: 4 },
  { x: 570, name: "Elevator", q: "one sentence to product?", kills: "the logical leap", out: 3 },
];

export function AngleGates() {
  return (
    <figure>
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 720 330"
          role="img"
          aria-label="Eight candidate angles enter four gates. The review gate kills the invented problem leaving six, the ad library gate kills the commoditised claim leaving five, the mechanism gate leaves four, and the elevator gate leaves three survivors that earn production."
          className="mx-auto h-auto w-full min-w-[560px] max-w-[690px]"
        >
          {/* funnel body */}
          <path
            d={`M${X_IN} ${TOP_IN} L${X_OUT} ${TOP_OUT} L${X_OUT} ${BOT_OUT} L${X_IN} ${BOT_IN} Z`}
            fill="#1877F2"
            fillOpacity="0.08"
            stroke="#1877F2"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />

          {/* entry */}
          <text x={X_IN - 6} y={TOP_IN - 16} textAnchor="start" fontSize="12.5" fontWeight="700" fill="#050505">
            8 angles
          </text>
          <text x={X_IN - 6} y={TOP_IN - 2} textAnchor="start" fontSize="10.5" fill="#8a8d91">
            candidates
          </text>

          {GATES.map((g) => (
            <g key={g.name}>
              {/* gate line */}
              <line
                x1={g.x}
                y1={edgeTop(g.x) - 10}
                x2={g.x}
                y2={edgeBot(g.x) + 10}
                stroke="#050505"
                strokeWidth="2"
              />

              {/* gate label above */}
              <text x={g.x} y={edgeTop(g.x) - 22} textAnchor="middle" fontSize="12" fontWeight="700" fill="#050505">
                {g.name}
              </text>
              <text x={g.x} y={edgeTop(g.x) - 8} textAnchor="middle" fontSize="10" fill="#65676b">
                {g.q}
              </text>

              {/* survivors after this gate */}
              <text
                x={g.x + 30}
                y={(edgeTop(g.x) + edgeBot(g.x)) / 2 + 5}
                textAnchor="middle"
                fontSize="15"
                fontWeight="700"
                fill="#1877F2"
              >
                {g.out}
              </text>

              {/* the kill, dropping out below */}
              <path
                d={`M${g.x} ${edgeBot(g.x) + 12} L${g.x} ${edgeBot(g.x) + 34} M${g.x - 5} ${edgeBot(g.x) + 28} L${g.x} ${edgeBot(g.x) + 35} L${g.x + 5} ${edgeBot(g.x) + 28}`}
                stroke="#f5a623"
                strokeWidth="1.5"
                fill="none"
              />
              <text
                x={g.x}
                y={edgeBot(g.x) + 52}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="#b26a00"
              >
                {g.kills}
              </text>
            </g>
          ))}

          {/* exit */}
          <rect x={X_OUT + 4} y={TOP_OUT + 4} width="46" height="52" rx="6" fill="#e3f1df" stroke="#1a7f37" strokeWidth="1.5" />
          <text x={X_OUT + 27} y={TOP_OUT + 34} textAnchor="middle" fontSize="17" fontWeight="700" fill="#1a7f37">
            3
          </text>
          <text x={X_OUT + 27} y={TOP_OUT + 74} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#1a7f37">
            earn
          </text>
          <text x={X_OUT + 27} y={TOP_OUT + 87} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#1a7f37">
            production
          </text>

          {/* the graveyard line */}
          <text x="360" y="300" textAnchor="middle" fontSize="11.5" fill="#8a8d91">
            Five angles died before a single dollar was spent on them.
          </text>
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-[12px] leading-snug text-[var(--color-text-secondary)]">
        Any one failure kills the angle. The gate that kills most often is the
        elevator test.
      </figcaption>
    </figure>
  );
}
