import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/components/site/site-config";

export function Hero() {
  return (
    <section id="top" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <div className="grid grid-cols-12 gap-8 items-end">
          {/* Main headline - left side */}
          <div className="col-span-12 md:col-span-7">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-foreground mb-8">
              חשמל תעשייתי,
              <br />
              ברמה מקצועית.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              20 שנות ניסיון בתשתיות חשמל לפארמה, חדרים נקיים ומתח גבוה. עמידה מלאה בתקנים, בדרישות GMP וכיבוי אש.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                render={<a href={`tel:${site.phone}`} />}
                className="h-12 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Phone className="mr-2" />
                התקשרו עכשיו
              </Button>
              <Button
                variant="outline"
                render={
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="h-12 px-8 text-base font-semibold border border-border"
              >
                <MessageCircle className="mr-2" />
                וואטסאפ
              </Button>
            </div>
          </div>

          {/* Stats - right side */}
          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-12">
            <div className="border-r border-border pr-8">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {site.yearsExperience}+
              </div>
              <p className="text-sm text-muted-foreground">שנות ניסיון</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {site.jobsCompleted}+
              </div>
              <p className="text-sm text-muted-foreground">פרוייקטים הושלמו</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <dt className="order-2 text-xs text-muted-foreground md:text-sm">
        {label}
      </dt>
      <dd className="order-1 text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
        {value}
      </dd>
    </div>
  );
}
