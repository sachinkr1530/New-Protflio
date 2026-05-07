import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(91, 142, 240, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        particles.forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(91, 142, 240, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <canvas ref={canvasRef} id="particles-canvas" />

      {/* Orbs */}
      <div className="absolute w-[600px] h-[600px] orb orb-1 -top-32 -left-32 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] orb orb-2 -bottom-32 -right-32 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col items-start gap-6"
        >
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3"
          >
         
            <span className="font-mono text-accent text-sm tracking-widest uppercase">
                I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-display font-extrabold leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            <span className="text-text">Sachin</span>
            <br />
            <span
              className="glow-text"
              style={{
                background: "linear-gradient(135deg, #5b8ef0, #7c5cfc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Kumar
            </span>
            <br />
            <span className="text-text">Thakur</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3 font-display font-bold text-2xl md:text-3xl"
          >
            <span className="text-muted text-xl">{">"}</span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "AI Engineer",
                2000,
                "Data Analyst",
                2000,
                "MCA Gen AI Student",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-accent"
            />
            <span className="w-0.5 h-8 bg-accent animate-pulse2" />
          </motion.div>

          {/* Short bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-muted font-body max-w-xl text-lg leading-relaxed"
          >
            Building scalable applications with premium UI/UX and integrating
            AI solutions into real-world systems.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <button
              className="neon-btn px-8 py-3.5 rounded-xl text-base"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </button>



<a
  href="/CV_Sachin_Kr_Thakur.pdf"
  download
  className="outline-btn px-8 py-3.5 rounded-xl text-base flex items-center gap-2"
>
  <FiArrowDown className="animate-bounce" />
  Download Resume
</a>






          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex gap-5 mt-2"
          >
            {[
              { icon: <FiGithub />, href: "https://github.com/sachinkr1530/", label: "GitHub" },
              { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/sachin-kumar-a27962228/", label: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 glass-card rounded-xl flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-300 hover:scale-110 text-xl"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-muted/40 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
