import "./Style/Home_Trust.css";

function Home_Trust() {
  return (
    <section className="home-trust">
      <div className="home-trust-container">
        <div className="home-trust-header">
          <h2>What you can expect</h2>
          <p>
            Every project is approached with care, clarity, and modern standards
            — no shortcuts, no fluff.
          </p>
        </div>

        <div className="credibility-cards">
          <div className="credibility-card">
            <span className="credibility-accent">01</span>
            <h3>Modern Development</h3>
            <p>
              Built using modern tools and clean code practices, not outdated
              templates or bloated builders.
            </p>
          </div>

          <div className="credibility-card">
            <span className="credibility-accent">02</span>
            <h3>Mobile-First Design</h3>
            <p>
              Every site is designed to look and function perfectly across
              phones, tablets, and desktops.
            </p>
          </div>

          <div className="credibility-card">
            <span className="credibility-accent">03</span>
            <h3>Clear & Honest Process</h3>
            <p>
              Straightforward communication, realistic timelines, and full
              transparency from start to launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_Trust;
