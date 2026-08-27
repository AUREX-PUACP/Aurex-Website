import Button from './Button';


export default function CTASection({
  heading = (
    <>
      Let's build something <span className="font-display italic text-gradient">extraordinary together.</span>
    </>
  ),
  description = "Have a project in mind or just want to say hi? We'd love to hear from you.",
  ctaLabel = "Let's Talk",
  to = '/contact',
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12" data-purpose="bottom-cta">
      <div className="glass-panel p-8 md:p-16 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Abstract Glow */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />

        <h2 className="text-3xl md:text-5xl font-bold text-white relative z-10 max-w-lg leading-tight">
          {heading}
        </h2>

        <div className="flex flex-col md:items-end gap-4 relative z-10">
          <p className="text-brand-gray text-sm max-w-xs md:text-right">{description}</p>
          <Button to={to} variant="primary" className="w-full md:w-auto">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
