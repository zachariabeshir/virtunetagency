import "./Services.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../Images/abstract-tech-background.jpeg";

const packages = [
  {
    title: "Campaign Launch",
    description:
      "Build a strong Google Ads foundation around your services, market, and ideal customers.",
    items: [
      "Market and competitor research",
      "Keyword and search-intent research",
      "Google Ads campaign setup",
      "Ad copywriting",
      "Conversion tracking setup",
      "Landing page recommendations",
    ],
    cta: "Launch a Campaign",
  },
  {
    title: "Lead Generation",
    description:
      "Ongoing campaign management focused on generating qualified leads while improving cost and performance over time.",
    items: [
      "Everything in Campaign Launch",
      "Ongoing Google Ads management",
      "Search-term and keyword optimization",
      "Negative keyword management",
      "Ad copy testing",
      "Lead and conversion tracking",
      "Monthly performance reporting",
    ],
    cta: "Start Generating Leads",
    featured: true,
  },
  {
    title: "Growth & Scale",
    description:
      "Advanced strategy for established businesses ready to increase lead volume, expand markets, or promote more services.",
    items: [
      "Advanced campaign restructuring",
      "Multi-service campaign management",
      "Multi-location targeting",
      "Budget allocation and scaling",
      "Advanced conversion tracking",
      "Landing page testing strategy",
      "Lead-quality analysis",
    ],
    cta: "Request a Growth Plan",
  },
];

const included = [
  "High-intent keyword research",
  "Strategic campaign structure",
  "Conversion-focused ad copy",
  "Call and form tracking",
  "Search-term monitoring",
  "Negative keyword management",
  "Budget and bid optimization",
  "Clear performance reporting",
];

const steps = [
  {
    number: "01",
    title: "Discovery",
    text: "We review your services, target market, goals, current marketing, and customer acquisition process.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "We identify valuable searches, build the campaign structure, and determine how leads will be tracked.",
  },
  {
    number: "03",
    title: "Launch",
    text: "Your campaigns go live with focused targeting, persuasive ads, and conversion tracking in place.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "We analyze real performance data, reduce wasted spend, and improve lead volume and quality over time.",
  },
];

const faqs = [
  {
    q: "How long does it take to launch?",
    a: "Most campaigns can be researched, built, and launched within several business days once we have the necessary information and access.",
  },
  {
    q: "Do I need an existing website?",
    a: "Not necessarily. We can review your current website and recommend whether it is ready for paid traffic or whether a focused landing page would improve conversions.",
  },
  {
    q: "Where do the leads come from?",
    a: "Your ads appear when potential customers search Google for services related to your business. Interested prospects can then call you or submit an inquiry.",
  },
  {
    q: "Do you guarantee a specific number of leads?",
    a: "No responsible agency can guarantee exact results. Search demand, competition, budget, location, offer quality, and your sales process all affect performance.",
  },
  {
    q: "Do you manage the campaigns after launch?",
    a: "Yes. Ongoing management includes monitoring search terms, improving targeting, testing ads, controlling wasted spend, and identifying opportunities to scale.",
  },
  {
    q: "Can Google Ads work for my business?",
    a: "Google Ads is usually strongest when customers are already searching for the service you provide. We evaluate demand, competition, economics, and your goals before recommending a campaign.",
  },
  {
    q: "Is the advertising budget included in your fee?",
    a: "No. Your Google Ads budget is paid directly to Google and is separate from VirtuNet’s setup or campaign-management fees.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function Services() {
  return (
    <main className="services-page">
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-label="Digital marketing services"
      >
        <div className="services-hero-overlay" />

        <motion.div
          className="services-container services-hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.11 } },
          }}
        >
          <motion.p className="services-kicker" variants={reveal}>
            Performance Marketing Services
          </motion.p>

          <motion.h1 className="services-title" variants={reveal}>
            Turn Google searches into{" "}
            <span>qualified leads.</span>
          </motion.h1>

          <motion.p className="services-subtitle" variants={reveal}>
            Strategic Google Ads management built to capture high-intent demand,
            reduce wasted spend, and create a more consistent pipeline of new
            business opportunities.
          </motion.p>

          <motion.div className="services-hero-actions" variants={reveal}>
            <Link to="/contact" className="services-btn primary">
              Request a Consultation <span aria-hidden="true">→</span>
            </Link>

            <a href="#services-packages" className="services-btn secondary">
              Explore Services
            </a>
          </motion.div>

          <motion.div className="services-hero-points" variants={reveal}>
            <span>Google Search Ads</span>
            <span>Landing Pages</span>
            <span>Conversion Tracking</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="services-intro">
        <div className="services-container services-intro-grid">
          <motion.div
            className="services-intro-copy"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <p className="services-section-label">How we help</p>
            <h2>A focused system built around real customer intent.</h2>
          </motion.div>

          <motion.p
            className="services-intro-text"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            We connect the strategy, ad campaign, landing experience, and
            tracking so every part of the system supports the same goal:
            generating better opportunities for your business.
          </motion.p>
        </div>
      </section>

      <section className="services-section" id="services-packages">
        <div className="services-container">
          <div className="package-grid">
            {packages.map((pkg, index) => (
              <motion.article
                className={`package-card${pkg.featured ? " featured" : ""}`}
                key={pkg.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="package-card-top">
                  <span className="package-number">0{index + 1}</span>
                  {pkg.featured && <span className="package-badge">Core Service</span>}
                </div>

                <h3>{pkg.title}</h3>
                <p className="package-desc">{pkg.description}</p>

                <ul className="package-list">
                  {pkg.items.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="card-cta">
                  {pkg.cta} <span aria-hidden="true">→</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section services-section-dark">
        <div className="services-container">
          <motion.div
            className="services-section-header dark"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="services-section-label">What’s included</p>
            <h2>The work behind a campaign that performs.</h2>
            <p>
              The details matter. These are the core capabilities that support
              stronger targeting, cleaner measurement, and smarter optimization.
            </p>
          </motion.div>

          <div className="included-grid">
            {included.map((item, index) => (
              <motion.div
                className="included-item"
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <span className="included-icon">✓</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          <motion.div
            className="services-section-header"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="services-section-label">How it works</p>
            <h2>A clear path from strategy to optimization.</h2>
            <p>
              Every step is designed to move quickly, create clarity, and make
              campaign performance measurable.
            </p>
          </motion.div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <motion.article
                className="step-card"
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.52, delay: index * 0.1 }}
              >
                <span className="step-number">{step.number}</span>
                <div className="step-line" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section services-faq-section">
        <div className="services-container services-faq-layout">
          <motion.div
            className="services-faq-heading"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="services-section-label">FAQ</p>
            <h2>Clear answers before we get started.</h2>
            <p>
              Straightforward information about Google Ads, lead generation,
              and how working with VirtuNet works.
            </p>
          </motion.div>

          <div className="faq">
            {faqs.map((faq, index) => (
              <motion.details
                className="faq-item"
                key={faq.q}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <summary>
                  <span>{faq.q}</span>
                  <span className="faq-plus" aria-hidden="true">+</span>
                </summary>
                <p>{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section className="services-final">
        <div className="services-container">
          <motion.div
            className="final-box"
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <div>
              <p className="final-kicker">Ready when you are</p>
              <h2>Let’s build a stronger lead pipeline.</h2>
              <p>
                Tell us about your business, your current marketing, and the
                results you want to achieve.
              </p>
            </div>

            <Link to="/contact" className="services-btn final-btn">
              Request a Consultation <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Services;
