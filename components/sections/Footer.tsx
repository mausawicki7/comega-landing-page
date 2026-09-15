"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import puertaGiratoriaImg from "@/public/images/historia/puerta-giratoria.jpg";
import logoNegro from "@/public/images/logo/comega-negro.png";
import siluetaImg from "@/public/images/edificio/edificio-comega-silueta.png";

const columnaUno = [
  { label: "Historia", href: "#historia" },
  { label: "Vistas Icónicas", href: "#vistas" },
  { label: "Antes y Después", href: "#antes-despues" },
  { label: "Marcas en COMEGA", href: "#marcas" },
];

// PLACEHOLDER: confirmar destinos reales de estos links
const columnaDos = [
  { label: "Alquiler de oficinas", href: "https://www.officeone.com.ar/" },
  {
    label: "Cómo llegar",
    href: "https://maps.app.goo.gl/vrLACgkXvZ8yZUu19",
  },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const MapsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const redes = [
  { label: "Instagram", href: "https://www.instagram.com/edificiocomega/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/edificio-comega-bsas", icon: LinkedInIcon },
  {
    label: "Google Maps",
    href: "https://maps.app.goo.gl/vrLACgkXvZ8yZUu19",
    icon: MapsIcon,
  },
];

export default function Footer() {
  return (
    <footer id="contacto" className="relative w-full overflow-hidden bg-comega-black">
      {/* Foto del hall de entrada de fondo, detrás del CTA y la tarjeta */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={puertaGiratoriaImg}
          alt=""
          fill
          className="object-cover opacity-70"
          sizes="100vw"
        />
        {/* Fade a negro para fundir la foto con el fondo */}
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
            href="https://www.officeone.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
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
        <div className="mx-auto mt-24 max-w-6xl rounded-t-[2rem] bg-comega-cream px-7 pt-12 pb-12 md:rounded-t-[2.5rem] md:px-12 md:pt-14 md:pb-14">
          {/* Links a la izquierda, silueta del edificio al centro apoyada sobre
              la línea inferior, contacto a la derecha (ref: footer example.png) */}
          <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-12">
            <div className="md:pb-12">
              <Image src={logoNegro} alt="Comega" className="h-7 w-auto md:h-8" />
              <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-comega-black/55">
                Patrimonio arquitectónico de Buenos Aires. En pie desde 1934,
                sobre Av. Corrientes y Av. Leandro N. Alem.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <ul className="space-y-3">
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
                  {columnaDos.map((link) => {
                    const isExternal = link.href.startsWith("http");
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="font-body text-sm text-comega-black/70 transition-colors hover:text-comega-black"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="order-last flex items-end justify-center md:order-none">
              <Image
                src={siluetaImg}
                alt="Ilustración del Edificio COMEGA"
                className="h-64 w-auto md:h-[26rem] lg:h-[30rem]"
                sizes="(min-width: 1024px) 180px, 160px"
              />
            </div>

            <div className="md:pb-12 md:justify-self-end">
              {/* PLACEHOLDER: confirmar email real de contacto */}
              <a
                href="tel:+541140013100"
                className="block w-fit border-b-2 border-comega-gold pb-1 font-heading text-xl font-semibold tracking-tight text-comega-black md:text-2xl"
              >
                +54 11 4001-3100
              </a>
              <a
                href="mailto:info@comega.com.ar"
                className="mt-5 block w-fit border-b-2 border-comega-gold pb-1 font-heading text-xl font-semibold tracking-tight text-comega-black md:text-2xl"
              >
                info@comega.com.ar
              </a>
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-body text-xs text-comega-black/50">
                {redes.map((red, i) => {
                  const isExternal = red.href.startsWith("http");
                  const Icon = red.icon;
                  return (
                    <span key={red.label} className="flex items-center gap-3">
                      {i > 0 && <span aria-hidden="true">·</span>}
                      <a
                        href={red.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-1.5 transition-colors hover:text-comega-black"
                      >
                        <Icon />
                        {red.label}
                      </a>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-3 border-t border-comega-black/10 pt-6 font-body text-xs text-comega-black/45 md:flex-row md:items-center">
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
