import { TRUST_POINTS } from '../../data/services';

export default function TrustStrip() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16" data-purpose="trust-strip">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 glass-panel p-8">
        {TRUST_POINTS.map((point) => (
          <div
            key={point.title}
            className="flex items-start gap-4 group p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-brand-gold shrink-0 group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10 transition-colors">
              <i className={`${point.icon} text-xl`} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-1 group-hover:text-brand-gold transition-colors">
                {point.title}
              </h3>
              <p className="text-sm text-brand-gray">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
