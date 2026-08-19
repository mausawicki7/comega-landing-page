"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ArtDecoMotif from "@/components/ui/ArtDecoMotif";
// Import estático: next/image no antepone el basePath a un src string,
// pero sí resuelve correctamente la URL de una imagen importada.
import heroImg from "@/public/images/hero/hero.jpeg";

const pilares = [
  {
    titulo: "Patrimonio vivo",
    texto:
      "Declarado patrimonio arquitectónico de la Ciudad, con una puesta en valor que respetó cada detalle original.",
  },
  {
    titulo: "Oficinas de última generación",
    texto:
      "Servicios, conectividad y ascensores renovados dentro de una estructura de 1934 en hormigón y travertino.",
  },
  {
    titulo: "Vistas irrepetibles",
    texto:
      "Puerto Madero, la Reserva Ecológica y el Río de la Plata desde 88 metros sobre Corrientes y Alem.",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col bg-comega-black">
      {/* PLACEHOLDER: reemplazar por video full-bleed de presentación del edificio */}
      <Image src={heroImg} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-comega-black via-comega-black/65 to-comega-black/30" />

      {/* Wrapper que recorta el motivo sin recortar las cards que sobresalen */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <ArtDecoMotif className="absolute -right-6 -top-6 h-56 w-56 rotate-90 text-comega-gold/10 md:h-80 md:w-80" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-8 pt-40 text-center md:px-16 md:pb-16 md:pt-48">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-xs tracking-[0.35em] uppercase text-comega-gold md:text-sm"
        >
          Corrientes &amp; Alem — Buenos Aires — 1934
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-6 font-heading text-[2.5rem] font-semibold leading-[1.02] tracking-tight text-comega-cream sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Un ícono racionalista
          <br />
          que sigue en pie
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="mt-6 max-w-xl font-body text-sm leading-relaxed text-comega-cream/70 md:text-base"
        >
          Hormigón y travertino desde 1934. Hoy, sede de las marcas que hacen
          la Buenos Aires de hoy.
        </motion.p>
      </div>

      <div className="relative z-10 px-6 md:px-16">
        <div className="mx-auto max-w-6xl border-t border-comega-cream/20" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pt-14 md:flex-row md:items-center md:justify-between md:gap-12 md:px-16 md:pt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl font-heading text-2xl font-semibold leading-[1.1] tracking-tight text-comega-cream md:text-4xl"
        >
          Casi un siglo de historia porteña, y las marcas que escriben la
          próxima.
        </motion.h2>

        <motion.a
          href="#marcas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="group inline-flex shrink-0 items-center gap-4 self-start rounded-full bg-comega-cream py-1.5 pl-6 pr-1.5 font-heading text-sm font-semibold text-comega-black transition-colors hover:bg-white"
        >
          Ver el edificio
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-comega-gold text-comega-black transition-transform group-hover:translate-x-0.5">
            ↗
          </span>
        </motion.a>
      </div>

      {/* Las cards quedan 85% sobre la foto y 15% sobre la sección clara */}
      <div className="relative z-20 mx-auto mt-16 grid w-full max-w-6xl translate-y-[20%] grid-cols-1 gap-5 px-6 md:mt-20 md:grid-cols-3 md:px-16">
        {pilares.map((pilar, i) => (
          <motion.article
            key={pilar.titulo}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + 0.08 * i, ease: "easeOut" }}
            className="rounded-2xl border border-white/10 bg-comega-black/55 p-7 backdrop-blur-md"
          >
            <div className="h-9 w-9 rotate-45 border border-comega-gold/70" />
            <div className="mt-8 border-t border-comega-cream/15 pt-6">
              <h3 className="font-heading text-lg font-semibold tracking-tight text-comega-cream">
                {pilar.titulo}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-comega-cream/65">
                {pilar.texto}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
