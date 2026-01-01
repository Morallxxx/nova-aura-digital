const technologies = [
  "PHP", "Laravel", "Node.js", "Python", "React", "Next.js", 
  "Vue.js", "TypeScript", "Docker", "AWS", "PostgreSQL", "MongoDB",
  "Redis", "GraphQL", "Tailwind CSS", "Flutter", "WordPress", "Shopify"
];

const TechStack = () => {
  return (
    <section className="py-16 overflow-hidden border-y border-border/50 bg-muted/20">
      <div className="container mx-auto mb-8">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider">
          Tecnologias que dominamos
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling Container */}
        <div className="flex animate-scroll-left">
          {/* First Set */}
          <div className="flex gap-12 px-6">
            {technologies.map((tech, index) => (
              <div 
                key={`first-${index}`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border/50 whitespace-nowrap hover:border-primary/50 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
          {/* Duplicate Set for Seamless Loop */}
          <div className="flex gap-12 px-6">
            {technologies.map((tech, index) => (
              <div 
                key={`second-${index}`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border/50 whitespace-nowrap hover:border-primary/50 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
