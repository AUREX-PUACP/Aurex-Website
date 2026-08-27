import { GraduationCap, Briefcase, Code2, ArrowRight } from "lucide-react";

const hubItems = [
  {
    icon: GraduationCap,
    badge: "English & Academics",
    title: "Communication & Literature Hub",
    description:
      "Resources, content writing guides, and language workshops curated by PUACP to help students build strong academic foundations and communication skills.",
    actionLabel: "Explore Resources",
    to: "/contact",
  },
  {
    icon: Briefcase,
    badge: "Business & Growth",
    title: "Business Strategy Wing",
    description:
      "A dedicated space for entrepreneurship, management concepts, and project leadership—connecting student innovation with real-world execution.",
    actionLabel: "Explore Wing",
    to: "/contact",
  },
  {
    icon: Code2,
    badge: "Aurex Software",
    title: "Technical Engineering Portal",
    description:
      "The dedicated software arm under PUACP. Collaborate on real production builds, technical sprints, and digital solutions with student developers.",
    actionLabel: "Start Building",
    to: "/contact",
  },
];

export default function CommunityHub() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-12">
      {/* Header */}
      <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-end">
        <div>
          <div className="mb-2 text-xs font-mono uppercase tracking-[0.25em] text-[#d4a857]">
            Multidisciplinary Wings
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            PUACP <span className="font-serif italic font-light text-[#d4a857]">Community Hub</span>
          </h2>
        </div>
        <p className="mt-4 max-w-md text-sm text-gray-400 md:mt-0 md:text-right">
          Empowering students across English, Business, Technology, and Leadership through dedicated resources and peer mentorship.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {hubItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a857]/40 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(212,168,87,0.1)]"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4a857]/30 bg-[#d4a857]/10 text-[#d4a857]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-gray-300">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#d4a857]">
                  {item.title}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <a
                href={item.to}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4a857] transition-all group-hover:gap-3"
              >
                <span>{item.actionLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}