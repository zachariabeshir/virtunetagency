import "./Style/About_Hero.css";
import heroImage from "../../Images/developers-workspace.png"; // add your chosen image file here
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
          I’m Zacharia Beshir, a web developer in Orange County with a passion
          for clean, modern websites. Learn more about my journey and why I
          build.
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
