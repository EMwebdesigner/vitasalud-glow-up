import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/584121234567?text=Hola,%20quiero%20agendar%20una%20consulta",
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 animate-fade-in-right"
      style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
