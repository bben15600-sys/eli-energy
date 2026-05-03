import { ClipboardList, PhoneCall, ShieldCheck, Wrench } from "lucide-react";
import { SpotlightCard } from "@/components/site/spotlight-card";

const steps = [
  {
    icon: PhoneCall,
    title: "צור קשר",
    description: "מתקשרים, שולחים הודעה או ממלאים טופס — ואנחנו חוזרים מיד.",
  },
  {
    icon: ClipboardList,
    title: "הצעת מחיר",
    description: "בודקים את העבודה ושולחים הצעת מחיר ברורה ומסודרת.",
  },
  {
    icon: Wrench,
    title: "ביצוע",
    description: "מגיעים בזמן, עובדים נקי ובטוח, ומסיימים בלוחות זמנים מוסכמים.",
  },
  {
    icon: ShieldCheck,
    title: "אחריות",
    description: "אחריות מלאה על העבודה — ואנחנו זמינים גם אחרי הסיום.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="border-b border-border/60 bg-accent/20 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            איך זה עובד
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            תהליך פשוט וישיר — מהפנייה הראשונה ועד האחריות שאחרי.
          </p>
        </div>

        <div className="relative mt-16 hidden lg:block">
          <div
            aria-hidden
            className="absolute inset-x-12 top-5 h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent"
          />
          <div className="grid grid-cols-4 gap-8">
            {steps.map((_, i) => (
              <div
                key={i}
                className="flex justify-center"
                style={{ pointerEvents: "none" }}
              >
                <span className="relative flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground ring-4 ring-background shadow-md shadow-primary/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-6 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <li key={step.title}>
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col gap-3 p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner shadow-primary/10">
                      <step.icon className="size-5" />
                    </span>
                    <span className="font-mono text-3xl font-bold text-primary/15 lg:hidden">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </SpotlightCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
