import { ClipboardList, PhoneCall, ShieldCheck, Wrench } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    title: "צור קשר",
    description: "התקשרו, שלחו הודעה או ממלאו טופס. חוזרים מיד.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "סקר והצעה",
    description: "סקר מפורט, הערכת לוחות זמנים. הצעה מפורטת וברורה.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "ביצוע נקי",
    description: "עבודה בטוחה עם תכנון מדוקדק. זמינות 24/7.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "אחריות מלאה",
    description: "אחריות על העבודה. זמינים גם אחרי הסיום.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header Block */}
        <div className="border-b border-border p-12 md:p-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            תהליך העבודה
          </h2>
          <div className="h-1 w-20 bg-primary mb-6"></div>
          <p className="text-lg text-muted-foreground">
            ארבע שלבים מובנים וברורים.
          </p>
        </div>

        {/* Process Grid - Geometric Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`border-b md:border-b-0 border-r border-border p-10 md:p-12 ${
                idx === 3 ? "" : ""
              }`}
            >
              {/* Step Number */}
              <div className="mb-8">
                <div className="w-16 h-16 border-2 border-primary flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
