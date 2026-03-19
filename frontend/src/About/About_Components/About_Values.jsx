import "./Style/About_Values.css";

function About_Values() {
  return (
    <section className="about-values">
      <div className="about-values-container">
        <div className="about-values-header">
          <h2>Standards I build with</h2>
          <p>
            No overpromising. No clutter. Just a clean system built to perform and convert.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <h3>Clarity over hype</h3>
            <p>
              Simple messaging and clear layouts that help customers understand your offer and take action quickly.
            </p>
          </div>

          <div className="value-card">
            <h3>Performance matters</h3>
            <p>
              Fast-loading pages and clean structure so your site performs well under real traffic.
            </p>
          </div>

          <div className="value-card">
            <h3>Mobile-first always</h3>
            <p>
              Designed for where your customers are — phones first, then scaled to every screen.
            </p>
          </div>

          <div className="value-card">
            <h3>Honest process</h3>
            <p>
              Clear timelines, consistent updates, and straightforward communication from start to scale.
            </p>
          </div>

          <div className="value-card">
            <h3>Clean, maintainable code</h3>
            <p>
              Structured builds that are easy to adjust as campaigns evolve and your business grows.
            </p>
          </div>

          <div className="value-card">
            <h3>Built to convert</h3>
            <p>
              Every page is designed to guide visitors toward contacting you — not just browsing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About_Values;
