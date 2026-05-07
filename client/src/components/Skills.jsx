import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const skillGroups = [
  {
    category: "Languages",
    icon: "{ }",
    skills: [
        { name: "Python", level: 92 },
      { name: "Machine Learning", level: 89 },
      { name: "JavaScript", level: 88 },
      { name: "Java", level: 70 },
    ],
  },
  {
    category: "Frontend",
    icon: "◈",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML / CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙",
    skills: [
            { name: "RAG", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "FastAPI", level: 75 },
    ],
  },
  {
    category: "Database",
    icon: "◎",
    skills: [
      { name: "MongoDB", level: 87 },
        { name: "Vector Database", level: 79 },
      { name: "MySQL", level: 78 },
    ],
  },



  


  {
    category: "AI & Tools",
    icon: "✦",
    skills: [
      { name: "Generative AI", level: 80 },
      { name: "Salesforce AI", level: 72 },
      { name: "Streamlit", level: 85 },
      { name: "Git", level: 88 },
    ],
  },
];

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between font-mono text-xs">
        <span className="text-text">{name}</span>
        <span className="text-accent">{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.76, 0, 0.24, 1] }}
          className="h-full skill-bar-fill rounded-full"
        />
      </div>
    </div>
  );
}

function SkillCard({ group, index }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xl text-accent">{group.icon}</span>
        <h3 className="font-display font-bold text-text group-hover:text-accent transition-colors">
          {group.category}
        </h3>
      </div>
      <div className="space-y-4">
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            inView={inView}
            delay={0.1 + i * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="grid-bg">
      <SectionTitle
        tag="03."title="Skills"
        subtitle="Technologies I've been working with"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g, i) => (
          <SkillCard key={g.category} group={g} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
