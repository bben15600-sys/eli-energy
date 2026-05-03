import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/components/site/site-config";

const channels = [
  {
    icon: Phone,
    label: "טלפון",
    value: site.phone,
    href: `tel:${site.phone}`,
  },
  {
    icon: MessageCircle,
    label: "וואטסאפ",
    value: "שליחת הודעה ישירה",
    href: `https://wa.me/${site.whatsapp}`,
    external: true,
  },
  {
    icon: Mail,
    label: "אימייל",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "אזור שירות",
    value: site.area,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            צרו קשר
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            דברו איתנו עכשיו — חוזרים אליכם בהקדם האפשרי.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-10">
          <ul className="space-y-3 lg:col-span-2">
            {channels.map((channel) => {
              const content = (
                <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 transition-colors hover:bg-accent/40">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <channel.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {channel.label}
                    </p>
                    <p className="font-semibold">{channel.value}</p>
                  </div>
                </div>
              );
              return (
                <li key={channel.label}>
                  {"href" in channel && channel.href ? (
                    <a
                      href={channel.href}
                      target={
                        "external" in channel && channel.external
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        "external" in channel && channel.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>

          <Card className="p-2 lg:col-span-3">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-xl">שלחו פנייה</CardTitle>
              <CardDescription>
                מלאו פרטים ונחזור אליכם תוך זמן קצר.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">שם מלא</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="ישראל ישראלי"
                    autoComplete="name"
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">טלפון</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="050-0000000"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="email">אימייל (לא חובה)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    autoComplete="email"
                    className="h-11"
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="message">פרטי הפנייה</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="תארו בקצרה את העבודה / התקלה"
                    rows={5}
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    className="h-12 w-full gap-2 rounded-xl text-base"
                  >
                    שלחו פנייה
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
