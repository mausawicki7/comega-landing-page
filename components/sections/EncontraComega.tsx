import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import GlassCard from "@/components/ui/GlassCard";

const marcas = [
  { nombre: "Trade SkyBar", descripcion: "Terraza y bar en altura con vista a Puerto Madero." },
  { nombre: "Animal Studio", descripcion: "Estudio creativo en el corazón del edificio." },
  { nombre: "Proteína", descripcion: "Propuesta gastronómica saludable en planta baja." },
  { nombre: "Office One", descripcion: "Oficinas equipadas listas para operar." },
  { nombre: "Alquiler de oficina / piso", descripcion: "Espacios disponibles para tu empresa en COMEGA." },
];

export default function EncontraComega() {
  return (
    <section id="marcas" className="w-full bg-comega-black px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="05" eyebrow="Aquí puedes encontrar COMEGA" title="Un edificio, muchas marcas" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {marcas.map((marca, i) => (
            <AnimatedReveal key={marca.nombre} delay={0.05 * i}>
              <GlassCard className="group flex h-full flex-col justify-end overflow-hidden">
                {/* PLACEHOLDER: reemplazar por foto de "{marca.nombre}" */}
                <div className="aspect-[4/3] w-full bg-[linear-gradient(160deg,_#211d15_0%,_#0b0b0b_70%)] transition-transform duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-comega-cream">
                    {marca.nombre}
                  </h3>
                  <p className="mt-1 font-body text-sm text-comega-cream/60">
                    {marca.descripcion}
                  </p>
                </div>
              </GlassCard>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
