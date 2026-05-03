"use client";

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
import { SpotlightCard } from "@/components/site/spotlight-card";
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
    <section id="about" className="relative overflow-hidden border-b border-border/60 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[260px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_18%,transparent)_0%,transparent_60%)] blur-2xl"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            למה דווקא {site.brand}?
          </span>
          <h2 className="mt-4 bg-gradient-to-l from-foreground via-foreground to-primary/80 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            מקצועיות, אמינות ושירות שלא מתפשרים
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            עם מעל {site.yearsExperience} שנות ניסיון ויותר מ־
            {site.jobsCompleted.toLocaleString("he-IL")} עבודות מוצלחות, אנחנו
            דואגים שהחשמל בבית ובעסק שלכם יעבוד בצורה בטוחה, חכמה ויעילה.
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((bullet, i) => (
              <li
                key={bullet.title}
                className="group/bullet flex items-start gap-4 rounded-lg border border-border/40 bg-card/30 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/20 to-primary/10 text-primary transition-all duration-300 group-hover/bullet:border-primary/40 group-hover/bullet:from-primary/30 group-hover/bullet:to-primary/20 group-hover/bullet:shadow-md group-hover/bullet:shadow-primary/20">
                  <bullet.icon className="size-5" />
                </span>
                <div className="flex-1">
                  <p className="font-semibold leading-tight">{bullet.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {bullet.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-3">
          <SpotlightCard className="h-full">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/20 via-accent/40 to-background p-6">
              <div
                aria-hidden
                className="absolute inset-0 bg-grid opacity-50 rounded-2xl"
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 size-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--primary)_22%,transparent)_0%,transparent_70%)] blur-2xl"
              />
              <div className="relative flex h-full flex-col items-center justify-between gap-8 py-8">
                <div className="flex flex-col items-center gap-4 text-center">
                  <BrandMark
                    className="size-20 rounded-2xl shadow-2xl shadow-primary/30"
                    iconClassName="size-10"
                  />
                  <div>
                    <p className="text-2xl font-bold tracking-tight">
                      {site.brand}
                    </p>
                    <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                      תמונת הצוות / רכב השירות / עבודה אופיינית — placeholder
                    </p>
                  </div>
                </div>

                <div className="w-full grid grid-cols-3 gap-3">
                  <Pill value={`+${site.yearsExperience}`} label="שנות ניסיון" />
                  <Pill
                    value={`+${site.jobsCompleted.toLocaleString("he-IL")}`}
                    label="עבודות"
                  />
                  <Pill value="24/7" label="חירום" />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

function Pill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 px-3 py-3 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:from-primary/20 hover:to-primary/10">
      <span className="bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-lg font-extrabold text-transparent">
        {value}
      </span>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
}
