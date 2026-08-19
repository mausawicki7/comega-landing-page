import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function MapaUbicacion() {
  return (
    <section className="w-full bg-comega-charcoal px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="08" eyebrow="Cómo llegar" title="Av. Corrientes y Av. Leandro N. Alem" />

        <AnimatedReveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-xl border border-comega-gold/20">
            <iframe
              title="Ubicación del Edificio COMEGA"
              src="https://www.google.com/maps?q=Av.+Corrientes+y+Av.+Leandro+N.+Alem,+CABA&output=embed"
              className="h-[420px] w-full grayscale invert-[92%] contrast-[0.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
