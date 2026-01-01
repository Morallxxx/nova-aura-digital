import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços.";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
