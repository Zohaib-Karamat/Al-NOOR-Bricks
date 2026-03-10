import { Shield, Hammer, Truck } from "lucide-react";

const features = [
  { icon: Shield, title: "High Quality Material", description: "Made from premium clay for superior construction." },
  { icon: Hammer, title: "Durable & Strong Bricks", description: "Engineered to withstand extreme conditions." },
  { icon: Truck, title: "Reliable Supply", description: "Consistent delivery to keep your project on track." },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Al Noor Bricks</h2>
          <p className="text-muted-foreground leading-relaxed">
            Al Noor Bricks is a trusted brick manufacturing company providing high-quality bricks for residential, commercial, and industrial construction. Our focus is strength, durability, and reliable supply.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-lg p-6 text-center shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
