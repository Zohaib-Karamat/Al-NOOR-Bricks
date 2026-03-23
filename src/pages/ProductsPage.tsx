import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productsHero from "@/assets/products-hero.jpg";
import bricksStack from "@/assets/bricks-stack.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroBg from "@/assets/hero-bg-2.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  { name: "Standard Red Bricks", desc: "Classic red bricks ideal for general construction and residential projects. Built to standard specifications.", image: bricksStack, tag: "Popular" },
  { name: "High Strength Bricks", desc: "Engineered for heavy-duty applications requiring extra load-bearing capacity and structural integrity.", image: gallery1, tag: "Premium" },
  { name: "Construction Bricks", desc: "Versatile bricks suitable for walls, foundations, partitions, and all-purpose construction needs.", image: gallery3, tag: null },
  { name: "Clay Bricks", desc: "Traditional clay bricks with natural durability, aesthetic appeal, and excellent thermal properties.", image: bricksStack, tag: null },
  { name: "Facing Bricks", desc: "Decorative bricks designed for exposed exterior and interior walls with smooth finish.", image: gallery3, tag: "New" },
  { name: "Fire Bricks", desc: "Heat-resistant bricks designed for kilns, fireplaces, and high-temperature industrial applications.", image: gallery1, tag: "Specialty" },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${productsHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/95 via-hero-overlay/80 to-hero-overlay/50" />
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">What We Offer</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-section-dark-foreground tracking-tight">Our Products</h1>
          <p className="text-xl text-section-dark-foreground/50 mt-4 max-w-xl mx-auto font-light">
            A complete range of bricks for every construction need.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((p) => (
              <div key={p.name} className="bg-card rounded-2xl border shadow-sm overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  {p.tag && (
                    <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-foreground text-xl mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4 tracking-tight">Need Custom Orders?</h2>
          <p className="text-xl text-primary-foreground/70 mb-10 max-w-lg mx-auto font-light">
            We handle bulk and custom orders. Contact us for special requirements and pricing.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-8 py-4 h-auto shadow-xl" asChild>
            <Link to="/contact">
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
