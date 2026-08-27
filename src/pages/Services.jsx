import ServicesHero from '../components/services/ServicesHero';
import TrustStrip from '../components/services/TrustStrip';
import ServicesList from '../components/services/ServicesList';
import ProcessSteps from '../components/services/ProcessSteps';
import CTASection from '../components/common/CTASection';

export default function Services() {
  return (
    <>
      <ServicesHero />
      <TrustStrip />
      <ServicesList />
      <ProcessSteps />
      <CTASection
        heading={
          <>
            Ready to start your <span className="font-display italic text-gradient">next project?</span>
          </>
        }
        description="Tell us what you're building and we'll help you scope it, right from the first call."
        ctaLabel="Start a Project"
        to="/contact"
      />
    </>
  );
}
