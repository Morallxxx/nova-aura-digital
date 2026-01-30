import { Instagram, Linkedin, Github, MessageCircle } from "lucide-react";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: MessageCircle, href: "https://wa.me/5511999999999", label: "WhatsApp" },
];

const Footer = () => {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 px-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-white">vivo</span>
              <span className="text-white text-2xl">✦</span>
            </div>
            <p className="text-sm text-white/80 max-w-xs">
              Conectando você ao que mais importa. Soluções digitais para todos.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-white/80 hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-8 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/80">
            <p>© {new Date().getFullYear()} Loja do Black. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
