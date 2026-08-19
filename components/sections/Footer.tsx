import GoldDivider from "@/components/ui/GoldDivider";
import ArtDecoMotif from "@/components/ui/ArtDecoMotif";

export default function Footer() {
  return (
    <footer id="contacto" className="relative w-full overflow-hidden bg-comega-black px-6 pt-20 pb-10 md:px-16">
      <ArtDecoMotif className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 -rotate-90 text-comega-gold/[0.06] md:h-96 md:w-96" />

      <div className="relative mx-auto max-w-6xl">
        <GoldDivider />

        <div className="mt-14 grid gap-12 md:grid-cols-4">
          <div>
            <p className="font-heading text-2xl font-semibold uppercase tracking-wide text-comega-cream">
              Comega
            </p>
            <p className="mt-3 font-body text-sm text-comega-cream/55">
              Av. Corrientes y Av. Leandro N. Alem, Buenos Aires.
            </p>
          </div>

          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-comega-gold">
              Contacto
            </p>
            {/* PLACEHOLDER: datos de contacto reales */}
            <ul className="mt-3 space-y-1 font-body text-sm text-comega-cream/55">
              <li>+54 11 0000-0000</li>
              <li>info@comega.com.ar</li>
              <li>Lun a Vie, 9 a 19h</li>
            </ul>
          </div>

          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-comega-gold">
              Secciones
            </p>
            <ul className="mt-3 space-y-1 font-body text-sm text-comega-cream/55">
              <li><a href="#historia" className="hover:text-comega-cream">Historia</a></li>
              <li><a href="#vistas" className="hover:text-comega-cream">Vistas Icónicas</a></li>
              <li><a href="#marcas" className="hover:text-comega-cream">Marcas en COMEGA</a></li>
            </ul>
          </div>

          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-comega-gold">
              Redes
            </p>
            {/* PLACEHOLDER: confirmar handles reales */}
            <ul className="mt-3 space-y-1 font-body text-sm text-comega-cream/55">
              <li><a href="#" className="hover:text-comega-cream">Instagram</a></li>
              <li><a href="#" className="hover:text-comega-cream">Google Maps</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-comega-cream/10 pt-6 font-body text-xs text-comega-cream/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Edificio COMEGA. Patrimonio arquitectónico de Buenos Aires.</p>
          <p>Diseñado con memoria de 1934.</p>
        </div>
      </div>
    </footer>
  );
}
