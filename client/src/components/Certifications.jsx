import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiShieldCheck } from "react-icons/hi";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const certs = [
  {
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    color: "#5b8ef0",
    icon: "☁",
  },
  {
    title: "MongoDB Developer Toolkit",
    issuer: "MongoDB University",
    color: "#7c5cfc",
    icon: "◎",
  },
];

function CertCard({ cert, index }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="glass-card rounded-2xl p-7 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      style={{ border: `1px solid ${cert.color}20` }}
      whileHover={{ boxShadow: `0 20px 60px ${cert.color}20` }}
    >
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
        style={{ background: `radial-gradient(circle, ${cert.color}, transparent)`, transform: "translate(30%, -30%)" }}
      />

      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
          style={{ background: `${cert.color}15`, color: cert.color }}
        >
          {cert.icon}
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-text group-hover:text-accent transition-colors leading-tight">
            {cert.title}
          </h3>
          <p className="font-mono text-xs mt-1" style={{ color: cert.color }}>
            {cert.issuer}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <HiShieldCheck className="text-accent text-sm" />
            <span className="font-mono text-xs text-muted">Verified</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle tag="06." title="Certifications" />
      <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
        {certs.map((c, i) => (
          <CertCard key={c.title} cert={c} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
