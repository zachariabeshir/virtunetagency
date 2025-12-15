import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3 className="footer-logo">VirtuNet</h3>
          <p className="footer-text">Modern websites built fast and clean.</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} VirtuNet. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
