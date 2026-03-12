import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "Permanent Hiring",
    context: "Long-term teams",
    description:
      "We help you find full-time professionals aligned with your culture and long-term goals.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    title: "Contract Staffing",
    context: "Speed & flexibility",
    description:
      "Scale your workforce quickly with skilled, pre-vetted contract talent.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Executive Search",
    context: "Leadership precision",
    description:
      "Confidential leadership hiring for senior and executive-level roles.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        {/* HEADER */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>What We Do Differently</h2>
          <p>Our services are built around outcomes, not offerings.</p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="service-cards"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.18 }}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              {/* STORY SPINE */}
              <div className="service-spine">
                <span>0{index + 1}</span>
              </div>

              {/* FLOATING IMAGE */}
              <div className="service-media">
                <img src={service.image} alt={service.title} />
              </div>

              {/* CONTENT */}
              <div className="service-body">
                <p className="service-context">{service.context}</p>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <a href="#" className="service-link">
                  Learn more →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
