import { 
  SiPhp, 
  SiLaravel, 
  SiNodedotjs, 
  SiPython, 
  SiReact, 
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiDocker,
  SiAmazon,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiTailwindcss,
  SiFlutter,
  SiWordpress,
  SiShopify
} from "react-icons/si";

const technologies = [
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: SiAmazon },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Flutter", icon: SiFlutter },
  { name: "WordPress", icon: SiWordpress },
  { name: "Shopify", icon: SiShopify },
];

const TechStack = () => {
  return (
    <section className="py-12 overflow-hidden bg-muted/30 border-y border-border">
      <div className="container mx-auto mb-6">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider font-medium">
          Tecnologias que dominamos
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Container */}
        <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
          {/* First Set */}
          <div className="flex gap-8 px-4">
            {technologies.map((tech, index) => (
              <div 
                key={`first-${index}`}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border whitespace-nowrap hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <tech.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
          {/* Duplicate Set for Seamless Loop */}
          <div className="flex gap-8 px-4">
            {technologies.map((tech, index) => (
              <div 
                key={`second-${index}`}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border whitespace-nowrap hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <tech.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
