import Hero from "@/components/sections/Hero";
import Historia from "@/components/sections/Historia";
import Resenas from "@/components/sections/Resenas";
import VistasIconicas from "@/components/sections/VistasIconicas";
import AntesDespues from "@/components/sections/AntesDespues";
import EncontraComega from "@/components/sections/EncontraComega";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Personalidades from "@/components/sections/Personalidades";
import MapaUbicacion from "@/components/sections/MapaUbicacion";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Historia />
      <Resenas />
      <VistasIconicas />
      <AntesDespues />
      <EncontraComega />
      <InstagramFeed />
      <Personalidades />
      <MapaUbicacion />
      <Footer />
    </main>
  );
}
