// The ideation equation, drawn. Six solid constraint fields overlap; every
// overlap deepens the blue; the only region shaded by all six is the center.
// Three dashed satellite circles feed the cluster from the outside: the
// inspiration sources. Solid circles filter; dashed circles feed. The outer
// dashed ring is incubation, the field the whole system floats in.
// Pure SVG, Meta palette, no motion: the argument is the geometry.

const CX = 430;
const CY = 300;
const RING_R = 72; // distance of each petal center from the middle
const PETAL_R = 105;
const OUTER_R = 240;
const SAT_R = 44;

const PETALS: {
  angle: number; // degrees, 0 = east, -90 = north
  title: string;
  sub: string;
  anchor: "start" | "middle" | "end";
  labelX: number;
  labelY: number;
}[] = [
  { angle: -90, title: "Product truth", sub: "what is verifiably true", anchor: "middle", labelX: 430, labelY: 100 },
  { angle: -30, title: "Unique mechanism", sub: "problem side and solution side", anchor: "start", labelX: 599, labelY: 197 },
  { angle: 30, title: "ICP × awareness", sub: "who, and how far from yes", anchor: "start", labelX: 599, labelY: 398 },
  { angle: 90, title: "Market beliefs", sub: "cliches, norms, buying triggers", anchor: "middle", labelX: 430, labelY: 492 },
  { angle: 150, title: "Competitive gaps", sub: "what nobody is saying", anchor: "end", labelX: 261, labelY: 398 },
  { angle: 210, title: "Live data", sub: "what campaigns already proved", anchor: "end", labelX: 261, labelY: 197 },
];

// Inspiration satellites sit on the incubation ring and feed inward.
const SATELLITES: {
  cx: number;
  cy: number;
  title: string;
  sub: string;
  labelX: number;
  labelY: number;
  anchor: "start" | "middle";
  // dotted connector from the satellite's inner edge toward the petal cluster
  line: { x1: number; y1: number; x2: number; y2: number };
}[] = [
  {
    cx: 670,
    cy: 300,
    title: "Organic content",
    sub: "memes, skits, native formats",
    labelX: 670,
    labelY: 362,
    anchor: "middle",
    line: { x1: 626, y1: 300, x2: 607, y2: 300 },
  },
  {
    cx: 190,
    cy: 300,
    title: "Swipe bank",
    sub: "proven DR, classic and current",
    labelX: 190,
    labelY: 362,
    anchor: "middle",
    line: { x1: 234, y1: 300, x2: 253, y2: 300 },
  },
  {
    cx: 557,
    cy: 504,
    title: "Personal hive mind",
    sub: "books, cross-domain, lived experience",
    labelX: 609,
    labelY: 500,
    anchor: "start",
    line: { x1: 534, y1: 466, x2: 524, y2: 450 },
  },
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
          viewBox="0 0 870 585"
          role="img"
          aria-label="The ideation equation: six overlapping constraint fields. Winning concepts sit at the center where all six intersect, inside a field of incubation, fed by three inspiration sources."
          className="mx-auto h-auto w-full min-w-[520px] max-w-[700px]"
        >
          {/* Incubation field */}
          <circle
            cx={CX}
            cy={CY}
            r={OUTER_R}
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

          {/* Inspiration satellites: dashed, feeding inward */}
          {SATELLITES.map((s) => (
            <g key={s.title}>
              <circle
                cx={s.cx}
                cy={s.cy}
                r={SAT_R}
                fill="none"
                stroke="#8a8d91"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <line
                x1={s.line.x1}
                y1={s.line.y1}
                x2={s.line.x2}
                y2={s.line.y2}
                stroke="#8a8d91"
                strokeWidth="1.4"
                strokeDasharray="2 3"
              />
              <g textAnchor={s.anchor}>
                <text x={s.labelX} y={s.labelY} fontSize="12" fontWeight="700" fill="#050505">
                  {s.title}
                </text>
                <text x={s.labelX} y={s.labelY + 15} fontSize="11" fill="#65676b">
                  {s.sub}
                </text>
              </g>
            </g>
          ))}

          {/* The center: the only region all six constraints share */}
          <text x={CX} y={CY - 2} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1877F2">
            Winning
          </text>
          <text x={CX} y={CY + 12} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1877F2">
            concepts
          </text>

          {/* Incubation label */}
          <text x={CX} y={572} textAnchor="middle" fontSize="11.5" fill="#8a8d91">
            Incubation: constraints loaded, the subconscious works the intersection
          </text>
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-[12px] leading-snug text-[var(--color-text-secondary)]">
        The ideation equation. Solid circles filter; dashed circles feed. A
        concept that clears two or three constraints is a clever line. A
        concept at the center is a campaign.
      </figcaption>
    </figure>
  );
}
