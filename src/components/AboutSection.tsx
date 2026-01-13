import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Building2, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import drKavitha from "@/assets/dr-kavitha.png";

// Infinite scrolling marquee
const Marquee = () => {
  const items = [
    "Shock Tunnels",
    "Shock Tubes",
    "Nano Materials",
    "Quantum Dots",
    "UHTC Testing",
    "Aero-Thermodynamics",
    "Astro-Chemistry",
    "UHV Systems",
    "Material Synthesis",
    "MST Facilities",
  ];
  
  return (
    <div className="relative overflow-hidden py-6 bg-gradient-to-r from-primary/5 via-aht-orange/5 to-primary/5 border-y border-border/50">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1920] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <span 
            key={index} 
            className="flex items-center gap-3 text-lg font-medium text-muted-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-aht-orange" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// Floating icon component
const FloatingIcon = ({ icon: Icon, x, y, delay, size = 24 }: { icon: any; x: string; y: string; delay: number; size?: number }) => (
  <motion.div
    className="absolute text-aht-orange/20"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  >
    <Icon size={size} />
  </motion.div>
);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const founders = [
    {
      initials: "JV",
      name: "Dr. Jayaram V",
      role: "Founder & Managing Partner",
      gradient: "from-primary via-primary/80 to-aht-orange",
      details: [
        { icon: GraduationCap, text: "PhD (IISc), FIE, FICCE, LSMIEEE" },
        { icon: Award, text: "Former Chief Research Scientist, IISc" },
        { icon: Building2, text: "20+ Years Research Experience" },
      ],
      badges: ["Shock Wave Research", "Materials Science", "Hypersonics"],
    },
    {
      initials: "KJ",
      name: "Dr. Kavitha Jayaram",
      role: "Co-Founder & Partner",
      image: drKavitha,
      gradient: "from-aht-orange via-orange-500 to-primary",
      details: [
        { icon: GraduationCap, text: "PhD in Advanced Materials" },
        { icon: Award, text: "Research Excellence in TPS Materials" },
        { icon: Building2, text: "Strategic Partnership Development" },
      ],
      badges: ["TPS Materials", "Nano Materials", "R&D Strategy"],
    },
  ];

  return (
    <section ref={sectionRef} className="section-corporate bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-aht-orange/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
      
      {/* Floating icons */}
      <FloatingIcon icon={Atom} x="5%" y="20%" delay={0} size={40} />
      <FloatingIcon icon={Rocket} x="92%" y="30%" delay={1.5} size={36} />
      <FloatingIcon icon={Zap} x="8%" y="70%" delay={3} size={32} />
      <FloatingIcon icon={Sparkles} x="88%" y="75%" delay={2} size={28} />
      
      {/* Marquee at top */}
      <Marquee />
      
      <div className="container mx-auto relative z-10 pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-20 px-4">
            <motion.div 
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xs sm:text-sm font-semibold text-primary">Deep-Tech Engineering</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 tracking-tight">
              About <span className="bg-gradient-to-r from-aht-orange to-orange-500 bg-clip-text text-transparent">AHT</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A deep-tech engineering and research-driven firm specializing in the design, development, 
              and manufacturing of advanced shock tunnel, shock tube, and diaphragm-less shock tube facilities.
            </p>
          </motion.div>
          
          {/* Founders grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-20 px-2">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="card-corporate group relative overflow-hidden h-full">
                  {/* Animated gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-r ${founder.gradient} opacity-10`} />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="text-center mb-6 sm:mb-8">
                      <motion.div 
                        className={`w-20 h-20 sm:w-28 sm:h-28 ${founder.image ? '' : `bg-gradient-to-br ${founder.gradient}`} rounded-2xl mx-auto mb-4 sm:mb-5 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-xl relative overflow-hidden`}
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {founder.image ? (
                          <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            <span className="relative z-10">{founder.initials}</span>
                          </>
                        )}
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">{founder.name}</h3>
                      <p className="text-aht-orange font-semibold text-base sm:text-lg">{founder.role}</p>
                    </div>
                    
                    {/* Details */}
                    <div className="space-y-4 mb-6">
                      {founder.details.map((detail, detailIndex) => (
                        <motion.div 
                          key={detailIndex}
                          className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + detailIndex * 0.1 }}
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-aht-orange/20 to-aht-orange/5 flex items-center justify-center">
                            <detail.icon className="h-5 w-5 text-aht-orange" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{detail.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      {founder.badges.map((badge, badgeIndex) => (
                        <motion.div
                          key={badgeIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + badgeIndex * 0.05 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="px-3 py-1 bg-primary/5 hover:bg-primary/10 text-primary border-0 transition-colors"
                          >
                            {badge}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Mission Statement */}
          <motion.div variants={itemVariants} className="px-2">
            <Card className="card-corporate relative overflow-hidden bg-gradient-to-r from-primary/[0.03] via-transparent to-aht-orange/[0.03] border-primary/10">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 text-primary/10 hidden sm:block">
                <Quote className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              <div className="absolute bottom-4 right-4 text-primary/10 rotate-180 hidden sm:block">
                <Quote className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              
              <div className="text-center relative z-10 py-2 sm:py-4">
                <motion.div 
                  className="inline-flex items-center gap-2 bg-aht-orange/10 border border-aht-orange/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xs sm:text-sm font-semibold text-aht-orange uppercase tracking-wider">Our Mission</span>
                </motion.div>
                <p className="text-base sm:text-xl md:text-2xl text-foreground leading-relaxed max-w-4xl mx-auto font-medium italic px-2">
                  "To design and manufacture world-class shock tube and shock tunnel facilities, 
                  enabling interdisciplinary research in aero-thermodynamics, materials chemistry, and astro-sciences 
                  while mentoring future scientists and engineers through hands-on experimentation."
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;