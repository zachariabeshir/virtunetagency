import "./Style/Home_Process.css";
import { Link } from "react-router-dom";

function HomeProcess() {
  return (
    <section className="home-process">
      <div className="home-process-container">
        <div className="home-process-header">
          <h2>How it works</h2>
          <p>
            A focused process for turning search demand into measurable lead
            opportunities.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <span className="process-step">01</span>
            <h3>Discovery</h3>
            <p>
              We learn about your services, target customers, service area,
              goals, and current lead-generation process.
            </p>
          </div>

          <div className="process-card">
            <span className="process-step">02</span>
            <h3>Campaign Strategy</h3>
            <p>
              We research high-intent searches and build a focused Google Ads
              strategy around the opportunities that matter most.
            </p>
          </div>

          <div className="process-card">
            <span className="process-step">03</span>
            <h3>Launch & Track</h3>
            <p>
              We launch your campaigns with focused targeting, persuasive ads,
              and tracking for calls and form submissions.
            </p>
          </div>

          <div className="process-card">
            <span className="process-step">04</span>
            <h3>Optimize & Scale</h3>
            <p>
              We use real performance data to reduce wasted spend, improve lead
              quality, and identify opportunities for growth.
            </p>
          </div>
        </div>

        <div className="process-cta">
          <p>Ready to build a stronger lead pipeline?</p>

          <Link to="/contact" className="process-cta-btn">
            Request a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeProcess;
