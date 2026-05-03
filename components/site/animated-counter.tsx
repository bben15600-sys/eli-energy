"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1800,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [popped, setPopped] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now() + 80;
            const tick = (now: number) => {
              if (now < start) {
                requestAnimationFrame(tick);
                return;
              }
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 5);
              setDisplay(Math.round(eased * value));
              if (t < 1) {
                requestAnimationFrame(tick);
              } else {
                setPopped(true);
                window.setTimeout(() => setPopped(false), 380);
              }
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span
      ref={ref}
      className={`inline-block transition-transform duration-300 ease-out ${
        popped ? "scale-[1.08]" : "scale-100"
      } ${className ?? ""}`}
    >
      {prefix}
      {display.toLocaleString("he-IL")}
      {suffix}
    </span>
  );
}
