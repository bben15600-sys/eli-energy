import { ClipboardList, PhoneCall, ShieldCheck, Wrench } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    title: "צור קשר",
    description: "התקשרו, שלחו הודעה או ממלאו טופס. אנחנו חוזרים מיד.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "סקר והצעת מחיר",
    description:
      "סקר מפורט, הערכת לוחות זמנים ודרישות רגולטוריות. הצעה מפורטת עם תנאי ואחריות ברורים.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "ביצוע במינימום השבתה",
    description:
      "עבודה נקייה ובטוחה עם תכנון מדוקדק. זמינות בשעות שיא וסופי שבוע.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "אחריות וסיוע",
    description: "אחריות מלאה על העבודה. אנחנו זמינים גם אחרי תום הפרוייקט.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            איך זה עובד
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            תהליך פשוט וישיר. מהתקשרות ראשונה דרך סקר, ביצוע, ועד אחריות שלאחר הסיום.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-mono font-semibold text-primary">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
