import { motion } from "framer-motion";
import "./Style/Home_Trust.css";

const cards = [
  {
    number: "01",
    title: "High-Intent Customer Acquisition",
    text: "Campaigns are built around people actively searching for your services, helping you reach prospects with real purchase intent.",
  },
  {
    number: "02",
    title: "Clear Conversion Paths",
    text: "Every campaign leads visitors toward a focused next step: call, submit a form, or request a consultation.",
  },
  {
    number: "03",
    title: "Transparent Optimization",
    text: "Performance is tracked and refined over time so your budget is focused on the searches and actions that matter.",
  },
];

function HomeTrust() {
  return (
    <section className="home-trust">
      <div className="home-trust-container">
        <motion.div
          className="home-trust-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="home-section-label">What you can expect</p>
          <h2>Built around clarity, intent, and measurable action.</h2>
          <p>
            No vague marketing packages. Just a focused system designed to help
            local service businesses turn search demand into real opportunities.
          </p>
        </motion.div>

        <div className="credibility-cards">
          {cards.map((card, index) => (
            <motion.article
              className="credibility-card"
              key={card.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <span className="credibility-accent">{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeTrust;
