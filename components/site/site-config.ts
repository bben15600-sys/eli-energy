export const site = {
  brand: "ELI ENERGY",
  brandFull: "ELI ENERGY SOLUTIONS",
  ownerName: "אלי דדון",
  licenseNumber: "—",
  tagline: "חשמל תעשייתי בהתמחות פארמה וחדרים נקיים",
  description:
    "חשמלאי תעשייתי מוסמך בישראל — 20 שנות ניסיון בתשתיות חשמל לפארמה, חדרים נקיים ומתח גבוה. ניהול פרוייקטים מורכבים, עמידה ב-GMP ובדרישות כיבוי אש.",
  phone: "054-472-8292",
  whatsapp: "972544728292",
  email: "eli.energ@outlook.com",
  area: "תעשייה — כל הארץ",
  yearsExperience: 20,
  jobsCompleted: 250,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://eli-energy.vercel.app",
} as const;

export const nav = [
  { href: "#services", label: "שירותים" },
  { href: "#about", label: "עלינו" },
  { href: "#testimonials", label: "ביקורות" },
  { href: "#process", label: "תהליך העבודה" },
  { href: "#contact", label: "צור קשר" },
] as const;

// Will be created public/projects/. Add entries in components/site/gallery.tsx
// to display them. The Gallery section auto-hides when empty.
