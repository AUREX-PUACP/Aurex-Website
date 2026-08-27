export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + ultra dark overlay — confined to the hero, same as ServicesHero */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(5,5,5,0.96), rgba(5,5,5,0.96)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8w23S3K0-bmwaRYGVlNusfxt5IMGC5mCrR_re8q5R0eBPYHqVwWMJm21Uxa2ja9WfEzdRK1ecNTgpY2FyGF8HubhnpI7kbbr0e-J036s2mu9c859Gp6SDdJq00J6louyjAMwlkZNlQ4l2ftU2ZScahIozU7OwiSXkINm_6Bg_ejEVbHJQiHhuR1VyKgR-WTHlVrKEuNzKQlqlwFbQViik5DH_t6DfNWn9cOjJbxgLIX23pZktZ2HBwwfLP-bc_zq-DQ")',
        }}
      />

      <div className="mx-auto max-w-4xl px-6 pb-16 pt-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d4a857]/30 px-4 py-1 text-xs font-medium uppercase tracking-widest text-[#d4a857]">
          • Get In Touch
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Let's Start The{" "}
          <span className="font-display italic text-gradient">Conversation.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          Have a project in mind, a question, or just want to say hi? Fill out
          the form below or reach us directly.
        </p>
      </div>
    </section>
  );
}