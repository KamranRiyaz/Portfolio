import { Mail, MapPin, Linkedin, Github, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "riyazkamran01@gmail.com",
      href: "mailto:riyazkamran01@gmail.com",
      color: "tech-purple"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Srinagar, IN 190008",
      href: null,
      color: "tech-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kamran-riyaz",
      href: "https://linkedin.com/in/kamran-riyaz",
      color: "tech-blue"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kamranriyaz",
      href: "https://github.com/kamranriyaz",
      color: "tech-gold"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            I'm always open to discussing new opportunities, innovative projects, 
            or just having a conversation about technology and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-tech-purple" />
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a passionate developer to join your team, 
                want to collaborate on an exciting project, or simply want to discuss 
                the latest trends in AI and software development, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={contact.label} className="glass-card hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center`}>
                        <contact.icon className={`w-5 h-5 text-primary-foreground`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                          {contact.label}
                        </div>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-foreground hover:text-tech-purple transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-foreground">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <div className="pt-6">
              <h4 className="font-semibold mb-4 text-tech-blue">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-background"
                  asChild
                >
                  <a href="mailto:riyazkamran01@gmail.com">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-background"
                  asChild
                >
                  <a href="https://linkedin.com/in/kamran-riyaz" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Send className="w-6 h-6 text-tech-gold" />
                Send a Message
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover-scale glow"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-20 left-10 floating opacity-20">
        <div className="w-20 h-20 bg-tech-purple rounded-full blur-2xl"></div>
      </div>
      
      <div className="absolute bottom-20 right-20 floating-delayed opacity-30">
        <div className="w-16 h-16 bg-gradient-primary rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default Contact;