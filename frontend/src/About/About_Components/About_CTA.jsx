import "./Style/About_CTA.css";
import { Link } from "react-router-dom";

function About_CTA() {
  return (
    <section className="about-cta">
      <div className="about-cta-container">
        <div className="about-cta-box">
          <div className="about-cta-content">
            <h2>Bring in customers, not just traffic</h2>
            <p>
              A simple system using Google Search and clean pages to turn demand into real leads.
            </p>
          </div>

          <div className="about-cta-actions">
            <Link to="/contact" className="about-cta-btn primary">
              Get a Lead Strategy
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
