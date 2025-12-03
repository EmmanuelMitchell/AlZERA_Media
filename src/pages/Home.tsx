import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Video, Globe, Palette, Code, Music, Calendar, Tv } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const whatsappNumber = "23276983446";

  const services = [
    { icon: Camera, title: "Photography", description: "Professional photo shoots and editing" },
    { icon: Video, title: "Videography", description: "Cinematic video production" },
    { icon: Calendar, title: "Event Coverage", description: "Capture your special moments" },
    { icon: Globe, title: "Web Development", description: "Modern website solutions" },
    { icon: Palette, title: "Graphics Design", description: "Creative visual content" },
    { icon: Code, title: "App Development", description: "Custom mobile applications" },
    { icon: Music, title: "Music Production", description: "Professional audio services" },
    { icon: Tv, title: "Broadcasting", description: "TV, podcast & radio services" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Professional photography and media services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-background/90" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-8 z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Capturing Creativity,
            <br />
            <span className="text-accent">Crafting Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 animate-fade-in">
            Welcome to ALZERA MEDIA EMPIRE - Your premier partner in photography, videography, and
            comprehensive creative media solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20ALZERA%20MEDIA%20EMPIRE%2C%20I%E2%80%99m%20interested%20in%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="text-lg px-8">
                Book a Session
              </Button>
            </a>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive creative solutions for all your media needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover-scale hover-glow group cursor-pointer transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="default" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Let's create something amazing together. Contact us today to discuss your project.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-lg px-10">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
