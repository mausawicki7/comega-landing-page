type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  number,
  eyebrow,
  title,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = tone === "light" ? "text-comega-cream" : "text-comega-black";
  const eyebrowColor = tone === "light" ? "text-comega-gold" : "text-comega-bronze";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      <p
        className={`font-heading text-xs md:text-sm tracking-[0.25em] uppercase ${eyebrowColor}`}
      >
        {number} — {eyebrow}
      </p>
      <h2
        className={`font-heading font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight ${titleColor}`}
      >
        {title}
      </h2>
    </div>
  );
}
