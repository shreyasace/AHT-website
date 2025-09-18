import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Target, ArrowRight } from "lucide-react";

const VisionSection = () => {
  const marketData = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      value: "$8.5B",
      label: "Global Hypersonic Market",
      description: "Expected market size by 2030"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "22.8%",
      label: "CAGR Growth Rate",
      description: "Projected annual growth 2023-2030"
    },
    {
      icon: <Target className="h-8 w-8" />,
      value: "₹2.5L Cr",
      label: "Indian Aerospace Sector",
      description: "Market size by 2030 (Atmanirbhar Bharat)"
    }
  ];

  return (
    <section className="section-corporate bg-gradient-to-br from-primary/5 to-aht-orange/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Vision & Market Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Positioned at the forefront of a rapidly expanding global market with tremendous growth potential.
          </p>
        </div>
        
        {/* Market Opportunity Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {marketData.map((item, index) => (
            <Card key={index} className="card-corporate text-center group">
              <div className="text-aht-orange mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.description}</div>
            </Card>
          ))}
        </div>
        
        {/* Strategic Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Strategic Global Priority</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-aht-orange rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-foreground">Hypersonic Innovation Leadership</div>
                  <div className="text-sm text-muted-foreground">Nations investing billions in hypersonic technologies for defense and space applications</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-aht-orange rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-foreground">Multi-Billion Dollar Industry</div>
                  <div className="text-sm text-muted-foreground">Defense, aerospace, and space industries driving unprecedented demand</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-aht-orange rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-foreground">Atmanirbhar Bharat Alignment</div>
                  <div className="text-sm text-muted-foreground">Perfect positioning with India's self-reliance initiative in aerospace sector</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="card-corporate bg-gradient-to-br from-primary to-aht-orange text-white">
            <h3 className="text-2xl font-bold mb-4">Investment Opportunity</h3>
            <div className="space-y-4">
              <div className="border-b border-white/20 pb-2">
                <div className="text-sm opacity-80">Market Entry Timing</div>
                <div className="font-semibold">Perfect - Early Stage Growth Phase</div>
              </div>
              
              <div className="border-b border-white/20 pb-2">
                <div className="text-sm opacity-80">Competitive Advantage</div>
                <div className="font-semibold">Unique IISc Research Heritage</div>
              </div>
              
              <div className="border-b border-white/20 pb-2">
                <div className="text-sm opacity-80">Scalability Potential</div>
                <div className="font-semibold">Multiple Industry Applications</div>
              </div>
              
              <div>
                <div className="text-sm opacity-80">Risk Profile</div>
                <div className="font-semibold">Technology-Backed Innovation</div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Future Vision Statement */}
        <Card className="card-corporate mt-16 text-center bg-white/80 backdrop-blur">
          <h3 className="text-3xl font-bold text-primary mb-6">Our Vision for 2030</h3>
          <p className="text-xl text-foreground leading-relaxed max-w-4xl mx-auto mb-8">
            To be the leading Indian company in hypersonic materials and technologies, 
            contributing to national aerospace capabilities while establishing global partnerships 
            for next-generation space exploration and defense applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-corporate">
              Download Business Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button className="btn-cta">
              Schedule Investor Meeting
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VisionSection;