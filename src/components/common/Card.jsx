import { Link } from "react-router-dom";

export default function Card({ icon: Icon, title, description, actionLabel, to = "/contact" }) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#141414] p-8 transition-all duration-300 hover:border-[#d4a857]/50 hover:shadow-[0_0_20px_rgba(212,168,87,0.1)]"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#1c1c1c] transition-colors group-hover:border-[#d4a857]/50">
        <Icon className="h-5 w-5 text-[#d4a857]" />
      </div>
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mb-6 flex-grow text-sm text-gray-400">{description}</p>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#d4a857] opacity-70 transition-opacity group-hover:opacity-100">
        {actionLabel}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}