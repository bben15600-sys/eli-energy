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
  size: "sm" | "md" | "lg";
  accent?: boolean;
};

const services: Service[] = [
  {
    icon: ShieldAlert,
    title: "שירות חירום 24/7",
    description:
      "זמינות מלאה כל היום, כל הלילה. הגעה מהירה לכל קריאה דחופה — תקלות חשמל, קצרים, וכל מצב חירום.",
    size: "lg",
    accent: true,
  },
  {
    icon: Zap,
    title: "התקנות חשמל",
    description:
      "התקנה ושדרוג של מערכות חשמל לבית ולעסק — לוחות, שקעים, נקודות ומעגלים.",
    size: "md",
  },
  {
    icon: Wrench,
    title: "תיקוני חשמל",
    description: "אבחון ותיקון תקלות, קצרים, רגישות ופחתים.",
    size: "sm",
  },
  {
    icon: Cpu,
    title: "סמארט הום",
    description: "בית חכם — תאורה, תריסים ומיזוג בשליטה מהטלפון.",
    size: "sm",
  },
  {
    icon: Lightbulb,
    title: "תאורה ועיצוב",
    description:
      "תכנון ויישום פתרונות תאורה — תאורה דקורטיבית, LED ופתרונות חיסכון.",
    size: "md",
  },
  {
    icon: Home,
    title: "שיפוצים ובנייה",
    description:
      "ליווי חשמל מלא בשיפוצים ובנייה — מתכנון מוקדם ועד מסירה.",
    size: "md",
  },
];

const sizeClass: Record<Service["size"], string> = {
  sm: "lg:col-span-2",
  md: "lg:col-span-3",
  lg: "lg:col-span-4 lg:row-span-1",
};

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-border/60 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[260px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_18%,transparent)_0%,transparent_60%)] blur-2xl"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-l from-foreground via-foreground to-primary/80 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            השירותים שלנו
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            פתרונות חשמל מקצה לקצה — לבית, לעסק ולפרויקטים גדולים.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-8 lg:gap-5 lg:auto-rows-[12rem]">
          {services.map((service) => (
            <SpotlightCard
              key={service.title}
              className={`${sizeClass[service.size]} ${service.accent ? "lg:row-span-2" : ""}`}
            >
              <div
                className={`flex h-full flex-col gap-3 p-6 ${
                  service.accent
                    ? "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
                    : ""
                }`}
              >
                <span
                  className={`inline-flex size-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                    service.accent
                      ? "border-primary/30 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30"
                      : "border-primary/15 bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner shadow-primary/10 group-hover/spotlight:border-primary/40 group-hover/spotlight:from-primary group-hover/spotlight:to-primary group-hover/spotlight:text-primary-foreground group-hover/spotlight:shadow-md group-hover/spotlight:shadow-primary/30"
                  }`}
                >
                  <service.icon className="size-5" />
                </span>

                <h3
                  className={`font-semibold tracking-tight ${
                    service.accent ? "text-xl md:text-2xl" : "text-lg"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`leading-relaxed text-muted-foreground ${
                    service.accent ? "md:text-base" : "text-sm"
                  }`}
                >
                  {service.description}
                </p>

                {service.accent ? (
                  <div className="mt-auto pt-2">
                    <span className="animate-ring-pulse inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                      <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                      זמינים עכשיו
                    </span>
                  </div>
                ) : null}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
