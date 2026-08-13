// Near-identical creatives are grouped and compete as one entry, so nine
// variations buy roughly one shot at delivery. Three genuinely separate
// concepts buy three. The left stack is drawn identical on purpose.

const VARIANTS = Array.from({ length: 9 }, (_, i) => ({
  x: 44 + (i % 3) * 66,
  y: 78 + Math.floor(i / 3) * 40,
}));

const CONCEPTS = [
  { x: 392, label: "Benefit lead", tone: "#1877F2" },
  { x: 480, label: "Problem lead", tone: "#1a7f37" },
  { x: 568, label: "Story lead", tone: "#b26a00" },
];

export function ContainerCollapse() {
  return (
    <figure>
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 700 330"
          role="img"
          aria-label="Nine near-identical variations of one ad collapse into a single container and compete as one entry. Three genuinely separate concepts stay separate and compete as three entries."
          className="mx-auto h-auto w-full min-w-[560px] max-w-[680px]"
        >
          {/* divider */}
          <line x1="350" y1="46" x2="350" y2="300" stroke="#dadde1" strokeWidth="1" strokeDasharray="4 5" />

          {/* ── LEFT: nine variations ───────────────────────── */}
          <text x="176" y="38" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#050505">
            9 variations of one ad
          </text>
          <text x="176" y="56" textAnchor="middle" fontSize="11" fill="#8a8d91">
            new hooks, new thumbnails, same ad
          </text>

          {VARIANTS.map((v, i) => (
            <rect
              key={i}
              x={v.x}
              y={v.y}
              width="54"
              height="30"
              rx="4"
              fill="#1877F2"
              fillOpacity="0.16"
              stroke="#1877F2"
              strokeOpacity="0.45"
              strokeWidth="1"
            />
          ))}

          <path d="M176 208 L176 226 M170 220 L176 227 L182 220" stroke="#8a8d91" strokeWidth="1.6" fill="none" />

          <rect x="96" y="234" width="160" height="40" rx="6" fill="#e4e6eb" stroke="#8a8d91" strokeWidth="1.5" />
          <text x="176" y="253" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#65676b">
            one container
          </text>
          <text x="176" y="267" textAnchor="middle" fontSize="10.5" fill="#8a8d91">
            grouped by similarity
          </text>

          <text x="176" y="296" textAnchor="middle" fontSize="13" fontWeight="700" fill="#b26a00">
            1 entry in the auction
          </text>

          {/* ── RIGHT: three concepts ───────────────────────── */}
          <text x="524" y="38" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#050505">
            3 distinct concepts
          </text>
          <text x="524" y="56" textAnchor="middle" fontSize="11" fill="#8a8d91">
            one insight, three different builds
          </text>

          {CONCEPTS.map((c) => (
            <g key={c.label}>
              <rect
                x={c.x}
                y="88"
                width="64"
                height="60"
                rx="5"
                fill={c.tone}
                fillOpacity="0.16"
                stroke={c.tone}
                strokeOpacity="0.6"
                strokeWidth="1.4"
              />
              <text x={c.x + 32} y="166" textAnchor="middle" fontSize="10" fontWeight="600" fill="#65676b">
                {c.label}
              </text>

              <path
                d={`M${c.x + 32} 176 L${c.x + 32} 226 M${c.x + 26} 220 L${c.x + 32} 227 L${c.x + 38} 220`}
                stroke="#8a8d91"
                strokeWidth="1.6"
                fill="none"
              />

              <rect
                x={c.x + 2}
                y="234"
                width="60"
                height="40"
                rx="6"
                fill="#ffffff"
                stroke={c.tone}
                strokeWidth="1.5"
              />
              <text x={c.x + 32} y="258" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={c.tone}>
                own
              </text>
            </g>
          ))}

          <text x="524" y="296" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1a7f37">
            3 entries in the auction
          </text>
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-[12px] leading-snug text-[var(--color-text-secondary)]">
        Volume on an unproven idea multiplies a loss. Volume belongs underneath
        something already proven.
      </figcaption>
    </figure>
  );
}
