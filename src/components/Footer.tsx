import { Code2, Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-glass-border relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg gradient-text">Kamran Riyaz</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Aspiring Software Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/kamranriyaz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-scale group"
            >
              <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a 
              href="https://linkedin.com/in/kamran-riyaz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-scale group"
            >
              <Linkedin className="w-4 h-4 text-tech-blue group-hover:text-primary transition-colors" />
            </a>
            
            <a 
              href="mailto:riyazkamran01@gmail.com"
              className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-scale group"
            >
              <Mail className="w-4 h-4 text-tech-purple group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              {currentYear} Made by Kamran Riyaz
            </p>
          </div>
        </div>
      </div>

      {/* Floating decoration */}
      <div className="absolute top-6 right-20 floating opacity-20">
        <div className="w-12 h-12 bg-gradient-primary rounded-full blur-lg"></div>
      </div>
    </footer>
  );
};

export default Footer;