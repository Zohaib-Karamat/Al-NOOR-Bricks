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
      <section className="page-hero min-h-[350px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutHero})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="text-xs font-bold text-primary-foreground/70 uppercase tracking-widest">Our Story</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-section-dark-foreground mt-3 tracking-tight">About Al Noor Bricks</h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Who We Are</span>
              <h2 className="section-title text-foreground mt-3 mb-6">A Legacy of Quality Construction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Al Noor Bricks is a trusted brick manufacturing company providing high-quality bricks for residential, commercial, and industrial construction. Our focus is strength, durability, and reliable supply.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a commitment to excellence, we have grown from a small-scale operation to one of the region's most respected brick manufacturers. Every brick we produce undergoes rigorous quality checks to ensure it meets the highest standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of experienced professionals ensures that every order is fulfilled on time and to specification, making us the preferred choice for builders, contractors, and developers.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={bricksStack} alt="Al Noor Bricks manufacturing" className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section-padding bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">What Drives Us</span>
            <h2 className="section-title text-foreground mt-3">Mission, Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-8 border shadow-sm text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Journey</span>
            <h2 className="section-title text-foreground mt-3">Milestones</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-8">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-black text-sm shrink-0">
                    {t.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-foreground text-lg">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-section-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Shield, label: "Quality Assured" },
              { icon: Hammer, label: "Built to Last" },
              { icon: Truck, label: "On-Time Delivery" },
            ].map((f) => (
              <div key={f.label}>
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <f.icon className="w-7 h-7 text-accent" />
                </div>
                <span className="text-sm font-semibold text-section-dark-foreground">{f.label}</span>
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
