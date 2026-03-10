import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
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

      <section className="page-hero min-h-[300px] bg-section-dark">
        <div className="page-hero-content">
          <span className="text-xs font-bold text-section-dark-foreground/60 uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-section-dark-foreground mt-3 tracking-tight">Contact Us</h1>
          <p className="text-lg text-section-dark-foreground/60 mt-4 max-w-xl mx-auto">
            We'd love to hear from you. Send us an inquiry or call us directly.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none text-sm"
                />
                <Button type="submit" size="lg" className="w-full">
                  Send Inquiry
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Info</h2>

              <div className="bg-section-alt rounded-xl p-6 border">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">Phone</h3>
                    <a href="tel:03090332115" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      0309-0332115
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-section-alt rounded-xl p-6 border">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">Location</h3>
                    <p className="text-muted-foreground text-sm">Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="bg-section-alt rounded-xl p-6 border">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">Working Hours</h3>
                    <p className="text-muted-foreground text-sm">Mon - Sat: 8AM - 6PM</p>
                  </div>
                </div>
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
