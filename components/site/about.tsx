import {
  BadgeCheck,
  CheckCircle2,
  Clock,
  HandCoins,
  Sparkles,
  UserCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { BrandMark } from "@/components/site/brand-mark";
import { site } from "@/components/site/site-config";

type Bullet = { icon: LucideIcon; title: string; description: string };

const bullets: Bullet[] = [
  {
    icon: BadgeCheck,
    title: "חשמלאי מוסמך",
    description: "בעל רישיון חשמלאי מוסמך מטעם משרד התשתיות.",
  },
  {
    icon: CheckCircle2,
    title: "אחריות מלאה",
    description: "אחריות על כל עבודה ושירות שאנחנו מספקים.",
  },
  {
    icon: HandCoins,
    title: "מחירים שקופים",
    description: "הצעת מחיר מסודרת מראש — בלי הפתעות בחשבון.",
  },
  {
    icon: Clock,
    title: "הגעה מהירה",
    description: "זמינות גבוהה לכל פנייה ושירות חירום 24/7.",
  },
  {
    icon: Wrench,
    title: "ציוד איכותי",
    description: "עבודה רק עם רכיבים תקניים מהמותגים המובילים.",
  },
  {
    icon: UserCheck,
    title: "שירות אישי",
    description: "יחס אישי, ליווי צמוד והקשבה לכל לקוח ולקוח.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-border/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            למה דווקא {site.brand}?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            מקצועיות, אמינות ושירות שלא מתפשרים
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            עם מעל {site.yearsExperience} שנות ניסיון ויותר מ־
            {site.jobsCompleted.toLocaleString("he-IL")} עבודות מוצלחות, אנחנו
            דואגים שהחשמל בבית ובעסק שלכם יעבוד בצורה בטוחה, חכמה ויעילה.
          </p>

          <ul className="mt-8 divide-y divide-border/60 border-y border-border/60">
            {bullets.map((bullet) => (
              <li key={bullet.title} className="flex items-start gap-3 py-3">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <bullet.icon className="size-4" />
                </span>
                <div>
                  <p className="font-semibold leading-tight">{bullet.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {bullet.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-3">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-accent blur-3xl" />
          <div className="relative rounded-3xl border border-border/60 bg-card/80 p-3 shadow-xl shadow-primary/5 backdrop-blur">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/40 to-background">
              <div
                aria-hidden
                className="absolute inset-0 bg-grid opacity-50"
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 size-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--primary)_22%,transparent)_0%,transparent_70%)] blur-2xl"
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
                <BrandMark
                  className="size-20 rounded-2xl shadow-2xl shadow-primary/30"
                  iconClassName="size-10"
                />
                <p className="text-2xl font-bold tracking-tight">
                  {site.brand}
                </p>
                <p className="max-w-xs text-sm text-muted-foreground">
                  תמונת הצוות / רכב השירות / עבודה אופיינית — placeholder
                </p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3 px-1">
              <Pill value={`+${site.yearsExperience}`} label="שנות ניסיון" />
              <Pill
                value={`+${site.jobsCompleted.toLocaleString("he-IL")}`}
                label="עבודות"
              />
              <Pill value="24/7" label="חירום" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-border/60 bg-background/80 px-2 py-3 text-center">
      <span className="bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-lg font-extrabold text-transparent">
        {value}
      </span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}
