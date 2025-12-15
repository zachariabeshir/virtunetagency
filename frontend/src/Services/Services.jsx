import "./Services.css";
import { Link } from "react-router-dom";
import heroImage from "../Images/abstract-tech-background.jpeg";

function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section
        className="services-hero image"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="services-hero-overlay" />

        <div className="services-container services-hero-content">
          <p className="services-kicker">Services</p>
          <h1 className="services-title">
            Clear, modern websites built to look legit.
          </h1>
          <p className="services-subtitle">
            Choose a package below, or contact me for a custom build. Everything
            is mobile-first, clean, and built with modern standards.
          </p>

          <div className="services-hero-actions">
            <Link to="/contact" className="btn primary">
              Get a Quote
            </Link>
            <Link to="/contact" className="btn secondary">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="services-section">
        <div className="services-container">
          <div className="section-header">
            <h2>Packages</h2>
            <p>Simple options that cover what most businesses need.</p>
          </div>

          <div className="package-grid">
            <div className="package-card">
              <h3>Starter Website</h3>
              <p className="package-desc">
                A clean 4-page business site: Home, About, Services, Contact.
              </p>
              <ul className="package-list">
                <li>Responsive layout</li>
                <li>Basic SEO setup</li>
                <li>Contact form</li>
                <li>2 revision rounds</li>
              </ul>
              <Link to="/contact" className="card-cta">
                Start Starter
              </Link>
            </div>

            <div className="package-card featured">
              <p className="badge">Most Popular</p>
              <h3>Business + Growth</h3>
              <p className="package-desc">
                Extra sections + stronger conversion focus (CTAs, layout
                strategy).
              </p>
              <ul className="package-list">
                <li>Everything in Starter</li>
                <li>Extra sections (FAQ, testimonials later, etc.)</li>
                <li>Performance + polish pass</li>
                <li>3 revision rounds</li>
              </ul>
              <Link to="/contact" className="card-cta">
                Start Growth
              </Link>
            </div>

            <div className="package-card">
              <h3>Custom Build</h3>
              <p className="package-desc">
                Custom pages, special features, or MERN functionality when
                needed.
              </p>
              <ul className="package-list">
                <li>Custom scope</li>
                <li>API/forms/data features</li>
                <li>Deployment support</li>
                <li>Ongoing updates optional</li>
              </ul>
              <Link to="/contact" className="card-cta">
                Request Custom
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="services-section alt">
        <div className="services-container">
          <div className="section-header">
            <h2>What’s included</h2>
            <p>No surprises — every build includes these standards.</p>
          </div>

          <div className="included-grid">
            <div className="included-item">Mobile-first responsive design</div>
            <div className="included-item">Fast load + clean structure</div>
            <div className="included-item">Basic SEO (titles, metadata)</div>
            <div className="included-item">Clear calls-to-action</div>
            <div className="included-item">Contact form setup</div>
            <div className="included-item">Launch checklist + testing</div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="services-section">
        <div className="services-container">
          <div className="section-header">
            <h2>How it works</h2>
            <p>Fast, simple, and transparent from start to launch.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <span>01</span>
              <h3>Discovery</h3>
              <p>Goals, pages, timeline.</p>
            </div>
            <div className="step-card">
              <span>02</span>
              <h3>Design</h3>
              <p>Structure + clean layout.</p>
            </div>
            <div className="step-card">
              <span>03</span>
              <h3>Build</h3>
              <p>Develop and review.</p>
            </div>
            <div className="step-card">
              <span>04</span>
              <h3>Launch</h3>
              <p>Test, deploy, handoff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="services-section alt">
        <div className="services-container">
          <div className="section-header">
            <h2>FAQ</h2>
            <p>Quick answers to common questions.</p>
          </div>

          <div className="faq">
            <div className="faq-item">
              <h3>How long does a typical site take?</h3>
              <p>
                Small business sites are usually fast once content is ready.
                Timelines depend on scope.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you provide hosting and a domain?</h3>
              <p>
                I can guide you through it and help set it up. You own your
                domain and accounts.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can you update the site later?</h3>
              <p>
                Yes — you can request changes or choose ongoing maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-final">
        <div className="services-container">
          <div className="final-box">
            <div>
              <h2>Ready to get started?</h2>
              <p>Tell me what you need and I’ll respond with the next steps.</p>
            </div>
            <Link to="/contact" className="btn primary">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
