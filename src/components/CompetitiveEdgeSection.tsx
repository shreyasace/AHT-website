import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Zap, Globe, Crown, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const CompetitiveEdgeSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const advantages = [
    {
      icon: Trophy,
      title: "Ground-Test Simulation",
      description: "Pioneers in creating ground-test simulation systems that replicate extreme aero-thermodynamic and high-enthalpy environments.",
      highlights: ["Shock Tunnels", "Shock Tubes", "MST Facilities"],
      gradient: "from-amber-500 to-yellow-500",
      bgGradient: "from-amber-500/10 to-yellow-500/5"
    },
    {
      icon: Target,
      title: "Extreme Testing Capabilities",
      description: "Super-heating and super-cooling rates of up to 10⁶ K/s enabling novel phase transitions and material transformations.",
      highlights: ["10⁶ K/s heating", "10⁶ K/s cooling", "Phase transitions"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/5"
    },
    {
      icon: Zap,
      title: "Advanced Material Synthesis",
      description: "Special high-vacuum shock tube systems for synthesis of nano materials, quantum dots, and semiconductor materials.",
      highlights: ["Quantum dots", "Nano-spheres", "Carbon materials"],
      gradient: "from-aht-orange to-orange-500",
      bgGradient: "from-aht-orange/10 to-orange-500/5"
    },
    {
      icon: Globe,
      title: "Multi-Domain Applications",
      description: "Supporting research across aerospace, materials science, energy, nuclear, astrophysics, and astro-chemistry domains.",
      highlights: ["Aerospace", "Astro-sciences", "Energy systems"],
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-500/10 to-green-500/5"
    }
  ];

  const differentiators = [
    { label: "Customizable", title: "Facility Design", desc: "Tailored systems from laboratory-scale to industrial-grade installations" },
    { label: "UHV", title: "Vacuum Systems", desc: "Ultra High Vacuum shock tubes for space-like environment simulation" },
    { label: "Complete", title: "Characterization", desc: "XRD, XPS, SEM, HRTEM, Raman, and Photoluminescence support" }
  ];

  const applications = ["Aerospace & Defense", "Materials Science", "Astro-Sciences", "Energy & Nuclear"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section ref={sectionRef} className="section-corporate bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-aht-orange/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-20 px-4">
            <motion.div 
              className="inline-flex items-center gap-2 bg-aht-orange/10 border border-aht-orange/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-aht-orange" />
              <span className="text-xs sm:text-sm font-semibold text-aht-orange">Why Choose AHT</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 tracking-tight">
              Our Competitive <span className="bg-gradient-to-r from-aht-orange to-orange-500 bg-clip-text text-transparent">Edge</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unique capabilities, proven expertise, and strategic market positioning 
              that make AHT a compelling investment opportunity.
            </p>
          </motion.div>
          
          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 md:mb-20 px-2">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <Card className="card-corporate group relative overflow-hidden h-full">
                  {/* Background gradient on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${advantage.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  />
                  
                  {/* Animated corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                    <motion.div 
                      className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${advantage.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}
                      animate={activeCard === index ? { scale: 1.5 } : { scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center text-white shadow-lg mb-4 sm:mb-6`}
                      animate={activeCard === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <advantage.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </motion.div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 group-hover:text-foreground transition-colors">
                      {advantage.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                      {advantage.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-3">
                      {advantage.highlights.map((highlight, highlightIndex) => (
                        <motion.div 
                          key={highlightIndex}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + highlightIndex * 0.1 }}
                        >
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${advantage.gradient} flex items-center justify-center`}>
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Key Differentiators */}
          <motion.div variants={itemVariants} className="px-2">
            <Card className="card-corporate relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-aht-orange/[0.05] to-primary/[0.03]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,149,97,0.05)_0%,_transparent_70%)]" />
              
              <div className="relative z-10 text-center">
                <motion.h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 sm:mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  Key <span className="bg-gradient-to-r from-aht-orange to-orange-500 bg-clip-text text-transparent">Differentiators</span>
                </motion.h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  {differentiators.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="text-center group"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <motion.div 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-aht-orange to-orange-500 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.label}
                      </motion.div>
                      <div className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">{item.title}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground max-w-xs mx-auto">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
          
          {/* Target Applications */}
          <motion.div variants={itemVariants} className="mt-10 sm:mt-16 px-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6 sm:mb-8">
              Target <span className="bg-gradient-to-r from-aht-orange to-orange-500 bg-clip-text text-transparent">Applications</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {applications.map((app, index) => (
                <motion.div
                  key={app}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="p-3 sm:p-5 text-center cursor-pointer group bg-gradient-to-br from-muted/50 to-muted/30 hover:from-aht-orange/10 hover:to-primary/10 border-border/50 hover:border-aht-orange/30 transition-all duration-300">
                    <span className="text-sm sm:text-lg font-semibold text-primary group-hover:text-aht-orange transition-colors flex items-center justify-center gap-1 sm:gap-2">
                      {app}
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveEdgeSection;