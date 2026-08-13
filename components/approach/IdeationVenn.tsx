// The ideation equation, drawn. Seven solid constraint fields overlap; every
// overlap deepens the blue; the only region shaded by all seven is the center.
// Three dashed satellite circles feed the cluster from the outside: the
// inspiration sources. Solid circles filter; dashed circles feed. The outer
// dashed ring is incubation, the field the whole system floats in.
//
// Geometry is computed rather than hand-placed so the petal count can change
// without re-deriving every label position. Satellites sit at the midpoints
// between petals so their labels never collide with a petal's.
//
// Pure SVG, Meta palette, no motion: the argument is the geometry.

const CX = 500;
const CY = 350;
const RING_R = 76; // distance of each petal center from the middle
const PETAL_R = 110;
const OUTER_R = 252; // the incubation field
const LABEL_R = 206;
const SAT_R = 46;
const SAT_ORBIT = 330;

const PETALS: { title: string; sub: string }[] = [
  { title: "Product truth", sub: "what is verifiably true" },
  { title: "Unique mechanism", sub: "problem side and solution side" },
  { title: "ICP × awareness", sub: "who, and how far from yes" },
  { title: "Market beliefs", sub: "cliches, norms, buying triggers" },
  { title: "The hook", sub: "the gate everything waits behind" },
  { title: "Competitive gaps", sub: "what nobody is saying" },
  { title: "Live data", sub: "what campaigns already proved" },
];

const SATELLITES: { title: string; sub: string }[] = [
  { title: "Organic content", sub: "memes, skits, native formats" },
  { title: "Swipe bank", sub: "proven DR, classic and current" },
  { title: "Personal hive mind", sub: "books, cross-domain, lived experience" },
];

const STEP = 360 / PETALS.length;
const petalAngle = (i: number) => -90 + i * STEP;
// satellites drop into the gaps between petals, spaced around the circle
const satAngle = (i: number) => -90 + STEP / 2 + i * STEP * 2;

const rad = (d: number) => (d * Math.PI) / 180;
const at = (deg: number, r: number) => ({
  x: CX + r * Math.cos(rad(deg)),
  y: CY + r * Math.sin(rad(deg)),
});

/** horizontal text anchor that pushes a label away from the cluster */
function anchorFor(deg: number): "start" | "middle" | "end" {
  const c = Math.cos(rad(deg));
  if (c > 0.25) return "start";
  if (c < -0.25) return "end";
  return "middle";
}

export function IdeationVenn() {
  return (
    <figure className="rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)]">
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 1000 760"
          role="img"
          aria-label="The ideation equation: seven overlapping constraint fields including the hook. Winning concepts sit at the center where all seven intersect, inside a field of incubation, fed by three inspiration sources."
          className="mx-auto h-auto w-full min-w-[560px] max-w-[760px]"
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
          {PETALS.map((p, i) => {
            const c = at(petalAngle(i), RING_R);
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

          {/* Petal labels, pushed out along their own angle */}
          {PETALS.map((p, i) => {
            const deg = petalAngle(i);
            const l = at(deg, LABEL_R);
            const anchor = anchorFor(deg);
            // the hook is the new member, marked so the eye finds it
            const isHook = p.title === "The hook";
            return (
              <g key={`label-${p.title}`} textAnchor={anchor}>
                <text
                  x={l.x}
                  y={l.y}
                  fontSize="13"
                  fontWeight="700"
                  fill={isHook ? "#1877F2" : "#050505"}
                >
                  {p.title}
                </text>
                <text x={l.x} y={l.y + 16} fontSize="11.5" fill="#65676b">
                  {p.sub}
                </text>
              </g>
            );
          })}

          {/* Inspiration satellites: dashed, feeding inward */}
          {SATELLITES.map((s, i) => {
            const deg = satAngle(i);
            const c = at(deg, SAT_ORBIT);
            const inner = at(deg, SAT_ORBIT - SAT_R);
            const target = at(deg, OUTER_R - 14);
            // labels always sit under their circle. Placing them radially
            // outward pushes the northern satellite off the top of the canvas.
            const labelY = c.y + SAT_R + 20;
            return (
              <g key={s.title}>
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={SAT_R}
                  fill="none"
                  stroke="#8a8d91"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                />
                <line
                  x1={inner.x}
                  y1={inner.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="#8a8d91"
                  strokeWidth="1.4"
                  strokeDasharray="2 3"
                />
                <g textAnchor="middle">
                  <text x={c.x} y={labelY} fontSize="12" fontWeight="700" fill="#050505">
                    {s.title}
                  </text>
                  <text x={c.x} y={labelY + 15} fontSize="11" fill="#65676b">
                    {s.sub}
                  </text>
                </g>
              </g>
            );
          })}

          {/* The center: the only region all seven constraints share */}
          <text x={CX} y={CY - 2} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1877F2">
            Winning
          </text>
          <text x={CX} y={CY + 13} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1877F2">
            concepts
          </text>

          {/* Incubation label */}
          <text x={CX} y={748} textAnchor="middle" fontSize="11.5" fill="#8a8d91">
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
