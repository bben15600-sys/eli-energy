# ELI ENERGY — Landing Page

Hebrew RTL landing page for an electrician business. Stack: Next.js 16
(App Router) + Tailwind v4 + shadcn/ui (RTL). Heebo font. Electric-blue
brand palette (oklch).

## Project structure
- app/ — App Router pages
- components/site/ — page sections (hero, services, about, process, contact, footer)
- components/site/site-config.ts — single source of truth for business info (replace placeholders)
- components/ui/ — shadcn primitives

## Conventions
- All copy in Hebrew RTL
- Use `<Button render={<a href=... />}>` pattern (base-ui, no `asChild`)
- Brand color: oklch(0.55 0.22 255)
