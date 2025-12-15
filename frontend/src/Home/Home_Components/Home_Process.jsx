import "./Style/Home_Process.css";
import { Link } from "react-router-dom";

function Home_Process() {
  return (
    <section className="home-process">
      <div className="home-process-container">
        <div className="home-process-header">
          <h2>How it works</h2>
          <p>
            A simple process that keeps things clear, fast, and stress-free.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <span className="process-step">01</span>
            <h3>Discovery</h3>
            <p>We clarify your goals, pages, and what success looks like.</p>
          </div>

          <div className="process-card">
            <span className="process-step">02</span>
            <h3>Design</h3>
            <p>I draft a clean layout and structure before building.</p>
          </div>

          <div className="process-card">
            <span className="process-step">03</span>
            <h3>Build</h3>
            <p>Your site is developed mobile-first with modern standards.</p>
          </div>

          <div className="process-card">
            <span className="process-step">04</span>
            <h3>Launch</h3>
            <p>We test everything, deploy, and make sure you’re good to go.</p>
          </div>
        </div>

        <div className="process-cta">
          <p>Want to get started?</p>
          <Link to="/contact" className="process-cta-btn">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home_Process;
