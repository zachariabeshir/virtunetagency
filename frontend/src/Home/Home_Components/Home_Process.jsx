import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Style/Home_Process.css";

const steps = [
  {
    number: "01",
    title: "Discovery",
    text: "We learn your services, market, service area, goals, and current lead flow.",
  },
  {
    number: "02",
    title: "Build",
    text: "We develop the campaign structure, ad messaging, landing page, and tracking setup.",
  },
  {
    number: "03",
    title: "Launch",
    text: "Your campaign goes live with focused targeting and clear conversion actions.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "Performance data guides ongoing improvements to targeting, messaging, and budget allocation.",
  },
];

function HomeProcess() {
  return (
    <section className="home-process">
      <div className="home-process-container">
        <motion.div
          className="home-process-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="home-section-label">How it works</p>
          <h2>A simple process. A focused outcome.</h2>
          <p>
            Every stage is built around getting the campaign live, measurable,
            and increasingly efficient.
          </p>
        </motion.div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.article
              className="process-card"
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <span className="process-step">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="process-cta"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p>Ready to build a stronger lead pipeline?</p>
          <Link to="/contact" className="process-cta-btn">
            Request a Consultation <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeProcess;
