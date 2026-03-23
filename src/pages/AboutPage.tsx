import { Shield, Hammer, Truck, Target, Eye, Heart } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import bricksStack from "@/assets/bricks-stack.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Target, title: "Our Mission", desc: "To provide the highest quality bricks that form the foundation of strong, lasting structures across Pakistan." },
  { icon: Eye, title: "Our Vision", desc: "To become the most trusted name in brick manufacturing, known for quality, reliability, and innovation." },
  { icon: Heart, title: "Our Values", desc: "Integrity, quality, customer satisfaction, and commitment to sustainable manufacturing practices." },
];

const timeline = [
  { year: "2010", title: "Company Founded", desc: "Al Noor Bricks started operations with a single kiln and a vision for quality." },
  { year: "2014", title: "Expanded Operations", desc: "Doubled production capacity with advanced manufacturing equipment." },
  { year: "2018", title: "500+ Projects Milestone", desc: "Supplied bricks for over 500 residential and commercial projects." },
  { year: "2025", title: "Industry Leader", desc: "Recognized as a leading brick manufacturer in the region." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/95 via-hero-overlay/80 to-hero-overlay/50" />
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Our Story</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-section-dark-foreground tracking-tight">About Al Noor Bricks</h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Who We Are</span>
              <h2 className="section-title text-foreground mb-6">A Legacy of Quality Construction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Al Noor Bricks is a trusted brick manufacturing company providing high-quality bricks for residential, commercial, and industrial construction. Our focus is strength, durability, and reliable supply.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a commitment to excellence, we have grown from a small-scale operation to one of the region's most respected brick manufacturers. Every brick we produce undergoes rigorous quality checks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of experienced professionals ensures that every order is fulfilled on time and to specification, making us the preferred choice for builders, contractors, and developers.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={bricksStack} alt="Al Noor Bricks manufacturing" className="w-full h-[450px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="text-3xl font-black text-accent-foreground">500+</div>
                <div className="text-accent-foreground/80 text-sm font-medium">Projects<br />Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section-padding bg-section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">What Drives Us</span>
            <h2 className="section-title text-section-dark-foreground">Mission, Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-section-dark-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-section-dark-foreground/10 hover:border-primary/40 transition-all duration-300 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/25 transition-colors">
                  <v.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-section-dark-foreground text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-section-dark-foreground/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Our Journey</span>
            <h2 className="section-title text-foreground">Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-black text-sm shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    {t.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-4" />}
                </div>
                <div className="pb-12">
                  <h3 className="font-bold text-foreground text-xl">{t.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom features */}
      <section className="py-16 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {[
              { icon: Shield, label: "Quality Assured" },
              { icon: Hammer, label: "Built to Last" },
              { icon: Truck, label: "On-Time Delivery" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-bold text-foreground uppercase tracking-wider">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
