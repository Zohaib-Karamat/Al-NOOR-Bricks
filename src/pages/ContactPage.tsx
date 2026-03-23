import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you soon.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[45vh] flex items-center bg-section-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-section-dark via-section-dark to-primary/20" />
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-section-dark-foreground tracking-tight">Contact Us</h1>
          <p className="text-xl text-section-dark-foreground/50 mt-4 max-w-xl mx-auto font-light">
            We'd love to hear from you. Send us an inquiry or call us directly.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3">Message Us</span>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-shadow"
                />
                <Button type="submit" size="lg" className="w-full font-bold text-base py-4 h-auto shadow-lg">
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <span className="inline-block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3">Reach Out</span>
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Info</h2>

              <div className="space-y-4">
                {[
                  { icon: Phone, title: "Phone", detail: "0309-0332115", sub: "Call us anytime", href: "tel:03090332115" },
                  { icon: MapPin, title: "Location", detail: "Pakistan", sub: "We deliver nationwide" },
                  { icon: Clock, title: "Working Hours", detail: "Mon - Sat: 8AM - 6PM", sub: "Sunday closed" },
                ].map((item) => (
                  <div key={item.title} className="bg-section-alt rounded-2xl p-6 border hover:border-primary/30 transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {item.detail}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.detail}</p>
                        )}
                        <p className="text-xs text-muted-foreground/60 mt-1">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
