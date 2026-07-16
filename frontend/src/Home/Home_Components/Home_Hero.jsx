import { Link } from "react-router-dom";
import "./Style/Home_Hero.css";
import home_hero_img from "../../Images/man-on-computer-typing.jpg";

function Home_Hero() {
  return (
    <section
      className="home-hero"
      style={{ backgroundImage: `url(${home_hero_img})` }}
      aria-label="VirtuNet lead generation services"
    >
      <div className="home-hero-overlay" />

      <div className="home-hero-content">
        <p className="home-hero-kicker">
          Google Ads for Trade and Service Businesses
        </p>

        <h1 className="home-hero-title">
          Turn local searches into qualified leads.
        </h1>

        <p className="home-hero-subtitle">
          VirtuNet helps trade and service businesses generate more calls,
          inquiries, and booked opportunities through targeted Google Search
          campaigns and ongoing optimization.
        </p>

        <div className="home-hero-actions">
          <Link to="/contact" className="home-hero-btn primary">
            Request a Consultation
          </Link>

          <Link to="/services" className="home-hero-btn secondary">
            Explore Services
          </Link>
        </div>

        <div className="home-hero-badges" aria-label="Highlights">
          <span className="home-hero-badge">Google Search Ads</span>
          <span className="home-hero-badge">Qualified Lead Generation</span>
          <span className="home-hero-badge">Conversion Tracking</span>
        </div>
      </div>
    </section>
  );
}

export default Home_Hero;
