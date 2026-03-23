import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Hammer, Truck, Award, DollarSign, Users, ArrowRight, CheckCircle2 } from "lucide-react";
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
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/95 via-hero-overlay/80 to-hero-overlay/40" />
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary-foreground text-xs font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted Brick Manufacturer
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-section-dark-foreground leading-[1.02] mb-8 tracking-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Stronger
              </span>{" "}
              Foundations
            </h1>
            <p className="text-xl md:text-2xl text-section-dark-foreground/60 mb-12 max-w-xl leading-relaxed font-light">
              Premium quality bricks trusted for durability, strength, and long-lasting construction across Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/20 font-bold text-base px-8 py-4 h-auto" asChild>
                <Link to="/products">
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="hero-outline" className="text-base px-8 py-4 h-auto" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-section-dark-foreground/40">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-section-dark-foreground/40 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-2xl border p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s, i) => (
                <div key={s.label} className={`${i < 3 ? "md:border-r border-border" : ""}`}>
                  <div className="text-4xl md:text-5xl font-black text-primary tracking-tight">{s.value}</div>
                  <div className="text-sm text-muted-foreground font-medium mt-2 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Who We Are</span>
              <h2 className="section-title text-foreground mb-6">
                Built on Trust,<br />Delivering Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Al Noor Bricks is a trusted brick manufacturing company providing high-quality bricks for residential, commercial, and industrial construction. With over 15 years of experience, we focus on strength, durability, and reliable supply.
              </p>
              <div className="space-y-3 mb-8">
                {["ISO Quality Standards", "Bulk Order Specialists", "Pan-Pakistan Delivery"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={bricksStack} alt="Premium quality bricks" className="w-full h-[450px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="text-3xl font-black text-primary-foreground">15+</div>
                <div className="text-primary-foreground/80 text-sm font-medium">Years of<br />Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Why Al Noor</span>
            <h2 className="section-title text-section-dark-foreground">Why Choose Us</h2>
            <p className="text-lg text-section-dark-foreground/50 max-w-2xl mx-auto mt-4">
              We deliver quality that speaks for itself, every single brick.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="bg-section-dark-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-section-dark-foreground/10 hover:border-primary/40 hover:bg-section-dark-foreground/10 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors">
                  <f.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-section-dark-foreground mb-3 text-lg">{f.title}</h3>
                <p className="text-sm text-section-dark-foreground/50 leading-relaxed">{f.desc}</p>
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 tracking-tight">
            Ready to Build?
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Get in touch for bulk orders, custom requirements, or a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-8 py-4 h-auto shadow-xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="hero-outline" className="text-base px-8 py-4 h-auto" asChild>
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
