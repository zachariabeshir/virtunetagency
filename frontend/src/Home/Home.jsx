import "./Home.css";

import HomeHero from "./Home_Components/Home_Hero.jsx";
import HomeTrust from "./Home_Components/Home_Trust.jsx";
import HomeServices from "./Home_Components/Home_Services.jsx";
import HomeProcess from "./Home_Components/Home_Process.jsx";
import HomeCTA from "./Home_Components/Home_CTA.jsx";

function Home() {
  return (
    <>
      <HomeHero />
      <HomeTrust />
      <HomeServices />
      <HomeProcess />
      <HomeCTA />
    </>
  );
}

export default Home;
