import React from 'react';
import Button from '../common/Button';
import aboutBg from '../../assets/about-bg.png'; // Correct asset import

import {
  FaLayerGroup,
  FaUsers,
  FaGlobe,
  FaAward,
} from 'react-icons/fa6';

import { STATS } from '../../data/navigation';

const STAT_ICON_MAP = {
  layers: FaLayerGroup,
  users: FaUsers,
  globe: FaGlobe,
  award: FaAward,
};

export default function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
        data-purpose="hero-section"
      >
        {/* Background Image Container */}
        <div className="absolute inset-0 -z-20">
          <img
            src={aboutBg}
            alt="AUREX Digital Engineering"
            className="w-full h-full object-cover opacity-90"
          />

          {/* Lightened Dark Overlay (Image is now much more visible) */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Soft Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/50" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto w-full px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-brand-gold/30 bg-black/40 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="text-brand-gold text-xs md:text-sm font-semibold tracking-[0.18em] uppercase">
                Digital Engineering
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white">
              Engineering Ideas
              <br />
              Into{' '}
              <span className="font-display italic text-gradient">
                Digital Reality.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              AUREX is a digital engineering company building intelligent,
              scalable and human-centered products that drive real impact
              for startups and enterprise businesses.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Button to="/about" variant="primary">
                Our Story
              </Button>

              <Button
                to="/team"
                variant="ghost"
                icon="fa-solid fa-users"
              >
                Meet Our Team
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SEPARATE STATS SECTION ================= */}
      <section
        className="relative z-10 max-w-7xl mx-auto px-6 -mt-8 md:-mt-10"
        data-purpose="hero-stats"
      >
        <div className="glass-panel rounded-2xl border border-white/10 p-6 md:p-8 backdrop-blur-md bg-black/40">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">

            {STATS.map((stat) => {
              const Icon = STAT_ICON_MAP[stat.icon];

              return (
                <div
                  key={stat.label}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 px-3 md:px-6 py-3 text-center sm:text-left"
                >
                  {Icon && (
                    <div className="shrink-0 w-11 h-11 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                      <Icon className="text-xl text-brand-gold" />
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </h3>

                    <p className="text-xs md:text-sm text-brand-gray mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>
    </>
  );
}