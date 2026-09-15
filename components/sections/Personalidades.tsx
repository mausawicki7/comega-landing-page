import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import messiImg from "@/public/images/personalidades/messi.webp";
import francellaImg from "@/public/images/personalidades/francella.webp";
import grafZeppelinImg from "@/public/images/personalidades/graf-zeppelin.webp";
import peronImg from "@/public/images/personalidades/peron.webp";

// Mosaico en damero según la proporción de cada foto:
//   [ Messi (2:1) ─────── ][ Zeppelin (1:1) ]
//   [ Perón (≈1:1) ][ Francella (2:1) ──────── ]
// En desktop la celda cuadrada define el alto de la fila y la ancha se estira.
// En mobile se apilan, cada una con su propia proporción.
const personalidades = [
  {
    nombre: "Messi en Trade Sky Bar",
    historia: "Una cena con Lionel Messi.",
    imagen: messiImg,
    layout: "aspect-[2/1] md:col-span-2 md:aspect-auto",
  },
  {
    nombre: "Graf Zeppelin",
    historia: "Vio pasar el Graf Zeppelin.",
    imagen: grafZeppelinImg,
    layout: "aspect-square",
  },
  {
    nombre: "Perón",
    historia: "Acompañó desde sus balcones el velatorio de Perón.",
    imagen: peronImg,
    layout: "aspect-[6/7] md:aspect-square",
  },
  {
    nombre: "Francella",
    historia:
      "Participó en el rodaje de Homo Argento con Guillermo Francella.",
    imagen: francellaImg,
    layout: "aspect-[2/1] md:col-span-2 md:aspect-auto",
  },
];

export default function Personalidades() {
  return (
    <section className="w-full bg-comega-black px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="07" eyebrow="Personalidades que nos visitaron" title="El Comega también participó en:" />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {personalidades.map((persona, i) => (
            <AnimatedReveal
              key={persona.nombre}
              delay={0.08 * i}
              className={persona.layout}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-comega-charcoal">
                <Image
                  src={persona.imagen}
                  alt={persona.nombre}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes={
                    persona.layout.includes("col-span-2")
                      ? "(min-width: 768px) 760px, 100vw"
                      : "(min-width: 768px) 380px, 100vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-comega-black/85 via-comega-black/20 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="font-heading text-base font-semibold text-comega-cream md:text-lg">
                    {persona.nombre}
                  </p>
                  <p className="mt-1 font-body text-xs text-comega-cream/70 md:text-sm">
                    {persona.historia}
                  </p>
                </figcaption>
              </figure>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
