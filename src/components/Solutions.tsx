import { Palette, Shield, Bot, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="solucoes" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Soluções que{" "}
            <span className="text-primary">impulsionam</span>
            {" "}resultados
          </h2>
          <p className="text-muted-foreground text-lg">
            Desenvolvemos software sob medida com as melhores tecnologias do mercado, 
            garantindo qualidade e performance em cada linha de código.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="bg-card border-border card-vivo group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <solution.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl text-foreground">{solution.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="link" className="text-primary p-0 h-auto">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
