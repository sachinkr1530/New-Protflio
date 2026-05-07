import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const points = [
  "Built official event website for Cyberanya club.",
  "Managed MySQL database for events and member records.",
  "Used FastAPI backend for scalable API architecture.",
  "Improved API performance and overall platform reliability.",
];

export default function Leadership() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <SectionWrapper id="leadership" className="grid-bg">
      <SectionTitle tag="07." title="Leadership" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-2xl p-8 max-w-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-glow" />
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-5 bg-accent" style={{ filter: "blur(40px)" }} />

        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-text">Cyberanya</h3>
            <p className="font-mono text-accent text-sm mt-1">IT & Development Head</p>
          </div>
          <span className="font-mono text-xs text-muted border border-border px-4 py-2 rounded-xl">
            Sep 2022 – Dec 2023
          </span>
        </div>

        <ul className="space-y-3">
          {points.map((pt, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex gap-3 text-muted text-sm leading-relaxed"
            >
              <span className="text-accent mt-0.5 shrink-0">▸</span>
              {pt}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </SectionWrapper>
  );
}
