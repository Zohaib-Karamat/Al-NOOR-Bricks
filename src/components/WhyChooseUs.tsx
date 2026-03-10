import { Award, DollarSign, Truck, Users } from "lucide-react";

const items = [
  { icon: Award, title: "Premium Quality", description: "Every brick meets strict quality standards." },
  { icon: DollarSign, title: "Affordable Prices", description: "Competitive pricing without compromising quality." },
  { icon: Truck, title: "Fast Delivery", description: "Timely delivery to your construction site." },
  { icon: Users, title: "Trusted by Contractors", description: "Preferred choice of builders and contractors." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-lg p-6 text-center shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
