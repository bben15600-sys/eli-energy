import { CheckCircle2, Sparkles } from "lucide-react";
import { BrandMark } from "@/components/site/brand-mark";
import { site } from "@/components/site/site-config";

const bullets = [
  {
    title: "חשמלאי מוסמך",
    description: "בעל רישיון חשמלאי מוסמך מטעם משרד התשתיות.",
  },
  {
    title: "אחריות מלאה",
    description: "אחריות על כל עבודה ושירות שאנחנו מספקים.",
  },
  {
    title: "מחירים שקופים",
    description: "הצעת מחיר מסודרת מראש — בלי הפתעות בחשבון.",
  },
  {
    title: "הגעה מהירה",
    description: "זמינות גבוהה לכל פנייה ושירות חירום 24/7.",
  },
  {
    title: "ציוד איכותי",
    description: "עבודה רק עם רכיבים תקניים מהמותגים המובילים.",
  },
  {
    title: "שירות אישי",
    description: "יחס אישי, ליווי צמוד והקשבה לכל לקוח ולקוח.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border/60 bg-accent/30 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <Sparkles className="size-4" />
            למה דווקא {site.brand}?
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            מקצועיות, אמינות ושירות שלא מתפשרים
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            עם מעל {site.yearsExperience} שנות ניסיון ויותר מ־
            {site.jobsCompleted.toLocaleString("he-IL")} עבודות מוצלחות, אנחנו
            דואגים שהחשמל בבית ובעסק שלכם יעבוד בצורה בטוחה, חכמה ויעילה.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <li key={bullet.title} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold leading-tight">{bullet.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {bullet.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/15 via-background to-accent">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--primary)/12%,transparent_55%)]"
          />
          <div className="relative flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
            <BrandMark className="size-16 rounded-2xl" iconClassName="size-9" />
            <p className="text-lg font-semibold">{site.brand}</p>
            <p className="max-w-xs text-sm text-muted-foreground">
              תמונת הצוות / רכב השירות / עבודה אופיינית — placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
