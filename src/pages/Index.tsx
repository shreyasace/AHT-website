import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import CompetitiveEdgeSection from "@/components/CompetitiveEdgeSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="research">
        <ResearchSection />
      </section>
      
      <section id="edge">
        <CompetitiveEdgeSection />
      </section>
      
      <section id="vision">
        <VisionSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
};

export default Index;
