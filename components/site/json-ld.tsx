import { site } from "@/components/site/site-config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Electrician", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.brandFull,
    alternateName: site.brand,
    description: site.description,
    slogan: site.tagline,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    founder: {
      "@type": "Person",
      name: site.ownerName,
      jobTitle: "חשמלאי תעשייתי מוסמך",
      ...(site.licenseNumber && site.licenseNumber !== "—"
        ? { hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: "license", identifier: site.licenseNumber } }
        : {}),
    },
    areaServed: [
      { "@type": "Country", name: "Israel" },
      { "@type": "AdministrativeArea", name: site.area },
    ],
    address: { "@type": "PostalAddress", addressCountry: "IL" },
    image: [`${site.url}/og.png`, `${site.url}/brand/logo.png`],
    logo: `${site.url}/brand/logo-mark.png`,
    priceRange: "₪₪₪",
    serviceType: [
      "חשמל תעשייתי",
      "תשתיות חדרים נקיים",
      "פארמה",
      "החלפת לוחות חשמל",
      "בדיקות שנתיות",
      "אישורי כיבוי אש",
      "מתח גבוה",
      "אחזקת קווי ייצור",
    ],
    knowsAbout: [
      "תקני חשמל",
      "חוק החשמל",
      "תקני כיבוי אש",
      "תקני חדרים נקיים",
      "GMP פארמה",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "07:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      // Add social profiles when available (Google Business Profile, Facebook, LinkedIn):
      // `https://www.google.com/maps/place/...`,
      // `https://www.facebook.com/...`,
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      areaServed: "IL",
      availableLanguage: ["Hebrew", "he"],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
