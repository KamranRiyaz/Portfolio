import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Brain, 
  Globe, 
  Server, 
  Cpu,
  Zap,
  Layers
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "tech-purple",
      skills: ["Java", "C++", "Python", "Rust", "JavaScript", "SQL"]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "tech-blue",
      skills: ["HTML", "CSS", "React", "Node.js", "MERN Stack"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "tech-gold",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "NoSQL"]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "tech-purple",
      skills: ["Python ML", "PyTorch", "TensorFlow", "Neural Networks", "GenAI", "Agentic AI"]
    },
    {
      title: "Data Science",
      icon: Layers,
      color: "tech-blue",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Data Structures", "Algorithms"]
    },
    {
      title: "Specialized Skills",
      icon: Zap,
      color: "tech-gold",
      skills: ["Computer Vision", "CNN", "RNN", "Linear Algebra", "Statistics", "Probability"]
    }
  ];

  const getIconComponent = (IconComponent: any, color: string) => {
    const colorMap: Record<string, string> = {
      "tech-purple": "text-tech-purple",
      "tech-blue": "text-tech-blue", 
      "tech-gold": "text-tech-gold"
    };
    
    return <IconComponent className={`w-6 h-6 ${colorMap[color]}`} />;
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A comprehensive toolkit spanning multiple programming languages, frameworks, 
            and cutting-edge technologies in AI and machine learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-card hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  {getIconComponent(category.icon, category.color)}
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-muted/50 hover:bg-muted transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Cpu className="w-6 h-6 text-tech-purple" />
                Additional Expertise
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-tech-blue">Technical Proficiencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Object-oriented Programming",
                      "Software Development",
                      "Problem-solving",
                      "Debugging",
                      "Algorithm Design"
                    ].map((skill) => (
                      <Badge key={skill} variant="outline" className="border-tech-blue/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-tech-gold">Specialized Knowledge</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Mathematical Proficiency",
                      "Basic Calculus",
                      "Artificial Neural Networks",
                      "Convolutional Neural Networks",
                      "Recurrent Neural Networks"
                    ].map((skill) => (
                      <Badge key={skill} variant="outline" className="border-tech-gold/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-10 left-10 floating opacity-20">
        <div className="w-16 h-16 bg-tech-purple rounded-full blur-xl"></div>
      </div>
      
      <div className="absolute bottom-20 right-20 floating-delayed opacity-20">
        <div className="w-12 h-12 bg-tech-blue rounded-lg blur-lg"></div>
      </div>
    </section>
  );
};

export default Skills;