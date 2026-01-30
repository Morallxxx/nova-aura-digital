import { useState, useEffect } from "react";
import { Menu, X, Search, User, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const primaryLinks = [
  { href: "#inicio", label: "Para Você", active: true },
  { href: "#empresas", label: "Para Empresas" },
];

const secondaryLinks = [
  { href: "#app", label: "Baixe o App Vivo" },
  { href: "#solucoes", label: "Produtos e Serviços" },
  { href: "#faq", label: "Ajuda" },
  { href: "#diferenciais", label: "Por que Vivo" },
  { href: "#contato", label: "Melhores Ofertas", highlight: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      {/* Top Navigation Bar */}
      <div className="border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-14 px-4">
            {/* Logo + Primary Links */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">Página inicial</span>
              <a href="#inicio" className="flex items-center">
                <span className="text-2xl font-bold text-primary">vivo</span>
                <span className="text-primary text-2xl">✦</span>
              </a>
              <nav className="hidden md:flex items-center gap-4">
                {primaryLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-sm font-medium transition-colors ${
                      link.active 
                        ? "text-primary" 
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-6">
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs">♿</div>
                Acessibilidade
              </button>
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Search className="w-4 h-4" />
                Buscar
              </button>
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <User className="w-4 h-4" />
                Login
              </button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Ofertas para</span>
                <button className="flex items-center gap-1 font-medium text-foreground">
                  <MapPin className="w-4 h-4" />
                  São Paulo (SP)
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="hidden md:block border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-8 h-12">
            {secondaryLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors ${
                  link.highlight 
                    ? "text-primary hover:text-primary/80" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 border-t border-border bg-background animate-fade-in">
          <div className="flex flex-col gap-1 px-4">
            {[...primaryLinks, ...secondaryLinks].map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                  'highlight' in link && link.highlight 
                    ? "text-primary hover:bg-primary/5" 
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button 
                variant="outline"
                onClick={() => handleNavClick("#contato")}
                className="w-full"
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button 
                onClick={() => handleNavClick("#contato")}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Falar Agora
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
