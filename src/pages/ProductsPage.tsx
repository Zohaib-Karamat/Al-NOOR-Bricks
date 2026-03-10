import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productsHero from "@/assets/products-hero.jpg";
import bricksStack from "@/assets/bricks-stack.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
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

      <section className="page-hero min-h-[350px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${productsHero})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="text-xs font-bold text-primary-foreground/70 uppercase tracking-widest">What We Offer</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-section-dark-foreground mt-3 tracking-tight">Our Products</h1>
          <p className="text-lg text-section-dark-foreground/70 mt-4 max-w-xl mx-auto">
            A complete range of bricks for every construction need.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((p) => (
              <div key={p.name} className="bg-card rounded-2xl border shadow-sm overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {p.tag && (
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground text-lg mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">Need Custom Orders?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            We handle bulk and custom orders. Contact us for special requirements and pricing.
          </p>
          <Button size="lg" variant="hero" asChild>
            <Link to="/contact">
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
