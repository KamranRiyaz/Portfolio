import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Passionate about technology and innovation, I excel at working with multiple languages 
            across diverse fields with a strong understanding of modern tech trends.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Professional Summary */}
          <div className="space-y-6">
            <Card className="glass-card hover-scale">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-tech-blue">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Experienced software developer proficient in various programming languages. 
                  I utilize coding and debugging skills to drive project success with a proven 
                  track record of effective teamwork and problem-solving in fast-paced environments.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I excel at working with multiple languages across diverse fields and have a 
                  strong understanding of modern tech trends including <span className="text-tech-purple font-medium">GenAI</span> and 
                  <span className="text-tech-purple font-medium"> Agentic AI</span>. Skilled at building robust 
                  Machine Learning and Deep Learning models that seamlessly integrate with 
                  software development projects.
                </p>
              </CardContent>
            </Card>

            {/* Specializations */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="glass-card hover-scale">
                <CardContent className="p-4">
                  <div className="text-tech-gold mb-2">🤖</div>
                  <h4 className="font-semibold mb-2">AI & Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    GenAI, Neural Networks, Deep Learning with PyTorch and TensorFlow
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-scale">
                <CardContent className="p-4">
                  <div className="text-tech-blue mb-2">💻</div>
                  <h4 className="font-semibold mb-2">Full Stack Development</h4>
                  <p className="text-sm text-muted-foreground">
                    MERN Stack, React, Node.js with modern development practices
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <Card className="glass-card hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-2 border-tech-purple pl-4">
                        <h4 className="font-semibold text-lg">B.Tech Computer Science and Engineering</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Expected 06/2027</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>NIT Srinagar</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <Award className="w-4 h-4 text-tech-gold" />
                          <span className="font-medium text-tech-gold">GPA: 8.825</span>
                          <span className="text-sm text-muted-foreground">(till 3rd semester)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card hover-scale text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold gradient-text mb-2">8.825</div>
                  <div className="text-sm text-muted-foreground">Current GPA</div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-scale text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold gradient-text mb-2">2027</div>
                  <div className="text-sm text-muted-foreground">Graduation Year</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating decoration */}
      <div className="absolute top-20 right-10 floating opacity-30">
        <div className="w-20 h-20 bg-gradient-primary rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default About;