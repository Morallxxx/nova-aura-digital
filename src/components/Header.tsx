import { useState, useEffect } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#inicio", label: "Para Você" },
  { href: "#solucoes", label: "Produtos e Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#faq", label: "Ajuda" },
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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background shadow-sm border-b border-border" 
          : "bg-background"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">loja</span>
            <span className="text-2xl font-bold text-secondary">do black</span>
            <span className="text-primary text-3xl">✦</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-4 h-4" />
              Buscar
            </button>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <User className="w-4 h-4" />
              Login
            </button>
            <Button 
              onClick={() => handleNavClick("#contato")}
              className="bg-primary hover:bg-primary/90"
            >
              Falar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border bg-background animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    link.highlight 
                      ? "text-primary hover:bg-primary/5" 
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-4 flex flex-col gap-2">
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
      </div>
    </header>
  );
};

export default Header;
