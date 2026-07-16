import "./Style/About_Values.css";

function About_Values() {
  return (
    <section className="about-values">
      <div className="about-values-container">
        <div className="about-values-header">
          <h2>Standards we market by</h2>
          <p>
            No vanity metrics. No empty promises. Just measurable growth backed by strategy and data.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <h3>Results over reports</h3>
            <p>
              We focus on qualified leads, booked appointments, and revenue—not clicks that don't turn into customers.
            </p>
          </div>

          <div className="value-card">
            <h3>Data-driven decisions</h3>
            <p>
              Every campaign is optimized using real performance data, not assumptions or guesswork.
            </p>
          </div>

          <div className="value-card">
            <h3>Transparency always</h3>
            <p>
              Clear communication, honest reporting, and complete visibility into where your marketing budget goes.
            </p>
          </div>

          <div className="value-card">
            <h3>Continuous optimization</h3>
            <p>
              Winning campaigns aren't built once—they're tested, refined, and improved every month.
            </p>
          </div>

          <div className="value-card">
            <h3>High-intent traffic</h3>
            <p>
              We target people actively searching for your services, helping you connect with customers ready to buy.
            </p>
          </div>

          <div className="value-card">
            <h3>Built to scale</h3>
            <p>
              Our strategies are designed to grow alongside your business, creating a reliable system for long-term lead generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About_Values;
