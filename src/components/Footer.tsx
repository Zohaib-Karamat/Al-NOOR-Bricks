const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              AN
            </div>
            <span className="font-bold">Al Noor Bricks</span>
          </div>

          <div className="flex gap-6 text-sm text-background/70">
            <a href="#home" className="hover:text-background transition-colors">Home</a>
            <a href="#products" className="hover:text-background transition-colors">Products</a>
            <a href="#contact" className="hover:text-background transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm text-background/50">
          © 2025 Al Noor Bricks. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
