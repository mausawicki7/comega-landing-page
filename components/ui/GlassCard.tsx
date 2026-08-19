import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
