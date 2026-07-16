import { motion } from "framer-motion";
import "./Style/Home_Services.css";

const services = [
  {
    number: "01",
    title: "Google Search Ads",
    text: "Reach prospects at the moment they are actively searching for the service your business provides.",
  },
  {
    number: "02",
    title: "Conversion Landing Pages",
    text: "Create a focused path from ad click to phone call or form submission with clear messaging and strong calls to action.",
  },
  {
    number: "03",
    title: "Market & Keyword Targeting",
    text: "Identify valuable searches, prioritize profitable service areas, and reduce spend on low-intent traffic.",
  },
  {
    number: "04",
    title: "Tracking & Optimization",
    text: "Measure calls and forms, review performance, and continuously refine the campaign around better opportunities.",
  },
];

function HomeServices() {
  return (
    <section className="home-services">
      <div className="home-services-container">
        <motion.div
          className="home-services-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="home-section-label">Capabilities</p>
          <h2>A complete customer acquisition system.</h2>
          <p>
            Strategy, ads, landing pages, and measurement work together so your
            campaign is built around real business outcomes.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.number}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -9 }}
            >
              <span className="service-card-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
