import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  Building2,
  Quote,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative bg-background py-24 overflow-hidden"
    >
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-aht-orange/5" />

      <div className="container mx-auto relative z-10 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            About{" "}
            <span className="text-aht-orange">
              Applied Hypersonic Technologies
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Engineering extreme environments through advanced ground-test
            simulation systems for hypersonic and high-enthalpy research.
          </p>
        </motion.div>

        {/* SYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT — Founder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full rounded-3xl bg-white/70 backdrop-blur-xl border border-border/50 shadow-xl p-10 flex flex-col justify-between">
              <div>
                {/* Avatar */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-aht-orange text-white flex items-center justify-center text-3xl font-bold mb-6">
                  JV
                </div>

                <h3 className="text-2xl font-bold text-primary">
                  Dr. Jayaram V
                </h3>
                <p className="text-aht-orange font-semibold mb-6">
                  Founder & Managing Partner
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-aht-orange" />
                    <span>PhD (IISc), FIE, FICCE, LSMIEEE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-aht-orange" />
                    <span>Former Chief Research Scientist, IISc</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="text-aht-orange" />
                    <span>20+ Years of Research Experience</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                <Badge variant="secondary">Shock Wave Research</Badge>
                <Badge variant="secondary">Materials Science</Badge>
                <Badge variant="secondary">Hypersonics</Badge>
              </div>
            </Card>
          </motion.div>

          {/* RIGHT — About AHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full rounded-3xl bg-white/70 backdrop-blur-xl border border-border/50 shadow-xl p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Institutional Focus
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Applied Hypersonic Technologies (AHT), Bengaluru, is a
                  deep-tech engineering and research-driven firm specializing in
                  the design, development, and manufacturing of advanced shock
                  tunnel, shock tube, and diaphragm-less shock tube facilities.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  We pioneer ground-test simulation systems that replicate
                  extreme aero-thermodynamic and high-enthalpy environments
                  encountered in supersonic and hypersonic regimes, enabling
                  interdisciplinary research across aerospace, materials
                  science, energy, nuclear, and astro-science domains.
                </p>

                {/* Vision */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Vision
                  </h4>
                  <p className="text-muted-foreground">
                    To be a global leader in hypersonic ground-test technologies
                    and shock-based material processing through innovation and
                    research excellence.
                  </p>
                </div>

                {/* Mission */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Mission
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Design world-class shock tube and shock tunnel systems</li>
                    <li>• Support industry and academia with scalable facilities</li>
                    <li>• Enable interdisciplinary high-enthalpy research</li>
                    <li>• Train future scientists through hands-on experimentation</li>
                  </ul>
                </div>
              </div>

              <Quote className="self-end text-primary/10 w-16 h-16 mt-8" />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
