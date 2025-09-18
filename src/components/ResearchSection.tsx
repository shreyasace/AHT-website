import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Atom, Zap, Microscope, FlaskConical, Rocket, Shield } from "lucide-react";
import researchFacility from "@/assets/research-facility.jpg";

const ResearchSection = () => {
  const researchAreas = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Strong Shock Interaction",
      description: "Materials research under extreme shock conditions and high-pressure environments",
      technologies: ["Shock Wave Physics", "Dynamic Loading", "Pressure Analysis"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "TPS Materials",
      description: "Thermal Protection Systems, Thermal Barrier Coatings, and Ultra High Temperature Ceramics",
      technologies: ["TPS", "TBC", "UHTC Materials"]
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Nano & Porous Materials",
      description: "Properties of nano and porous materials under shock dynamic loading conditions",
      technologies: ["Nanomaterials", "Porous Structures", "Dynamic Response"]
    },
    {
      icon: <Atom className="h-8 w-8" />,
      title: "Molecular Dynamics",
      description: "Theoretical and MD simulation to understand material chemistry under shock loading",
      technologies: ["MD Simulation", "Theoretical Analysis", "Chemical Modeling"]
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Re-entry Vehicles",
      description: "Aero-thermodynamics of re-entry vehicles and surface energy balance systems",
      technologies: ["Aero-thermodynamics", "Heat Transfer", "Vehicle Design"]
    },
    {
      icon: <FlaskConical className="h-8 w-8" />,
      title: "Surface Reactions",
      description: "Study of surface rate reactions, catalysis, and high-temperature material behavior",
      technologies: ["Catalysis", "Surface Chemistry", "High-T Materials"]
    }
  ];

  return (
    <section className="section-corporate bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Research & Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge research programs developing next-generation materials and technologies for hypersonic applications.
          </p>
        </div>
        
        {/* Research Facility Image */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <img 
              src={researchFacility} 
              alt="AHT Research Facility with Shock Tube" 
              className="w-full h-96 object-cover"
            />
            <div className="p-6 bg-gradient-to-r from-primary to-aht-orange text-white">
              <h3 className="text-2xl font-bold mb-2">Shock Tube Facility (MST)</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Driver Section:</span> 2.12 m
                </div>
                <div>
                  <span className="font-semibold">Driven Section:</span> 5.1 m
                </div>
                <div>
                  <span className="font-semibold">Inner Diameter:</span> 80 mm
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <Card key={index} className="card-corporate group">
              <div className="text-aht-orange mb-4 group-hover:scale-110 transition-transform">
                {area.icon}
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {area.description}
              </p>
              
              <div className="space-y-2">
                {area.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="mr-2 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Key Research Highlights */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="card-corporate bg-gradient-to-br from-primary/5 to-transparent">
            <h3 className="text-2xl font-bold text-primary mb-4">Materials Synthesis</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Microsphere Development</span>
                <Badge>Graphene</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Nanosphere Research</span>
                <Badge>Quantum Dots</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Material Modification</span>
                <Badge>Shock Loading</Badge>
              </div>
            </div>
          </Card>
          
          <Card className="card-corporate bg-gradient-to-br from-aht-orange/5 to-transparent">
            <h3 className="text-2xl font-bold text-primary mb-4">Applications</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-aht-orange rounded-full"></div>
                Aerospace re-entry systems
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-aht-orange rounded-full"></div>
                Defense hypersonic vehicles
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-aht-orange rounded-full"></div>
                Space exploration missions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-aht-orange rounded-full"></div>
                Thermal protection systems
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;