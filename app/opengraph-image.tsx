import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/components/site/site-config";

export const alt = `${site.brandFull} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadHeebo(weight: 700 | 900) {
  const url = `https://fonts.googleapis.com/css2?family=Heebo:wght@${weight}&display=swap`;
  const css = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  }).then((r) => r.text());
  const fontUrl = css.match(/src: url\((.+?)\) format/)?.[1];
  if (!fontUrl) throw new Error("Heebo font URL not found");
  return fetch(fontUrl).then((r) => r.arrayBuffer());
}

// Satori doesn't support Hebrew RTL properly — manually reverse so it displays correctly
function rtl(text: string): string {
  return text.split(" ").reverse().map((word) => [...word].reverse().join("")).join(" ");
}

export default async function OG() {
  const [logoBuffer, heeboBold, heeboBlack] = await Promise.all([
    readFile(path.join(process.cwd(), "public", "brand", "logo-circle.png")),
    loadHeebo(700),
    loadHeebo(900),
  ]);

  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1A2942 0%, #0F1D35 60%, #1A2942 100%)",
          fontFamily: "Heebo",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span
              style={{
                fontSize: 92,
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: -2,
                lineHeight: 1,
              }}
            >
              ELI ENERGY
            </span>
            <span
              style={{
                fontSize: 30,
                fontWeight: 900,
                color: "#F5B819",
                letterSpacing: 12,
              }}
            >
              SOLUTIONS
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              alignItems: "flex-end",
            }}
          >
            <span
              style={{
                fontSize: 56,
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: -1,
              }}
            >
              {rtl("שירותי חשמל מקצועיים")}
            </span>
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#F5B819",
              }}
            >
              {rtl("חשמלאי מוסמך · שירות חירום")} 24/7
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 380,
            height: 470,
            marginLeft: 40,
          }}
        >
          <img
            src={logoSrc}
            width={380}
            height={380}
            style={{
              width: 380,
              height: 380,
              borderRadius: 999,
              boxShadow: "0 30px 80px rgba(245, 184, 25, 0.3)",
            }}
            alt=""
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Heebo", data: heeboBold, weight: 700, style: "normal" },
        { name: "Heebo", data: heeboBlack, weight: 900, style: "normal" },
      ],
    },
  );
}
