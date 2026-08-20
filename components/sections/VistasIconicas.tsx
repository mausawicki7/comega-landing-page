"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import puertoMaderoImg from "@/public/images/vistas/puerto-madero.webp";
import reservaEcologicaImg from "@/public/images/vistas/reserva-ecologica.webp";
import rioDeLaPlataImg from "@/public/images/vistas/rio-de-la-plata.webp";
import skylinePortenoImg from "@/public/images/vistas/skyline-porteno.webp";
import coloniaUruguayImg from "@/public/images/vistas/colonia-uruguay.webp";

const vistas = [
  { nombre: "Puerto Madero", img: puertoMaderoImg },
  { nombre: "Reserva Ecológica", img: reservaEcologicaImg },
  { nombre: "Río de la Plata", img: rioDeLaPlataImg },
  { nombre: "Skyline porteño", img: skylinePortenoImg },
  { nombre: "Colonia, Uruguay (días claros)", img: coloniaUruguayImg },
];

export default function VistasIconicas() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActive(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="vistas" className="w-full bg-comega-black px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="03" eyebrow="Vistas Icónicas" title="Lo que se ve desde 88 metros" />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-[minmax(0,280px)_1fr]">
        <div className="hidden md:block">
          <ul className="sticky top-32 flex flex-col gap-6">
            {vistas.map((vista, i) => (
              <li key={vista.nombre}>
                <p
                  className={`font-heading text-lg transition-colors duration-300 ${
                    active === i ? "text-comega-gold" : "text-comega-cream/35"
                  }`}
                >
                  {vista.nombre}
                </p>
                <div
                  className={`mt-2 h-px bg-comega-gold transition-all duration-300 ${
                    active === i ? "w-10 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          {vistas.map((vista, i) => (
            <div
              key={vista.nombre}
              data-index={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl border transition-colors duration-300 ${
                active === i ? "border-comega-gold/40" : "border-comega-cream/10"
              }`}
            >
              <Image
                src={vista.img}
                alt={`Vista de ${vista.nombre} desde el edificio COMEGA`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-comega-black/70 via-comega-black/10 to-transparent" />
              <p className="absolute bottom-4 left-4 font-heading text-sm text-comega-cream/90 md:hidden">
                {vista.nombre}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
