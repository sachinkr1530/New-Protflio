import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) { clearInterval(interval); return 100; }
        return c + Math.floor(Math.random() * 6) + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const display = Math.min(count, 100);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Orbs */}
      <div className="absolute w-96 h-96 orb orb-1 top-1/4 left-1/4" />
      <div className="absolute w-80 h-80 orb orb-2 bottom-1/4 right-1/4" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-8"
      >
        {/* Logo mark */}
        <div className="relative">
          <motion.div
            className="w-20 h-20 rounded-2xl border border-accent/30 flex items-center justify-center"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ background: "rgba(91,142,240,0.05)" }}
          >
            <span className="loader-text text-5xl">S</span>
          </motion.div>
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{ boxShadow: ["0 0 20px rgba(91,142,240,0.2)", "0 0 60px rgba(91,142,240,0.5)", "0 0 20px rgba(91,142,240,0.2)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <div className="loader-text text-4xl md:text-6xl tracking-wider">
          SACHIN
        </div>

        {/* Progress bar */}
        <div className="w-64 h-px bg-border relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-glow"
            style={{ width: `${display}%`, boxShadow: "0 0 10px rgba(91,142,240,0.8)" }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="font-mono text-muted text-sm tracking-widest">
          {display.toString().padStart(3, "0")} %
        </div>
      </motion.div>
    </motion.div>
  );
}
