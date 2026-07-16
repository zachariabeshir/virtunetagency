import "./Style/About_Hero.css";
import heroImage from "../../Images/developers-workspace.png";
import { Link } from "react-router-dom";

function About_Hero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="About page hero"
    >
      <div className="about-hero-overlay"></div>

      <div className="about-hero-content">
        <h1>About VirtuNet</h1>

        <p>
          VirtuNet is a performance marketing agency focused on helping
          businesses generate consistent, high-quality leads through
          Google Search advertising and data-driven optimization. Every
          strategy is built to maximize return on investment and create
          sustainable business growth.
        </p>

        <div className="about-hero-actions">
          <Link to="/contact" className="btn primary">
            Get in Touch
          </Link>
          <Link to="/services" className="btn secondary">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About_Hero;