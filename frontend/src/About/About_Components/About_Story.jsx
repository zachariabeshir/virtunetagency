import "./Style/About_Story.css";

function About_Story() {
  return (
    <section className="about-story">
      <div className="about-story-container">
        <div className="about-story-text">
          <h2>My approach</h2>
          <p>
            I started VirtuNet with a simple goal: to help businesses connect 
            with real customers — not just have a presence online.
          </p>
          <p>
            Too many small businesses rely on outdated websites, random 
            marketing, or tools that don’t actually bring in leads.
          </p>
          <p>
            My focus is on clarity, structure, and performance — using 
            Google Search campaigns to capture real demand, and simple, 
            high-converting pages to turn that traffic into inquiries.
          </p>
          <p>
            With an engineering background, I care about how everything 
            works together — from the first click to the final conversion.
          </p>
        </div>

        <div className="about-story-points">
          <div className="story-point">
            <h3>Clean & Focused</h3>
            <p>
              Simple layouts built to guide users toward taking action — no clutter, no distractions.
            </p>
          </div>

          <div className="story-point">
            <h3>Mobile-First</h3>
            <p>
              Designed to perform where most traffic happens — on phones, tablets, and desktops.
            </p>
          </div>

          <div className="story-point">
            <h3>Built for Results</h3>
            <p>
              Every project is structured to support lead generation, with clear communication and realistic expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About_Story;
