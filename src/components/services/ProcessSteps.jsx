import { useEffect, useRef, useState } from 'react';
import { PROCESS_STEPS } from '../../data/services';


export default function ProcessSteps() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        let value = (windowHeight * 0.8 - rect.top) / rect.height;
        value = Math.max(0, Math.min(1, value));
        setProgress(value);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();
          } else {
            window.removeEventListener('scroll', handleScroll);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeIndex = progress * PROCESS_STEPS.length;

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-24 flex flex-col xl:flex-row gap-16"
      data-purpose="process-steps"
    >
      <div className="xl:w-1/4 shrink-0">
        <p className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-2">Our Approach</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          How We Deliver
          <br />
          <span className="font-display italic text-gradient">Excellence</span>
        </h2>
      </div>

      <div className="xl:w-3/4 glass-panel p-8 overflow-x-auto relative">
        <div ref={sectionRef} className="flex min-w-max items-start justify-between relative pt-4">
          {/* Connecting Line Base */}
          <div className="absolute top-8 left-12 right-12 h-px bg-white/10 -z-10" />
          {/* Animated Connecting Line */}
          <div
            className="absolute top-8 left-12 h-px bg-brand-gold transition-all duration-700 ease-out -z-0 shadow-[0_0_10px_rgba(214,168,90,0.6)]"
            style={{ width: `${progress * 100}%` }}
          />

          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx <= activeIndex;
            return (
              <div key={step.title} className="relative z-10 flex flex-col items-center w-32 text-center">
                <div
                  className={`w-10 h-10 rounded-full bg-brand-black border flex items-center justify-center mb-4 transition-all duration-300 ${
                    isActive
                      ? 'border-brand-gold text-brand-gold scale-110 shadow-[0_0_15px_rgba(214,168,90,0.4)]'
                      : 'border-white/10 text-brand-gray'
                  }`}
                >
                  <i className={step.icon} />
                </div>
                <h4 className={`font-bold mb-1 transition-colors duration-300 ${isActive ? 'text-brand-gold' : 'text-white'}`}>
                  {step.title}
                </h4>
                <p className="text-xs text-brand-gray">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
