import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-black text-lg tracking-tight shadow-lg group-hover:scale-105 transition-transform">
            AN
          </div>
          <div className="hidden sm:block">
            <span
              className={`font-extrabold text-lg block leading-tight transition-colors ${
                scrolled ? "text-foreground" : "text-section-dark-foreground"
              }`}
            >
              Al Noor
            </span>
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
              Bricks
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                location.pathname === link.to
                  ? "text-primary"
                  : scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-section-dark-foreground/80 hover:text-section-dark-foreground"
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button size="default" className="shadow-lg" asChild>
            <a href="tel:03090332115">
              <Phone className="w-4 h-4" />
              0309 0332115
            </a>
          </Button>
        </div>

        <button
          className={`lg:hidden p-2.5 rounded-xl transition-colors ${
            scrolled
              ? "text-foreground hover:bg-muted"
              : "text-section-dark-foreground hover:bg-section-dark-foreground/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/98 backdrop-blur-xl border-t px-4 pb-6 pt-2 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center justify-between py-3.5 px-4 text-sm font-semibold rounded-xl transition-all ${
                location.pathname === link.to
                  ? "text-primary bg-primary-light"
                  : "text-foreground hover:bg-muted"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          ))}
          <Button size="default" className="w-full mt-4 shadow-lg" asChild>
            <a href="tel:03090332115">
              <Phone className="w-4 h-4" />
              0309 0332115
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
