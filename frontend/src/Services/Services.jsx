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
            Turn search demand into consistent leads
          </h1>
          <p className="services-subtitle">
            A simple, performance-focused system using Google Ads and optimized landing pages.
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
            <h2>Plans</h2>
            <p>Simple options focused on generating and improving lead flow.</p>
          </div>

          <div className="package-grid">
            <div className="package-card">
              <h3>Launch</h3>
              <p className="package-desc">
                Get set up with a clean foundation and inital search presence. 
              </p>
              <ul className="package-list">
                <li>Google Ads account setup</li>
                <li>Basic keyword targeting</li>
                <li>Simple landing page</li>
                <li>Conversion tracking setup</li>
              </ul>
              <Link to="/contact" className="card-cta">
                Get Started
              </Link>
            </div>

            <div className="package-card featured">
              <p className="badge">Most Popular</p>
              <h3>Growth</h3>
              <p className="package-desc">
                Ongoing campaign management focused on consistent lead generation.
              </p>
              <ul className="package-list">
                <li>Everything in Launch</li>
                <li>Campaign management</li>
                <li>Keyword expansion + optimization</li>
                <li>Landing page improvements</li>
                <li>Performance tracking</li>
              </ul>
              <Link to="/contact" className="card-cta">
                Start Growth
              </Link>
            </div>

            <div className="package-card">
              <h3>Scale</h3>
              <p className="package-desc">
                Advanced strategy for businesses looking to grow volume and efficiency.
              </p>
              <ul className="package-list">
                <li>Custom campaign structure</li>
                <li>Multi-location or multi-service targeting</li>
                <li>Advanced tracking & analytics</li>
                <li>Ongoing optimization & scaling</li>
              </ul>
              <Link to="/contact" className="card-cta">
                Request Plan
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
            <p>Everything needed to support consistent lead generation — built in from the start.</p>
          </div>

          <div className="included-grid">
            <div className="included-item">Mobile-first, conversion ready design</div>
            <div className="included-item">Fast load speeds + optimized structure</div>
            <div className="included-item">Search-ready setup (titles, metadata)</div>
            <div className="included-item">High-converting calls-to-action</div>
            <div className="included-item">Lead capture from setup</div>
            <div className="included-item">Launch testing + tracking setup</div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="services-section">
        <div className="services-container">
          <div className="section-header">
            <h2>How it works</h2>
            <p>A simple system to start generating leads — quickly and clearly.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <span>01</span>
              <h3>Strategy</h3>
              <p>Understand your business, goals, and target customers.</p>
            </div>
            <div className="step-card">
              <span>02</span>
              <h3>Targeting</h3>
              <p>Identify what your customers are searching for.</p>
            </div>
            <div className="step-card">
              <span>03</span>
              <h3>Launch</h3>
              <p>Run campaigns and connect them to conversion-focused pages.</p>
            </div>
            <div className="step-card">
              <span>04</span>
              <h3>Optimize</h3>
              <p>Refine performance to improve lead quality and cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="services-section alt">
        <div className="services-container">
          <div className="section-header">
            <h2>FAQ</h2>
            <p>Quick answers about how it works.</p>
          </div>

          <div className="faq">
            <div className="faq-item">
              <h3>How long does it take to get started?</h3>
              <p>
                Most campaigns can be planned and launched within a few days once we align on your goals and market.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do I need a website already?</h3>
              <p>
                No — we can use your existing site or set up a simple page designed to convert traffic into leads.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do the leads come in?</h3>
              <p>
                Leads come from people actively searching on Google and are directed to your business through targeted campaigns.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you manage everything?</h3>
              <p>
                Yes — from setup to ongoing optimization, everything is handled so you can focus on closing the leads.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can this work for my business?How do the leads come in?</h3>
              <p>
                If people are searching for your service, there’s usually an opportunity. We’ll confirm this on the initial call.
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
