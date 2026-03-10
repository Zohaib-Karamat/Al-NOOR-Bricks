import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Hammer, Truck, Award, DollarSign, Users, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg-2.jpg";
import bricksStack from "@/assets/bricks-stack.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "1M+", label: "Bricks Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

const features = [
  { icon: Shield, title: "Premium Quality", desc: "Every brick meets strict quality standards for lasting construction." },
  { icon: Hammer, title: "Durable & Strong", desc: "Engineered to withstand extreme conditions and heavy loads." },
  { icon: Truck, title: "Fast Delivery", desc: "Timely delivery to keep your construction on schedule." },
  { icon: Award, title: "Industry Certified", desc: "Our bricks comply with all industry quality benchmarks." },
  { icon: DollarSign, title: "Best Prices", desc: "Competitive pricing without compromising on quality." },
  { icon: Users, title: "Trusted Partner", desc: "Preferred by contractors and builders across the region." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-hero-overlay/80" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/20 border border-primary/30 text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Trusted Brick Manufacturer
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-section-dark-foreground leading-[1.05] mb-6 tracking-tight">
              Building <span className="text-accent">Stronger</span> Foundations
            </h1>
            <p className="text-xl text-section-dark-foreground/70 mb-10 max-w-xl leading-relaxed">
              Premium quality bricks trusted for durability, strength, and long-lasting construction across Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" asChild>
                <Link to="/products">
                  View Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="hero-outline" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-black text-primary-foreground">{s.value}</div>
                <div className="text-sm text-primary-foreground/70 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Who We Are</span>
              <h2 className="section-title text-foreground mt-3 mb-6">Built on Trust, Delivering Excellence</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Al Noor Bricks is a trusted brick manufacturing company providing high-quality bricks for residential, commercial, and industrial construction. With over 15 years of experience, we focus on strength, durability, and reliable supply.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={bricksStack} alt="Premium quality bricks" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Why Al Noor</span>
            <h2 className="section-title text-foreground mt-3">Why Choose Us</h2>
            <p className="section-subtitle">We deliver quality that speaks for itself, every single brick.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="bg-card rounded-xl p-7 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
            Ready to Build?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get in touch for bulk orders, custom requirements, or a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="hero-outline" asChild>
              <a href="tel:03090332115">Call 0309 0332115</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
