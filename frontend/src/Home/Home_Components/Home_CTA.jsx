import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Style/Home_CTA.css";

function HomeCTA() {
  return (
    <section className="home-cta">
      <div className="home-cta-container">
        <motion.div
          className="home-cta-box"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <div className="home-cta-content">
            <p className="home-cta-kicker">Ready when you are</p>
            <h2>Let’s turn more local searches into real opportunities.</h2>
            <p>
              Tell us what your business offers, where you serve, and what kind
              of customers you want more of.
            </p>
          </div>

          <div className="home-cta-actions">
            <Link to="/contact" className="home-cta-btn primary">
              Request a Consultation <span aria-hidden="true">→</span>
            </Link>

            <Link to="/services" className="home-cta-btn secondary">
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeCTA;
