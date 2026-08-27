import AboutHero from "../components/about/AboutHero";
import TeamSlider from "../components/about/TeamSlider";
import OurValues from "../components/about/OurValues";
import WorkPrinciples from "../components/about/WorkPrinciples";
import AboutClosingStrip from "../components/about/AboutClosingStrip";

export default function About() {
  return (
    <>
      <AboutHero />
      <TeamSlider />
      <OurValues />
      <WorkPrinciples />
      <AboutClosingStrip />
    </>
  );
}