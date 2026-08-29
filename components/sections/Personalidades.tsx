import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import GlassCard from "@/components/ui/GlassCard";
import messiImg from "@/public/images/personalidades/messi.webp";
import francellaImg from "@/public/images/personalidades/francella.webp";
import grafZeppelinImg from "@/public/images/personalidades/graf-zeppelin.webp";
import peronImg from "@/public/images/personalidades/peron.webp";

const personalidades = [
  {
    nombre: "Messi en Trade Sky Bar",
    historia: "Una cena con Lionel Messi.",
    imagen: messiImg,
  },
  {
    nombre: "Francella",
    historia:
      "Participó en el rodaje de Homo Argento con Guillermo Francella.",
    imagen: francellaImg,
  },
  {
    nombre: "Graf Zeppelin",
    historia: "Vio pasar el Graf Zeppelin.",
    imagen: grafZeppelinImg,
  },
  {
    nombre: "Perón",
    historia: "Acompañó desde sus balcones el velatorio de Perón.",
    imagen: peronImg,
  },
];

export default function Personalidades() {
  return (
    <section className="w-full bg-comega-black px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="07" eyebrow="Personalidades que nos visitaron" title="El Comega también participó en:" />
      </div>

      <AnimatedReveal delay={0.1}>
        <div className="mx-auto mt-14 flex max-w-6xl snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {personalidades.map((persona) => (
            <GlassCard
              key={persona.nombre}
              className="w-72 shrink-0 snap-start overflow-hidden md:w-80"
            >
              <div className="relative aspect-[4/5] w-full bg-comega-charcoal">
                <Image
                  src={persona.imagen}
                  alt={persona.nombre}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 320px, 288px"
                />
              </div>
              <div className="p-4">
                <p className="font-heading text-base font-semibold text-comega-cream">
                  {persona.nombre}
                </p>
                <p className="mt-1 font-body text-xs text-comega-cream/55">
                  {persona.historia}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </AnimatedReveal>
    </section>
  );
}
