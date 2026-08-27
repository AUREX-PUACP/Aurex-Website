import Button from '../common/Button';

export default function ServicesHero() {
  const services = [
    {
      id: '01',
      title: 'Strategy',
      description: 'We understand your business, users and the market.',
      icon: (
        <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      id: '02',
      title: 'Technology',
      description: 'We build reliable, secure and scalable solutions.',
      icon: (
        <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      id: '03',
      title: 'Impact',
      description: 'We deliver technology that drives growth and long-term value.',
      icon: (
        <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 005.814-5.519l2.74-1.22m0 0l-5.94-2.28 2.28 5.94" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative max-w-7xl mx-auto px-8 py-10 lg:py-14 rounded-3xl overflow-hidden"
      data-purpose="services-hero"
    >
      {/* Background image + ultra dark overlay (0.96 opacity) */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage:
            'linear-gradient(rgba(5,5,5,0.96), rgba(5,5,5,0.96)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8w23S3K0-bmwaRYGVlNusfxt5IMGC5mCrR_re8q5R0eBPYHqVwWMJm21Uxa2ja9WfEzdRK1ecNTgpY2FyGF8HubhnpI7kbbr0e-J036s2mu9c859Gp6SDdJq00J6louyjAMwlkZNlQ4l2ftU2ZScahIozU7OwiSXkINm_6Bg_ejEVbHJQiHhuR1VyKgR-WTHlVrKEuNzKQlqlwFbQViik5DH_t6DfNWn9cOjJbxgLIX23pZktZ2HBwwfLP-bc_zq-DQ")',
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full z-10">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-5 text-left">
          <div className="flex items-center gap-3">
            <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Our Services</span>
            <div className="h-[1px] w-10 bg-brand-gold/60"></div>
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white tracking-tight">
            We solve complex<br />
            problems with{' '}
            <span className="text-brand-gold font-normal">simple technology.</span>
          </h1>

          <p className="text-gray-400 text-sm lg:text-base max-w-md leading-relaxed">
            From strategy to software, we create scalable digital solutions designed around real business needs.
          </p>

          <div className="pt-2">
            <Button to="/contact" variant="primary">
              Start a Project 
            </Button>
          </div>
        </div>

        {/* Right Feature List */}
        <div className="lg:col-span-6 flex flex-col divide-y divide-gray-800/60">
          {services.map((service) => (
            <div key={service.id} className="py-4 first:pt-0 last:pb-0 flex items-center gap-5">
              <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full border border-brand-gold/30 bg-black/40">
                {service.icon}
              </div>
              <div className="flex-1 flex items-baseline gap-4">
                <span className="text-brand-gold text-xl font-bold font-mono">{service.id}</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-0.5">{service.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}