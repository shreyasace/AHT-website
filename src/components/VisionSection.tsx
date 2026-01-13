import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Target, ArrowRight, Eye, Sparkles, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Animated rising bar chart
const AnimatedBars = () => (
  <div className="absolute right-10 top-1/2 -translate-y-1/2 flex items-end gap-2 opacity-10">
    {[40, 60, 45, 80, 55, 90, 70].map((height, i) => (
      <motion.div
        key={i}
        className="w-4 bg-gradient-to-t from-aht-orange to-orange-400 rounded-t"
        initial={{ height: 0 }}
        animate={{ height: `${height}px` }}
        transition={{
          duration: 1,
          delay: i * 0.1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 2,
        }}
      />
    ))}
  </div>
);

// Spinning ring
const SpinningRing = ({ size, duration, className }: { size: number; duration: number; className?: string }) => (
  <motion.div
    className={`absolute border-2 border-dashed rounded-full ${className}`}
    style={{ width: size, height: size }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
  />
);

// Animated counter for numbers
const AnimatedNumber = ({ value, prefix = "", suffix = "" }: { value: string; prefix?: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    // Check if it's a percentage or currency
    const numericPart = value.replace(/[^0-9.]/g, '');
    const targetNum = parseFloat(numericPart);
    
    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }
    
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (targetNum - start) * easeOutQuart;
      
      if (value.includes('.')) {
        setDisplayValue(current.toFixed(1));
      } else {
        setDisplayValue(Math.round(current).toString());
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value]);
  
  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

const VisionSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const marketData = [
    {
      icon: DollarSign,
      value: "10",
      prefix: "",
      suffix: "⁶ K/s",
      label: "Heating & Cooling Rates",
      description: "Extreme thermal processing capability",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: TrendingUp,
      value: "6",
      suffix: "+",
      label: "Facility Types",
      description: "Shock tunnels, tubes, MST, UHV systems",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      value: "5",
      prefix: "",
      suffix: "+",
      label: "Research Domains",
      description: "Aerospace, Materials, Astro-sciences & more",
      gradient: "from-aht-orange to-orange-500"
    }
  ];

  const strategicPoints = [
    {
      title: "Industry-Academia Collaboration",
      description: "Active partnerships with universities, aerospace industries, and advanced materials companies"
    },
    {
      title: "Customizable Solutions",
      description: "From compact laboratory-scale systems to large industrial-grade installations"
    },
    {
      title: "Research Excellence",
      description: "Supporting cutting-edge research in aerospace, materials science, and astro-sciences"
    }
  ];

  const investmentHighlights = [
    { label: "Core Expertise", value: "Shock Tunnel & Tube Manufacturing" },
    { label: "Unique Capability", value: "10⁶ K/s Thermal Processing" },
    { label: "Application Areas", value: "Multi-Domain Research Support" },
    { label: "Collaboration", value: "Industry-Academia Partnerships" }
  ];

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
    <section ref={sectionRef} className="section-corporate relative overflow-hidden">
      {/* Complex gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-muted/50 to-aht-orange/[0.02]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,149,97,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(26,35,126,0.05)_0%,_transparent_50%)]" />
      
      {/* Animated floating elements */}
      <motion.div 
        className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-aht-orange/20 to-transparent blur-xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl"
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Animated bar chart */}
      <AnimatedBars />
      
      {/* Spinning rings */}
      <div className="absolute left-10 top-1/4 opacity-20">
        <SpinningRing size={100} duration={20} className="border-aht-orange/30" />
        <SpinningRing size={70} duration={15} className="border-primary/30 absolute top-[15px] left-[15px]" />
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
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xs sm:text-sm font-semibold text-primary">Our Vision</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 tracking-tight">
              Vision & <span className="bg-gradient-to-r from-aht-orange to-orange-500 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              To be a global leader in hypersonic ground-test technologies and shock-based material processing, 
              enabling next-generation aerospace systems through innovation.
            </p>
          </motion.div>
          
          {/* Market Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-20 px-2">
            {marketData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="card-corporate text-center group relative overflow-hidden h-full">
                  {/* Gradient background on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  {/* Icon */}
                  <motion.div 
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg mb-4 sm:mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </motion.div>
                  
                  {/* Value with animation */}
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 sm:mb-3">
                    <AnimatedNumber 
                      value={item.value} 
                      prefix={item.prefix} 
                      suffix={item.suffix} 
                    />
                  </div>
                  
                  <div className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">{item.label}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{item.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Strategic Vision Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch mb-12 md:mb-16 px-2">
            {/* Left column - Strategic points */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8">
                Strategic Global Priority
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {strategicPoints.map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-card hover:bg-muted/50 border border-border/50 hover:border-aht-orange/30 transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-aht-orange to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-base sm:text-lg mb-1 group-hover:text-aht-orange transition-colors">
                        {point.title}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Right column - Investment card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Card className="h-full relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-white p-6 sm:p-8 md:p-10">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-bl from-aht-orange/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-aht-orange" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">Investment Opportunity</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {investmentHighlights.map((item, index) => (
                      <motion.div 
                        key={index}
                        className="border-b border-white/10 pb-4 last:border-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <div className="text-sm text-white/60 mb-1">{item.label}</div>
                        <div className="font-semibold text-lg">{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
          
          {/* Vision 2030 Card */}
          <motion.div variants={itemVariants} className="px-2">
            <Card className="card-corporate relative overflow-hidden bg-gradient-to-r from-card via-card to-card border-primary/10">
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-aht-orange/20 via-primary/20 to-aht-orange/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative z-10 text-center py-4 sm:py-6">
                <motion.div 
                  className="inline-flex items-center gap-2 bg-aht-orange/10 border border-aht-orange/30 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-4 sm:mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xs sm:text-sm font-bold text-aht-orange uppercase tracking-wider">Our Vision</span>
                </motion.div>
                
                <p className="text-base sm:text-xl md:text-2xl text-foreground leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-10 font-medium px-2">
                  To be a <span className="text-aht-orange">global leader</span> in hypersonic ground-test technologies and shock-based material processing, 
                  enabling next-generation aerospace systems and <span className="text-aht-orange">advanced materials</span> through 
                  innovation and research excellence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="btn-corporate group">
                      Download Business Plan
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="btn-cta group">
                      Schedule Investor Meeting
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;