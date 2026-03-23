import { Link } from "react-router-dom";
import { Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-section-dark text-section-dark-foreground">
      <div className="container mx-auto px-4">
        {/* Top */}
        <div className="py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-black text-lg shadow-lg">
                AN
              </div>
              <div>
                <span className="font-extrabold text-xl block leading-tight">Al Noor Bricks</span>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Since 2010</span>
              </div>
            </div>
            <p className="text-section-dark-foreground/50 text-sm leading-relaxed max-w-sm">
              Premium quality bricks for residential, commercial, and industrial construction. Built to last, delivered on time.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-[0.15em] mb-5 text-section-dark-foreground/70">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="flex items-center gap-1 text-sm text-section-dark-foreground/50 hover:text-accent transition-colors group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-sm uppercase tracking-[0.15em] mb-5 text-section-dark-foreground/70">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:03090332115"
                className="flex items-center gap-3 text-section-dark-foreground/70 hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-section-dark-foreground/5 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold">0309-0332115</div>
                  <div className="text-xs text-section-dark-foreground/40">Mon - Sat, 8AM - 6PM</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-section-dark-foreground/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-section-dark-foreground/30">
            © 2025 Al Noor Bricks. All rights reserved.
          </p>
          <p className="text-xs text-section-dark-foreground/30">
            Quality bricks for a stronger Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
