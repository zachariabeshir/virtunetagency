import "./Style/Home_Trust.css";

function Home_Trust() {
  return (
    <section className="home-trust">
      <div className="home-trust-container">
        <div className="home-trust-header">
          <h2>What you can expect</h2>

          <p>
            A transparent, data-driven approach focused on building
            sustainable lead-generation systems for your business.
          </p>
        </div>

        <div className="credibility-cards">
          <div className="credibility-card">
            <span className="credibility-accent">01</span>

            <h3>High-Intent Customer Acquisition</h3>

            <p>
              Your campaigns are built around people actively searching for
              your services, helping you reach prospects with real purchase
              intent.
            </p>
          </div>

          <div className="credibility-card">
            <span className="credibility-accent">02</span>

            <h3>Continuous Optimization</h3>

            <p>
              Campaigns are regularly monitored and refined using performance
              data to improve lead quality and reduce wasted ad spend over
              time.
            </p>
          </div>

          <div className="credibility-card">
            <span className="credibility-accent">03</span>

            <h3>Transparent Partnership</h3>

            <p>
              Clear communication, measurable reporting, and a focus on
              long-term growth rather than short-term marketing tactics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_Trust;
