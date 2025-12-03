import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "23276983446"; // Replace with actual number
  const message = "Hello ALZERA MEDIA EMPIRE, I'm interested in your photography and media services.";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-float group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full" />
    </a>
  );
};

export default WhatsAppButton;
