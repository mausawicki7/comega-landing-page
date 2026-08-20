"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import circa1934Img from "@/public/images/antes-despues/circa-1934.webp";
import hoyImg from "@/public/images/antes-despues/hoy.webp";

// react-compare-slider mide su contenedor en el cliente (ResizeObserver);
// cargarlo sin SSR evita un mismatch de hydration inevitable con esa librería.
const ReactCompareSlider = dynamic(
  () => import("react-compare-slider").then((mod) => mod.ReactCompareSlider),
  { ssr: false }
);

export default function AntesDespues() {
  return (
    <section id="antes-despues" className="w-full bg-comega-charcoal px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="04" eyebrow="Antes y Después" title="Casi un siglo, la misma fachada" />

        <AnimatedReveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-xl border border-comega-gold/20">
            <ReactCompareSlider
              itemOne={
                <div className="relative flex h-full w-full items-end">
                  <Image
                    src={circa1934Img}
                    alt="Edificio COMEGA recién terminado, circa 1934"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <span className="relative z-10 bg-comega-black/50 p-4 font-heading text-xs uppercase tracking-widest text-comega-cream/90 backdrop-blur-sm">
                    Circa 1934
                  </span>
                </div>
              }
              itemTwo={
                <div className="relative flex h-full w-full items-end">
                  <Image
                    src={hoyImg}
                    alt="Fachada actual del edificio COMEGA de noche"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <span className="relative z-10 bg-comega-black/50 p-4 font-heading text-xs uppercase tracking-widest text-comega-cream/90 backdrop-blur-sm">
                    Hoy
                  </span>
                </div>
              }
              style={{ aspectRatio: "16 / 9", width: "100%" }}
              handle={
                <div className="flex h-full w-10 -translate-x-1/2 items-center justify-center">
                  <div className="h-full w-px bg-comega-gold/70" />
                  <div className="absolute h-9 w-9 rounded-full border border-comega-gold bg-comega-black" />
                </div>
              }
            />
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
