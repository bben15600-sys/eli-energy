import {
  Award,
  BadgeCheck,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Cert = { icon: LucideIcon; title: string; subtitle: string };

const certs: Cert[] = [
  {
    icon: BadgeCheck,
    title: "חשמלאי מוסמך",
    subtitle: "רישיון משרד התשתיות",
  },
  {
    icon: ShieldCheck,
    title: "מבוטח",
    subtitle: "ביטוח אחריות צד ג׳",
  },
  {
    icon: Award,
    title: "אחריות מלאה",
    subtitle: "על כל עבודה ושירות",
  },
  {
    icon: Wrench,
    title: "תקן ישראלי",
    subtitle: "עבודה לפי חוק החשמל",
  },
];

export function CertificationsStrip() {
  return (
    <section
      aria-label="הסמכות ואמינות"
      className="border-b border-border/60 bg-card/30 py-8 md:py-10"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {certs.map((cert) => (
            <li
              key={cert.title}
              className="group flex items-center gap-3 rounded-xl border border-border/50 bg-background/60 p-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-background/80 hover:shadow-md hover:shadow-primary/10"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:from-primary/25 group-hover:to-primary/10">
                <cert.icon className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight">
                  {cert.title}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {cert.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
