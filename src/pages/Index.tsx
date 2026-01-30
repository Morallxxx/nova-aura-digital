import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Solutions from "@/components/Solutions";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <div className="flex flex-col items-center justify-center py-20 gap-6">
          <img src="/logo-lojadoblack.png" alt="Logo Loja do Black" className="w-32 md:w-48 h-auto" />
          <h1 className="text-4xl md:text-6xl font-bold text-gradient text-center px-4">OIII TE LIGUEIII MANO KKKK</h1>
          <p className="text-2xl md:text-4xl font-semibold text-primary text-center px-4">VARIOS BEIJINHOOOO 😘😘😘</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4 max-w-6xl">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <code className="text-primary font-mono text-sm">E = mc²</code>
              <p className="text-muted-foreground text-xs mt-2">Equivalência massa-energia</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <code className="text-primary font-mono text-sm">a² + b² = c²</code>
              <p className="text-muted-foreground text-xs mt-2">Teorema de Pitágoras</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <code className="text-primary font-mono text-sm">∫ f(x)dx = F(x) + C</code>
              <p className="text-muted-foreground text-xs mt-2">Integral indefinida</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <code className="text-primary font-mono text-sm">Σ (i=1 to n) i = n(n+1)/2</code>
              <p className="text-muted-foreground text-xs mt-2">Soma de progressão aritmética</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <code className="text-primary font-mono text-sm">x = (-b ± √(b²-4ac)) / 2a</code>
              <p className="text-muted-foreground text-xs mt-2">Fórmula de Bhaskara</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <code className="text-primary font-mono text-sm">π = 3.14159265359...</code>
              <p className="text-muted-foreground text-xs mt-2">Número Pi</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <code className="text-primary font-mono text-sm">e^(iπ) + 1 = 0</code>
              <p className="text-muted-foreground text-xs mt-2">Identidade de Euler</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <code className="text-primary font-mono text-sm">lim (x→0) sin(x)/x = 1</code>
              <p className="text-muted-foreground text-xs mt-2">Limite fundamental</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <code className="text-primary font-mono text-sm">d/dx[xⁿ] = nxⁿ⁻¹</code>
              <p className="text-muted-foreground text-xs mt-2">Regra da potência</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <code className="text-primary font-mono text-sm">A = πr²</code>
              <p className="text-muted-foreground text-xs mt-2">Área do círculo</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <code className="text-primary font-mono text-sm">F = G(m₁m₂)/r²</code>
              <p className="text-muted-foreground text-xs mt-2">Lei da gravitação</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <code className="text-primary font-mono text-sm">∇ × E = -∂B/∂t</code>
              <p className="text-muted-foreground text-xs mt-2">Lei de Faraday</p>
            </div>
          </div>
        </div>
        <TechStack />
        <Solutions />
        <Differentials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
