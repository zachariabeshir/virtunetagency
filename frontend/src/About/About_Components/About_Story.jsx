import "./Style/About_Story.css";

function About_Story() {
  return (
    <section className="about-story">
      <div className="about-story-container">
        <div className="about-story-text">
          <h2>My approach</h2>
          <p>
            I started VirtuNet with a simple goal: to build clean, modern
            websites without unnecessary complexity. Too many small businesses
            are stuck with outdated designs, slow pages, or bloated tools that
            don’t actually help them grow.
          </p>
          <p>
            I focus on clarity, structure, and performance — building websites
            that look professional, work smoothly on all devices, and are easy
            to understand for both users and business owners.
          </p>
          <p>
            As a developer with an engineering background, I care deeply about
            how things are built, not just how they look.
          </p>
        </div>

        <div className="about-story-points">
          <div className="story-point">
            <h3>Clean & Modern</h3>
            <p>
              Simple layouts, thoughtful spacing, and modern tools — no clutter.
            </p>
          </div>

          <div className="story-point">
            <h3>Mobile-First</h3>
            <p>
              Designed to look and feel right on phones, tablets, and desktops.
            </p>
          </div>

          <div className="story-point">
            <h3>Built With Care</h3>
            <p>
              Every project gets full attention, clear communication, and honest
              expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About_Story;
