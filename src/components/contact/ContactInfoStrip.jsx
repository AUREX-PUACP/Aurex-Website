import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfoStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-[#111111] p-8 sm:grid-cols-3">
        <InfoItem
          icon={<Mail className="h-5 w-5" />}
          label="Email Us"
          value="aurex.puacp.official@gmail.com"
        />
        <InfoItem
          icon={<Phone className="h-5 w-5" />}
          label="Call Us"
          value="+92 341 0632835"
        />
        <InfoItem
          icon={<MapPin className="h-5 w-5" />}
          label="Visit Us"
          value="Islamabad, Pakistan"
        />
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d4a857]/10 text-[#d4a857]">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {label}
        </p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  );
}