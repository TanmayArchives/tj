import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ArtworkGrid } from "@/components/ArtworkGrid";
import { ArtworkCarousel } from "@/components/ArtworkCarousel";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4">
        <Hero />
        <ArtworkCarousel />
        <About />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
