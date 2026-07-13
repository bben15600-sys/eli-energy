import {
  ClipboardCheck,
  Cog,
  FlaskConical,
  Gauge,
  Layers,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: FlaskConical,
    title: "פארמה וחדרים נקיים",
    description:
      "תשתיות חשמל למפעלי פארמה ומתקני חדרים נקיים. ISO 14644, GMP-ready. עמידה בתקנים מחמירים ובדרישות כיבוי אש.",
  },
  {
    icon: Layers,
    title: "תכנון וביצוע פרוייקטים",
    description:
      "פרוייקטים מורכבים מקצה לקצה. החלפת לוחות, שיפור תשתיות קיימות, עבודה בתאום מלא עם דרישות הלקוח.",
  },
  {
    icon: Wrench,
    title: "תיקון קצרים והחלפת לוחות",
    description:
      "אבחון מהיר, החלפת לוחות חשמל, בדיקות מקיפות של ממסרי פחת והארקה. שירות חירום זמין 24/7.",
  },
  {
    icon: ClipboardCheck,
    title: "בדיקות שנתיות וכיבוי אש",
    description:
      "אישורים בהתאם לדרישות כיבוי אש, כולל מתח גבוה. עמידה מלאה בכל התקנים הרלוונטיים.",
  },
  {
    icon: Cog,
    title: "אחזקת קווי ייצור",
    description:
      "שירותי אחזקה ושיפור לקווי ייצור. מינימום השבתה, מקסימום זמינות ויעילות ייצור.",
  },
  {
    icon: Gauge,
    title: "תעשייה ובנייני משרדים",
    description:
      "שירותי חשמל ואחזקה כוללים. מפעלי תעשייה, בנייני משרדים, מתקנים תפעוליים.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            השירותים שלנו
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            פתרונות חשמל מקיפים לכל סוג של תעשייה. מתכנון משולב דרך ביצוע מקצועי ועד אישורים סופיים.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-border rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
