import "./Style/Home_Trust.css";

function Home_Trust() {
  return (
    <section className="home-trust">
      <div className="home-trust-container">
        <div className="home-trust-header">
          <h2>What you can expect</h2>
          <p>
            A simple, performance-focused approach — built to generate real leads, not just traffic.
          </p>
        </div>

        <div className="credibility-cards">
          <div className="credibility-card">
            <span className="credibility-accent">01</span>
            <h3>Consistent Lead Flow</h3>
            <p>
              We connect your business with people actively searching for your service — bringing in steady, high-intent leads.
            </p>
          </div>

          <div className="credibility-card">
            <span className="credibility-accent">02</span>
            <h3>High-Converting Experience</h3>
            <p>
              Clean, fast, mobile-first pages designed to turn clicks into real inquiries and booked calls.
            </p>
          </div>

          <div className="credibility-card">
            <span className="credibility-accent">03</span>
            <h3>Clear & Reliable Process</h3>
            <p>
              Straightforward communication, quick turnarounds, and full transparency from start to scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_Trust;
