import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/site/brand-mark";
import { site, nav } from "@/components/site/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <BrandMark />
          <span className="text-base font-bold tracking-tight md:text-lg">
            {site.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          render={<a href={`tel:${site.phone}`} />}
          className="h-10 gap-2 rounded-full px-4"
        >
          <Phone />
          <span className="hidden sm:inline">{site.phone}</span>
          <span className="sm:hidden">התקשרו</span>
        </Button>
      </div>
    </header>
  );
}
