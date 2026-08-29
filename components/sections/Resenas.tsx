import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

// PLACEHOLDER: reemplazar por reseñas reales de Google Maps (ver punto 6.3 del plan)
const resenas = [
  { nombre: "Martina G.", estrellas: 5, texto: "Edificio hermoso, la fachada sola ya vale la visita. El coworking adentro tiene una vista increíble al río.", fecha: "hace 2 meses" },
  { nombre: "Lucas F.", estrellas: 5, texto: "Trabajo en Animal Studio y subir por esta escalera todos los días sigue sin aburrirme. Historia pura.", fecha: "hace 3 meses" },
  { nombre: "Julieta R.", estrellas: 4, texto: "Fui al Trade SkyBar una noche de verano, la terraza con esa vista de Puerto Madero no tiene precio.", fecha: "hace 1 mes" },
  { nombre: "Nicolás P.", estrellas: 5, texto: "Alquilamos una oficina en el piso 12. Impecable la puesta en valor, mantuvieron el carácter original del edificio.", fecha: "hace 4 meses" },
  { nombre: "Sofía M.", estrellas: 5, texto: "Vine por Proteína y me quedé mirando los detalles art déco del hall de entrada un buen rato.", fecha: "hace 2 semanas" },
  { nombre: "Diego A.", estrellas: 4, texto: "Uno de los pocos racionalistas de los años 30 que siguen tan bien conservados en el microcentro.", fecha: "hace 5 meses" },
];

export default function Resenas() {
  return (
    <section className="w-full bg-comega-charcoal px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <AnimatedReveal>
            <SectionHeading
              number="02"
              eyebrow="Reseñas de Google Maps"
              title="Lo que dicen quienes lo visitan"
            />
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <a
              href="https://maps.app.goo.gl/vrLACgkXvZ8yZUu19"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-md transition-colors hover:border-comega-gold/40"
            >
              <span className="font-heading text-3xl font-semibold text-comega-cream">
                4.8
              </span>
              <div>
                <p className="text-comega-gold">★★★★★</p>
                <p className="font-body text-xs text-comega-cream/50">
                  120 reseñas en Google
                </p>
              </div>
            </a>
          </AnimatedReveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {resenas.map((resena, i) => (
            <AnimatedReveal key={resena.nombre} delay={0.05 * i}>
              <div className="flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md">
                <p className="text-comega-gold" aria-hidden="true">
                  {"★".repeat(resena.estrellas)}
                  <span className="text-white/15">
                    {"★".repeat(5 - resena.estrellas)}
                  </span>
                </p>
                <p className="flex-1 font-body text-sm text-comega-cream/75">
                  “{resena.texto}”
                </p>
                <div className="flex items-center justify-between font-body text-xs text-comega-cream/45">
                  <span className="font-medium text-comega-cream/70">{resena.nombre}</span>
                  <span>{resena.fecha}</span>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
