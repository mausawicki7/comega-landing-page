"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import edificioImg from "@/public/images/edificio/edificio-comega.png";

const columnaUno = [
  { label: "Historia", href: "#historia" },
  { label: "Vistas Icónicas", href: "#vistas" },
  { label: "Antes y Después", href: "#antes-despues" },
  { label: "Marcas en COMEGA", href: "#marcas" },
];

// PLACEHOLDER: confirmar destinos reales de estos links
const columnaDos = [
  { label: "Alquiler de oficinas", href: "#marcas" },
  { label: "Cómo llegar", href: "#ubicacion" },
];

// PLACEHOLDER: confirmar handles y URLs reales
const redes = ["Instagram", "LinkedIn", "Google Maps"];

export default function Footer() {
  return (
    <footer id="contacto" className="relative w-full overflow-hidden bg-comega-black">
      {/* Silueta del edificio emergiendo por detrás de la tarjeta */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <Image
          src={edificioImg}
          alt=""
          className="h-auto w-[36rem] max-w-none opacity-70 md:w-[52rem]"
        />
        {/* Fade a negro para fundir la silueta con el fondo */}
        <div className="absolute inset-0 bg-gradient-to-t from-comega-black via-comega-black/40 to-comega-black" />
      </div>

      <div className="relative z-10 px-6 pt-28 md:px-12 md:pt-36">
        {/* Bloque CTA sobre la foto */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-heading text-xs uppercase tracking-[0.3em] text-comega-gold"
          >
            Tu oficina en un ícono
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-comega-cream md:text-6xl"
          >
            Trabajá donde
            <br />
            pasó la historia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-5 max-w-lg font-body text-sm leading-relaxed text-comega-cream/70 md:text-base"
          >
            Pisos y oficinas disponibles en el Edificio COMEGA, sobre Corrientes
            y Alem. Escribinos y coordinamos una visita.
          </motion.p>

          <motion.a
            href="#marcas"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-12 flex h-32 w-32 items-center justify-center rounded-full border border-comega-gold/40 bg-comega-black/70 p-4 text-center font-heading text-sm font-semibold leading-tight text-comega-cream backdrop-blur-md transition-colors hover:bg-comega-gold hover:text-comega-black"
          >
            Consultá
            <br />
            disponibilidad
          </motion.a>
        </div>

        {/* Tarjeta clara con el footer propiamente dicho */}
        <div className="mx-auto mt-24 max-w-6xl rounded-t-[2rem] bg-comega-cream px-7 py-12 md:rounded-t-[2.5rem] md:px-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.4fr] md:gap-8">
            <div>
              <p className="font-heading text-2xl font-semibold uppercase tracking-wide text-comega-black">
                Comega
              </p>
              <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-comega-black/55">
                Patrimonio arquitectónico de Buenos Aires. En pie desde 1934,
                sobre Av. Corrientes y Av. Leandro N. Alem.
              </p>
            </div>

            <ul className="space-y-3 md:border-l md:border-comega-black/10 md:pl-8">
              {columnaUno.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-comega-black/70 transition-colors hover:text-comega-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
              {columnaDos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-comega-black/70 transition-colors hover:text-comega-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="md:border-l md:border-comega-black/10 md:pl-8">
              {/* PLACEHOLDER: datos de contacto reales */}
              <a
                href="tel:+541100000000"
                className="block w-fit border-b-2 border-comega-gold pb-1 font-heading text-xl font-semibold tracking-tight text-comega-black md:text-2xl"
              >
                +54 11 0000-0000
              </a>
              <a
                href="mailto:info@comega.com.ar"
                className="mt-5 block w-fit border-b-2 border-comega-gold pb-1 font-heading text-xl font-semibold tracking-tight text-comega-black md:text-2xl"
              >
                info@comega.com.ar
              </a>
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-body text-xs text-comega-black/50">
                {redes.map((red, i) => (
                  <span key={red} className="flex items-center gap-3">
                    {i > 0 && <span aria-hidden="true">·</span>}
                    <a href="#" className="transition-colors hover:text-comega-black">
                      {red}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-comega-black/10 pt-6 font-body text-xs text-comega-black/45 md:flex-row md:items-center">
            <p>
              © {new Date().getFullYear()} Edificio COMEGA. Todos los derechos
              reservados.
            </p>
            <p>Corrientes y Alem, Buenos Aires.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
