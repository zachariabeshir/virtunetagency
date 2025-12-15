import "./Style/Home_CTA.css";
import { Link } from "react-router-dom";

function Home_CTA() {
  return (
    <section className="home-cta">
      <div className="home-cta-container">
        <div className="home-cta-box">
          <div className="home-cta-content">
            <h2>Ready to build your website?</h2>
            <p>
              Let’s create something clean, fast, and professional — built to
              look great on every device.
            </p>
          </div>

          <div className="home-cta-actions">
            <Link to="/contact" className="home-cta-btn primary">
              Get a Quote
            </Link>
            <Link to="/services" className="home-cta-btn secondary">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_CTA;
