type Spark = {
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  tx: number;
  ty: number;
};

const sparks: Spark[] = [
  { left: "8%", top: "78%", size: 3, delay: 0, duration: 7.5, tx: 22, ty: -180 },
  { left: "16%", top: "62%", size: 2, delay: 1.4, duration: 8.5, tx: -18, ty: -160 },
  { left: "24%", top: "85%", size: 4, delay: 2.6, duration: 9, tx: 14, ty: -200 },
  { left: "34%", top: "70%", size: 2, delay: 0.8, duration: 8, tx: -10, ty: -170 },
  { left: "44%", top: "88%", size: 3, delay: 3.2, duration: 7.8, tx: 24, ty: -190 },
  { left: "55%", top: "55%", size: 2, delay: 1.9, duration: 9.5, tx: -22, ty: -150 },
  { left: "65%", top: "82%", size: 3, delay: 0.4, duration: 8.2, tx: 18, ty: -210 },
  { left: "74%", top: "66%", size: 2, delay: 2.2, duration: 7.6, tx: -16, ty: -175 },
  { left: "82%", top: "90%", size: 4, delay: 4, duration: 8.8, tx: 12, ty: -195 },
  { left: "90%", top: "72%", size: 2, delay: 1.1, duration: 7.2, tx: -20, ty: -165 },
  { left: "30%", top: "92%", size: 2, delay: 3.6, duration: 9.2, tx: 8, ty: -180 },
  { left: "70%", top: "50%", size: 3, delay: 0.2, duration: 8.4, tx: -14, ty: -155 },
];

export function Sparks() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {sparks.map((s, i) => (
        <span
          key={i}
          className="animate-spark absolute rounded-full"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: "var(--brand-yellow)",
            boxShadow: `0 0 ${s.size * 3}px ${s.size}px color-mix(in oklch, var(--brand-yellow) 75%, transparent)`,
            ["--spark-delay" as string]: `${s.delay}s`,
            ["--spark-dur" as string]: `${s.duration}s`,
            ["--spark-tx" as string]: `${s.tx}px`,
            ["--spark-ty" as string]: `${s.ty}px`,
          }}
        />
      ))}
    </div>
  );
}
