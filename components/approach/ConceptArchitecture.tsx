// Concept architecture as a decision tree: persona × awareness × angle ×
// offer, format last. Research surfaced five personas for one brand; three
// carried the wave, two sit mapped and waiting (dashed, Wave 2, from the
// NeuroGum Creative Expansion Map). One lit path = one concept; the ghosted
// branches are the rest of the combinatorial space.

const BLUE = "#1877F2";
const BLUE_FILL = "#e7f3ff";
const GRAY_STROKE = "#ced0d4";
const GRAY_TEXT = "#65676b";
const GHOST = "#e4e6eb";
const DASH_STROKE = "#8a8d91";

type Node = {
  label: string;
  cx: number;
  cy: number;
  w: number;
  h?: number;
  active?: boolean;
  /** dashed = mapped in research, unproduced on purpose (Wave 2) */
  wave2?: boolean;
  fontSize?: number;
};

const PERSONAS: Node[] = [
  { label: "The Burned-Out Professional", cx: 95, cy: 70, w: 168, h: 32, fontSize: 11.5 },
  { label: "The Lifestyle & Identity User", cx: 95, cy: 135, w: 168, h: 32, fontSize: 11.5 },
  { label: "The Skeptical Optimizer", cx: 95, cy: 200, w: 168, h: 32, fontSize: 11.5, active: true },
  { label: "The Pouch Switcher", cx: 95, cy: 265, w: 168, h: 32, fontSize: 11.5, wave2: true },
  { label: "The Precision Doser", cx: 95, cy: 330, w: 168, h: 32, fontSize: 11.5, wave2: true },
];

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

const H = 28;

function link(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

function Pill({ node }: { node: Node }) {
  const h = node.h ?? H;
  const stroke = node.active ? BLUE : node.wave2 ? DASH_STROKE : GRAY_STROKE;
  return (
    <g>
      <rect
        x={node.cx - node.w / 2}
        y={node.cy - h / 2}
        width={node.w}
        height={h}
        rx={h / 2}
        fill={node.active ? BLUE_FILL : "#ffffff"}
        stroke={stroke}
        strokeWidth={node.active ? 1.5 : 1}
        strokeDasharray={node.wave2 ? "4 3" : undefined}
      />
      <text
        x={node.cx}
        y={node.cy + (node.wave2 ? -1 : 4)}
        textAnchor="middle"
        fontSize={node.fontSize ?? 12}
        fontWeight={node.active ? 600 : 400}
        fill={node.active ? "#050505" : GRAY_TEXT}
      >
        {node.label}
      </text>
      {node.wave2 && (
        <text
          x={node.cx}
          y={node.cy + 11}
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="600"
          letterSpacing="0.08em"
          fill={DASH_STROKE}
        >
          WAVE 2
        </text>
      )}
    </g>
  );
}

export function ConceptArchitecture() {
  const personaActive = PERSONAS.find((p) => p.active)!;
  const stageActive = STAGES.find((s) => s.active)!;
  const angleActive = ANGLES.find((a) => a.active)!;
  const offerActive = OFFERS.find((o) => o.active)!;

  return (
    <figure className="rounded-md border border-[var(--color-border-light)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)]">
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 780 360"
          role="img"
          aria-label="Concept architecture tree: five personas branch from research; one persona's tree is expanded through awareness stage, angle, offer, and format. Two dashed personas are mapped and waiting as Wave 2. One highlighted path shows a single concept."
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

          {/* Links: active persona → stages */}
          {STAGES.map((s) => (
            <path
              key={`ps-${s.label}`}
              d={link(personaActive.cx + personaActive.w / 2, personaActive.cy, s.cx - s.w / 2, s.cy)}
              fill="none"
              stroke={s.active ? BLUE : GRAY_STROKE}
              strokeWidth={s.active ? 1.8 : 1.1}
            />
          ))}

          {/* Ghost stubs: inactive solid personas hold unexpanded trees */}
          {PERSONAS.filter((p) => !p.active && !p.wave2).map((p) => (
            <g key={`ghostp-${p.label}`} stroke={GHOST} strokeWidth="1.1" fill="none">
              <path d={link(p.cx + p.w / 2, p.cy, p.cx + p.w / 2 + 30, p.cy - 9)} />
              <path d={link(p.cx + p.w / 2, p.cy, p.cx + p.w / 2 + 30, p.cy + 9)} />
            </g>
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
          {PERSONAS.map((p) => <Pill key={p.label} node={p} />)}
          {STAGES.map((s) => <Pill key={s.label} node={s} />)}
          {ANGLES.map((a) => <Pill key={a.label} node={a} />)}
          {OFFERS.map((o) => <Pill key={o.label} node={o} />)}
          {FORMATS.map((f) => <Pill key={f.label} node={f} />)}
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-[12px] leading-snug text-[var(--color-text-secondary)]">
        Research surfaced five personas for one brand. Three carried the wave;
        two sit mapped and waiting. One lit path shown; the full tree behind a
        single brand runs to hundreds, and production is reserved for concepts
        that survive the ideation equation.
      </figcaption>
    </figure>
  );
}
