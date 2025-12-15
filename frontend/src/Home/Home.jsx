import "./Home.css";

import Home_Hero from "./Home_Components/Home_Hero.jsx";
import Home_Trust from "./Home_Components/Home_Trust.jsx";
import Home_Services from "./Home_Components/Home_Services.jsx";
import Home_Process from "./Home_Components/Home_Process.jsx";
import Home_CTA from "./Home_Components/Home_CTA.jsx";

function Home() {
  return (
    <>
      <Home_Hero />
      <Home_Trust />
      <Home_Services />
      <Home_Process />
      <Home_CTA />
    </>
  );
}

export default Home;
