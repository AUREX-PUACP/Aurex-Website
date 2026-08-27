import { ShieldCheck, ArrowRight } from "lucide-react";

export default function CommunityHero() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 md:px-12">
      {/* Background Radial Glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(212, 168, 87, 0.12) 0%, transparent 65%)"
        }}
      />

      {/* Visible PUACP Background Watermark Header */}
      <div className="pointer-events-none absolute left-0 right-0 top-2 z-0 flex justify-center opacity-[0.16] select-none">
        <h1 className="font-serif text-[24vw] font-black uppercase leading-none tracking-widest text-[#d4a857]">
          PUACP
        </h1>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center pt-4">
        
        {/* Main Page Title */}
        <h1 className="mb-6 text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          AUREX{" "}
          <span className="font-serif font-light italic text-[#d4a857]">
            Community
          </span>
        </h1>

        {/* Wide & Compact Glassmorphism Card Container */}
        <div className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-8 md:px-14 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col items-center text-center">
            
            {/* Header & Tagline */}
            <h2 className="mb-2 text-lg font-bold tracking-wider text-white uppercase md:text-xl">
              AUREX: THE LEGACY & CORPORATE EVOLUTION 🛡️
            </h2>
            
            <div className="mb-6 flex items-center gap-2 rounded-full border border-[#d4a857]/40 bg-[#d4a857]/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#d4a857]">
              <ShieldCheck className="h-4 w-4" />
              <span>A Technical Subsidiary of PUACP</span>
            </div>

            {/* Subtle Divider */}
            <div className="mb-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4a857]/20 to-transparent" />

            {/* PUACP Organization & Aurex Software Relationship Copy */}
            <p className="mb-8 max-w-4xl text-base leading-relaxed text-gray-300 md:text-lg">
              <strong className="text-[#d4a857]">PUACP</strong> is an expansive student community and organizational body dedicated to fostering innovation, collaboration, and learning. <strong className="text-white">AUREX</strong> was established as the official software engineering arm under PUACP's umbrella—transforming the community's collective technical potential into real-world software products and enterprise solutions.
            </p>

            {/* CTA Button */}
            <a
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-[#d4a857] px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#c69a4a] hover:shadow-[0_0_20px_rgba(212,168,87,0.4)]"
            >
              <span>Connect with the Ecosystem</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}