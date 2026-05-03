import { Quote, Star } from "lucide-react";
import { SpotlightCard } from "@/components/site/spotlight-card";

type Testimonial = {
  quote: string;
  name: string;
  area: string;
  service: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "הגיע מהר מאוד לקריאת חירום בלילה, איתר את הבעיה תוך כמה דקות ותיקן הכל באותו ערב. שירות אדיב, מקצועי ומחיר הוגן.",
    name: "יעל כ.",
    area: "תל אביב",
    service: "תקלה דחופה",
  },
  {
    quote:
      "ביצע אצלנו שדרוג לוח חשמל מלא בבית פרטי. עבד נקי, הסביר כל שלב, ונתן אחריות בכתב. ממליצה בחום לכל מי שמחפש בעל מקצוע אמין.",
    name: "דניאל ר.",
    area: "רמת גן",
    service: "שדרוג לוח",
  },
  {
    quote:
      "הזמנו אותו להתקנת תאורה לעסק. תכנן יחד איתנו את הפריסה, נתן הצעת מחיר ברורה מראש ועמד בלוח הזמנים בדיוק. תוצאה מצוינת.",
    name: "אורן ב.",
    area: "פתח תקווה",
    service: "תאורה לעסק",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-b border-border/60 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[260px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_18%,transparent)_0%,transparent_60%)] blur-2xl"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-l from-foreground via-foreground to-primary/80 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            לקוחות מספרים
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            ביקורות אמיתיות מלקוחות שכבר בחרו בנו.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name} style={{ animationDelay: `${i * 80}ms` }}>
              <SpotlightCard className="h-full">
                <article className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <div
                      className="flex items-center gap-0.5 text-primary"
                      aria-label="5 מתוך 5 כוכבים"
                    >
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="size-4 fill-current"
                          aria-hidden
                        />
                      ))}
                    </div>
                    <Quote
                      aria-hidden
                      className="size-6 -scale-x-100 text-primary/25"
                    />
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-foreground/85">
                    {t.quote}
                  </p>

                  <footer className="flex items-center justify-between border-t border-border/50 pt-4">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="inline-flex size-10 items-center justify-center rounded-full border border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 text-sm font-bold text-primary"
                      >
                        {t.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold leading-tight">
                          {t.name}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {t.area}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {t.service}
                    </span>
                  </footer>
                </article>
              </SpotlightCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
