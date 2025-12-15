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
        <p className="home-hero-kicker">VirtuNet Web Development</p>

        <h1 className="home-hero-title">
          Clean, responsive websites that convert.
        </h1>

        <p className="home-hero-subtitle">
          We design and build modern, mobile-first websites using proven tools —
          without bloated timelines or fluff.
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
          <span className="home-hero-badge">Fast delivery</span>
          <span className="home-hero-badge">Mobile-first</span>
          <span className="home-hero-badge">Modern stack</span>
        </div>
      </div>
    </section>
  );
}

export default Home_Hero;
