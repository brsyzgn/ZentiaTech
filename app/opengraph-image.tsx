import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ZentiaTech — Profesyonel yazılım ve teknoloji çözümleri";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #071426 0%, #0b1f3a 50%, #132b4f 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          ZentiaTech
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Web, E-Ticaret, Yapay Zeka ve Oyun Geliştirme
        </div>
      </div>
    ),
    { ...size }
  );
}
