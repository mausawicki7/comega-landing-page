import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import GlassCard from "@/components/ui/GlassCard";

// PLACEHOLDER: verificar derechos de imagen antes de publicar fotos reales de figuras públicas
const personalidades = [
  { nombre: "Nombre Apellido", rol: "Mención breve — visitó COMEGA" },
  { nombre: "Nombre Apellido", rol: "Mención breve — visitó COMEGA" },
  { nombre: "Nombre Apellido", rol: "Mención breve — visitó COMEGA" },
  { nombre: "Nombre Apellido", rol: "Mención breve — visitó COMEGA" },
];

export default function Personalidades() {
  return (
    <section className="w-full bg-comega-black px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="07" eyebrow="Personalidades que nos visitaron" title="El Comega también participó en:" />
      </div>

      <AnimatedReveal delay={0.1}>
        <div className="mx-auto mt-14 flex max-w-6xl snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {personalidades.map((persona, i) => (
            <GlassCard
              key={`${persona.nombre}-${i}`}
              className="w-56 shrink-0 snap-start overflow-hidden md:w-64"
            >
              <div className="aspect-[3/4] w-full bg-[linear-gradient(160deg,_#211d15_0%,_#0b0b0b_70%)]" />
              <div className="p-4">
                <p className="font-heading text-base font-semibold text-comega-cream">
                  {persona.nombre}
                </p>
                <p className="mt-1 font-body text-xs text-comega-cream/55">{persona.rol}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </AnimatedReveal>
    </section>
  );
}
