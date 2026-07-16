import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Style/Home_Hero.css";
import homeHeroImg from "../../Images/man-on-computer-typing.jpg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function HomeHero() {
  return (
    <section
      className="home-hero"
      style={{ backgroundImage: `url(${homeHeroImg})` }}
      aria-label="VirtuNet lead generation services"
    >
      <div className="home-hero-overlay" />

      <motion.div
        className="home-hero-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="home-hero-kicker" variants={item}>
          Google Ads for Trade and Service Businesses
        </motion.p>

        <motion.h1 className="home-hero-title" variants={item}>
          Turn local searches into{" "}
          <span className="home-hero-highlight">qualified leads.</span>
        </motion.h1>

        <motion.p className="home-hero-subtitle" variants={item}>
          VirtuNet builds focused Google Search campaigns and landing pages
          designed to turn high-intent traffic into calls, inquiries, and booked
          opportunities.
        </motion.p>

        <motion.div className="home-hero-actions" variants={item}>
          <Link to="/contact" className="home-hero-btn primary">
            Request a Consultation <span aria-hidden="true">→</span>
          </Link>

          <Link to="/services" className="home-hero-btn secondary">
            See How It Works
          </Link>
        </motion.div>

        <motion.div className="home-hero-badges" variants={item}>
          <span className="home-hero-badge">Google Search Ads</span>
          <span className="home-hero-badge">Landing Pages</span>
          <span className="home-hero-badge">Conversion Tracking</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-system-card"
        initial={{ opacity: 0, x: 28, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <div className="hero-system-top">
          <span className="hero-system-dot" />
          <span>Lead generation system</span>
        </div>

        <div className="hero-system-row">
          <span className="hero-system-icon">⌕</span>
          <div>
            <strong>High-intent search</strong>
            <small>“HVAC repair near me”</small>
          </div>
        </div>

        <span className="hero-system-line" />

        <div className="hero-system-row">
          <span className="hero-system-icon">↗</span>
          <div>
            <strong>Focused ad + landing page</strong>
            <small>One clear path to action</small>
          </div>
        </div>

        <span className="hero-system-line" />

        <div className="hero-system-row success">
          <span className="hero-system-icon">✓</span>
          <div>
            <strong>Qualified inquiry</strong>
            <small>Call or form submission tracked</small>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HomeHero;
