import { ChevronDown, Github, Linkedin, Mail, MapPin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Floating elements - hidden on mobile */}
      <div className="absolute top-20 left-4 md:left-10 floating hidden sm:block">
        <div className="w-12 h-12 md:w-16 md:h-16 glass-card rounded-full flex items-center justify-center">
          <Code2 className="w-6 h-6 md:w-8 md:h-8 text-tech-purple" />
        </div>
      </div>
      
      <div className="absolute top-32 md:top-40 right-4 md:right-20 floating-delayed hidden sm:block">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-lg opacity-60"></div>
      </div>
      
      <div className="absolute bottom-32 md:bottom-40 left-4 md:left-20 floating hidden lg:block">
        <div className="w-6 h-6 md:w-8 md:h-8 bg-tech-gold rounded-full opacity-40"></div>
      </div>

      {/* Main hero content */}
      <div className="container mx-auto px-6 text-center animate-fade-in-up">
        <div className="mb-6">
          <span className="text-tech-blue text-lg font-medium">Hello, I'm</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="gradient-text">Kamran Riyaz</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 text-muted-foreground">
          Aspiring Software Developer
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground leading-relaxed px-4">
          Experienced software developer proficient in various programming languages. 
          Skilled in building robust Machine Learning and Deep Learning models with expertise in 
          <span className="text-tech-purple font-medium"> GenAI and Agentic AI</span>.
        </p>
        
        {/* Contact info */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-tech-blue flex-shrink-0" />
            <span className="text-center sm:text-left">Srinagar, IN 190008</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-tech-purple flex-shrink-0" />
            <span className="text-center sm:text-left break-all sm:break-normal">riyazkamran01@gmail.com</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-primary hover-scale glow"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-background hover-scale"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://linkedin.com/in/kamran-riyaz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover-scale group"
          >
            <Linkedin className="w-5 h-5 text-tech-blue group-hover:text-primary transition-colors" />
          </a>
          
          <a 
            href="https://github.com/kamranriyaz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover-scale group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          
          <a 
            href="mailto:riyazkamran01@gmail.com"
            className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover-scale group"
          >
            <Mail className="w-5 h-5 text-tech-purple group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;