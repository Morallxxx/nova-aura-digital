import { ArrowRight, Wifi, Smartphone, Check, Coffee, Music, Gamepad2, ShoppingBag, Cpu, Globe, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const decorativeIcons = [
  { icon: Gamepad2, color: "bg-secondary" },
  { icon: Coffee, color: "bg-primary" },
  { icon: Music, color: "bg-secondary" },
  { icon: Star, color: "bg-primary" },
  { icon: ShoppingBag, color: "bg-secondary" },
  { icon: Cpu, color: "bg-primary" },
  { icon: Globe, color: "bg-secondary" },
  { icon: Zap, color: "bg-primary" },
  { icon: Wifi, color: "bg-secondary" },
  { icon: Smartphone, color: "bg-primary" },
  { icon: Music, color: "bg-secondary" },
  { icon: Star, color: "bg-primary" },
];

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative pt-28">
      {/* Hero Banner - Purple with Decorative Grid */}
      <div className="bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-xl">
            <span className="text-sm uppercase tracking-wider text-white/80 mb-4 block">
              SOLUÇÕES DIGITAIS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Seu primeiro passo para o digital é agora
            </h1>
            
            {/* Price Box */}
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8">
              <div className="border-r border-white/30 pr-4">
                <div className="text-3xl font-bold text-white">25<span className="text-lg">GB</span></div>
                <div className="text-xs text-white/80">300 minutes</div>
                <div className="text-xs text-white/80">100 SMS</div>
              </div>
              <div>
                <div className="flex items-baseline text-white">
                  <span className="text-sm">R$</span>
                  <span className="text-4xl font-bold">55</span>
                  <span className="text-sm">/30 dias</span>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              variant="outline"
              onClick={() => handleNavClick("#contato")}
              className="border-white text-primary bg-white hover:bg-white/90 text-base px-8"
            >
              Solicitar orçamento
            </Button>
          </div>
        </div>

        {/* Decorative Icons Grid - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="grid grid-cols-4 gap-3 h-full p-4">
            {decorativeIcons.map((item, i) => (
              <div 
                key={i} 
                className={`${item.color} rounded-2xl flex items-center justify-center aspect-square`}
              >
                <item.icon className="w-10 h-10 text-white" />
              </div>
            ))}
          </div>
          {/* Tourist Plan Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <span className="text-6xl mb-2">✦</span>
              <h2 className="text-4xl md:text-5xl font-bold">Tourist Plan</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            As melhores ofertas para o seu dia a dia
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Offer Card 1 - Vivo Fibra */}
            <div className="bg-card rounded-2xl border border-border p-6 relative hover:shadow-lg transition-shadow">
              <span className="absolute -top-3 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                OFERTA EXCLUSIVA NO SITE <Zap className="w-3 h-3" />
              </span>
              <h3 className="text-muted-foreground text-sm mt-4 mb-2">Vivo Fibra</h3>
              <div className="flex items-center gap-3 mb-6">
                <Wifi className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-foreground">600 <span className="text-lg">Mega</span></span>
              </div>
              <div className="h-px bg-border my-4" />
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  1 ano de Perplexity Pro Grátis
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  Bônus de 599,8 Mbps por adimplência
                </li>
              </ul>
            </div>

            {/* Offer Card 2 - Vivo Total Pro */}
            <div className="bg-card rounded-2xl border border-border p-6 relative hover:shadow-lg transition-shadow">
              <span className="absolute -top-3 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                PLANO MAIS ESCOLHIDO
              </span>
              <h3 className="text-muted-foreground text-sm mt-4 mb-2">Vivo Total Pro</h3>
              <div className="flex items-center gap-3 mb-4">
                <Wifi className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-foreground">500 <span className="text-lg">Mega</span></span>
              </div>
              <div className="h-px bg-border my-4" />
              <div className="flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-primary" />
                <div>
                  <span className="text-2xl font-bold text-foreground">50 <span className="text-base">GB</span></span>
                  <p className="text-sm text-muted-foreground">de Vivo Pós</p>
                </div>
              </div>
            </div>

            {/* Offer Card 3 - Vivo Pós */}
            <div className="bg-card rounded-2xl border border-border p-6 relative hover:shadow-lg transition-shadow">
              <span className="absolute -top-3 left-4 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                VOLTA ÀS AULAS 🎒
              </span>
              <h3 className="text-muted-foreground text-sm mt-4 mb-2">Vivo Pós com Amazon Prime</h3>
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-foreground">56 <span className="text-lg">GB</span></span>
              </div>
              <div className="h-px bg-border my-4" />
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  + 20 GB na portabilidade
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  50 GB de franquia
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  6 GB de bônus
                </li>
              </ul>
            </div>

            {/* Offer Card 4 - Vivo Controle */}
            <div className="bg-card rounded-2xl border border-border p-6 relative hover:shadow-lg transition-shadow">
              <span className="absolute -top-3 left-4 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                VOLTA ÀS AULAS 🎒
              </span>
              <h3 className="text-muted-foreground text-sm mt-4 mb-2">Vivo Controle</h3>
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-foreground">26 <span className="text-lg">GB</span></span>
              </div>
              <div className="h-px bg-border my-4" />
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  9 GB de franquia
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  17 GB de bônus
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
