import "./Style/Home_Services.css";

function Home_Services() {
  return (
    <section className="home-services">
      <div className="home-services-container">
        <div className="home-services-header">
          <h2>Services</h2>
          <p>
            Clean, modern websites built with a focus on performance, usability,
            and clarity.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Business Websites</h3>
            <p>
              Professional multi-page websites designed to represent your
              business clearly and confidently.
            </p>
          </div>

          <div className="service-card">
            <h3>Landing Pages</h3>
            <p>
              Focused, conversion-driven pages for promotions, ads, or product
              launches.
            </p>
          </div>

          <div className="service-card">
            <h3>Website Redesigns</h3>
            <p>
              Refresh outdated websites with a modern look, improved structure,
              and better performance.
            </p>
          </div>

          <div className="service-card">
            <h3>Maintenance & Updates</h3>
            <p>
              Ongoing updates, fixes, and improvements to keep your site running
              smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_Services;
