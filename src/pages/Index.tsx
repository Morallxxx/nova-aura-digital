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
