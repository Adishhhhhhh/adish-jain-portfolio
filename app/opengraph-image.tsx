import { ImageResponse } from "next/og";

// Branded link-preview card. Renders the concept (Ad Library framing + the
// hero line) so a shared link lands like the portfolio itself.

export const alt = "Ad Library — Adish Jain, Creative Strategist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top chrome row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #dadde1",
            paddingBottom: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#050505", letterSpacing: -1 }}>
            Portfolio
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#65676b" }}>
            Ad Library
          </div>
        </div>

        {/* Spec pill */}
        <div style={{ display: "flex", marginTop: 48 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#e4e6eb",
              color: "#65676b",
              fontSize: 22,
              fontWeight: 600,
              padding: "8px 18px",
              borderRadius: 999,
            }}
          >
            Spec
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 28,
            fontSize: 62,
            fontWeight: 800,
            lineHeight: 1.08,
            color: "#050505",
            letterSpacing: -1.5,
            maxWidth: 1000,
          }}
        >
          <span>You don&apos;t lose the auction.</span>
          <span>You lose the audition before it.</span>
        </div>

        {/* Footer identity */}
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#1877f2",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            AJ
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700, color: "#050505" }}>
              Adish Jain
            </span>
            <span style={{ fontSize: 22, color: "#65676b" }}>
              Creative Strategist
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
