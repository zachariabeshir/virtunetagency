import "./Style/About_CTA.css";
import { Link } from "react-router-dom";

function About_CTA() {
  return (
    <section className="about-cta">
      <div className="about-cta-container">
        <div className="about-cta-box">
          <div className="about-cta-content">
            <h2>Let’s build something clean and professional</h2>
            <p>
              If you’re looking for a modern website built with care and
              clarity, I’d love to hear about your project.
            </p>
          </div>

          <div className="about-cta-actions">
            <Link to="/contact" className="about-cta-btn primary">
              Contact Me
            </Link>
            <Link to="/services" className="about-cta-btn secondary">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About_CTA;
