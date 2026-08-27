import { Link } from "react-router-dom";
import { ArrowRight, Triangle } from "lucide-react";

export default function AboutClosingStrip() {
  return (
    <section className="bg-[#0a0a0a] px-6 pb-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-[#141414] p-8 md:flex-row">
          <div className="flex items-center gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d4a857]/30 bg-black">
              <Triangle className="h-7 w-7 fill-[#d4a857] text-[#d4a857]" />
            </div>
            <div>
              <h3 className="mb-1 text-2xl font-light text-white">
                Driven by Purpose.{" "}
                <span className="font-serif italic text-[#d4a857]">
                  Built for Impact.
                </span>
              </h3>
              <p className="text-sm font-light text-gray-400">
                We're always open to working with people who care about
                building things that matter.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#d4a857]/50 px-8 py-3 text-sm font-medium text-[#d4a857] transition-all duration-300 hover:bg-[#d4a857] hover:text-black"
          >
            Let's Talk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}