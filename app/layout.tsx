import type { Metadata } from "next";
import { Heebo, Cinzel } from "next/font/google";
import { JsonLd } from "@/components/site/json-ld";
import { site } from "@/components/site/site-config";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-sans",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — ${site.tagline}`,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  keywords: [
    "חשמלאי תעשייתי",
    "חשמלאי מוסמך",
    "חשמל פארמה",
    "חדרים נקיים",
    "מתח גבוה",
    "החלפת לוח חשמל",
    "בדיקות שנתיות",
    "אישור כיבוי אש",
    "אחזקת קווי ייצור",
    "ISO 14644",
    "GMP",
    site.area,
    site.brand,
  ],
  alternates: {
    canonical: new URL("/", site.url).href,
    languages: { "he-IL": new URL("/", site.url).href },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/og.png?v=industrial-v2",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${site.brand} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — ${site.tagline}`,
    description: site.description,
    images: ["/og.png?v=industrial-v2"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
