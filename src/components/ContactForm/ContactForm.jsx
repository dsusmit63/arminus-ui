import { motion } from "framer-motion";
import "./ContactForm.css";

const formVariants = {
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

const ContactForm = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        {/* LEFT – COPY */}
        <motion.div
          className="contact-info"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="contact-eyebrow">CONTACT US</p>
          <h2 className="contact-title">
            Let’s discuss how we can
            <span> support your hiring goals</span>
          </h2>
          <p className="contact-description">
            Tell us a bit about your requirements and our team will get back to
            you within one business day.
          </p>
        </motion.div>

        {/* RIGHT – FORM */}
        <motion.form
          className="contact-form"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
          aria-label="Contact form"
        >
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <input id="name" type="text" placeholder="John Doe" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="john@company.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" placeholder="Company name" />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="+91 98765 43210" />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tell us about your hiring needs..."
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            Send Message
          </button>

          <p className="form-note">
            We respect your privacy. Your information is safe with us.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
