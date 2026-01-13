import { ArrowRight, Sparkles, Zap, Microscope, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ahtLogo from "@/assets/aht-logo.jpg";
import heroBackground from "@/assets/hero-background.jpg";

// Rotating words component
const RotatingWords = () => {
  const words = ["Hypersonic", "Shock Tunnel", "Ground-Test", "Deep-Tech"];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <span className="relative inline-block min-w-[280px] md:min-w-[400px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 40, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -40, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block bg-gradient-to-r from-aht-orange via-orange-400 to-aht-orange bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// Morphing blob component
const MorphingBlob = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{
      borderRadius: [
        "60% 40% 30% 70%/60% 30% 70% 40%",
        "30% 60% 70% 40%/50% 60% 30% 60%",
        "60% 40% 30% 70%/60% 30% 70% 40%",
      ],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

// Animated counter component
const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: string; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  
  useEffect(() => {
    let start = 0;
    const end = numericValue;
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration * 60));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [numericValue, duration]);
  
  if (value.includes('+')) {
    return <span className="counter-value">{count}+{suffix}</span>;
  }
  return <span className="counter-value">{value.includes('IISc') || value.includes('MST') ? value : count}{suffix}</span>;
};

// Floating particle component
const FloatingParticle = ({ delay, size, x, y }: { delay: number; size: number; x: string; y: string }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-br from-aht-orange to-orange-400"
    style={{ width: size, height: size, left: x, top: y }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.8, 0.4],
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

// Orbital ring component
const OrbitalRing = ({ size, duration, reverse = false }: { size: number; duration: number; reverse?: boolean }) => (
  <motion.div
    className="absolute left-1/2 top-1/2 rounded-full border border-white/10"
    style={{ width: size, height: size, marginLeft: -size/2, marginTop: -size/2 }}
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
  >
    <motion.div 
      className="absolute w-3 h-3 bg-aht-orange rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(255,149,97,0.5)]"
      style={{ left: '100%', top: '50%' }}
    />
  </motion.div>
);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  const stats = [
    { value: "10⁶", label: "K/s Heating & Cooling Rates", icon: Zap },
    { value: "UHV", label: "Ultra High Vacuum Systems", icon: Microscope },
    { value: "MST", label: "Multiphase Shock Tubes", icon: Atom },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24"
    >
      {/* Background with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Gradient overlay with mesh effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,149,97,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,149,97,0.1)_0%,_transparent_50%)]" />
      </motion.div>
      
      {/* Morphing blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MorphingBlob 
          className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-aht-orange/20 to-transparent blur-3xl" 
          delay={0} 
        />
        <MorphingBlob 
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-aht-orange/10 to-transparent blur-3xl" 
          delay={2} 
        />
        <MorphingBlob 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-white/5 to-transparent blur-3xl" 
          delay={4} 
        />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingParticle delay={0} size={8} x="15%" y="20%" />
        <FloatingParticle delay={1} size={6} x="85%" y="30%" />
        <FloatingParticle delay={2} size={10} x="25%" y="70%" />
        <FloatingParticle delay={0.5} size={5} x="75%" y="80%" />
        <FloatingParticle delay={1.5} size={7} x="50%" y="15%" />
        <FloatingParticle delay={3} size={4} x="90%" y="60%" />
        <FloatingParticle delay={2.5} size={6} x="10%" y="45%" />
      </div>

      {/* Orbital rings - positioned lower to avoid nav overlap */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ paddingTop: '80px' }}>
        <div className="relative">
          <OrbitalRing size={250} duration={20} />
          <OrbitalRing size={350} duration={30} reverse />
          <OrbitalRing size={450} duration={40} />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <motion.div 
        className="container mx-auto px-4 z-10 text-center text-white"
        style={{ opacity, scale }}
      >
        {/* Logo with glow effect */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative inline-block mb-10"
        >
          <div className="absolute inset-0 blur-2xl bg-aht-orange/30 rounded-full scale-150" />
          <motion.img 
            src={ahtLogo} 
            alt="Applied Hypersonic Technologies Logo" 
            className="relative w-28 h-28 md:w-36 md:h-36 mx-auto rounded-2xl shadow-2xl border-2 border-white/20"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
        
        {/* Main headline with stagger animation */}
        <motion.div className="overflow-hidden">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Redefining{" "}
            <RotatingWords />
            <br />
            <span className="text-white/90">Innovation</span>
          </motion.h1>
        </motion.div>
        
        {/* Subtitle with fade in */}
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-white/80 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Deep-tech engineering firm specializing in shock tunnel, shock tube, and ground-test simulation systems for{" "}
          <span className="text-aht-orange font-medium">hypersonic research</span>.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button className="btn-cta group text-lg px-10 py-6">
            Get in Touch
            <motion.span
              className="ml-2 inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm px-8 py-6 text-lg rounded-xl transition-all duration-300"
          >
            Learn More
          </Button>
        </motion.div>
        
        {/* Stats section with stagger */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {/* Card content */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 hover:border-aht-orange/40 hover:bg-white/[0.12] transition-all duration-300 overflow-hidden">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-aht-orange mb-4 shadow-lg shadow-aht-orange/20">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} duration={2} />
                </div>
                
                {/* Label */}
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;