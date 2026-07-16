import "./Style/Home_Services.css";

function Home_Services() {
  return (
    <section className="home-services">
      <div className="home-services-container">
        <div className="home-services-header">
          <h2>Customer Acquisition Systems</h2>

          <p>
            We use Google Search Ads, conversion-focused landing pages, and
            performance tracking to turn high-intent searches into qualified
            business opportunities.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Google Search Ads Management</h3>

            <p>
              Reach potential customers at the moment they are actively
              searching for the services your business provides.
            </p>
          </div>

          <div className="service-card">
            <h3>Conversion-Focused Landing Pages</h3>

            <p>
              Create a clear path from ad click to phone call or form
              submission with focused messaging and strong calls to action.
            </p>
          </div>

          <div className="service-card">
            <h3>Keyword and Market Targeting</h3>

            <p>
              Identify valuable searches, target the right service areas, and
              focus your budget on the customers most likely to take action.
            </p>
          </div>

          <div className="service-card">
            <h3>Campaign Optimization and Scaling</h3>

            <p>
              Continuously improve targeting, ads, and budget allocation to
              reduce wasted spend and create more efficient growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_Services;
