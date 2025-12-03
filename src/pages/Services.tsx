import {
  Camera,
  Video,
  Globe,
  Palette,
  Code,
  Music,
  Calendar,
  Tv,
  Film,
  Smartphone,
  Wrench,
  PenTool,
  Radio,
  Users,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const whatsappNumber = "232XXXXXXXXX";

  const services = [
    {
      icon: Camera,
      title: "Photography & Photo Editing",
      description:
        "Professional photography services including portraits, commercial shoots, product photography, and advanced photo editing with color grading and retouching.",
      features: ["Portrait Photography", "Commercial Shoots", "Product Photography", "Photo Retouching"],
    },
    {
      icon: Video,
      title: "Videography & Video Editing",
      description:
        "Cinematic videography and professional video editing services for commercials, corporate videos, music videos, and promotional content.",
      features: ["Corporate Videos", "Music Videos", "Commercial Production", "Post-Production"],
    },
    {
      icon: Calendar,
      title: "Event Coverage",
      description:
        "Comprehensive event coverage including weddings, corporate events, conferences, and special occasions with both photo and video documentation.",
      features: ["Weddings", "Corporate Events", "Conferences", "Special Occasions"],
    },
    {
      icon: Film,
      title: "Documentary Production",
      description:
        "Professional documentary filmmaking services telling compelling stories through interviews, research, and cinematic production quality.",
      features: ["Storytelling", "Interviews", "Research", "Editing"],
    },
    {
      icon: Globe,
      title: "Website Development & Design",
      description:
        "Modern, responsive website design and development services creating stunning online presence for businesses and individuals.",
      features: ["Responsive Design", "E-commerce", "SEO Optimization", "Maintenance"],
    },
    {
      icon: Palette,
      title: "Graphics Design & Printing",
      description:
        "Creative graphic design services including branding, marketing materials, social media graphics, and professional printing solutions.",
      features: ["Branding", "Marketing Materials", "Social Media Graphics", "Print Services"],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Custom mobile application development for iOS and Android platforms with intuitive user interfaces and powerful functionality.",
      features: ["iOS Apps", "Android Apps", "UI/UX Design", "Maintenance"],
    },
    {
      icon: Wrench,
      title: "Computer Repair & Software",
      description:
        "Professional computer repair services, hardware upgrades, software installation, and technical support for all your IT needs.",
      features: ["Hardware Repair", "Software Installation", "System Upgrades", "Tech Support"],
    },
    {
      icon: PenTool,
      title: "Movie & Story Writing",
      description:
        "Professional screenwriting and story development services for films, series, documentaries, and creative content projects.",
      features: ["Screenwriting", "Story Development", "Script Editing", "Creative Consultation"],
    },
    {
      icon: Music,
      title: "Music Production",
      description:
        "Full-service music production including recording, mixing, mastering, and entertainment services for artists and events.",
      features: ["Recording", "Mixing & Mastering", "Sound Design", "Live Entertainment"],
    },
    {
      icon: Users,
      title: "Events Planning & Decorations",
      description:
        "Complete event planning and decoration services creating memorable experiences with attention to every detail.",
      features: ["Event Design", "Venue Decoration", "Theme Development", "Coordination"],
    },
    {
      icon: Radio,
      title: "Live Streaming",
      description:
        "Professional live streaming services for events, conferences, and special occasions with multi-platform broadcasting capabilities.",
      features: ["Multi-Platform Streaming", "Technical Setup", "Live Production", "Recording"],
    },
    {
      icon: Lightbulb,
      title: "Media Consultancy",
      description:
        "Expert media consultation services helping businesses develop effective media strategies and creative content solutions.",
      features: ["Strategy Development", "Content Planning", "Brand Positioning", "Market Analysis"],
    },
    {
      icon: Tv,
      title: "TV, Podcast & Radio Broadcasting",
      description:
        "Professional broadcasting services including TV production, podcast creation, and radio show production with full technical support.",
      features: ["TV Production", "Podcast Creation", "Radio Shows", "Content Distribution"],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Comprehensive creative and technical solutions tailored to bring your vision to life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover-scale hover-glow transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project and discover how we can help bring your vision to
            life.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello%20ALZERA%20MEDIA%20EMPIRE%2C%20I%E2%80%99m%20interested%20in%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg" className="text-lg px-10">
              Book a Consultation
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;
