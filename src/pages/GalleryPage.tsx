import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[45vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${gallery2})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/95 via-hero-overlay/80 to-hero-overlay/50" />
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">See Our Work</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-section-dark-foreground tracking-tight">Gallery</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {images.map((img, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden cursor-pointer group relative ${
                  i === 0 || i === 5 ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-sm font-bold text-section-dark-foreground">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-section-dark-foreground/10 hover:bg-section-dark-foreground/20 flex items-center justify-center text-section-dark-foreground transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-section-dark-foreground/10 hover:bg-section-dark-foreground/20 flex items-center justify-center text-section-dark-foreground transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selected].src}
              alt={images[selected].caption}
              className="w-full rounded-2xl shadow-2xl max-h-[80vh] object-contain"
            />
            <p className="text-center text-section-dark-foreground font-semibold mt-4 text-lg">{images[selected].caption}</p>
          </div>
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-section-dark-foreground/10 hover:bg-section-dark-foreground/20 flex items-center justify-center text-section-dark-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
