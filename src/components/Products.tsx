const products = [
  { name: "Standard Red Bricks", description: "Classic red bricks ideal for general construction and residential projects." },
  { name: "High Strength Bricks", description: "Engineered for heavy-duty applications requiring extra load-bearing capacity." },
  { name: "Construction Bricks", description: "Versatile bricks suitable for walls, foundations, and partitions." },
  { name: "Clay Bricks", description: "Traditional clay bricks with natural durability and aesthetic appeal." },
];

const Products = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We offer a wide range of bricks for every construction need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-card rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-primary/10 flex items-center justify-center">
                <div className="w-20 h-12 bg-primary/30 rounded-sm" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
