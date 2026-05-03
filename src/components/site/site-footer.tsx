import { BrandMark } from "@/components/site/brand-mark";
import { site, nav } from "@/components/site/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center md:px-6">
        <div className="flex items-center gap-3">
          <BrandMark />
          <div>
            <p className="font-bold tracking-tight">{site.brand}</p>
            <p className="text-xs text-muted-foreground">{site.tagline}</p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
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

        <p className="text-xs text-muted-foreground">
          © {year} {site.brand}. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
