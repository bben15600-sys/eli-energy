export const site = {
  brand: "ELI ENERGY",
  tagline: "שירותי חשמל מקצועיים — לבית ולעסק",
  description:
    "חשמלאי מוסמך, מהיר ואמין. עבודה איכותית עם אחריות מלאה ושירות חירום 24/7.",
  phone: "050-0000000",
  whatsapp: "9725000000000",
  email: "info@eli-energy.example",
  area: "מרכז הארץ",
  yearsExperience: 10,
  jobsCompleted: 1500,
} as const;

export const nav = [
  { href: "#services", label: "שירותים" },
  { href: "#about", label: "עלינו" },
  { href: "#process", label: "תהליך העבודה" },
  { href: "#contact", label: "צור קשר" },
] as const;
