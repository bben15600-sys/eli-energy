import {
  Cpu,
  Home,
  Lightbulb,
  ShieldAlert,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SpotlightCard } from "@/components/site/spotlight-card";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Zap,
    title: "התקנות חשמל",
    description:
      "התקנה ושדרוג של מערכות חשמל לבית ולעסק — לוחות, שקעים, נקודות ומעגלים חדשים.",
  },
  {
    icon: Wrench,
    title: "תיקוני חשמל",
    description:
      "אבחון ותיקון של תקלות חשמל, קצרים, רגישות ופחתים — במהירות ובאמינות.",
  },
  {
    icon: ShieldAlert,
    title: "שירות חירום 24/7",
    description:
      "שירות חירום זמין כל היום, כל הלילה. הגעה מהירה לכל קריאה דחופה.",
  },
  {
    icon: Cpu,
    title: "סמארט הום",
    description:
      "מערכות בית חכם, בקרת תאורה, תריסים ומיזוג — שליטה מלאה מהטלפון.",
  },
  {
    icon: Lightbulb,
    title: "תאורה ועיצוב",
    description:
      "תכנון ויישום פתרונות תאורה — תאורה דקורטיבית, LED ופתרונות חיסכון באנרגיה.",
  },
  {
    icon: Home,
    title: "שיפוצים ובנייה",
    description:
      "ליווי חשמל מלא בשיפוצים ובנייה — מתכנון מוקדם ועד בדיקה ומסירה.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="border-b border-border/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            השירותים שלנו
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            פתרונות חשמל מקצה לקצה — לבית, לעסק ולפרויקטים גדולים.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <SpotlightCard key={service.title} className="h-full">
              <div className="flex h-full flex-col gap-3 p-6">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-primary/15 bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner shadow-primary/10 transition-all duration-300 group-hover/spotlight:border-primary/40 group-hover/spotlight:from-primary group-hover/spotlight:to-primary group-hover/spotlight:text-primary-foreground group-hover/spotlight:shadow-md group-hover/spotlight:shadow-primary/30">
                  <service.icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
