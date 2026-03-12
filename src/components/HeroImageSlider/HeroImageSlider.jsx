import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroImageSlider.css";

const images = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

const HeroImageSlider = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex([(index + dir + images.length) % images.length, dir]);
  };

  return (
    <div className="hero-slider">
      <AnimatePresence custom={direction} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Corporate team"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* Controls */}
      <button
        className="slider-arrow left"
        onClick={() => paginate(-1)}
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        className="slider-arrow right"
        onClick={() => paginate(1)}
        aria-label="Next image"
      >
        ›
      </button>
      <div className="slider-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroImageSlider;
