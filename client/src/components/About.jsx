import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 95, suffix: "%", label: "ML Model Accuracy" },
  { value: 35, suffix: "%", label: "Performance Gains" },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <SectionWrapper id="about" className="grid-bg">
      <SectionTitle title="About Me" />

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="space-y-6">
          <p className="text-text text-lg leading-relaxed font-body">
            I am a passionate{" "}
            <span className="text-accent font-semibold">Full Stack Developer</span>{" "}
            and{" "}
            <span className="text-accent font-semibold">Data Analyst</span>{" "}
            currently pursuing{" "}
            <span className="text-glow font-semibold">MCA in Generative AI</span>{" "}
            from SRM Institute.
          </p>
          <p className="text-muted text-lg leading-relaxed font-body">
            I specialize in React.js, Node.js, AI-powered applications, and modern
            web technologies. I love building scalable applications with premium
            UI/UX and integrating AI solutions into real-world systems.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {["React.js", "Node.js", "Python", "Generative AI", "MongoDB", "FastAPI"].map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 rounded-lg border border-accent/20 text-accent/80 bg-accent/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="font-display font-extrabold text-4xl text-accent glow-text">
                {inView ? (
                  <CountUp end={s.value} duration={2.5} suffix={s.suffix} />
                ) : (
                  `0${s.suffix}`
                )}
              </div>
              <div className="text-muted text-sm mt-1 font-body">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
