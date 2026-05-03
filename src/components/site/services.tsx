import {
  Hammer,
  Home as HomeIcon,
  Lightbulb,
  Plug,
  Siren,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Plug,
    title: "התקנות חשמל",
    description:
      "התקנה והתקנת מערכות חשמל לבית ולעסק — לוחות, שקעים, נקודות ומעגלים חדשים.",
  },
  {
    icon: Wrench,
    title: "תיקוני חשמל",
    description:
      "אבחון ותיקון של תקלות חשמל, קצרים, רגישות ופחתים — במהירות ובאמינות.",
  },
  {
    icon: Siren,
    title: "חירום 24/7",
    description:
      "שירות חירום זמין כל היום, כל הלילה. הגעה מהירה לכל קריאה דחופה.",
  },
  {
    icon: HomeIcon,
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
    icon: Hammer,
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
            <Card
              key={service.title}
              className="group/service gap-3 p-2 transition-all hover:-translate-y-0.5 hover:ring-primary/40"
            >
              <CardHeader className="px-4 pt-4">
                <span className="mb-3 inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover/service:bg-primary group-hover/service:text-primary-foreground">
                  <service.icon className="size-5" />
                </span>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <CardDescription className="leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
