// Concept architecture as a decision tree: persona × awareness × angle ×
// offer, format last. One lit path = one concept; the ghosted branches are
// the rest of the combinatorial space. Mirrors how campaigns and ad sets are
// actually planned in the case studies.

const BLUE = "#1877F2";
const BLUE_FILL = "#e7f3ff";
const GRAY_STROKE = "#ced0d4";
const GRAY_TEXT = "#65676b";
const GHOST = "#e4e6eb";

type Node = { label: string; cx: number; cy: number; w: number; active?: boolean };

const STAGES: Node[] = [
  { label: "Unaware", cx: 267, cy: 70, w: 125 },
  { label: "Problem aware", cx: 267, cy: 135, w: 125, active: true },
  { label: "Solution aware", cx: 267, cy: 200, w: 125 },
  { label: "Product aware", cx: 267, cy: 265, w: 125 },
  { label: "Most aware", cx: 267, cy: 330, w: 125 },
];

const ANGLES: Node[] = [
  { label: "The crash cycle", cx: 465, cy: 60, w: 150 },
  { label: "Wrong delivery route", cx: 465, cy: 115, w: 150, active: true },
  { label: "The missing half", cx: 465, cy: 170, w: 150 },
  { label: "Fake productivity", cx: 465, cy: 225, w: 150 },
  { label: "The 2pm cliff", cx: 465, cy: 280, w: 150 },
];

const OFFERS: Node[] = [
  { label: "Core offer", cx: 625, cy: 90, w: 100, active: true },
  { label: "Entry offer", cx: 625, cy: 145, w: 100 },
];

const FORMATS: Node[] = [
  { label: "VSL", cx: 730, cy: 55, w: 80, active: true },
  { label: "Static", cx: 730, cy: 105, w: 80 },
  { label: "Advertorial", cx: 730, cy: 155, w: 80 },
];

const PERSONA: Node = { label: "The Skeptical Optimizer", cx: 95, cy: 200, w: 160, active: true };

const H = 28;

function link(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

function Pill({ node }: { node: Node }) {
  const h = node.label === PERSONA.label ? 30 : H;
  return (
    <g>
      <rect
        x={node.cx - node.w / 2}
        y={node.cy - h / 2}
        width={node.w}
        height={h}
        rx={h / 2}
        fill={node.active ? BLUE_FILL : "#ffffff"}
        stroke={node.active ? BLUE : GRAY_STROKE}
        strokeWidth={node.active ? 1.5 : 1}
      />
      <text
        x={node.cx}
        y={node.cy + 4}
        textAnchor="middle"
        fontSize="12"
        fontWeight={node.active ? 600 : 400}
        fill={node.active ? "#050505" : GRAY_TEXT}
      >
        {node.label}
      </text>
    </g>
  );
}

export function ConceptArchitecture() {
  const personaRight = PERSONA.cx + PERSONA.w / 2;
  const stageActive = STAGES.find((s) => s.active)!;
  const angleActive = ANGLES.find((a) => a.active)!;
  const offerActive = OFFERS.find((o) => o.active)!;

  return (
    <figure className="rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)]">
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 780 360"
          role="img"
          aria-label="Concept architecture tree: a persona branches into five awareness stages, an awareness stage into five angles, an angle into offers, an offer into formats. One highlighted path shows a single concept."
          className="h-auto w-full min-w-[680px]"
        >
          {/* Column headers */}
          <g fontSize="11" fontWeight="600" fill="#8a8d91" letterSpacing="0.04em" textAnchor="middle">
            <text x={95} y={22}>PERSONA</text>
            <text x={267} y={22}>AWARENESS STAGE</text>
            <text x={465} y={22}>ANGLE</text>
            <text x={625} y={22}>OFFER</text>
            <text x={730} y={22}>FORMAT</text>
          </g>

          {/* Links: persona → stages */}
          {STAGES.map((s) => (
            <path
              key={`ps-${s.label}`}
              d={link(personaRight, PERSONA.cy, s.cx - s.w / 2, s.cy)}
              fill="none"
              stroke={s.active ? BLUE : GRAY_STROKE}
              strokeWidth={s.active ? 1.8 : 1.1}
            />
          ))}

          {/* Ghost stubs: the unexpanded branches of inactive stages */}
          {STAGES.filter((s) => !s.active).map((s) => (
            <g key={`ghost-${s.label}`} stroke={GHOST} strokeWidth="1.1" fill="none">
              <path d={link(s.cx + s.w / 2, s.cy, s.cx + s.w / 2 + 34, s.cy - 9)} />
              <path d={link(s.cx + s.w / 2, s.cy, s.cx + s.w / 2 + 34, s.cy + 9)} />
            </g>
          ))}

          {/* Links: active stage → angles */}
          {ANGLES.map((a) => (
            <path
              key={`sa-${a.label}`}
              d={link(stageActive.cx + stageActive.w / 2, stageActive.cy, a.cx - a.w / 2, a.cy)}
              fill="none"
              stroke={a.active ? BLUE : GRAY_STROKE}
              strokeWidth={a.active ? 1.8 : 1.1}
            />
          ))}

          {/* Links: active angle → offers */}
          {OFFERS.map((o) => (
            <path
              key={`ao-${o.label}`}
              d={link(angleActive.cx + angleActive.w / 2, angleActive.cy, o.cx - o.w / 2, o.cy)}
              fill="none"
              stroke={o.active ? BLUE : GRAY_STROKE}
              strokeWidth={o.active ? 1.8 : 1.1}
            />
          ))}

          {/* Links: active offer → formats */}
          {FORMATS.map((f) => (
            <path
              key={`of-${f.label}`}
              d={link(offerActive.cx + offerActive.w / 2, offerActive.cy, f.cx - f.w / 2, f.cy)}
              fill="none"
              stroke={f.active ? BLUE : GRAY_STROKE}
              strokeWidth={f.active ? 1.8 : 1.1}
            />
          ))}

          {/* Nodes on top of links */}
          <Pill node={PERSONA} />
          {STAGES.map((s) => <Pill key={s.label} node={s} />)}
          {ANGLES.map((a) => <Pill key={a.label} node={a} />)}
          {OFFERS.map((o) => <Pill key={o.label} node={o} />)}
          {FORMATS.map((f) => <Pill key={f.label} node={f} />)}
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-[12px] leading-snug text-[var(--color-text-secondary)]">
        One lit path is one concept: persona × awareness × angle × offer, format
        last because it is the cheapest variable to swap. Behind a single brand
        the full tree runs to hundreds of paths; production is reserved for the
        ones that survive the ideation equation.
      </figcaption>
    </figure>
  );
}
