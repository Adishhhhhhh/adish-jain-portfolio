import { ImageResponse } from "next/og";

/**
 * The link preview card.
 *
 * The old one was a quote on a white card, which is what every other link in a
 * LinkedIn feed looks like. This one is the Ad Library interface itself, mid
 * search, with a person's name typed into the advertiser field and 148 results
 * under it. The double take is the point: that field is for brands, and nobody
 * has 148 ads sitting behind their own name.
 *
 * Sized for the feed, not for a monitor. LinkedIn renders this around 550px
 * wide, so only two things are built to survive the shrink: the name in the
 * search field and the result count. Everything else is texture.
 *
 * The cards along the bottom are clipped by the frame on purpose, so the
 * library reads as deeper than the crop.
 */

export const alt =
  "The Meta Ad Library interface with Adish Jain typed into the advertiser search, returning ~148 results";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same avatar colours the site gives each brand, so the cards along the bottom
// match what a visitor actually lands on.
const CARDS: { name: string; color: string }[] = [
  { name: "PetHonesty", color: "#b45309" },
  { name: "NeuroGum", color: "#0e7490" },
  { name: "Ancient Nutrition", color: "#4d7c0f" },
  { name: "MitoQ", color: "#7c2d12" },
];

function Pill({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: 66,
        padding: "0 24px",
        borderRadius: 10,
        border: "1px solid #ced0d4",
        background: "#ffffff",
        color: "#050505",
        fontSize: 24,
        fontWeight: 600,
      }}
    >
      {label}
    </div>
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f0f2f5",
          fontFamily: "sans-serif",
        }}
      >
        {/* Product chrome */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#ffffff",
            borderBottom: "1px solid #dadde1",
            padding: "20px 56px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                width: 42,
                height: 42,
                borderRadius: 999,
                background: "#1877f2",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              AJ
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 32,
                fontWeight: 700,
                color: "#050505",
                letterSpacing: -0.5,
              }}
            >
              Ad Library
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#e4e6eb",
              color: "#65676b",
              fontSize: 21,
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: 999,
            }}
          >
            Spec work
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "38px 56px 0",
          }}
        >
          {/* The search, as if it has just been run */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Pill label="India" />
            <Pill label="All ads" />
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                gap: 16,
                height: 66,
                borderRadius: 999,
                border: "1px solid #ced0d4",
                background: "#ffffff",
                padding: "0 28px",
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#65676b"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <div style={{ display: "flex", fontSize: 31, color: "#050505" }}>
                Adish Jain
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                padding: "0 36px",
                borderRadius: 10,
                background: "#1877f2",
                color: "#ffffff",
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              Search
            </div>
          </div>

          {/* The number that has to survive the thumbnail */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: 34 }}>
            <div
              style={{
                display: "flex",
                fontSize: 88,
                fontWeight: 800,
                color: "#050505",
                letterSpacing: -3,
                lineHeight: 1,
              }}
            >
              ~148 results
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                color: "#65676b",
                marginTop: 16,
              }}
            >
              None of them ran. Every one shows the thinking.
            </div>
          </div>

          {/* Clipped by the bottom edge, so the library reads as deeper */}
          <div style={{ display: "flex", gap: 20, marginTop: 34 }}>
            {CARDS.map((card) => (
              <div
                key={card.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 257,
                  height: 300,
                  borderRadius: "10px 10px 0 0",
                  border: "1px solid #dadde1",
                  borderBottom: "none",
                  background: "#ffffff",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: 28,
                      height: 28,
                      borderRadius: 999,
                      background: card.color,
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    {card.name.charAt(0)}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        display: "flex",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#050505",
                      }}
                    >
                      {card.name}
                    </div>
                    <div style={{ display: "flex", fontSize: 13, color: "#65676b" }}>
                      Sponsored
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    background: card.color,
                    opacity: 0.9,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
