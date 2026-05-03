import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/components/site/site-config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,var(--accent),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_85%)]"
      />

      <div className="mx-auto max-w-6xl px-4 pt-14 pb-20 md:px-6 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-6 h-7 gap-1.5 rounded-full border-primary/20 bg-accent/40 px-3 text-[13px] text-accent-foreground"
          >
            <ShieldCheck />
            חשמלאי מוסמך • {site.area}
          </Badge>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            {site.brand}
            <span className="block text-primary">{site.tagline}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
            {site.description}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<a href={`tel:${site.phone}`} />}
              className="h-12 gap-2 rounded-full px-6 text-base"
            >
              <Phone /> התקשרו עכשיו
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
              className="h-12 gap-2 rounded-full px-6 text-base"
            >
              <MessageCircle /> הודעה בוואטסאפ
            </Button>
          </div>
        </div>

        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-4 rounded-2xl border border-border/60 bg-card/60 p-4 text-center backdrop-blur md:gap-6 md:p-6">
          <Stat value={`+${site.yearsExperience}`} label="שנות ניסיון" />
          <Stat
            value={`+${site.jobsCompleted.toLocaleString("he-IL")}`}
            label="עבודות שבוצעו"
          />
          <Stat value="24/7" label="שירות חירום" />
        </dl>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <dt className="order-2 text-xs text-muted-foreground md:text-sm">
        {label}
      </dt>
      <dd className="order-1 text-2xl font-bold text-foreground md:text-3xl">
        {value}
      </dd>
    </div>
  );
}
