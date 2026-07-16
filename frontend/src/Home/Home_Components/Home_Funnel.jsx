import { motion } from "framer-motion";
import "./Style/Home_Funnel.css";

const steps = [
  {
    number: "01",
    title: "Google Search",
    text: "A customer searches for the exact service they need.",
    icon: "⌕",
  },
  {
    number: "02",
    title: "Targeted Ad",
    text: "Your business appears with a clear, relevant message.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Landing Page",
    text: "The visitor sees one focused offer and next step.",
    icon: "▤",
  },
  {
    number: "04",
    title: "Qualified Lead",
    text: "A call or form submission is captured and tracked.",
    icon: "✓",
  },
];

function HomeFunnel() {
  return (
    <section className="home-funnel">
      <div className="home-funnel-container">
        <motion.div
          className="home-funnel-copy"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <p className="home-section-label">The VirtuNet system</p>
          <h2>From active search to real customer opportunity.</h2>
          <p>
            Your website should not just look good. It should support a complete
            path from search intent to a measurable business action.
          </p>
        </motion.div>

        <div className="home-funnel-visual">
          <div className="funnel-track" aria-hidden="true" />

          {steps.map((step, index) => (
            <motion.article
              className="funnel-step"
              key={step.number}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className="funnel-step-icon">{step.icon}</div>
              <div>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeFunnel;
