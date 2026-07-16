import "./About.css";

import AboutHero from "./About_Components/About_Hero.jsx";
import AboutStory from "./About_Components/About_Story.jsx";
import AboutValues from "./About_Components/About_Values.jsx";
import AboutCTA from "./About_Components/About_CTA.jsx";

function About() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCTA />
    </>
  );
}

export default About;
