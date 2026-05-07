import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionWrapper({ id, children, className = "" }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id={id} className={`py-24 md:py-32 relative ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className="max-w-7xl mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionTitle({ tag, title, subtitle }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        {/* <div className="w-6 h-px bg-accent" /> */}
        <span className="font-mono text-accent text-sm tracking-widest uppercase">{tag}</span>
      </div>
      <h2 className="section-heading mb-4">{title}</h2>
      {subtitle && <p className="text-muted max-w-2xl text-lg">{subtitle}</p>}
    </div>
  );
}
