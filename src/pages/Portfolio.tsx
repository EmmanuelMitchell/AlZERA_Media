import { useState } from "react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "photography", label: "Photography" },
    { id: "videography", label: "Videography" },
    { id: "events", label: "Events" },
    { id: "design", label: "Design" },
  ];

  // Placeholder portfolio items - replace with actual images
  const portfolioItems = [
    { id: 1, category: "photography", title: "Corporate Portrait Session", image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800" },
    { id: 2, category: "videography", title: "Commercial Production", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800" },
    { id: 3, category: "events", title: "Wedding Coverage", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800" },
    { id: 4, category: "design", title: "Brand Identity Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800" },
    { id: 5, category: "photography", title: "Product Photography", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800" },
    { id: 6, category: "events", title: "Corporate Event", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800" },
    { id: 7, category: "videography", title: "Music Video Production", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800" },
    { id: 8, category: "design", title: "Marketing Materials", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800" },
    { id: 9, category: "photography", title: "Fashion Photography", image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=800" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Explore our latest projects and creative work across photography, videography, design, and
            more
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="transition-all duration-300"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl aspect-square bg-card border border-border hover-scale cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Like What You See?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project and create something amazing together.
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
