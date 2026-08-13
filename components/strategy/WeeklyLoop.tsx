// The closer. Eight steps on a ring, coloured by the job each phase does:
// blue reads, amber curates, green makes and ships, grey checks nothing broke.
//
// It is a ring because the output of Friday is the input of Monday. The point
// of the exhibit is that this is a rhythm someone runs, not a set of opinions.

import { LOOP, LOOP_CLOSE, LOOP_LEAD, LOOP_TITLE } from "@/content/strategy-supports";

const CX = 360;
const CY = 285;
const R = 192;
const BOX_W = 126;
const BOX_H = 54;

const PHASE = [
  { fill: "#e7f0fe", stroke: "#1877F2", text: "#1877F2" }, // Analyse
  { fill: "#e7f0fe", stroke: "#1877F2", text: "#1877F2" }, // Decide
  { fill: "#fdf3e3", stroke: "#f5a623", text: "#b26a00" }, // Direct
  { fill: "#fdf3e3", stroke: "#f5a623", text: "#b26a00" }, // Source
  { fill: "#fdf3e3", stroke: "#f5a623", text: "#b26a00" }, // Audit
  { fill: "#e3f1df", stroke: "#1a7f37", text: "#1a7f37" }, // Produce
  { fill: "#e3f1df", stroke: "#1a7f37", text: "#1a7f37" }, // Launch
  { fill: "#f0f2f5", stroke: "#8a8d91", text: "#65676b" }, // Sanity
];

const rad = (deg: number) => (deg * Math.PI) / 180;
const nodeAngle = (i: number) => -90 + i * 45;
const pos = (deg: number, r = R) => ({
  x: CX + r * Math.cos(rad(deg)),
  y: CY + r * Math.sin(rad(deg)),
});

// arrowhead sitting on the ring, pointing along the clockwise tangent
function arrowHead(deg: number) {
  const p = pos(deg);
  const t = { x: -Math.sin(rad(deg)), y: Math.cos(rad(deg)) }; // tangent
  const n = { x: Math.cos(rad(deg)), y: Math.sin(rad(deg)) }; // normal
  const tip = { x: p.x + t.x * 9, y: p.y + t.y * 9 };
  const a = { x: p.x - t.x * 4 + n.x * 5, y: p.y - t.y * 4 + n.y * 5 };
  const b = { x: p.x - t.x * 4 - n.x * 5, y: p.y - t.y * 4 - n.y * 5 };
  return `${tip.x},${tip.y} ${a.x},${a.y} ${b.x},${b.y}`;
}

export function WeeklyLoop() {
  return (
    <section
      id="loop"
      className="scroll-mt-[150px] overflow-hidden rounded-lg border border-[var(--color-border-light)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
    >
      <header className="border-b border-[var(--color-divider)] px-5 py-4">
        <h3 className="text-[19px] font-bold leading-snug tracking-tight text-[var(--color-text-primary)]">
          {LOOP_TITLE}
        </h3>
        <p className="mt-1.5 max-w-[68ch] text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
          {LOOP_LEAD}
        </p>
      </header>

      <div className="bg-[var(--color-surface-alt)] px-4 py-5">
        <figure>
          <div className="overflow-x-auto">
            <svg
              viewBox="0 0 720 570"
              role="img"
              aria-label="A weekly loop of eight steps. Monday analyse at ad-set level then decide kill keep or scale. Tuesday direct to the gap, source language and spend, audit through four gates. Wednesday produce the survivors multiplied by three. Thursday launch into a committed window. Friday check delivery only. Friday's output returns to Monday."
              className="mx-auto h-auto w-full min-w-[560px] max-w-[640px]"
            >
              {/* the ring */}
              <circle
                cx={CX}
                cy={CY}
                r={R}
                fill="none"
                stroke="#ced0d4"
                strokeWidth="1.5"
              />

              {/* direction arrows between nodes */}
              {[-22.5, 67.5, 157.5, 247.5].map((a) => (
                <polygon key={a} points={arrowHead(a)} fill="#8a8d91" />
              ))}

              {/* centre */}
              <text x={CX} y={CY - 6} textAnchor="middle" fontSize="15" fontWeight="700" fill="#050505">
                One week
              </text>
              <text x={CX} y={CY + 14} textAnchor="middle" fontSize="11.5" fill="#65676b">
                Friday feeds Monday
              </text>

              {/* nodes */}
              {LOOP.map((n, i) => {
                const p = pos(nodeAngle(i));
                const ph = PHASE[i];
                return (
                  <g key={n.label}>
                    <rect
                      x={p.x - BOX_W / 2}
                      y={p.y - BOX_H / 2}
                      width={BOX_W}
                      height={BOX_H}
                      rx="7"
                      fill={ph.fill}
                      stroke={ph.stroke}
                      strokeWidth="1.5"
                    />
                    <text
                      x={p.x}
                      y={p.y - 14}
                      textAnchor="middle"
                      fontSize="9.5"
                      fontWeight="700"
                      letterSpacing="0.06em"
                      fill={ph.text}
                    >
                      {n.day.toUpperCase()}
                    </text>
                    <text x={p.x} y={p.y + 3} textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#050505">
                      {n.label}
                    </text>
                    <text x={p.x} y={p.y + 18} textAnchor="middle" fontSize="9.5" fill="#65676b">
                      {n.detail}
                    </text>
                  </g>
                );
              })}

              {/* phase legend */}
              <g>
                {[
                  { x: 96, label: "read", fill: "#e7f0fe", stroke: "#1877F2" },
                  { x: 216, label: "curate", fill: "#fdf3e3", stroke: "#f5a623" },
                  { x: 356, label: "make and ship", fill: "#e3f1df", stroke: "#1a7f37" },
                  { x: 522, label: "check", fill: "#f0f2f5", stroke: "#8a8d91" },
                ].map((l) => (
                  <g key={l.label}>
                    <rect x={l.x} y="546" width="12" height="12" rx="3" fill={l.fill} stroke={l.stroke} strokeWidth="1.4" />
                    <text x={l.x + 18} y="556" fontSize="11.5" fill="#65676b">
                      {l.label}
                    </text>
                  </g>
                ))}
              </g>
            </svg>
          </div>
          <figcaption className="mt-2 text-center text-[12px] leading-snug text-[var(--color-text-secondary)]">
            {LOOP_CLOSE}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
