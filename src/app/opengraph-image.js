import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

export const alt = `${site.name} — ${site.role}`;
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
          justifyContent: "space-between",
          padding: 72,
          background: "#ffffff",
          color: "#0f172a",
          border: "2px solid #e2e8f0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #e2e8f0",
              borderRadius: 12,
              background: "#f1f5f9",
              color: "#4f46e5",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: 26, color: "#475569", letterSpacing: 2, textTransform: "uppercase" }}>
            Portfolio
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 600, lineHeight: 1.05, letterSpacing: -3 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: -3, color: "#4f46e5" }}>
            {site.role}
          </div>
          <div style={{ fontSize: 30, color: "#475569", marginTop: 28 }}>
            React · Node.js · MongoDB · React Native · Generative AI
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#64748b", letterSpacing: 1 }}>{site.location}</div>
      </div>
    ),
    size,
  );
}
