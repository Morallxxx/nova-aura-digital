import { useState } from "react";
import { Send, MessageCircle, Mail, User, ArrowRight } from "lucide-react";
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
    <section id="contato" className="py-24 md:py-32 bg-background relative">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="mb-6 text-foreground">
            Ready to{" "}
            <span className="text-gradient">get started</span>?
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Tell us about your project. We're ready to turn your idea into reality.
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                  <User className="w-4 h-4 text-primary" />
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="How can we call you?"
                  className="bg-card border-border focus:border-primary h-12 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact" className="flex items-center gap-2 text-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  Email or WhatsApp
                </Label>
                <Input
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-card border-border focus:border-primary h-12 rounded-xl"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2 text-foreground">
                <MessageCircle className="w-4 h-4 text-primary" />
                Your Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project, idea, or need..."
                rows={5}
                className="bg-card border-border focus:border-primary resize-none rounded-xl"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full h-14 text-base rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </span>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* WhatsApp Direct */}
          <Button 
            onClick={handleWhatsAppClick}
            variant="outline" 
            size="lg" 
            className="w-full h-14 text-base rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary font-semibold"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
