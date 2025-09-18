import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Zap, Globe } from "lucide-react";

const CompetitiveEdgeSection = () => {
  const advantages = [
    {
      icon: <Trophy className="h-12 w-12" />,
      title: "IISc-Driven Expertise",
      description: "Decades of research excellence from India's premier science institute, bringing world-class theoretical and practical knowledge.",
      highlights: ["PhD-level founders", "Research publications", "Academic excellence"]
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Unique Shock Tube Facility",
      description: "State-of-the-art MST facility enabling breakthrough research in shock wave interactions and material behavior.",
      highlights: ["2.12m driver section", "5.1m driven section", "Advanced diagnostics"]
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Cutting-Edge TPS Development",
      description: "Pioneering thermal protection systems, barrier coatings, and ultra-high temperature ceramics for extreme conditions.",
      highlights: ["TPS materials", "TBC coatings", "UHTC development"]
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Strategic Market Position",
      description: "Positioned at the intersection of growing aerospace, defense, and space industries with increasing hypersonic demands.",
      highlights: ["Defense applications", "Space exploration", "Re-entry systems"]
    }
  ];

  return (
    <section className="section-corporate bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Competitive Edge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why AHT deserves investment: unique capabilities, proven expertise, and strategic market positioning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="card-corporate group hover:scale-105">
              <div className="text-aht-orange mb-6 group-hover:scale-110 transition-transform">
                {advantage.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">{advantage.title}</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {advantage.description}
              </p>
              
              <div className="space-y-2">
                {advantage.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-aht-orange rounded-full"></div>
                    <span className="text-sm text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Key Differentiators */}
        <Card className="card-corporate bg-gradient-to-r from-primary/10 via-aht-orange/5 to-primary/10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-8">Key Differentiators</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-aht-orange mb-2">Exclusive</div>
                <div className="text-lg font-semibold text-primary mb-2">Research Capabilities</div>
                <div className="text-sm text-muted-foreground">Advanced shock tube facility and materials characterization</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-aht-orange mb-2">Proven</div>
                <div className="text-lg font-semibold text-primary mb-2">Scientific Leadership</div>
                <div className="text-sm text-muted-foreground">IISc research heritage and publication track record</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-aht-orange mb-2">Strategic</div>
                <div className="text-lg font-semibold text-primary mb-2">Market Timing</div>
                <div className="text-sm text-muted-foreground">Aligned with global hypersonic technology demands</div>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Applications Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-8">Target Applications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Badge variant="outline" className="p-4 text-center text-lg justify-center">
              Aerospace Defense
            </Badge>
            <Badge variant="outline" className="p-4 text-center text-lg justify-center">
              Space Exploration
            </Badge>
            <Badge variant="outline" className="p-4 text-center text-lg justify-center">
              Re-entry Systems
            </Badge>
            <Badge variant="outline" className="p-4 text-center text-lg justify-center">
              Hypersonic Vehicles
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdgeSection;