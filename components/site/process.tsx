import { ClipboardList, PhoneCall, ShieldCheck, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

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
      className="border-b border-border/60 py-20 md:py-28"
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

        <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <Card key={step.title} className="gap-4 p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <step.icon className="size-5" />
                </span>
                <span className="font-mono text-3xl font-bold text-primary/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </ol>
      </div>
    </section>
  );
}
