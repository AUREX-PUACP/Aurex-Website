import {
  FaBullseye,
  FaEye,
} from 'react-icons/fa6';

export default function WhoWeAre() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      data-purpose="who-we-are"
    >
      <div className="grid lg:grid-cols-2 gap-16">

        {/* Text Content */}
        <div className="space-y-8">
          <p className="text-brand-gold text-sm font-semibold tracking-wider uppercase">
            Who We Are
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            We are{' '}
            <span className="font-display italic text-gradient">
              problem solvers
            </span>
            ,
            <br />
            innovators and builders.
          </h2>

          <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
            <p>
              We combine strategy, design and engineering to create digital
              experiences that are not only beautiful but also functional,
              scalable and future-ready.
            </p>

            <p>
              From product strategy to deployment, we partner with businesses
              at every step of their digital transformation journey.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="space-y-6">

          {/* Mission Card */}
          <div
            className="
              glass-panel
              p-8 md:p-10
              flex gap-6 items-start group
              transition-all duration-500 ease-out
              hover:-translate-y-2
              hover:border-brand-gold/40
              hover:shadow-[0_15px_40px_rgba(214,168,90,0.12)]
              animate-[fadeSlideUp_0.7s_ease-out]
            "
          >
            <div
              className="
                w-14 h-14 rounded-xl
                bg-white/5
                border border-white/10
                flex items-center justify-center
                shrink-0
                transition-all duration-500
                group-hover:bg-brand-gold/10
                group-hover:border-brand-gold/40
                group-hover:scale-110
                group-hover:rotate-3
              "
            >
              <FaBullseye
                className="
                  text-2xl text-brand-gold
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-brand-gold">
                Our Mission
              </h3>

              <p className="text-brand-gray leading-relaxed">
                To empower businesses through innovative technology and
                exceptional digital products that drive real growth and
                efficiency.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className="
              glass-panel
              p-8 md:p-10
              flex gap-6 items-start group
              transition-all duration-500 ease-out
              hover:-translate-y-2
              hover:border-brand-gold/40
              hover:shadow-[0_15px_40px_rgba(214,168,90,0.12)]
              animate-[fadeSlideUp_0.9s_ease-out]
            "
          >
            <div
              className="
                w-14 h-14 rounded-xl
                bg-white/5
                border border-white/10
                flex items-center justify-center
                shrink-0
                transition-all duration-500
                group-hover:bg-brand-gold/10
                group-hover:border-brand-gold/40
                group-hover:scale-110
                group-hover:-rotate-3
              "
            >
              <FaEye
                className="
                  text-2xl text-brand-gold
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-brand-gold">
                Our Vision
              </h3>

              <p className="text-brand-gray leading-relaxed">
                To be a global leader in digital engineering, known for
                building solutions that create a better tomorrow for our
                clients and their users.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}