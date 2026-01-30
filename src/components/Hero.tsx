import { ArrowRight, Wifi, Smartphone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative pt-20">
      {/* Hero Banner - Purple Gradient */}
      <div className="gradient-vivo-hero text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-wider opacity-90 mb-4 block">
              SOLUÇÕES DIGITAIS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Seu primeiro passo para o digital é agora
            </h1>
            
            {/* Price Box */}
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8">
              <div className="border-r border-white/30 pr-4">
                <div className="text-3xl font-bold">+140</div>
                <div className="text-sm opacity-80">Projetos entregues</div>
              </div>
              <div>
                <div className="text-sm">A partir de</div>
                <div className="flex items-baseline">
                  <span className="text-sm">R$</span>
                  <span className="text-4xl font-bold">2.990</span>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              onClick={() => handleNavClick("#contato")}
              className="bg-white text-primary hover:bg-white/90 text-base px-8"
            >
              Solicitar orçamento
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Decorative Icons Grid */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:grid grid-cols-4 gap-2 opacity-30 p-8">
          {[...Array(16)].map((_, i) => (
            <div key={i} className={`rounded-lg ${i % 2 === 0 ? 'bg-white/20' : 'bg-secondary/40'} flex items-center justify-center`}>
              {i % 3 === 0 && <Wifi className="w-8 h-8" />}
              {i % 3 === 1 && <Smartphone className="w-8 h-8" />}
            </div>
          ))}
        </div>
      </div>

      {/* Offers Section */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            As melhores ofertas para o seu dia a dia
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Offer Card 1 */}
            <div className="card-vivo p-6 relative">
              <span className="badge-vivo badge-purple absolute -top-3 left-4">
                OFERTA EXCLUSIVA ⚡
              </span>
              <h3 className="text-muted-foreground text-sm mt-2 mb-1">Landing Page</h3>
              <div className="flex items-center gap-2 mb-4">
                <Wifi className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">5 páginas</span>
              </div>
              <div className="h-px bg-border my-4" />
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Design responsivo
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Otimização SEO
                </li>
              </ul>
            </div>

            {/* Offer Card 2 */}
            <div className="card-vivo p-6 relative">
              <span className="badge-vivo badge-purple absolute -top-3 left-4">
                MAIS ESCOLHIDO
              </span>
              <h3 className="text-muted-foreground text-sm mt-2 mb-1">E-commerce</h3>
              <div className="flex items-center gap-2 mb-4">
                <Wifi className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">Loja completa</span>
              </div>
              <div className="h-px bg-border my-4" />
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold text-foreground">+50 produtos</span>
              </div>
              <p className="text-sm text-muted-foreground">de catálogo inicial</p>
            </div>

            {/* Offer Card 3 */}
            <div className="card-vivo p-6 relative">
              <span className="badge-vivo badge-orange absolute -top-3 left-4">
                AUTOMAÇÃO 🤖
              </span>
              <h3 className="text-muted-foreground text-sm mt-2 mb-1">Bots & Integrações</h3>
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">Chatbot IA</span>
              </div>
              <div className="h-px bg-border my-4" />
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  WhatsApp integrado
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Respostas automáticas
                </li>
              </ul>
            </div>

            {/* Offer Card 4 */}
            <div className="card-vivo p-6 relative">
              <span className="badge-vivo badge-green absolute -top-3 left-4">
                SUPORTE 24/7
              </span>
              <h3 className="text-muted-foreground text-sm mt-2 mb-1">App Mobile</h3>
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">iOS + Android</span>
              </div>
              <div className="h-px bg-border my-4" />
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Publicação nas lojas
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Manutenção inclusa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
