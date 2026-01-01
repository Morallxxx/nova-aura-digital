import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços.";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-pulse-glow"
      style={{ 
        boxShadow: "0 0 20px rgba(34, 197, 94, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)" 
      }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
