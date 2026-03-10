import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import bricksStack from "@/assets/bricks-stack.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = [
  { src: heroBg2, caption: "Our Manufacturing Facility" },
  { src: gallery1, caption: "Bricks Drying in the Sun" },
  { src: gallery2, caption: "Traditional Brick Kiln" },
  { src: gallery3, caption: "Finished Brick Wall" },
  { src: gallery4, caption: "Delivery & Logistics" },
  { src: bricksStack, caption: "Premium Quality Bricks" },
  { src: aboutHero, caption: "Skilled Workforce" },
  { src: heroBg, caption: "Brick Texture Close-up" },
];

const GalleryPage = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="page-hero min-h-[300px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${gallery2})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="text-xs font-bold text-primary-foreground/70 uppercase tracking-widest">See Our Work</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-section-dark-foreground mt-3 tracking-tight">Gallery</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
            {images.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-6 rounded-2xl overflow-hidden shadow-sm border cursor-pointer group hover:shadow-xl transition-shadow"
                onClick={() => setSelected(i)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-sm font-semibold text-section-dark-foreground">{img.caption}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selected].src}
              alt={images[selected].caption}
              className="w-full rounded-2xl shadow-2xl"
            />
            <p className="text-center text-section-dark-foreground font-semibold mt-4">{images[selected].caption}</p>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-section-dark-foreground/80 hover:text-section-dark-foreground text-3xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
