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
        aria-label="Digital marketing services"
      >
        <div className="services-hero-overlay" />

        <div className="services-container services-hero-content">
          <p className="services-kicker">Performance Marketing Services</p>

          <h1 className="services-title">
            Turn Google searches into qualified leads
          </h1>

          <p className="services-subtitle">
            Strategic Google Ads management built to capture high-intent
            demand, reduce wasted ad spend, and create a consistent pipeline
            of new business opportunities.
          </p>

          <div className="services-hero-actions">
            <Link to="/contact" className="btn primary">
              Request a Consultation
            </Link>

            <Link to="/contact" className="btn secondary">
              Discuss Your Goals
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="services-container">
          <div className="section-header">
            <h2>How we help</h2>
            <p>
              A focused marketing system designed to attract, track, and
              convert customers actively searching for your services.
            </p>
          </div>

          <div className="package-grid">
            <div className="package-card">
              <h3>Campaign Launch</h3>

              <p className="package-desc">
                Build a strong Google Ads foundation around your services,
                market, and ideal customers.
              </p>

              <ul className="package-list">
                <li>Market and competitor research</li>
                <li>Keyword and search-intent research</li>
                <li>Google Ads campaign setup</li>
                <li>Ad copywriting</li>
                <li>Conversion tracking setup</li>
                <li>Landing page recommendations</li>
              </ul>

              <Link to="/contact" className="card-cta">
                Launch a Campaign
              </Link>
            </div>

            <div className="package-card featured">
              <p className="badge">Core Service</p>

              <h3>Lead Generation</h3>

              <p className="package-desc">
                Ongoing campaign management focused on generating qualified
                leads while improving cost and performance over time.
              </p>

              <ul className="package-list">
                <li>Everything in Campaign Launch</li>
                <li>Ongoing Google Ads management</li>
                <li>Search-term and keyword optimization</li>
                <li>Negative keyword management</li>
                <li>Ad copy testing</li>
                <li>Lead and conversion tracking</li>
                <li>Monthly performance reporting</li>
              </ul>

              <Link to="/contact" className="card-cta">
                Start Generating Leads
              </Link>
            </div>

            <div className="package-card">
              <h3>Growth & Scale</h3>

              <p className="package-desc">
                Advanced campaign strategy for established businesses ready
                to increase lead volume, expand into new markets, or promote
                additional services.
              </p>

              <ul className="package-list">
                <li>Advanced campaign restructuring</li>
                <li>Multi-service campaign management</li>
                <li>Multi-location targeting</li>
                <li>Budget allocation and scaling</li>
                <li>Advanced conversion tracking</li>
                <li>Landing page testing strategy</li>
                <li>Lead-quality analysis</li>
              </ul>

              <Link to="/contact" className="card-cta">
                Request a Growth Plan
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

            <p>
              The strategy, tracking, and ongoing management needed to turn
              your advertising budget into measurable business opportunities.
            </p>
          </div>

          <div className="included-grid">
            <div className="included-item">
              High-intent keyword research
            </div>

            <div className="included-item">
              Strategic campaign structure
            </div>

            <div className="included-item">
              Conversion-focused ad copy
            </div>

            <div className="included-item">
              Call and form tracking
            </div>

            <div className="included-item">
              Search-term monitoring
            </div>

            <div className="included-item">
              Negative keyword management
            </div>

            <div className="included-item">
              Budget and bid optimization
            </div>

            <div className="included-item">
              Clear performance reporting
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="services-section">
        <div className="services-container">
          <div className="section-header">
            <h2>How it works</h2>

            <p>
              A clear process for building, launching, and improving your
              lead-generation campaigns.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <span>01</span>
              <h3>Discovery</h3>
              <p>
                We review your services, target market, goals, current
                marketing, and customer acquisition process.
              </p>
            </div>

            <div className="step-card">
              <span>02</span>
              <h3>Strategy</h3>
              <p>
                We identify valuable searches, build the campaign structure,
                and determine how leads will be tracked.
              </p>
            </div>

            <div className="step-card">
              <span>03</span>
              <h3>Launch</h3>
              <p>
                Your campaigns go live with focused targeting, persuasive ads,
                and conversion tracking in place.
              </p>
            </div>

            <div className="step-card">
              <span>04</span>
              <h3>Optimize</h3>
              <p>
                We analyze real performance data, reduce wasted spend, and
                improve lead volume and quality over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="services-section alt">
        <div className="services-container">
          <div className="section-header">
            <h2>Frequently asked questions</h2>

            <p>
              Clear answers about Google Ads, lead generation, and working
              with VirtuNet.
            </p>
          </div>

          <div className="faq">
            <div className="faq-item">
              <h3>How long does it take to launch?</h3>
              <p>
                Most campaigns can be researched, built, and launched within
                several business days once we have the necessary information
                and access.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do I need an existing website?</h3>
              <p>
                Not necessarily. We can review your current website and
                recommend whether it is ready for paid traffic or whether a
                focused landing page would improve conversions.
              </p>
            </div>

            <div className="faq-item">
              <h3>Where do the leads come from?</h3>
              <p>
                Your ads appear when potential customers search Google for
                services related to your business. Interested prospects can
                then call you or submit an inquiry.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you guarantee a specific number of leads?</h3>
              <p>
                No responsible agency can guarantee exact results. Search
                demand, competition, budget, location, offer quality, and your
                sales process all affect performance. We focus on measurable
                improvement and transparent reporting.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you manage the campaigns after launch?</h3>
              <p>
                Yes. Ongoing management includes monitoring search terms,
                improving targeting, testing ads, controlling wasted spend,
                and identifying opportunities to scale.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can Google Ads work for my business?</h3>
              <p>
                Google Ads is usually strongest when customers are already
                searching for the service you provide. We evaluate search
                demand, competition, economics, and your goals before
                recommending a campaign.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is the advertising budget included in your fee?</h3>
              <p>
                No. Your Google Ads budget is paid directly to Google and is
                separate from VirtuNet’s setup or campaign-management fees.
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
              <h2>Ready to build a stronger lead pipeline?</h2>

              <p>
                Tell us about your business, your current marketing, and the
                results you want to achieve.
              </p>
            </div>

            <Link to="/contact" className="btn primary">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
