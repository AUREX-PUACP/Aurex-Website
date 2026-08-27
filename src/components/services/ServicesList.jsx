import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

import { SERVICES } from '../../data/services';
import ServiceCard from './ServiceCard';

export default function ServicesList() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const totalSlides = SERVICES.length;

  // Next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Automatic slider
  // useEffect(() => {
  //   if (isPaused) return;

  //   intervalRef.current = setInterval(() => {
  //     nextSlide();
  //   }, 3000);

  //   return () => clearInterval(intervalRef.current);
  // }, [isPaused, totalSlides]);

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-16"
      data-purpose="services-list"
    >
      {/* Heading */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-2">
            What We Do
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Our Core{' '}
            <span className="font-display italic text-gradient">
              Services
            </span>
          </h2>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous service"
            className="w-11 h-11 rounded-full border border-white/10 glass-panel flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next service"
            className="w-11 h-11 rounded-full border border-white/10 glass-panel flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        className="relative overflow-hidden rounded-3xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="w-full shrink-0"
            >
              <ServiceCard
                service={service}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {SERVICES.map((service, index) => (
          <button
            key={service.id}
            onClick={() => setCurrent(index)}
            aria-label={`Go to ${service.title}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? 'w-8 bg-brand-gold'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-xs text-brand-gray">
        <span className="text-brand-gold font-semibold">
          {String(current + 1).padStart(2, '0')}
        </span>
        {' / '}
        {String(totalSlides).padStart(2, '0')}
      </div>
    </section>
  );
}