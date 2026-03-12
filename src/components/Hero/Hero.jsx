import { motion, useReducedMotion } from "framer-motion";
import HeroImageSlider from "../HeroImageSlider/HeroImageSlider";
import "./Hero.css";
import { Link, NavLink } from "react-router-dom";

/* ===============================
   ANIMATION CONFIG
================================ */
const STAGGER_DELAY = 0.15;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_DELAY,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        {/* LEFT – CONTENT */}
        <motion.header
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            id="hero-heading"
            className="hero-title"
            variants={itemVariants}
          >
            A bold headline
            <span>that delivers</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Go ahead and say just a little more about what you do. Explain your
            value clearly and confidently.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={itemVariants}
            aria-label="Primary hero actions"
          >
            <a href="#resume" className="btn-primary">
              Submit Resume
            </a>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </motion.div>

          <motion.p className="hero-note" variants={itemVariants}>
            Trusted by growing teams and enterprises.
          </motion.p>
        </motion.header>

        {/* RIGHT – VISUAL */}
        <motion.div
          className="hero-image"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={prefersReducedMotion ? false : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroImageSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
