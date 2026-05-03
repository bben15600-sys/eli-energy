import { ImageResponse } from "next/og";
import { site } from "@/components/site/site-config";

export const alt = `${site.brand} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1A2942 0%, #0F1D35 60%, #1A2942 100%)",
          fontFamily: "system-ui, sans-serif",
          direction: "rtl",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "rgba(245, 184, 25, 0.12)",
              border: "2px solid rgba(245, 184, 25, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="#F5B819"
              stroke="#1A2942"
              strokeWidth="0.5"
              strokeLinejoin="round"
            >
              <path d="M14 2 L7 13 H11 L9.5 22 L17 11 H13 L14 2 Z" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontSize: 52,
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: -1,
                lineHeight: 1,
              }}
            >
              {site.brand}
            </span>
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#F5B819",
                letterSpacing: 4,
              }}
            >
              SOLUTIONS
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginTop: "auto",
          }}
        >
          <span
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            {site.tagline}
          </span>
          <span
            style={{
              fontSize: 32,
              color: "#F5B819",
              fontWeight: 500,
            }}
          >
            חשמלאי מוסמך • {site.area} • שירות חירום 24/7
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
