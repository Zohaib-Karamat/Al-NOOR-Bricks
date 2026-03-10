const Footer = () => {
  return (
    <footer className="bg-section-dark text-section-dark-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black text-sm">
                AN
              </div>
              <div>
                <span className="font-extrabold text-lg block leading-tight">Al Noor Bricks</span>
              </div>
            </div>
            <p className="text-section-dark-foreground/60 text-sm leading-relaxed">
              Premium quality bricks for residential, commercial, and industrial construction. Built to last.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-section-dark-foreground/80">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Products", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                  className="block text-sm text-section-dark-foreground/60 hover:text-section-dark-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-section-dark-foreground/80">Contact</h4>
            <p className="text-sm text-section-dark-foreground/60 mb-2">Phone: 0309-0332115</p>
            <p className="text-sm text-section-dark-foreground/60">We deliver across the region.</p>
          </div>
        </div>

        <div className="border-t border-section-dark-foreground/10 mt-10 pt-6 text-center text-xs text-section-dark-foreground/40">
          © 2025 Al Noor Bricks. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
