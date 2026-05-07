import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const projects = [
  {
    title: "CanvasResume",
    tagline: "AI-Powered Resume Builder Platform",
    description:
      "ATS-friendly AI-powered resume builder platform with personalized dashboard, LinkedIn job recommendations, and MCQ practice system.",
    tech: ["React.js", "Node.js", "MongoDB", "AI/ML"],
    github: "https://github.com",
    live: "#",
    color: "#5b8ef0",
    gradient: "from-blue-900/40 to-purple-900/20",
    highlights: [
      "ATS-friendly resume generation",
      "Personalized dashboard",
      "LinkedIn job recommendations",
      "MCQ practice system",
    ],
  },
  {
    title: "Disease Prediction",
    tagline: "Multiple Disease AI Platform",
    description:
      "AI disease prediction platform with 95%+ accuracy, real-time prediction system, and dramatically reduced prediction latency.",
    tech: ["Python", "Streamlit", "Machine Learning", "Scikit-learn"],
    github: "https://github.com",
    live: "#",
    color: "#7c5cfc",
    gradient: "from-purple-900/40 to-blue-900/20",
    highlights: [
      "95%+ prediction accuracy",
      "Multiple disease detection",
      "Real-time prediction",
      "Streamlit interface",
    ],
  },
];

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`glass-card rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-400 hover:-translate-y-2 group cursor-pointer bg-gradient-to-br ${project.gradient}`}
      style={{
        boxShadow: hovered ? `0 20px 60px ${project.color}25` : undefined,
      }}
    >
      {/* Visual header */}
      <div
        className="h-48 relative flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}20, transparent)` }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${project.color} 0%, transparent 70%)`,
          }}
        />
        <motion.div
          animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.4 }}
          className="font-display font-extrabold text-6xl opacity-20 text-white"
        >
          {project.title.charAt(0)}
        </motion.div>
        <div
          className="absolute top-4 right-4 font-mono text-xs px-3 py-1 rounded-full border"
          style={{ borderColor: `${project.color}50`, color: project.color, background: `${project.color}10` }}
        >
          Featured
        </div>
      </div>

      <div className="p-7">
        <h3 className="font-display font-bold text-xl text-text mb-1 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="font-mono text-xs mb-4" style={{ color: project.color }}>
          {project.tagline}
        </p>
        <p className="text-muted text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-xs text-muted">
              <span style={{ color: project.color }}>▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2.5 py-1 rounded-lg border"
              style={{
                borderColor: `${project.color}30`,
                color: `${project.color}cc`,
                background: `${project.color}08`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors border border-border hover:border-accent/30 rounded-lg px-4 py-2"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-lg neon-btn"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle
        tag="04."
        title="Projects"
        subtitle="A selection of things I've built with passion"
      />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
