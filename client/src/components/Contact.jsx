import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import axios from "axios";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const contactInfo = [
  { icon: <FiMail />, label: "Email", value: "sachinkumarthakur2002@email.com", href: "mailto:sachinkumarthakur2002@email.com" },
  { icon: <FiPhone />, label: "Phone", value: "+91 9142997315", href: "tel:+9142997315" },
  { icon: <FiLinkedin />, label: "LinkedIn", value: "linkedin", href: "https://www.linkedin.com/in/sachin-kumar-a27962228/" },
  { icon: <FiGithub />, label: "GitHub", value: "github", href: "https://github.com/sachinkr1530/" },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post(
        process.env.REACT_APP_API_URL
          ? `${process.env.REACT_APP_API_URL}/api/contact`
          : "/api/contact",
        form
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle
        tag="08. "
        title="Contact"
        subtitle="Have a project in mind? Let's build something incredible together."
      />

      <div ref={ref} className="grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-4">
          {contactInfo.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-5 glass-card p-5 rounded-2xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-lg group-hover:bg-accent/20 transition-colors">
                {c.icon}
              </div>
              <div>
                <div className="font-mono text-xs text-muted">{c.label}</div>
                <div className="font-body text-text text-sm group-hover:text-accent transition-colors">
                  {c.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 rounded-2xl space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {["name", "email"].map((f) => (
              <div key={f}>
                <label className="font-mono text-xs text-muted uppercase tracking-wider mb-2 block">
                  {f}
                </label>
                <input
                  type={f === "email" ? "email" : "text"}
                  name={f}
                  value={form[f]}
                  onChange={handleChange}
                  required
                  placeholder={f === "name" ? "John Doe" : "john@example.com"}
                  className="w-full bg-bg/60 border border-border focus:border-accent/50 rounded-xl px-4 py-3 text-text text-sm outline-none transition-all duration-300 font-body placeholder:text-muted/40"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="font-mono text-xs text-muted uppercase tracking-wider mb-2 block">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Project collaboration..."
              className="w-full bg-bg/60 border border-border focus:border-accent/50 rounded-xl px-4 py-3 text-text text-sm outline-none transition-all duration-300 font-body placeholder:text-muted/40"
            />
          </div>

          <div>
            <label className="font-mono text-xs text-muted uppercase tracking-wider mb-2 block">Message</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              className="w-full bg-bg/60 border border-border focus:border-accent/50 rounded-xl px-4 py-3 text-text text-sm outline-none transition-all duration-300 font-body placeholder:text-muted/40 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="neon-btn w-full py-4 rounded-xl flex items-center justify-center gap-3 text-sm font-display tracking-wide disabled:opacity-60"
          >
            {status === "sending" ? (
              <span className="animate-spin">⟳</span>
            ) : (
              <FiSend />
            )}
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="font-mono text-xs text-accent text-center">✓ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs text-red-400 text-center">✕ Failed to send. Please try again.</p>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
