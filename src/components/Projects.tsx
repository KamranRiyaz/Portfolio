import { ExternalLink, Github, Brain, Eye, Image, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Football Analysis Model Using Computer Vision",
      description: "Advanced computer vision model using YOLO for real-time player and ball detection with comprehensive tracking capabilities.",
      features: [
        "Object detection using YOLO for players and ball tracking",
        "Object tracking implementation for continuous monitoring",
        "Statistical analysis including possession, saves, distance covered",
        "Automatic team identification and player classification"
      ],
      technologies: ["Python", "YOLO", "Computer Vision", "Object Detection", "PyTorch"],
      icon: Eye,
      color: "tech-purple"
    },
    {
      title: "Artificial Neural Network for Lung Cancer Detection",
      description: "Built a sophisticated ANN using TensorFlow and Keras to analyze tumor characteristics with impressive accuracy for medical diagnosis.",
      features: [
        "ANN architecture optimized for medical image analysis",
        "Achieved 98% test accuracy on lung cancer detection",
        "Tumor classification as benign or malignant",
        "Medical data preprocessing and augmentation"
      ],
      technologies: ["Python", "TensorFlow", "Keras", "Medical AI", "Neural Networks"],
      icon: Brain,
      color: "tech-blue"
    },
    {
      title: "Convolutional Neural Network for Image Classification",
      description: "Developed a robust CNN architecture for high-precision image classification using multiple convolutional and pooling layers.",
      features: [
        "Multi-layer CNN with optimized architecture",
        "Advanced image preprocessing and augmentation",
        "Achieved 89% accuracy on classification tasks",
        "Comprehensive model evaluation and testing"
      ],
      technologies: ["Python", "CNN", "Image Processing", "Deep Learning", "TensorFlow"],
      icon: Image,
      color: "tech-gold"
    },
    {
      title: "Chrome Extension Development",
      description: "Created a feature-rich Chrome extension using DOM manipulation and JavaScript for enhanced user productivity and browser interaction.",
      features: [
        "DOM manipulation for dynamic content interaction",
        "User-friendly interface with modern design principles",
        "Real-time browser integration and functionality",
        "Cross-platform compatibility and optimization"
      ],
      technologies: ["JavaScript", "HTML", "CSS", "Chrome APIs", "DOM Manipulation"],
      icon: Chrome,
      color: "tech-purple"
    }
  ];

  const getIconComponent = (IconComponent: any, color: string) => {
    const colorMap: Record<string, string> = {
      "tech-purple": "text-tech-purple",
      "tech-blue": "text-tech-blue", 
      "tech-gold": "text-tech-gold"
    };
    
    return <IconComponent className={`w-8 h-8 ${colorMap[color]}`} />;
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A showcase of innovative projects spanning AI, computer vision, web development, 
            and browser extensions with real-world applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-card hover-scale group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      {getIconComponent(project.icon, project.color)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl leading-tight">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-tech-blue">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-tech-purple rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-tech-gold">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-muted/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 hover-scale"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-2 text-tech-blue hover:text-primary hover-scale"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Project Note */}
        <div className="mt-12 text-center">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Virtual Computer using NASM</h3>
              <p className="text-muted-foreground mb-4">
                Built a comprehensive virtual computer simulation using NASM (Netwide Assembler) featuring:
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div className="text-left">
                  <div>• Elementary gate-like NOT, AND, OR, XOR, MUX, DMUX</div>
                  <div>• ALU chip for arithmetic and logic operations</div>
                  <div>• RAM chip with comprehensive memory architecture</div>
                </div>
                <div className="text-left">
                  <div>• CPU implementation with instruction set</div>
                  <div>• Memory management and system integration</div>
                  <div>• Assembly language programming interface</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-32 right-10 floating opacity-30">
        <div className="w-24 h-24 bg-gradient-glow rounded-full blur-2xl"></div>
      </div>
      
      <div className="absolute bottom-40 left-20 floating-delayed opacity-20">
        <div className="w-16 h-16 bg-tech-gold rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default Projects;