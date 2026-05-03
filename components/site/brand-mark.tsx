import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/site/logo";

export function BrandMark({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "group/brand relative inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-gradient-to-br from-primary to-primary/85 text-primary-foreground shadow-sm shadow-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/40",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-[inherit] bg-accent/40 opacity-0 blur-md transition-opacity duration-300 group-hover/brand:opacity-100"
      />
      <LogoMark
        className={cn(
          "size-6 transition-transform duration-300 group-hover/brand:scale-110",
          iconClassName,
        )}
      />
    </span>
  );
}
