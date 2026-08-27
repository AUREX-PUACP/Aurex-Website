import ContactHero from '../components/contact/ContactHero';
import ContactInfoStrip from '../components/contact/ContactInfoStrip';
import ContactFormSection from '../components/contact/ContactFormSection';
import ContactFAQ from '../components/contact/ContactFAQ';

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfoStrip />
      <ContactFormSection />
      <ContactFAQ />
    </>
  );
}