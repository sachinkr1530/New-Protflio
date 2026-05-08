import React from "react";
import { color, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiBriefcase } from "react-icons/hi";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const experiences = [
  {
    company: "Adomita Technologies PVT LTD",
    role: "Data Analyst",
    duration: "Present",
    location: "TamiNadu",
    // color: "#ffff",
    color: "#5b8ef0",
    points: [
      "Working on data analysis, machine learning models, AI-driven analytics, and predictive systems.",
      "Handling large-scale structured and unstructured datasets using Python, SQL, and modern data tools..",
      "Developing and optimizing ML models for prediction, recommendation, and intelligent automation.",
      "Improving business decision-making through analytics, forecasting, and AI-powered insights.",
    ],
  },
  {
    company: "MentorFox",
    role: "Mern Stack developer Intern",
    duration: "Jul 2025 – Aug 2025",
    location: "Chennai",
    color: "#7c5cfc",
    points: [
      "Reduced navigation time by 35% and improved user interaction of appointment booking and tender platform for Yanmar.",
      "Reduced execution time by 30% and average API response time by 15% by optimizing database queries.",
      "Managed client meetings & coordinated between stakeholders and development team.",
      "Worked on scalable frontend/backend systems.",
    ],
  },
];

function ExpCard({ exp, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="relative pl-12 md:pl-0"
    >
      {/* Desktop: alternate sides */}
      <div className="glass-card rounded-2xl p-7 hover:border-accent/30 transition-all duration-400 hover:-translate-y-1 group">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div>
            <h3 className="font-display font-bold text-xl text-text group-hover:text-accent transition-colors">
              {exp.role}
            </h3>
            <span
              className="font-mono text-sm font-semibold"
              style={{ color: exp.color }}
            >
              @ {exp.company}
            </span>
          </div>
          <div className="text-right">
            <div className="font-mono text-xs text-muted">{exp.duration}</div>
            <div className="font-mono text-xs text-muted">{exp.location}</div>
          </div>
        </div>

        {/* Points */}
        <ul className="space-y-3">
          {exp.points.map((pt, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="flex gap-3 text-white text-sm leading-relaxed"
            >
              <span className="text-accent mt-0.5 shrink-0">▸</span>
              {pt}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle tag="02." title="Experience" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line hidden sm:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="relative">
              {/* Timeline dot */}
              <div
                className="absolute left-6 md:left-1/2 top-8 w-4 h-4 rounded-full border-2 border-accent bg-bg -translate-x-1/2 hidden sm:flex items-center justify-center z-10"
                style={{ boxShadow: "0 0 12px rgba(91,142,240,0.6)" }}
              />
              <div className={`md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 1 ? "" : ""}`}>
                {i % 2 === 0 ? (
                  <>
                    <ExpCard exp={exp} index={i} />
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <ExpCard exp={exp} index={i} />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
