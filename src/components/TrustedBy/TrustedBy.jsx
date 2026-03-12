import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import "./TrustedBy.css";

import google from "../../assets/logos/google-icon-logo-svgrepo-com.svg";
import twitter from "../../assets/logos/twitter-3-logo-svgrepo-com.svg";
import forbes from "../../assets/logos/forbes-logo-svgrepo-com.svg";
import bmw from "../../assets/logos/bmw-logo-svgrepo-com.svg";
import nashville from "../../assets/logos/nashville-predators-1-logo-svgrepo-com.svg";
const titleVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const logos = [
  { src: google, alt: "Google" },
  { src: twitter, alt: "Twitter" },
  { src: bmw, alt: "BMW" },
  { src: nashville, alt: "Nashville Predators" },
  { src: forbes, alt: "Forbes" },
];

const TrustedBy = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="trusted-section">
      <div className="container">
        {/* Animated title */}
        <motion.p
          className="trusted-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          TRUSTED BY 100+ COMPANIES
        </motion.p>

        {/* Marquee */}
        <div
          className="logo-marquee"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="logo-track"
            animate={
              prefersReducedMotion || isHovered
                ? { x: 0 }
                : { x: ["0%", "-50%"] }
            }
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div className="logo-pill" key={index}>
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
