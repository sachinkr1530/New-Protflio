import React from "react";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg">
        </div>

        <p className="font-mono text-xs text-muted flex items-center gap-2">
          Built with <FiHeart className="text-accent animate-pulse" /> By Sachin Kumar Thakur
        </p>

        <div className="flex gap-4">
          {[
            { icon: <FiGithub />, href: "https://github.com/sachinkr1530/" },
            { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/sachin-kumar-a27962228/" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-xl flex items-center justify-center text-muted hover:text-accent transition-all duration-300 hover:scale-110"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
