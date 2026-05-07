import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiAcademicCap } from "react-icons/hi";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const education = [
  {
    degree: "MCA (Generative AI)",
    institution: "SRM Institute of Science and Technology",
    score: "CGPA: 8.32",
    duration: "2024 – 2026",
    color: "#5b8ef0",
    highlight: true,
  },
  {
    degree: "BCA",
    institution: "L.N.D College, Motihari",
    score: "75.80%",
    duration: "2021 – 2024",
    color: "#7c5cfc",
    highlight: false,
  },
];

function EduCard({ edu, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`glass-card rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${edu.highlight ? "border-accent/30" : ""}`}
    >
      {/* Accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }}
      />

      <div className="flex items-start gap-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl"
          style={{ background: `${edu.color}15`, color: edu.color, border: `1px solid ${edu.color}30` }}
        >
          <HiAcademicCap />
        </div>
        <div className="flex-1">
          <h3 className="font-display font-bold text-xl text-text group-hover:text-accent transition-colors">
            {edu.degree}
          </h3>
          <p className="text-muted mt-1 text-sm">{edu.institution}</p>
          <div className="flex flex-wrap gap-4 mt-4">
            <span
              className="font-mono text-sm font-bold"
              style={{ color: edu.color }}
            >
              {edu.score}
            </span>
            <span className="font-mono text-xs text-muted border border-border px-3 py-1 rounded-lg">
              {edu.duration}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <SectionWrapper id="education" className="grid-bg">
      <SectionTitle tag="05. " title="Education" />
      <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
        {education.map((edu, i) => (
          <EduCard key={edu.degree} edu={edu} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
