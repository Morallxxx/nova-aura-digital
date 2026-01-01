import { useState } from "react";
import { Send, MessageCircle, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      toast({
        title: "Preencha todos os campos",
        description: "Por favor, preencha todas as informações.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\n\nContato: ${formData.contact}\n\nMensagem: ${formData.message}`
    );
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    setIsLoading(false);
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Você será redirecionado para continuar a conversa.",
    });

    // Reset form
    setFormData({ name: "", contact: "", message: "" });
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços.";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-muted/20 relative">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Vamos{" "}
            <span className="text-gradient">conversar</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Conte-nos sobre seu projeto. Estamos prontos para transformar sua ideia em realidade.
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Seu Nome
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Como podemos te chamar?"
                  className="bg-card/50 border-border/50 focus:border-primary h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  E-mail ou WhatsApp
                </Label>
                <Input
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="seu@email.com ou (11) 99999-9999"
                  className="bg-card/50 border-border/50 focus:border-primary h-12"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                Sua Mensagem
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva seu projeto, ideia ou necessidade..."
                rows={5}
                className="bg-card/50 border-border/50 focus:border-primary resize-none"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full glow-primary h-14 text-base"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </span>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-border/50" />
            <span className="text-sm text-muted-foreground">ou</span>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          {/* WhatsApp Direct */}
          <Button 
            onClick={handleWhatsAppClick}
            variant="outline" 
            size="lg" 
            className="w-full h-14 text-base border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar Direto no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
