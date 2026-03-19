import "./Style/Home_Process.css";
import { Link } from "react-router-dom";

function Home_Process() {
  return (
    <section className="home-process">
      <div className="home-process-container">
        <div className="home-process-header">
          <h2>How it works</h2>
          <p>
            A simple system to bring in consistent, high-quality leads. 
          </p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <span className="process-step">01</span>
            <h3>Strategy</h3>
            <p>We learn about your business, goals, and target market to build a focused plan.</p>
          </div>

          <div className="process-card">
            <span className="process-step">02</span>
            <h3>Targeting</h3>
            <p>We identify what your customers are searching for and position you in front of them.</p>
          </div>

          <div className="process-card">
            <span className="process-step">03</span>
            <h3>Launch</h3>
            <p>We run search campaigns and connect them to clean, high-converting pages.</p>
          </div>

          <div className="process-card">
            <span className="process-step">04</span>
            <h3>Optimize</h3>
            <p>We refine performance over time to improve lead quality and reduce costs.</p>
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
