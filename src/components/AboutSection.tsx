import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Building2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-corporate bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Leadership & Credibility
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by distinguished IISc researchers with decades of experience in hypersonic technologies and materials science.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Dr. Jayaram V */}
          <Card className="card-corporate group hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-aht-orange rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                JV
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Dr. Jayaram V</h3>
              <p className="text-aht-orange font-semibold">Founder & Managing Partner</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-aht-orange" />
                <span className="text-sm">PhD (IISc), FIE, FICCE, LSMIEEE</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-aht-orange" />
                <span className="text-sm">Former Chief Research Scientist, IISc</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-aht-orange" />
                <span className="text-sm">20+ Years Research Experience</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Badge variant="secondary" className="mr-2 mb-2">Shock Wave Research</Badge>
              <Badge variant="secondary" className="mr-2 mb-2">Materials Science</Badge>
              <Badge variant="secondary" className="mr-2 mb-2">Hypersonics</Badge>
            </div>
          </Card>
          
          {/* Dr. Kavitha Jayaram */}
          <Card className="card-corporate group hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-aht-orange to-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                KJ
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Dr. Kavitha Jayaram</h3>
              <p className="text-aht-orange font-semibold">Co-Founder & Partner</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-aht-orange" />
                <span className="text-sm">PhD in Advanced Materials</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-aht-orange" />
                <span className="text-sm">Research Excellence in TPS Materials</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-aht-orange" />
                <span className="text-sm">Strategic Partnership Development</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Badge variant="secondary" className="mr-2 mb-2">TPS Materials</Badge>
              <Badge variant="secondary" className="mr-2 mb-2">Nano Materials</Badge>
              <Badge variant="secondary" className="mr-2 mb-2">R&D Strategy</Badge>
            </div>
          </Card>
        </div>
        
        {/* Mission Statement */}
        <Card className="card-corporate bg-gradient-to-r from-primary/5 to-aht-orange/5 border-primary/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
              "Pushing the boundaries of science, engineering, and innovation in hypersonic technologies 
              to deliver breakthrough solutions for aerospace, defense, and space exploration applications."
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;