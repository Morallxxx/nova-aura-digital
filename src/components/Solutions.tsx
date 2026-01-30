import { Palette, Shield, Bot, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Palette,
    title: "High-Fidelity UI/UX",
    description: "Interfaces modernas e intuitivas que encantam usuários e convertem visitantes em clientes.",
    features: ["Design responsivo", "Prototipagem interativa", "Testes de usabilidade", "Design Systems"],
  },
  {
    icon: Shield,
    title: "Infraestrutura Blindada",
    description: "Sistemas robustos, escaláveis e seguros para suportar o crescimento do seu negócio.",
    features: ["Deploy automatizado", "Monitoramento 24/7", "Backup em nuvem", "SSL e segurança"],
  },
  {
    icon: Bot,
    title: "Automação & Bots",
    description: "Automatize tarefas repetitivas e otimize processos com inteligência artificial.",
    features: ["Chatbots inteligentes", "Integrações API", "Webhooks customizados", "Workflows automáticos"],
  },
];

const Solutions = () => {
  return (
    <section id="solucoes" className="py-24 md:py-32 bg-muted/10">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="mb-6 text-foreground">
            The one platform{" "}
            <span className="text-gradient">behind it all</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Sell online and in person. Sell locally and globally. Sell direct and wholesale.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <solution.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              <ul className="space-y-3 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="link" className="text-foreground p-0 h-auto group-hover:text-primary transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
