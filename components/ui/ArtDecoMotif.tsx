type ArtDecoMotifProps = {
  className?: string;
  variant?: "sunburst" | "chevron";
};

/**
 * Motivo geométrico art déco reutilizable (líneas finas doradas) — elemento
 * de firma visual del sitio. Siempre baja opacidad, nunca protagonismo.
 */
export default function ArtDecoMotif({
  className = "",
  variant = "sunburst",
}: ArtDecoMotifProps) {
  if (variant === "chevron") {
    return (
      <svg
        viewBox="0 0 200 40"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M ${i * 40} 40 L ${i * 40 + 20} 0 L ${i * 40 + 40} 40`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    );
  }

  const rays = Array.from({ length: 13 });
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {rays.map((_, i) => {
        const angle = (Math.PI / 2 / (rays.length - 1)) * i;
        const x = Number((200 - 200 * Math.cos(angle)).toFixed(2));
        const y = Number((200 - 200 * Math.sin(angle)).toFixed(2));
        return (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={x}
            y2={y}
            stroke="currentColor"
            strokeWidth="0.75"
          />
        );
      })}
    </svg>
  );
}
