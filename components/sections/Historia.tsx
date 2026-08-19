import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import GoldDivider from "@/components/ui/GoldDivider";
import Counter from "@/components/ui/Counter";

const stats = [
  { eyebrow: "Altura", value: 88, suffix: "m", label: "sobre Corrientes y Alem" },
  { eyebrow: "Estructura", value: 21, suffix: "", label: "pisos habitables" },
  { eyebrow: "Movilidad", value: 5, suffix: "", label: "ascensores, los más rápidos de su época" },
];

const hitos = [
  { year: "1931", text: "Comienza la construcción sobre el terreno del ex Gran Hotel Nacional." },
  { year: "1934", text: "Inauguración. Segunda torre del país en hormigón armado, primera de la ciudad revestida en travertino." },
  { year: "1934", text: "Llegada del dirigible Graf Zeppelin, presenciada desde el edificio." },
  { year: "1936", text: "El Comega Club, en el piso 19, es escenario del sepelio de Carlos Gardel." },
  { year: "1937", text: "Ensanche de la Av. Corrientes, otro hito urbano vivido desde sus ventanas." },
  { year: "Hoy", text: "Patrimonio arquitectónico de la Ciudad, reciclado con servicios de última generación." },
];

export default function Historia() {
  return (
    <section
      id="historia"
      className="relative z-0 w-full rounded-t-[2.5rem] bg-comega-cream px-6 pb-24 pt-36 md:rounded-t-[3.5rem] md:px-16 md:pb-32 md:pt-48"
    >
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-12">
        <AnimatedReveal>
          <SectionHeading
            number="01"
            eyebrow="Historia"
            title="Un ícono racionalista, piedra por piedra"
            tone="dark"
          />
          <div className="mt-8 space-y-4 font-body text-comega-black/70">
            <p>
              Encargado por la Compañía Mercantil y Ganadera S.A. —de ahí COMEGA—,
              el edificio se levanta en la esquina de Av. Corrientes y Av. Leandro
              N. Alem, donde antes estuvo la residencia de Francisco Madero y
              luego el Gran Hotel Nacional.
            </p>
            <p>
              Obra del ingeniero Alberto Stein y los arquitectos Enrique
              Douillet y Alfredo Joselevich, rivalizó en altura con el vecino
              Edificio SAFICO hasta que el Kavanagh superó a ambos en 1936.
              Sus interiores en granito y mostradores de acero inoxidable eran,
              para la época, un lujo casi inédito.
            </p>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          {/* PLACEHOLDER: reemplazar por foto de época del edificio COMEGA */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-comega-bronze/25 bg-[linear-gradient(155deg,_#e6dfd0_0%,_#cdc3ad_60%)]">
            <div className="absolute inset-4 border border-comega-bronze/20" />
          </div>
        </AnimatedReveal>
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <GoldDivider withMark />
        <AnimatedReveal delay={0.1}>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {/* PLACEHOLDER: reemplazar por foto actual del edificio COMEGA */}
            <div className="min-h-[22rem] rounded-3xl bg-[linear-gradient(155deg,_#ded6c4_0%,_#b9ad94_70%)] lg:min-h-[34rem]" />

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.eyebrow}
                  className="flex flex-col justify-between rounded-3xl bg-white/70 p-7"
                >
                  <div>
                    <p className="font-heading text-xs uppercase tracking-[0.2em] text-comega-black/70">
                      {stat.eyebrow}
                    </p>
                    <div className="mt-4 border-t border-comega-black/10" />
                  </div>
                  <div className="mt-14">
                    <Counter value={stat.value} suffix={stat.suffix} />
                    <p className="mt-2 font-body text-sm text-comega-black/55">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}

              {/* PLACEHOLDER: reemplazar por foto de detalle (hall, travertino, ascensores) */}
              <div className="min-h-[14rem] rounded-3xl bg-[linear-gradient(155deg,_#cdc3ad_0%,_#8f8672_70%)]" />
            </div>
          </div>
        </AnimatedReveal>
      </div>

      <div className="mx-auto mt-24 max-w-6xl">
        <AnimatedReveal>
          <ol className="grid gap-8 border-t border-comega-black/10 pt-10 md:grid-cols-6 md:gap-4">
            {hitos.map((hito) => (
              <li key={`${hito.year}-${hito.text}`} className="relative pl-5 md:pl-0 md:pt-6">
                <span className="absolute left-0 top-1 h-1.5 w-1.5 rotate-45 border border-comega-bronze md:left-1/2 md:-top-[calc(2.5rem+2px)] md:-translate-x-1/2" />
                <p className="font-heading text-sm font-semibold text-comega-bronze">
                  {hito.year}
                </p>
                <p className="mt-1 font-body text-sm text-comega-black/60">{hito.text}</p>
              </li>
            ))}
          </ol>
        </AnimatedReveal>
      </div>
    </section>
  );
}
