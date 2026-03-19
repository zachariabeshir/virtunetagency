import { Link } from "react-router-dom";
import "./Style/Home_Hero.css";
import home_hero_img from "../../Images/man-on-computer-typing.jpg";

function Home_Hero() {
  return (
    <section
      className="home-hero"
      style={{ backgroundImage: `url(${home_hero_img})` }}
      aria-label="VirtuNet hero section"
    >
      <div className="home-hero-overlay" />

      <div className="home-hero-content">
        <p className="home-hero-kicker">VirtuNet Business Development</p>

        <h1 className="home-hero-title">
          Strategic Marketing that generates leads.
        </h1>

        <p className="home-hero-subtitle">
          We use digital platforms to connect HVAC businesses with their ideal customers.
        </p>

        <div className="home-hero-actions">
          <Link to="/contact" className="home-hero-btn primary">
            Get a Quote
          </Link>
          <Link to="/services" className="home-hero-btn secondary">
            View Services
          </Link>
        </div>

        <div className="home-hero-badges" aria-label="Highlights">
          <span className="home-hero-badge">Lead Generation</span>
          <span className="home-hero-badge">Mobile-first Web Design</span>
          <span className="home-hero-badge">Digital Marketing</span>
        </div>
      </div>
    </section>
  );
}

export default Home_Hero;
