import { motion } from "framer-motion";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section className="about-page">
      <div className="container">
        {/* INTRO */}
        <motion.div
          className="about-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="about-eyebrow">ABOUT US</p>
          <h1 className="about-title">
            We help companies build
            <span> teams that drive growth</span>
          </h1>
          <p className="about-description">
            We are a people-first recruitment and talent solutions firm,
            partnering with startups, enterprises, and fast-growing teams to
            deliver long-term hiring success.
          </p>
        </motion.div>

        {/* MISSION / VISION */}
        <div className="about-cards">
          <motion.div
            className="about-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Our Mission</h3>
            <p>
              To connect great companies with exceptional talent through a
              transparent, efficient, and human hiring process.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Our Vision</h3>
            <p>
              To become a trusted global hiring partner known for integrity,
              speed, and quality placements.
            </p>
          </motion.div>
        </div>

        {/* DIFFERENTIATORS */}
        <motion.div
          className="about-diff"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>What makes us different</h2>

          <ul className="about-list">
            <li>Deep industry-focused recruiters</li>
            <li>Quality-first screening process</li>
            <li>Fast turnaround times</li>
            <li>Long-term partnership mindset</li>
          </ul>
        </motion.div>

        {/* STATS */}
        <motion.div
          className="about-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="stat">
            <span>100+</span>
            <p>Clients Served</p>
          </div>
          <div className="stat">
            <span>1,500+</span>
            <p>Successful Placements</p>
          </div>
          <div className="stat">
            <span>10+</span>
            <p>Industries Covered</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="about-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3>Ready to work with us?</h3>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
