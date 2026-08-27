import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How soon can we start?", a: "Most projects kick off within a week of our discovery call." },
  { q: "Do you work with startups?", a: "Yes — we work with startups and enterprise teams alike." },
  { q: "What's your typical response time?", a: "We reply within 24 hours on business days." },
  { q: "Can we schedule a call instead?", a: "Mention it in your message and we'll send available slots." },
];

export default function ContactFAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24">
      <div className="mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a857]">
          Common Questions
        </span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Frequently{" "}
          <span className="font-display italic text-gradient">
            asked questions.
          </span>
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div
            key={item.q}
            className="rounded-2xl border border-white/10 bg-[#111111]"
          >
            <button
              type="button"
              onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-medium">{item.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-[#d4a857] transition-transform ${
                  openFaq === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openFaq === i && (
              <p className="px-6 pb-5 text-sm text-gray-400">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}