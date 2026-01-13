import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Atom, Zap, Microscope, FlaskConical, Rocket, Shield, ArrowUpRight, Beaker } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import researchFacility from "@/assets/research-facility.jpg";

// Animated connecting lines
const AnimatedLine = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute h-[2px] bg-gradient-to-r from-transparent via-aht-orange/30 to-transparent"
    style={{ width: '200px' }}
    initial={{ x: '-100%', opacity: 0 }}
    animate={{ x: '400%', opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
  />
);

// Pulsing node
const PulsingNode = ({ x, y, delay = 0 }: { x: string; y: string; delay?: number }) => (
  <motion.div
    className="absolute w-3 h-3 rounded-full bg-aht-orange/50"
    style={{ left: x, top: y }}
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay,
    }}
  >
    <motion.div
      className="absolute inset-0 rounded-full bg-aht-orange/30"
      animate={{ scale: [1, 3], opacity: [0.5, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
    />
  </motion.div>
);

const ResearchSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const researchAreas = [
    {
      icon: Zap,
      title: "Shock Tunnel Facilities",
      description: "Supersonic and hypersonic shock tunnel facilities for aero-thermodynamic studies of rockets, re-entry capsules, and space vehicles",
      technologies: ["Supersonic Flows", "Hypersonic Testing", "Heat Transfer"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Material Testing Systems",
      description: "Shock tube facilities for exposing TPS, TBC, and UHTC materials to extreme temperature and pressure environments",
      technologies: ["TPS", "TBC", "UHTC Materials"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Microscope,
      title: "Nano & Quantum Materials",
      description: "Special high-vacuum shock tube systems for synthesis of nano materials, quantum dots, and sub-nano structures",
      technologies: ["Quantum Dots", "Nano-spheres", "Carbon Materials"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Multiphase Shock Tubes",
      description: "MST facilities for gas-gas, gas-solid, and gas-liquid interactions with 10⁶ K/s heating and cooling rates",
      technologies: ["Gas-Solid", "Gas-Liquid", "Phase Transitions"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "UHV Shock Systems",
      description: "Ultra High Vacuum shock tube systems for astrophysics, astro-chemistry, and astrobiology research",
      technologies: ["Astrophysics", "Astro-chemistry", "Space Simulation"],
      color: "from-red-500 to-rose-500"
    },
    {
      icon: FlaskConical,
      title: "Advanced Characterization",
      description: "Material characterization using XRD, XPS, SEM, HRTEM, Raman Spectroscopy, and Photoluminescence",
      technologies: ["XRD/XPS", "SEM/HRTEM", "Raman/PL"],
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section ref={sectionRef} className="section-corporate bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-aht-orange/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Animated tech lines */}
      <div className="absolute top-1/4 left-0 right-0 overflow-hidden h-[2px]">
        <AnimatedLine delay={0} />
      </div>
      <div className="absolute top-1/2 left-0 right-0 overflow-hidden h-[2px]">
        <AnimatedLine delay={1} />
      </div>
      <div className="absolute top-3/4 left-0 right-0 overflow-hidden h-[2px]">
        <AnimatedLine delay={2} />
      </div>
      
      {/* Pulsing nodes */}
      <PulsingNode x="10%" y="25%" delay={0} />
      <PulsingNode x="90%" y="35%" delay={0.5} />
      <PulsingNode x="15%" y="65%" delay={1} />
      <PulsingNode x="85%" y="75%" delay={1.5} />
      <PulsingNode x="50%" y="15%" delay={2} />
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={cardVariants} className="text-center mb-10 md:mb-16 px-4">
            <motion.div 
              className="inline-flex items-center gap-2 bg-aht-orange/10 border border-aht-orange/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xs sm:text-sm font-semibold text-aht-orange">Cutting-Edge R&D</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 tracking-tight">
              Research & <span className="bg-gradient-to-r from-aht-orange to-orange-500 bg-clip-text text-transparent">Innovation</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cutting-edge research programs developing next-generation materials 
              and technologies for hypersonic applications.
            </p>
          </motion.div>
          
          {/* Research Facility Showcase */}
          <motion.div variants={cardVariants} className="mb-12 md:mb-20 px-2">
            <Card className="overflow-hidden group relative">
              <div className="relative h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden">
                <motion.img 
                  src={researchFacility} 
                  alt="AHT Research Facility with Shock Tube" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                
                {/* Floating stats on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                  <motion.h3 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    Shock Tube Facility (MST)
                  </motion.h3>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {[
                      { label: "Driver Section", value: "2.12 m" },
                      { label: "Driven Section", value: "5.1 m" },
                      { label: "Inner Diameter", value: "80 mm" }
                    ].map((spec, index) => (
                      <motion.div
                        key={spec.label}
                        className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-4 border border-white/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-aht-orange">{spec.value}</div>
                        <div className="text-[10px] sm:text-xs md:text-sm text-white/70">{spec.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
          
          {/* Research Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="card-corporate group relative overflow-hidden h-full cursor-pointer">
                  {/* Gradient background on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  {/* Icon */}
                  <div className="relative mb-4 sm:mb-5">
                    <motion.div 
                      className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center text-white shadow-lg`}
                      animate={hoveredCard === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <area.icon className="h-5 w-5 sm:h-7 sm:w-7" />
                    </motion.div>
                    
                    {/* Arrow indicator */}
                    <motion.div
                      className="absolute -right-2 -top-2 w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={hoveredCard === index ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -45 }}
                    >
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-aht-orange transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 sm:mb-5 leading-relaxed text-xs sm:text-sm">
                    {area.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + techIndex * 0.05 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs bg-muted/50 hover:bg-muted border-border/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Key Research Highlights */}
          <motion.div 
            variants={cardVariants}
            className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 px-2"
          >
            <Card className="card-corporate relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                  <Atom className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                Materials Synthesis
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { name: "Microsphere Development", badge: "Graphene" },
                  { name: "Nanosphere Research", badge: "Quantum Dots" },
                  { name: "Material Modification", badge: "Shock Loading" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-muted/50 hover:bg-muted transition-colors gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium text-sm sm:text-base">{item.name}</span>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 text-xs sm:text-sm whitespace-nowrap">
                      {item.badge}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
            
            <Card className="card-corporate relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-aht-orange/10 to-transparent rounded-bl-full" />
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-aht-orange/10 flex items-center justify-center">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-aht-orange" />
                </div>
                Applications
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Aerospace re-entry systems",
                  "Defense hypersonic vehicles", 
                  "Space exploration missions",
                  "Thermal protection systems"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-aht-orange to-orange-400 rounded-full flex-shrink-0" />
                    <span className="font-medium text-foreground text-sm sm:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;