import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import "./globals.css";

// AVGARDD_2.TTF (Avant Garde BT Demi) — usado en todos los títulos del sitio.
// Cargado con next/font/local para que la URL de la fuente respete el
// basePath de GitHub Pages (una ruta manual en globals.css no lo hacía).
const avantGarde = localFont({
  src: [
    { path: "../public/fonts/avantgarde-demi.ttf", weight: "400 700", style: "normal" },
    { path: "../public/fonts/avantgarde-demi-oblique.ttf", weight: "400 700", style: "italic" },
  ],
  variable: "--font-avant-garde",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edificio COMEGA — Buenos Aires",
  description:
    "Edificio COMEGA, ícono racionalista/art déco de Buenos Aires (Corrientes y Alem, 1934). PLACEHOLDER: reemplazar por descripción final.",
  // PLACEHOLDER: agregar openGraph.images con OG image real cuando esté disponible
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${avantGarde.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-comega-black text-comega-cream">
        <Nav />
        {children}
      </body>
    </html>
  );
}
