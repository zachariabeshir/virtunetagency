import "./Style/Home_Services.css";

function Home_Services() {
  return (
    <section className="home-services">
      <div className="home-services-container">
        <div className="home-services-header">
          <h2>Customer Aquisition Systems</h2>
          <p>
            We use Google Search Ads to bring in high-intent buyers — then convert them into real 
            leads and revenue.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Google Search Ads Management</h3>
            <p>
              We put your business in front of people actively searching for your service — capturing 
              high-intent leads ready to convert.
            </p>
          </div>

          <div className="service-card">
            <h3>Lead Conversion Systems</h3>
            <p>
              We build and optimize landing pages that turn ad traffic into booked calls, form 
              submissions, and paying customers.
            </p>
          </div>

          <div className="service-card">
            <h3>Keyword & Market Targeting</h3>
            <p>
              We identify exactly what your customers are searching for and position your business 
              where it matters most.
            </p>
          </div>

          <div className="service-card">
            <h3>Campaign Optimization & Scaling</h3>
            <p>
              Continuous testing, data analysis, and scaling strategies to reduce cost per lead 
              and maximize ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_Services;
