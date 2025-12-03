import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = "23276983446";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message from form data
    const whatsappMessage = `Hello ALZERA MEDIA EMPIRE,%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage:%0A${formData.message}`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
    
    toast.success("Opening WhatsApp...");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Ready to start your project? Contact us today and let's create something amazing together
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out through any of the following channels. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg hover-scale hover-glow transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="text-[#25D366]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">+232 76983446</p>
                    <p className="text-xs text-primary mt-1">Click to chat instantly</p>
                  </div>
                </a>

                <a
                  href="mailto:info@alzeramedia.com"
                  className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg hover-scale hover-glow transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">info@alzeramedia.com</p>
                  </div>
                </a>

                <a
                  href="tel:+232XXXXXXXXX"
                  className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg hover-scale hover-glow transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">+232 XX XXX XXXX</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">Sierra Leone</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {["Facebook", "Instagram", "YouTube", "TikTok"].map((platform) => (
                    <a
                      key={platform}
                      href={`https://${platform.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      {platform.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-elegant)]">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+232 XX XXX XXXX"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full">
                  <Send size={20} className="mr-2" />
                  Send via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you'll be redirected to WhatsApp to complete your message.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
