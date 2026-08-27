const FEATURES = [
  {
    icon: 'fa-solid fa-handshake-angle',
    title: 'Customer First',
    description:
      'We build solutions that solve real problems and create real value for end-users.',
  },
  {
    icon: 'fa-regular fa-lightbulb',
    title: 'Innovation',
    description:
      'We embrace new ideas and technology to stay ahead of rapid digital change.',
  },
  {
    icon: 'fa-solid fa-circle-check',
    title: 'Quality',
    description:
      'We are committed to excellence in every single line of code and pixel of design.',
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'Impact',
    description:
      "We measure success by the tangible impact we create for our clients' bottom line.",
  },
];

export default function FeatureCards({
  eyebrow = 'What We Believe',
  heading = (
    <>
      Our core beliefs{' '}
      <span className="font-display italic text-gradient">
        drive everything
      </span>{' '}
      we do.
    </>
  ),
  features = FEATURES,
}) {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      data-purpose="core-beliefs"
    >
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-8 items-center">

        {/* Heading */}
        <div>
          <p className="text-brand-gold text-sm font-semibold tracking-wider uppercase mb-4">
            {eyebrow}
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {heading}
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`
                glass-panel
                p-8
                group
                flex flex-col justify-between
                h-full
                cursor-default

                transition-all
                duration-500
                ease-out

                hover:-translate-y-3
                hover:border-brand-gold/40
                hover:shadow-[0_15px_40px_rgba(214,168,90,0.12)]

                animate-[fadeSlideUp_0.6s_ease-out]
              `}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div>

                {/* Icon */}
                <div
                  className="
                    w-14 h-14
                    rounded-xl
                    bg-brand-gold/10
                    border border-brand-gold/20
                    flex items-center justify-center
                    mb-6

                    transition-all
                    duration-500

                    group-hover:bg-brand-gold/20
                    group-hover:border-brand-gold/50
                    group-hover:scale-110
                    group-hover:-rotate-3
                  "
                >
                  <i
                    className={`
                      ${feature.icon}
                      text-2xl
                      text-brand-gold
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    `}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                    mb-3
                    transition-colors
                    duration-300
                    group-hover:text-brand-gold
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-gray leading-relaxed">
                  {feature.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}