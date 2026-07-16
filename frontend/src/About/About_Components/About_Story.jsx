import "./Style/About_Story.css";

function About_Story() {
  return (
    <section className="about-story">
      <div className="about-story-container">
        <div className="about-story-text">
          <h2>Our approach</h2>

          <p>
            VirtuNet was built around one idea: marketing should generate
            measurable business growth—not just traffic or impressions.
          </p>

          <p>
            Too many businesses spend money on campaigns without knowing
            what's working. We focus on attracting high-intent customers,
            tracking every stage of the funnel, and improving performance
            over time.
          </p>

          <p>
            Through Google Search campaigns, conversion optimization, and
            data-driven decision making, we help businesses consistently
            generate qualified leads—not just website visitors.
          </p>

          <p>
            With an engineering mindset, every campaign is approached
            analytically: test, measure, optimize, and scale.
          </p>
        </div>

        <div className="about-story-points">
          <div className="story-point">
            <h3>Performance First</h3>
            <p>
              Every strategy is built around generating qualified leads and
              maximizing return on ad spend.
            </p>
          </div>

          <div className="story-point">
            <h3>Driven by Data</h3>
            <p>
              We continuously analyze campaign performance to improve
              conversions and reduce wasted ad spend.
            </p>
          </div>

          <div className="story-point">
            <h3>Built to Scale</h3>
            <p>
              Our systems are designed to grow with your business, creating
              a reliable pipeline of new customers month after month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About_Story;