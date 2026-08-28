import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

const marcas = [
  {
    nombre: "Trade SkyBar",
    logo: "TRADE\u2009SKYBAR",
    descripcion: "Terraza y bar en altura con vista a Puerto Madero.",
    href: "https://www.instagram.com/trade.skybar/",
  },
  {
    nombre: "Animal Studio",
    logo: "ANIMAL\u2009STUDIO",
    descripcion: "Estudio creativo en el corazón del edificio.",
    href: "https://www.instagram.com/ianimal.fit/",
  },
  {
    nombre: "Proteína",
    logo: "PROTEÍNA",
    descripcion: "Propuesta gastronómica saludable en planta baja.",
    href: "https://www.instagram.com/weareproteina/",
  },
  {
    nombre: "Office One",
    logo: "OFFICE\u2009ONE",
    descripcion:
      "Oficinas equipadas y listas para operar, con los servicios del edificio incluidos.",
    href: "https://www.officeone.com.ar/",
  },
  {
    nombre: "Alquiler de oficina o piso",
    logo: "COMEGA",
    descripcion:
      "Superficies disponibles para tu empresa, desde una oficina hasta una planta completa.",
    href: "https://www.officeone.com.ar/",
  },
];

// La card no lleva fondo propio: el fondo es esta capa enmascarada, a la que
// se le perfora un círculo en la esquina superior derecha. Eso produce el
// recorte cóncavo de la referencia, con el botón alojado dentro del hueco.
// El hueco se centra cerca del vértice (no a un radio de distancia): así la
// perforación se come la esquina redondeada entera y no deja un resto blanco
// aislado. Con centro a 18px y radio 34px, el vértice queda a 25,5px del
// centro — bien dentro del hueco.
const CENTRO_HUECO = 18;
const RADIO_HUECO = 34;
const mascaraEsquina = `radial-gradient(circle at calc(100% - ${CENTRO_HUECO}px) ${CENTRO_HUECO}px, transparent ${RADIO_HUECO}px, #000 ${RADIO_HUECO + 1}px)`;

function FondoConMuesca() {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-0 rounded-3xl bg-white"
      style={{ maskImage: mascaraEsquina, WebkitMaskImage: mascaraEsquina }}
    />
  );
}

function FlechaCircular() {
  return (
    // Centrado en el hueco: -6px lo deja con su centro a 18px del vértice
    <span className="absolute -right-1.5 -top-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-comega-black transition-colors duration-300 group-hover:bg-comega-gold">
      <span
        aria-hidden="true"
        className="text-lg leading-none transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        ↗
      </span>
    </span>
  );
}

export default function EncontraComega() {
  return (
    <section
      id="marcas"
      className="w-full bg-comega-cream px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <AnimatedReveal>
          <SectionHeading
            number="05"
            eyebrow="Aquí puedes encontrar COMEGA"
            title="Un edificio, muchas marcas"
            align="center"
            tone="dark"
          />
        </AnimatedReveal>

        <div className="mt-16 grid gap-5 md:grid-cols-6">
          {marcas.map((marca, i) => (
            <AnimatedReveal
              key={marca.nombre}
              delay={0.05 * i}
              className={i < 3 ? "md:col-span-2" : "md:col-span-3"}
            >
              <a
                href={marca.href}
                target={marca.href.startsWith("http") ? "_blank" : undefined}
                rel={marca.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative block h-full min-h-[19rem] md:min-h-[21rem]"
              >
                <FondoConMuesca />

                <div className="relative flex h-full flex-col p-7">
                  <h3 className="max-w-[70%] font-heading text-xl font-semibold leading-tight tracking-tight text-comega-black md:text-2xl">
                    {marca.nombre}
                  </h3>
                  <p className="mt-3 max-w-[75%] font-body text-sm leading-relaxed text-comega-black/55">
                    {marca.descripcion}
                  </p>

                  {/* PLACEHOLDER: reemplazar por el logo real de la marca */}
                  <div className="mt-auto flex items-end">
                    <span className="font-heading text-2xl font-semibold uppercase tracking-[0.12em] text-comega-black/25 transition-colors duration-300 group-hover:text-comega-bronze md:text-3xl">
                      {marca.logo}
                    </span>
                  </div>
                </div>

                <FlechaCircular />
              </a>
            </AnimatedReveal>
          ))}
        </div>

        <p className="mt-14 text-center font-body text-sm text-comega-black/60">
          Cinco marcas conviven hoy en el edificio.{" "}
          <a
            href="#contacto"
            className="font-medium text-comega-black underline underline-offset-4 transition-colors hover:text-comega-bronze"
          >
            Consultá disponibilidad
          </a>
        </p>
      </div>
    </section>
  );
}
