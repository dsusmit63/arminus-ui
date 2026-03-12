import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="commitment-footer">
      {/* PRIMARY MESSAGE */}
      <motion.div
        className="footer-core"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="footer-eyebrow">READY WHEN YOU ARE</p>

        <h2>
          The right hire changes
          <span> everything.</span>
        </h2>

        <p className="footer-subtext">
          Whether you’re scaling fast or hiring carefully, we help you move
          forward with clarity.
        </p>

        {/* DECISION PATHS */}
        <div className="footer-choices">
          <a href="/contact" className="choice primary">
            I’m hiring →
          </a>

          <a href="/about" className="choice secondary">
            I want to understand your approach
          </a>
        </div>
      </motion.div>

      {/* REVEAL STRIP */}
      <motion.div
        className="footer-reveal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <span>Bengaluru, India</span>
          <span>contact@arminus.com</span>
          <span>+91 98765 43210</span>
        </div>

        <p>© {new Date().getFullYear()} Arminus</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
