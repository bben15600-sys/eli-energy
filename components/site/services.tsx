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
      "תשתיות חשמל למפעלי פארמה. ISO 14644, GMP-ready. עמידה בתקנים מחמירים.",
  },
  {
    icon: Layers,
    title: "תכנון וביצוע",
    description:
      "פרוייקטים מורכבים. החלפת לוחות, שיפור תשתיות. עבודה בתאום מלא.",
  },
  {
    icon: Wrench,
    title: "תיקון וחלפיות",
    description:
      "אבחון מהיר, החלפות, בדיקות מקיפות. שירות חירום 24/7.",
  },
  {
    icon: ClipboardCheck,
    title: "בדיקות וכיבוי אש",
    description:
      "אישורים בדרישות כיבוי אש. עמידה בכל התקנים הרלוונטיים.",
  },
  {
    icon: Cog,
    title: "אחזקה ייצורית",
    description:
      "שיפור קווי ייצור. מינימום השבתה, מקסימום זמינות.",
  },
  {
    icon: Gauge,
    title: "תעשייה ומשרדים",
    description:
      "שירותי חשמל כוללים. מפעלים, משרדים, מתקנים.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header Block */}
        <div className="border-b border-border p-12 md:p-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            שירותים
          </h2>
          <div className="h-1 w-20 bg-primary mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            פתרונות חשמל מקיפים. תכנון, ביצוע, אחזקה.
          </p>
        </div>

        {/* Services Grid - Geometric Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`border-b border-r border-border p-10 md:p-12 ${
                idx % 2 === 0 ? "lg:border-r" : ""
              } ${idx >= services.length - (services.length % 3) ? "" : "border-b"}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
