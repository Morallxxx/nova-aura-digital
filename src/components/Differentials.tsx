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
    <section id="diferenciais" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="mb-6 text-foreground">
            Why choose{" "}
            <span className="text-gradient">Loja do Black</span>?
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Our commitment is to deliver not just code, but solutions that generate real value for your business.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
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
