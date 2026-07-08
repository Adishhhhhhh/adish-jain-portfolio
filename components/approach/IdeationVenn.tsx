// The ideation equation, drawn. Six constraint fields overlap; every overlap
// deepens the blue; the only region shaded by all six is the center. Winning
// concepts are the ones that survive every constraint at once. An outer dashed
// ring holds the inspiration + incubation field everything floats in.
// Pure SVG, Meta palette, no motion: the argument is the geometry.

const CX = 380;
const CY = 300;
const RING_R = 72; // distance of each petal center from the middle
const PETAL_R = 105;

const PETALS: {
  angle: number; // degrees, 0 = east, -90 = north
  title: string;
  sub: string;
  anchor: "start" | "middle" | "end";
  labelX: number;
  labelY: number;
}[] = [
  { angle: -90, title: "Product truth", sub: "what is verifiably true", anchor: "middle", labelX: 380, labelY: 100 },
  { angle: -30, title: "Unique mechanism", sub: "problem side and solution side", anchor: "start", labelX: 549, labelY: 197 },
  { angle: 30, title: "ICP × awareness", sub: "who, and how far from yes", anchor: "start", labelX: 549, labelY: 398 },
  { angle: 90, title: "Market beliefs", sub: "cliches, norms, buying triggers", anchor: "middle", labelX: 380, labelY: 492 },
  { angle: 150, title: "Competitive gaps", sub: "what nobody is saying", anchor: "end", labelX: 211, labelY: 398 },
  { angle: 210, title: "Live data", sub: "what campaigns already proved", anchor: "end", labelX: 211, labelY: 197 },
];

function petalCenter(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + RING_R * Math.cos(rad),
    y: CY + RING_R * Math.sin(rad),
  };
}

export function IdeationVenn() {
  return (
    <figure className="rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)]">
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 760 585"
          role="img"
          aria-label="The ideation equation: six overlapping constraint fields. Winning concepts sit at the center where all six intersect, inside an outer field of inspiration and incubation."
          className="mx-auto h-auto w-full min-w-[480px] max-w-[640px]"
        >
          {/* Inspiration + incubation field */}
          <circle
            cx={CX}
            cy={CY}
            r={240}
            fill="none"
            stroke="#ced0d4"
            strokeWidth="1.2"
            strokeDasharray="5 6"
          />

          {/* Constraint petals: same translucent blue, overlaps compound */}
          {PETALS.map((p) => {
            const c = petalCenter(p.angle);
            return (
              <circle
                key={p.title}
                cx={c.x}
                cy={c.y}
                r={PETAL_R}
                fill="#1877F2"
                fillOpacity="0.07"
                stroke="#1877F2"
                strokeOpacity="0.28"
                strokeWidth="1"
              />
            );
          })}

          {/* Petal labels */}
          {PETALS.map((p) => (
            <g key={`label-${p.title}`} textAnchor={p.anchor}>
              <text x={p.labelX} y={p.labelY} fontSize="13" fontWeight="700" fill="#050505">
                {p.title}
              </text>
              <text x={p.labelX} y={p.labelY + 16} fontSize="11.5" fill="#65676b">
                {p.sub}
              </text>
            </g>
          ))}

          {/* The center: the only region all six constraints share */}
          <text x={CX} y={CY - 2} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1877F2">
            Winning
          </text>
          <text x={CX} y={CY + 12} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1877F2">
            concepts
          </text>

          {/* Outer field label */}
          <text x={CX} y={566} textAnchor="middle" fontSize="11.5" fill="#8a8d91">
            Inspiration + incubation: the field every constraint floats in
          </text>
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-[12px] leading-snug text-[var(--color-text-secondary)]">
        The ideation equation. Each circle is a constraint; every overlap
        deepens. A concept that clears two or three circles is a clever line. A
        concept at the center is a campaign.
      </figcaption>
    </figure>
  );
}
