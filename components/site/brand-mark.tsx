import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

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
        "group/brand relative inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm shadow-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-[inherit] bg-primary/40 opacity-0 blur-md transition-opacity duration-300 group-hover/brand:opacity-100"
      />
      <Zap
        className={cn(
          "size-5 transition-transform duration-300 group-hover/brand:scale-110",
          iconClassName,
        )}
      />
    </span>
  );
}
