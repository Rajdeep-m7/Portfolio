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
          <svg width="64" height="64" viewBox="0 0 64 64">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#6366f1" />
                <stop offset="1" stopColor="#3730a3" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="15" fill="url(#g)" />
            <g fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 47V17h9a7.5 7.5 0 0 1 0 15H12M20 32l8 15" />
              <path d="M36 47V17l8.5 13L53 17v30" />
            </g>
          </svg>
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
