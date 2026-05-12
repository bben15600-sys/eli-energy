"use client";

import { ImagePlus } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SpotlightCard } from "@/components/site/spotlight-card";

type Project = {
  src: string;
  alt: string;
  caption?: string;
};

// Project photos. To add a project: upload to /public/projects/ and add an entry here.
// Recommended size: 1200x900px, .webp or .jpg under 200KB.
const projects: Project[] = [
  // {
  //   src: "/projects/example.jpg",
  //   alt: "תיאור התמונה לטובת SEO — לדוגמה: לוח חשמל ראשי במפעל פארמה, עיר X",
  //   caption: "החלפת לוח ראשי · מפעל פארמה",
  // },
];

export function Gallery() {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section
      id="gallery"
      className="relative overflow-hidden border-b border-border/60 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[260px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_18%,transparent)_0%,transparent_60%)] blur-2xl"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <ImagePlus className="size-3.5" />
            פרוייקטים נבחרים
          </span>
          <h2 className="mt-4 bg-gradient-to-l from-foreground via-foreground to-primary/80 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            עבודות שביצענו
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            לוחות חשמל, חדרים נקיים, פרוייקטי תעשייה — תיעוד בשטח.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <li key={p.src}>
              <Reveal variant="up" delay={i * 80}>
                <SpotlightCard>
                  <figure className="relative overflow-hidden rounded-2xl">
                    <picture>
                      <img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </picture>
                    {p.caption ? (
                      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-4 text-sm font-medium">
                        {p.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
