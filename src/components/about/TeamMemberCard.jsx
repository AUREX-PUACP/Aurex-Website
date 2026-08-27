import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function TeamMemberCard({ member, featured = false }) {
  const { name, role, bio, linkedin, github, image } = member;

  return (
    <div
      className={`group flex w-[280px] shrink-0 snap-center flex-col items-center rounded-2xl border p-6 text-center transition-all duration-300 hover:border-[#d4a857] hover:shadow-[0_0_30px_rgba(212,168,87,0.15)] ${
        featured
          ? "border-[#d4a857] bg-[#141414] shadow-[0_0_30px_rgba(212,168,87,0.1)]"
          : "border-white/5 bg-[#141414]"
      }`}
    >
      {/* Real team photo — replaces the initials avatar */}
      <div className="mb-6 h-32 w-32 overflow-hidden rounded-full bg-gray-800">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mb-1 text-lg font-medium text-white">{name}</h3>
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#d4a857]">
        {role}
      </p>
      <p className="mb-6 text-sm font-light text-gray-400">{bio}</p>

      <div className="mt-auto flex gap-3">
        
       <a   href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}'s LinkedIn`}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <FaLinkedin className="h-4 w-4" />
        </a>

        
       <a   href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}'s GitHub`}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <FaGithub className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}