export default function ServiceCard({ service, index = 0 }) {
  const { number, icon, title, description, features, image } = service;
  const reversed = index % 2 === 1;

  return (
    <article
      className={`glass-panel rounded-3xl p-8 lg:p-12 flex flex-col gap-10 lg:gap-12 items-center ${
        reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
      data-purpose="service-card"
    >
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl font-black text-brand-gold/20 select-none">{number}</span>
          <i className={`${icon} text-2xl text-brand-gold`} />
          <h3 className="text-3xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-brand-gray text-lg leading-relaxed max-w-lg">{description}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-brand-gold mt-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <i className="fa-solid fa-check text-xs" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full lg:w-1/2 h-56 lg:h-80 rounded-2xl overflow-hidden shrink-0 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>
    </article>
  );
}
