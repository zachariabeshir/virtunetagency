import "./Style/About_Values.css";

function About_Values() {
  return (
    <section className="about-values">
      <div className="about-values-container">
        <div className="about-values-header">
          <h2>Standards I build with</h2>
          <p>
            No overpromising. No clutter. Just a clean build that’s fast,
            readable, and designed to convert.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <h3>Clarity over hype</h3>
            <p>
              Simple messaging, clear layouts, and straightforward decisions
              that help customers understand you fast.
            </p>
          </div>

          <div className="value-card">
            <h3>Performance matters</h3>
            <p>
              Clean structure and modern best practices so pages feel fast and
              smooth on real devices.
            </p>
          </div>

          <div className="value-card">
            <h3>Mobile-first always</h3>
            <p>
              The site is designed for phones first, then scaled up to look
              great on larger screens.
            </p>
          </div>

          <div className="value-card">
            <h3>Honest process</h3>
            <p>
              Clear timelines, consistent updates, and no confusing “agency
              talk.” You’ll always know what’s happening.
            </p>
          </div>

          <div className="value-card">
            <h3>Clean, maintainable code</h3>
            <p>
              Organized components, sensible structure, and code that’s easy to
              extend as your business grows.
            </p>
          </div>

          <div className="value-card">
            <h3>Built to convert</h3>
            <p>
              Strong calls-to-action, clean sections, and a layout designed to
              guide users to contact you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About_Values;
