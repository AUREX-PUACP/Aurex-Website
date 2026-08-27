import React from "react";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[60vh] md:min-h-[65vh] w-full flex-col items-center justify-center overflow-hidden bg-brand-black px-6 pt-32 pb-16 text-center md:px-12 md:pt-36 md:pb-20">
      
      {/* 1. Subtle Radial Glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(212, 168, 87, 0.45) 0%, transparent 70%)",
        }}
      />

      {/* 2. Abstract Grid Vector Accent */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 3. Centered Content Container */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        
        {/* Minimalist Micro Badge */}
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d4a857]/40 bg-[#d4a857]/10 px-4 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(212,168,87,0.15)]">
          <span className="font-mono text-xs font-semibold text-[#d4a857]">01</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#d4a857] animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-200">
            About Aurex Centre
          </span>
        </div>

        {/* Headline with Dual-Tone Typography */}
        <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.12]">
          Architecting solutions, <br />
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#d4a857] via-[#ebd09b] to-[#d4a857]">
            empowering digital growth.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-7 text-base font-light leading-relaxed text-gray-300 sm:text-lg md:text-xl max-w-2xl text-center">
          At <strong className="font-medium text-white">Aurex Centre</strong>, we bring together software engineering, intuitive product design, and strategic academic support under PUACP. Our mission is delivering high-performance web systems and refined solutions tailored for real-world execution.
        </p>

        {/* Bottom Accent Elements */}
        <div className="mt-10 flex items-center gap-3">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4a857]/60" />
          <div className="h-2 w-2 rotate-45 border border-[#d4a857] bg-black" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4a857]/60" />
        </div>

      </div>
    </section>
  );
}