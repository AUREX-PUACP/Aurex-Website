import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
  SOCIAL_LINKS,
  CONTACT_INFO,
} from "../../data/navigation";

const SOCIAL_ICON_MAP = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  instagram: FaInstagram,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/5 mt-12 bg-brand-black pt-16 pb-8"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="AUREX Logo"
                className="w-9 h-9 rounded-full object-cover border border-brand-gold/40"
              />

              <span className="text-xl sm:text-2xl font-bold tracking-widest text-white group-hover:text-brand-gold transition-colors">
                AUREX
              </span>
            </Link>
            <p className="text-brand-gray text-sm max-w-xs leading-relaxed">
              A digital engineering company building intelligent products that
              drive real impact.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-gray hover:text-brand-gold transition-colors"
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-brand-gray">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-brand-gray">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-gray">
              <li className="flex items-start gap-3 min-w-0">
                <FaEnvelope className="mt-1 text-brand-gold" />

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors whitespace-nowrap text-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              {CONTACT_INFO.phones.map((phone) => (
                <li key={phone} className="flex items-start gap-3">
                  <FaPhone className="mt-1 text-brand-gold" />
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <FaLocationDot className="mt-1 text-brand-gold" />
                <span className="leading-relaxed">
                  {CONTACT_INFO.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-brand-gray">
          <p>© {year} AUREX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
