import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ahtLogo from "@/assets/aht-logo.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.8), rgba(26, 35, 126, 0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-aht-orange rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-aht-orange rounded-full animate-float opacity-50" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="animate-fade-in-up">
          <img 
            src={ahtLogo} 
            alt="Applied Hypersonic Technologies Logo" 
            className="w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Redefining 
            <span className="bg-gradient-to-r from-aht-orange to-orange-400 bg-clip-text text-transparent"> Hypersonic </span>
            Innovation
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200">
            Applied Hypersonic Technologies (AHT) is pioneering advanced materials and 
            aero-thermodynamic systems for the next generation of aerospace innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-cta group">
              Explore Our Vision
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              <PlayCircle className="mr-2 h-5 w-5" />
              Investor Deck
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-aht-orange mb-2">IISc</div>
              <div className="text-sm text-gray-300">Founded by IISc Experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-aht-orange mb-2">20+</div>
              <div className="text-sm text-gray-300">Years of Research Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-aht-orange mb-2">MST</div>
              <div className="text-sm text-gray-300">Shock Tube Facility</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;