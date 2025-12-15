import "./About.css";

import About_Hero from "./About_Components/About_Hero.jsx";
import About_Story from "./About_Components/About_Story.jsx";
import About_Values from "./About_Components/About_Values.jsx";
import About_CTA from "./About_Components/About_CTA.jsx";

function About() {
  return (
    <>
      <About_Hero />
      <About_Story />
      <About_Values />
      <About_CTA />
    </>
  );
}

export default About;
