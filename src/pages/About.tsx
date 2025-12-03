import { Target, Eye, Award, Users } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  const values = [
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To innovate and shape the future of storytelling through technology, lens, and graphics — becoming the most trusted and influential media platform that thrives in the digital age.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To bring together creative thinking and data-driven insights that inspire people globally through the power of unparalleled storytelling, iconic brands, creative minds, and innovative technologies.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive to be the world's premier media company through our excellence in photography, videography, design, and digital storytelling.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building lasting relationships with our clients and partners through exceptional service and creative collaboration.",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutBg}
            alt="Creative workspace and media production equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary-dark/80 to-background/85" />
        </div>

        <div className="container mx-auto px-4 md:px-8 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            About <span className="text-accent">ALZERA MEDIA EMPIRE</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Innovating the future of storytelling through creativity, technology, and unparalleled
            expertise in visual media production
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover-scale hover-glow transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient">Creative Director</span>
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-[var(--shadow-elegant)]">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center shadow-[var(--shadow-glow)]">
                <span className="text-5xl text-primary-foreground font-bold">AM</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Senior Photographer & Creative Director</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With years of experience in professional photography, videography, and creative
                direction, our founder leads ALZERA MEDIA EMPIRE with a passion for excellence and
                innovation. Specializing in capturing life's most precious moments and transforming
                creative visions into reality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-primary/10 border border-primary/20 rounded-lg px-6 py-3">
                  <p className="text-sm text-muted-foreground">Expertise</p>
                  <p className="font-semibold text-primary">Photography & Videography</p>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-lg px-6 py-3">
                  <p className="text-sm text-muted-foreground">Specialization</p>
                  <p className="font-semibold text-accent-foreground">Creative Direction</p>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg px-6 py-3">
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-semibold text-primary">10+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "300+", label: "Happy Clients" },
              { number: "15+", label: "Services Offered" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-primary-foreground/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
