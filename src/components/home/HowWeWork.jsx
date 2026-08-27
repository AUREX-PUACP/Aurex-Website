import Button from '../common/Button';

const WORK_POINTS = [
  {
    icon: 'fa-solid fa-users',
    title: 'Collaborative',
    description: 'We work with you, not just for you.',
  },
  {
    icon: 'fa-solid fa-comments',
    title: 'Transparent',
    description: 'Clear communication at every step.',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Agile',
    description: 'We adapt fast and deliver continuously.',
  },
];

export default function HowWeWork() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" data-purpose="how-we-work">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
        {/* Text */}
        <div className="space-y-8">
          <p className="text-brand-gold text-sm font-semibold tracking-wider uppercase">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            A collaborative and transparent <span className="font-display italic text-gradient">approach.</span>
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We follow an agile and collaborative process that keeps you involved at every single stage of
            development.
          </p>
          <Button to="/services" variant="ghost" className="px-6 py-3 text-sm font-medium">
            Our Process
          </Button>
        </div>

        {/* Process Image & List */}
        <div className="glass-panel p-2 flex flex-col md:flex-row gap-8 items-center rounded-3xl overflow-hidden">
          <div className="w-full md:w-1/2 h-[400px] relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-brand-black/20 z-10" />
            <img
              alt="Team collaborating at AUREX"
              className="w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy3CGkUS1AUUg90_1BlqhY1zVEHce_hbxKSyjE1c_x6WFlnAj405k9XrIrlsvMO0QSvqCSR1BbprhISF4cvdYLu-t87i-IpWt0Vey6FTpomCH-ufpkZcgr1kz-WX_76f0tsciOJSl67SAQTNS2RviG-6H29QSDq9W30OKJ2eIwSvyttPUkZ7nPqLp1qlq5wqbKV1-QK3Br08WsKek5MCZ23FfZki-hrx_ZTcvYrNwIWJZY-Gf4xjEkGA"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-8 space-y-8">
            {WORK_POINTS.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center shrink-0 text-brand-gold">
                  <i className={point.icon} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{point.title}</h4>
                  <p className="text-sm text-brand-gray">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
