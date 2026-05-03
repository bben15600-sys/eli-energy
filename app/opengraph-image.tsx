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
            "linear-gradient(135deg, #eff4ff 0%, #dde9ff 60%, #bcd1ff 100%)",
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
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#1a223e",
              letterSpacing: -1,
            }}
          >
            {site.brand}
          </span>
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
              fontSize: 84,
              fontWeight: 800,
              color: "#1a223e",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {site.tagline}
          </span>
          <span
            style={{
              fontSize: 36,
              color: "#1f3aaa",
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
