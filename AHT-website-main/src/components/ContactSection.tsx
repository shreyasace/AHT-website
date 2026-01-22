import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Building2, Factory, ArrowRight, Rocket, Send, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animated floating shapes
const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

// Glowing orb
const GlowingOrb = ({ x, y, size, delay = 0 }: { x: string; y: string; size: string; delay?: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      boxShadow: [
        '0 0 20px 10px rgba(255,149,97,0.1)',
        '0 0 40px 20px rgba(255,149,97,0.2)',
        '0 0 20px 10px rgba(255,149,97,0.1)',
      ],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
    }}
  >
    <div className="w-full h-full rounded-full bg-aht-orange/20 blur-xl" />
  </motion.div>
);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const locations = [
    {
      icon: Building2,
      title: "Corporate Office",
      address: ["#230, NANASU, 5th Main, 5th Cross", "JRD Tatanagar, Kodigehalli", "Bangalore - 560092"],
      phone: "+91 98457 70188",
      email: "appliedhypersonic@gmail.com"
    },
    {
      icon: Factory,
      title: "Research & Manufacturing",
      address: ["New Sy No. 76, Magadi Main Road", "Chickka Gollarahatti, Kachohalli", "Dasanapura Hobli, Bangalore - 560091"],
      phone: "+91 87622 97682",
      badge: { title: "Shock Tube Facility (MST)", desc: "Advanced materials research and testing facility" }
    }
  ];

  const founders = [
    {
      name: "Dr. Jayaram V",
      role: "Founder & Managing Partner",
      credentials: ["PhD (IISc), FIE, FICCE, LSMIEEE", "Former Chief Research Scientist, IISc"],
      email: "drjayaramv@gmail.com",
      phone: "+91 98457 70188"
    },
   
  ];

  return (
    <section ref={sectionRef} className="section-corporate relative overflow-hidden bg-primary">
      {/* Complex background with pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,149,97,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.05)_0%,_transparent_50%)]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-aht-orange/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-white/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Floating geometric shapes */}
      <FloatingShape 
        className="absolute top-[15%] left-[8%] w-16 h-16 border border-white/10 rounded-lg" 
        delay={0} 
      />
      <FloatingShape 
        className="absolute top-[25%] right-[12%] w-12 h-12 border border-aht-orange/20 rounded-full" 
        delay={2} 
      />
      <FloatingShape 
        className="absolute bottom-[30%] left-[15%] w-8 h-8 bg-white/5 rounded-sm" 
        delay={4} 
      />
      <FloatingShape 
        className="absolute bottom-[20%] right-[8%] w-20 h-20 border border-white/5" 
        delay={6} 
      />
      
      {/* Glowing orbs */}
      <GlowingOrb x="5%" y="40%" size="60px" delay={0} />
      <GlowingOrb x="90%" y="60%" size="80px" delay={2} />
      <GlowingOrb x="70%" y="20%" size="40px" delay={4} />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-16 px-4">
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xs sm:text-sm font-medium text-white">Get In Touch</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Connect <span className="text-aht-orange">With Us</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Ready to explore our ground-test capabilities or discuss collaboration opportunities? Get in touch with our leadership team.
            </p>
          </motion.div>
          
          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-16 px-2">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-5 sm:p-8 text-white h-full relative overflow-hidden group">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aht-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <motion.div 
                        className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-aht-orange to-orange-500 flex items-center justify-center shadow-lg"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <location.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-bold">{location.title}</h3>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-5">
                      <motion.div 
                        className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-aht-orange mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold mb-1 sm:mb-2 text-white/90 text-sm sm:text-base">Address</div>
                          <div className="text-xs sm:text-sm text-white/70 leading-relaxed">
                            {location.address.map((line, i) => (
                              <span key={i}>{line}<br /></span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-aht-orange flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-white/90 text-sm sm:text-base">Phone</div>
                          <div className="text-xs sm:text-sm text-white/70">{location.phone}</div>
                        </div>
                      </motion.div>
                      
                      {location.email && (
                        <motion.div 
                          className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                          whileHover={{ x: 5 }}
                        >
                          <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-aht-orange flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-white/90 text-sm sm:text-base">Email</div>
                            <div className="text-xs sm:text-sm text-white/70 break-all">{location.email}</div>
                          </div>
                        </motion.div>
                      )}
                      
                      {location.badge && (
                        <motion.div 
                          className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-aht-orange/30 to-aht-orange/10 border border-aht-orange/30"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="font-semibold mb-1 flex items-center gap-2 text-sm sm:text-base">
                            <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
                            {location.badge.title}
                          </div>
                          <div className="text-xs text-white/70">{location.badge.desc}</div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
         {/* Leadership Contact Cards */}
<motion.div
  variants={itemVariants}
  className="flex justify-center mb-10 md:mb-16 px-2"
>
  <Card
    className="bg-white/5 backdrop-blur-sm border-white/10 
               p-5 sm:p-8 text-white text-center 
               group hover:bg-white/10 transition-all 
               duration-300 relative overflow-hidden
               max-w-md w-full"
  >
    {/* Avatar */}
    <motion.div
      className="w-20 h-20 mx-auto mb-5 rounded-2xl 
                 bg-gradient-to-br from-aht-orange/30 to-primary/30 
                 flex items-center justify-center 
                 text-2xl font-bold text-white 
                 border border-white/20"
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      DJ
    </motion.div>

    <h4 className="text-xl font-bold mb-2">Dr. Jayaram V</h4>
    <div className="text-aht-orange font-semibold mb-4">
      Founder & Managing Partner
    </div>

    <div className="text-sm text-white/60 mb-6 space-y-1">
      <div>PhD (IISc), FIE, FICCE, LSMIEEE</div>
      <div>Former Chief Research Scientist, IISc</div>
    </div>

    <div className="space-y-3 text-sm">
      <motion.a
        href="mailto:drjayaramv@gmail.com"
        className="flex items-center justify-center gap-2 
                   p-3 rounded-xl bg-white/5 
                   hover:bg-white/10 transition-colors"
        whileHover={{ scale: 1.02 }}
      >
        <Mail className="w-4 h-4 text-aht-orange" />
        <span className="text-white/80 break-all">
          drjayaramv@gmail.com
        </span>
      </motion.a>

      <motion.a
        href="tel:+919845770188"
        className="flex items-center justify-center gap-2 
                   p-3 rounded-xl bg-white/5 
                   hover:bg-white/10 transition-colors"
        whileHover={{ scale: 1.02 }}
      >
        <Phone className="w-4 h-4 text-aht-orange" />
        <span className="text-white/80">
          +91 98457 70188
        </span>
      </motion.a>
    </div>
  </Card>
</motion.div>

          
          {/* CTA Card */}
          <motion.div variants={itemVariants} className="px-2">
            <Card className="relative overflow-hidden p-0 border-0">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-aht-orange via-orange-500 to-aht-orange bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]" />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                  }}
                />
              </div>
              
              <div className="relative z-10 p-6 sm:p-10 md:p-14 text-center text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Rocket className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Collaborate?</h3>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 text-white/90 max-w-2xl mx-auto">
                  Partner with us for cutting-edge shock tunnel and ground-test simulation solutions across aerospace, materials science, and beyond.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-white text-aht-orange hover:bg-white/90 px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg group w-full sm:w-auto">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl w-full sm:w-auto"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Learn More
                    </Button>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mt-6 sm:mt-10 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm text-xs sm:text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-white/70">GSTIN:</span>
                  <span className="font-mono font-semibold">29ACFFA6242H1ZD</span>
                </motion.div>
              </div>
            </Card>
          </motion.div>
          
          {/* Footer */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 text-center px-4"
          >
            <p className="text-white/50 text-xs sm:text-sm">
              © {new Date().getFullYear()} Applied Hypersonic Technologies LLP. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;