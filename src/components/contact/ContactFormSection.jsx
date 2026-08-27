import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    console.log("Contact form payload:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-24 lg:grid-cols-2">
      {/* ---- LEFT: message form ---- */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a857]">
          Send A Message
        </span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Tell us about{" "}
          <span className="font-display italic text-gradient">
            your project.
          </span>
        </h2>
        <p className="mt-4 text-gray-400">
          Share a few details and we'll get back to you within one business
          day.
        </p>

        <div className="mt-8 space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
            <FormField
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
          </div>
          <FormField
            label="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
          />
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us a bit about what you're building..."
              className="w-full resize-none rounded-xl border border-white/10 bg-[#141414] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-[#d4a857]/60"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 rounded-full bg-[#d4a857] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#c69a4a]"
          >
            Send Message <Send className="h-4 w-4" />
          </button>
          {submitted && (
            <p className="text-sm text-[#d4a857]">
              ✓ Message sent — we'll be in touch soon.
            </p>
          )}
        </div>
      </div>

      {/* ---- RIGHT: office info card ---- */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
        <div className="flex h-56 items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
          <MapPin className="h-10 w-10 text-[#d4a857]/50" />
        </div>
        <div className="space-y-6 p-8">
          <OfficeRow
            icon={<MapPin className="h-4 w-4" />}
            title="Our Office"
            detail="Islamabad, Pakistan"
          />
          <OfficeRow
            icon={<Phone className="h-4 w-4" />}
            title="Phone"
            detail="+92 341 0632835 / +92 347 6559301"
          />
          <OfficeRow
            icon={<Mail className="h-4 w-4" />}
            title="Email"
            detail="aurex.puacp.official@gmail.com"
          />
        </div>
      </div>
    </section>
  );
}

function FormField({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-gray-400">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-[#d4a857]/60"
      />
    </div>
  );
}

function OfficeRow({ icon, title, detail }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d4a857]/10 text-[#d4a857]">
        {icon}
      </span>
      <div>
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="text-sm text-gray-500">{detail}</p>
      </div>
    </div>
  );
}