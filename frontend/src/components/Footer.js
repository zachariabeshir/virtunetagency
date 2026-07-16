import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link
              to="/"
              className="footer-logo"
              aria-label="VirtuNet homepage"
            >
              <span className="footer-logo-mark">VN</span>
              <span>VirtuNet</span>
            </Link>

            <p className="footer-text">
              Helping trade and service businesses turn Google searches into
              qualified calls, inquiries, and booked opportunities.
            </p>

            <Link to="/contact" className="footer-brand-cta">
              Request a Consultation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Navigation</p>

            <nav className="footer-links" aria-label="Footer navigation">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Services</p>

            <div className="footer-service-list">
              <span>Google Search Ads</span>
              <span>Landing Pages</span>
              <span>Conversion Tracking</span>
              <span>Campaign Optimization</span>
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Contact</p>

            <div className="footer-contact-list">
              <div>
                <span className="footer-contact-label">Location</span>
                <span>Orange County, CA</span>
              </div>

              <div>
                <span className="footer-contact-label">Email</span>

                <a href="mailto:virtunetagency@gmail.com">
                  virtunetagency@gmail.com
                </a>
              </div>

              <div>
                <span className="footer-contact-label">Response time</span>
                <span>Within 24–48 hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} VirtuNet. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;