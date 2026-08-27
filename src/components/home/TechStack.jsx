const TECHNOLOGIES = [
  { icon: 'fa-brands fa-react', label: 'React', className: 'text-[#61DAFB]' },
  { icon: 'fa-brands fa-node-js', label: 'Node.js', className: 'text-[#339933]' },
  { icon: 'fa-brands fa-python', label: 'Python', className: 'text-[#3776AB]' },
  { icon: 'fa-brands fa-aws', label: 'AWS', className: 'text-[#FF9900]' },
];

export default function TechStack() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" data-purpose="tech-philosophy">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-brand-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Technology Philosophy
          </p>
          <h2 className="text-4xl font-bold leading-tight">
            Future-ready solutions built with{' '}
            <span className="font-display italic text-gradient">modern technologies.</span>
          </h2>
        </div>

        {/* Tech Logos */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl">
          <p className="text-brand-gray mb-8">
            We leverage the latest tools and frameworks to build secure, scalable and high-performing
            digital products.
          </p>
          <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {TECHNOLOGIES.map((tech) => (
              <div key={tech.label} className="flex flex-col items-center gap-2">
                <i className={`${tech.icon} text-4xl ${tech.className}`} />
                <span className="text-xs text-brand-gray">{tech.label}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 bg-white text-black flex items-center justify-center rounded-full font-bold text-sm">
                N
              </div>
              <span className="text-xs text-brand-gray">Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
