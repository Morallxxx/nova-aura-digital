import { Code2, Lock, Headphones, Zap, FileCode, Users } from "lucide-react";

const differentials = [
  {
    icon: FileCode,
    title: "Código Fonte Incluso",
    description: "Você recebe 100% do código fonte. O projeto é seu, sem dependências.",
  },
  {
    icon: Lock,
    title: "Sigilo Total",
    description: "Contrato de confidencialidade. Sua ideia está protegida conosco.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Atendimento humanizado e rápido. Estamos sempre disponíveis.",
  },
  {
    icon: Zap,
    title: "Entrega Ágil",
    description: "Metodologia ágil com entregas incrementais e feedback constante.",
  },
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Boas práticas, documentação e código fácil de manter e escalar.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais seniores com anos de experiência no mercado.",
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher a{" "}
            <span className="text-gradient">Loja do Black</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Nosso compromisso é entregar não apenas código, mas soluções 
            que geram valor real para o seu negócio.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
