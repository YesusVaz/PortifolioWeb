import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f8f8f5",
          padding: 64,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 48,
            border: "6px solid #181811",
            padding: 56,
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(249,245,6,0.35) 0%, rgba(249,245,6,0) 55%)",
            }}
          />

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 64, fontWeight: 900, letterSpacing: -1, color: "#181811" }}>
              Yesus Vaz
            </div>
            <div style={{ fontSize: 34, fontWeight: 700, color: "#181811" }}>Full-Stack Developer</div>
            <div style={{ fontSize: 26, color: "#181811", opacity: 0.78 }}>
              Crafting Interactive Web Experiences.
            </div>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 18px",
                borderRadius: 999,
                background: "#f9f506",
                border: "4px solid #181811",
                fontWeight: 900,
                color: "#181811",
                fontSize: 20,
                letterSpacing: 0.2,
              }}
            >
              VIEW MY WORK
            </div>

            <div style={{ fontSize: 18, color: "#181811", opacity: 0.7 }}>Portfolio</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
