import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-18 px-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black text-lg tracking-tight">
            AN
          </div>
          <div className="hidden sm:block">
            <span className="font-extrabold text-lg text-foreground tracking-tight block leading-tight">Al Noor</span>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Bricks</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-primary-light"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button size="default" asChild>
            <a href="tel:03090332115">
              <Phone className="w-4 h-4" />
              0309 0332115
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t bg-background px-4 pb-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-3 px-3 text-sm font-semibold rounded-lg transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-primary-light"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button size="default" className="w-full mt-3" asChild>
            <a href="tel:03090332115">
              <Phone className="w-4 h-4" />
              0309 0332115
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
