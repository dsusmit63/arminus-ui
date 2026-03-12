import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "HR Director, FinTech Corp",
    quote:
      "Arminus helped us close critical roles faster than expected. Their understanding of culture-fit made a real difference.",
    metric: "45% faster hiring",
  },
  {
    name: "Priya Sharma",
    role: "Talent Lead, SaaS Startup",
    quote:
      "The team was responsive, professional, and delivered high-quality candidates consistently.",
    metric: "3x candidate quality",
  },
  {
    name: "Daniel Wright",
    role: "CEO, Consulting Group",
    quote:
      "Executive hiring is hard. Arminus handled it with discretion and precision.",
    metric: "100% leadership retention",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="container testimonials-grid">
        {/* LEFT — SPOTLIGHT */}
        <div className="testimonial-spotlight">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="spotlight-eyebrow">CLIENT IMPACT</p>

              <h3 className="spotlight-quote">“{active.quote}”</h3>

              <div className="spotlight-meta">
                <strong>{active.name}</strong>
                <span>{active.role}</span>
              </div>

              <div className="spotlight-metric">
                <span>{active.metric}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — SIGNAL WALL */}
        <div className="testimonial-signal">
          <p className="signal-title">More client stories</p>

          {testimonials.map((item, index) => (
            <button
              key={item.name}
              className={`signal-item ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="signal-name">{item.name}</span>
              <span className="signal-role">{item.role}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
