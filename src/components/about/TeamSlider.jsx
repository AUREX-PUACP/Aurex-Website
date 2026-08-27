import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamMemberCard from "./TeamMemberCard";

import amImg from "../../assets/team/am.jpeg";
import ftImg from "../../assets/team/ft.jpeg";
import hzImg from "../../assets/team/hz.jpeg";
import msImg from "../../assets/team/ms.jpeg";
import rmImg from "../../assets/team/rm.jpeg";
import rqImg from "../../assets/team/rq.jpeg";
import sfImg from "../../assets/team/sf.jpeg";
import shImg from "../../assets/team/sh.jpeg";
import smImg from "../../assets/team/sm.jpeg";
import usImg from "../../assets/team/us.jpeg";

const team = [
  {
    name: "Raqeeba Yasin",
    role: "President",
    bio: "Leading with vision, empowering the team, and driving AUREX toward meaningful growth, innovation, and lasting impact."
,
    linkedin: "https://www.linkedin.com/in/raqeebayasin",   
    // github: "https://github.com/raqeeba-yasin",   
    image: rqImg,        
  },
  {
    name: "Saman Shafique",
    role: "Internal Vice President",
    bio: " Focused on building strong systems and empowered teams to drive disciplined execution and real performance.",
    linkedin: " https://www.linkedin.com/in/saman-shafique77/",
    // github: "https://github.com/saman-shafique",
    image: smImg,
  },
  {
    name: "Syeda Faiza Sajjad",
    role: "External Vice President",
    bio: "Dedicated to engineering strong systems and empowering cross-functional teams to ensure disciplined execution and high-performance outcomes.",
    linkedin: " https://www.linkedin.com/in/syeda-faiza-sajjad/",
    // github: "https://github.com/syeda-faiza-sajjad",
    image: sfImg,
  },
  {
    name: "Muhammad Hamza",
    role: "General Secretary",
    bio: "Coordinating teams, managing communication, and helping turn AUREX goals into organized and impactful results."
,
    // linkedin: "https://www.linkedin.com/in/muhammad-hamza",
    github: "https://github.com/hamza-1897",
    image: hzImg,
  },
  {
    name: "Uma Ammara",
    role: "Technical Head",
    bio: "Leading technical teams, solving complex challenges, and driving innovative solutions to build reliable and impactful projects."
,
    linkedin: "https://www.linkedin.com/in/umaammara/",
    // github: "https://github.com/uma-ammara",
    image: amImg,
  },
  {
    name: "Maimoona Shahbaz",
    role: "Project Manager",
    bio: "Managing projects, coordinating teams, and turning ideas into well-planned and successfully delivered results."
,
    linkedin: "https://www.linkedin.com/in/maimoona-shahbaz-728b74310/",
    github: "https://github.com/Maimoona288",
    image: msImg,
  },
  {
    name: "Rimsha Rani",
    role: "Finance Secretary",
    bio:"Managing finances, maintaining accountability, and ensuring organized and responsible financial operations at AUREX."
,
    linkedin: "https://www.linkedin.com/in/rimsharani?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    // github: "https://github.com/Maimoona288",
    image: rmImg,
  },
  {
    name: "Shaher Bano",
    role: "Socail Media & Content Lead",
    bio:"Creating engaging content, managing social media, and building a strong digital presence that connects AUREX with its audience."
,
    linkedin: "https://www.linkedin.com/in/shaher-bano-yousaf-6a1145400/",
    github: "https://github.com/shaherbanoyousaf112-oss",
    image: shImg,
  },
  {
    name: "Fatima Iqbal",
    role: "Graphic designer",
    bio:"Creating creative visuals, strengthening brand identity, and turning ideas into designs that capture attention and communicate clearly."
,
    linkedin: " https://www.linkedin.com/in/fatima-iqbal-83b86440b/?skipRedirect=true",
    // github: "https://github.com/shaherbanoyousaf112-oss",
    image: ftImg,
  },
  {
    name: "Muhammad Usman Ali",
    role: "Graphic designer",
    bio:"Transforming ideas into creative visuals, designing engaging graphics, and bringing AUREX identity to life through impactful designs."
,
    linkedin: "https://www.linkedin.com/in/muhammad-usman-ali-06405040b/",
    github: "https://github.com/Usmanmani05",
    image: usImg,
  },
];

export default function TeamSlider() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstChild?.offsetWidth ?? 280;
    track.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const cardWidth = track.firstChild?.offsetWidth ?? 280;
      const index = Math.round(track.scrollLeft / (cardWidth + 24));
      setActiveIndex(Math.min(index, team.length - 1));
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#0a0a0a] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="font-mono text-sm text-[#d4a857]">03</span>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                The Minds Behind AUREX
              </span>
            </div>
            <h2 className="text-4xl font-light md:text-5xl">
              Meet The{" "}
              <span className="font-serif italic text-[#d4a857]">Team</span>
            </h2>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={() => scrollByCard(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-white hover:text-white"
              aria-label="Previous team member"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="font-mono text-sm text-gray-500">
              <span className="text-white">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>{" "}
              / {String(team.length).padStart(2, "0")}
            </div>
            <button
              onClick={() => scrollByCard(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-white hover:text-white"
              aria-label="Next team member"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {team.map((member, i) => (
            <TeamMemberCard key={member.name} member={member} featured={i === activeIndex} />
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {team.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-[#d4a857]" : "w-1 bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}