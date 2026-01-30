import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Trabalhamos com metodologia ágil. Primeiro, entendemos sua necessidade em uma reunião gratuita. Depois, criamos um escopo detalhado e iniciamos o desenvolvimento com entregas semanais para você acompanhar a evolução.",
  },
  {
    question: "O código fonte é meu após o projeto?",
    answer: "Sim! Você recebe 100% do código fonte documentado. O projeto é totalmente seu, sem dependências ou taxas de licenciamento. Você pode hospedar onde quiser.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim, oferecemos 30 dias de suporte gratuito após a entrega para correções de bugs. Também temos planos de manutenção e suporte contínuo para quem deseja acompanhamento mensal.",
  },
  {
    question: "Qual é o prazo médio de entrega?",
    answer: "Depende da complexidade do projeto. Projetos simples levam de 2 a 4 semanas. Sistemas mais robustos podem levar de 1 a 3 meses. Definimos o cronograma juntos antes de iniciar.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Trabalhamos com entrada de 50% para iniciar e 50% na entrega. Para projetos maiores, podemos parcelar em mais etapas conforme os marcos de entrega.",
  },
  {
    question: "Vocês assinam contrato de confidencialidade (NDA)?",
    answer: "Sim! A sua ideia e informações do projeto são protegidas por contrato de confidencialidade. Sigilo total é um dos nossos pilares.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 relative bg-muted/10">
      {/* Background Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 gradient-primary-radial opacity-30" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="mb-6 text-foreground">
            Frequently{" "}
            <span className="text-gradient">Asked Questions</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Get answers about our process and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-base font-medium text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
