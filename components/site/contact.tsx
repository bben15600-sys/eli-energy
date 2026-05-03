import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/site/contact-form";
import { site } from "@/components/site/site-config";

const items = [
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

function ContactItem({ item }: { item: (typeof items)[number] }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 transition-colors hover:bg-accent/40">
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <item.icon className="size-5" />
      </span>
      <div>
        <p className="text-xs text-muted-foreground">{item.label}</p>
        <p className="font-semibold">{item.value}</p>
      </div>
    </div>
  );
  if ("href" in item && item.href) {
    return (
      <a
        href={item.href}
        target={"external" in item && item.external ? "_blank" : undefined}
        rel={
          "external" in item && item.external ? "noopener noreferrer" : undefined
        }
        className="block"
      >
        {inner}
      </a>
    );
  }
  return inner;
}

export function Contact() {
  return (
    <section id="contact" className="bg-primary/5 py-20 md:py-28">
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
            {items.map((item) => (
              <li key={item.label}>
                <ContactItem item={item} />
              </li>
            ))}
          </ul>

          <Card className="p-2 lg:col-span-3">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-xl">שלחו פנייה</CardTitle>
              <CardDescription>
                מלאו פרטים ונחזור אליכם תוך זמן קצר.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
