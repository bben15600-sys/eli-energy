"use client";

import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BrandMark } from "@/components/site/brand-mark";
import { site, nav } from "@/components/site/site-config";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b ${
        scrolled
          ? "border-border bg-background shadow-sm"
          : "border-border bg-background"
      }`}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <BrandMark />
          <span className="font-bold text-lg tracking-tight">
            {site.brand}
          </span>
        </a>

        <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<a href={`tel:${site.phone}`} />}
            className="h-10 gap-2 rounded-full px-4"
          >
            <Phone />
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sm:hidden">התקשרו</span>
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full md:hidden"
                  aria-label="פתיחת תפריט"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader className="border-b">
                <SheetTitle className="flex items-center gap-2.5">
                  <BrandMark />
                  <span className="font-bold tracking-tight">{site.brand}</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-3 pb-6">
                {nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={
                      <a
                        href={item.href}
                        className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
