"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix: string;
};

export default function Counter({ value, suffix }: CounterProps) {
  const [shown, setShown] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setShown(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1100;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setShown(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <p
      ref={ref}
      className="font-heading text-6xl font-semibold tracking-tight text-comega-black md:text-7xl"
    >
      {shown}
      <span className="text-comega-gold">{suffix}</span>
    </p>
  );
}
