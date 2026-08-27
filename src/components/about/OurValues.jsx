import { Lightbulb, Compass, Users2, Award, ShieldCheck, Target } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We embrace new ideas and technology to build future-ready products." },
  { icon: Compass, title: "Leadership", desc: "We take initiative and guide every project with clear direction." },
  { icon: Users2, title: "Collaboration", desc: "We believe the best results come from working closely with our clients." },
  { icon: Award, title: "Excellence", desc: "We hold every line of code and pixel of design to a high standard." },
  { icon: ShieldCheck, title: "Integrity", desc: "We operate with honesty, transparency, and accountability." },
  { icon: Target, title: "Impact", desc: "We measure success by the real value we create for our clients." },
];

export default function OurValues() {
  return (
    <section className="border-t border-white/5 bg-[#080808] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-[#d4a857]">04</span>
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
            What We Stand For
          </span>
        </div>
        <h2 className="mb-16 text-4xl font-light md:text-5xl">
          Our{" "}
          <span className="font-serif italic text-[#d4a857]">Values</span>
        </h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 divide-x divide-white/10 md:grid-cols-3 lg:grid-cols-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center px-4 text-center first:pl-0">
              <Icon className="mb-6 h-10 w-10 text-[#d4a857]" strokeWidth={1.5} />
              <h4 className="mb-3 font-medium text-white">{title}</h4>
              <p className="text-xs font-light leading-relaxed text-gray-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}