import Hero from '../components/home/Hero';
import WhoWeAre from '../components/home/WhoWeAre';
import FeatureCards from '../components/home/FeatureCards';
import HowWeWork from '../components/home/HowWeWork';
import TechStack from '../components/home/TechStack';
import CTASection from '../components/common/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <FeatureCards />
      <HowWeWork />
      <TechStack />
      <CTASection />
    </>
  );
}
