import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import CompetitiveEdgeSection from "@/components/CompetitiveEdgeSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.main 
      className="min-h-screen overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.main>
  );
};

export default Index;
