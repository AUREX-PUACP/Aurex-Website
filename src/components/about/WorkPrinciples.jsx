import { UserCheck, Search, RefreshCw, Users2, Briefcase, Zap } from "lucide-react";

const principles = [
  { icon: UserCheck, title: "Ownership", desc: "We take initiative and see every task through to completion." },
  { icon: Search, title: "Curiosity", desc: "We ask better questions and never stop exploring new approaches." },
  { icon: RefreshCw, title: "Continuous Learning", desc: "We keep learning and adapting to stay ahead of the curve." },
  { icon: Users2, title: "Teamwork", desc: "We communicate openly and achieve better outcomes together." },
  { icon: Briefcase, title: "Professionalism", desc: "We stay reliable, respectful, and committed to high standards." },
  { icon: Zap, title: "Impact-Driven", desc: "We build solutions that create measurable, real-world results." },
];

export default function WorkPrinciples() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-sm text-[#d4a857]">05</span>
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
            How We Operate
          </span>
        </div>
        <h2 className="mb-16 text-4xl font-light md:text-5xl">
          Our Working{" "}
          <span className="font-serif italic text-[#d4a857]">Principles</span>
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {principles.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-white/5 bg-[#141414] p-6 text-center transition-colors hover:border-[#d4a857]/50"
            >
              <Icon className="mb-4 h-8 w-8 text-[#d4a857]" strokeWidth={1.5} />
              <h4 className="mb-2 text-sm font-medium text-white">{title}</h4>
              <p className="text-xs font-light text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}