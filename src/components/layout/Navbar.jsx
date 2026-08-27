import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { NAV_LINKS } from '../../data/navigation';
import logo from '../../assets/logo.jpeg';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const linkClasses = ({ isActive }) =>
    `
      relative py-2 transition-all duration-300
      ${
        isActive
          ? 'text-brand-gold font-semibold'
          : 'text-brand-gray hover:text-brand-gold'
      }
    `;

  return (
    <nav
      className="fixed w-full z-50 top-0 px-3 sm:px-4 md:px-6 py-3 sm:py-4"
      data-purpose="main-navigation"
    >
      <div
        className={`
          max-w-7xl mx-auto
          glass-panel
          px-4 sm:px-5 md:px-6
          py-2.5 sm:py-3
          flex items-center justify-between
          rounded-full
          border border-white/10
          transition-all duration-300
          ${isScrolled ? 'shadow-[0_10px_30px_rgba(0,0,0,0.35)]' : ''}
        `}
      >

        {/* LOGO */}
   <NavLink
  to="/"
  className="flex items-center gap-2 group shrink-0"
  aria-label="AUREX home"
  onClick={() => setIsMobileOpen(false)}
>
  {/* Round Logo */}
  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-brand-gold/60 shadow-[0_0_12px_rgba(214,168,90,0.25)] bg-black shrink-0">
    <img
      src={logo}
      alt="AUREX Logo"
      className="w-full h-full object-cover"
    />
  </div>

  {/* AUREX Text */}
  <span className="text-xl sm:text-2xl font-bold tracking-widest text-white group-hover:text-brand-gold transition-colors">
    AUREX
  </span>
</NavLink>
        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium">

          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={linkClasses}
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  <span
                    className={`
                      absolute left-0 -bottom-0.5 h-0.5
                      bg-brand-gold
                      transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0'}
                    `}
                  />
                </>
              )}
            </NavLink>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* LET'S TALK */}
          <NavLink
            to="/contact"
            className="
              hidden lg:flex
              items-center justify-center
              px-5 xl:px-6 py-2.5
              rounded-full
              bg-brand-gold
              text-black
              font-semibold
              hover:bg-brand-goldLight
              transition-all duration-300
              shadow-[0_0_15px_rgba(214,168,90,0.3)]
            "
          >
            Let's Talk
          </NavLink>

          {/* HAMBURGER */}
        <button
  type="button"
  className="
    lg:hidden
    w-10 h-10 sm:w-11 sm:h-11
    rounded-full
    flex items-center justify-center
    bg-black
    border border-brand-gold/50
    text-brand-gold
    shadow-[0_0_12px_rgba(214,168,90,0.25)]
    hover:bg-brand-gold
    hover:text-black
    transition-all duration-300
    opacity-100
  "
  aria-label="Toggle navigation menu"
  aria-expanded={isMobileOpen}
  onClick={() => setIsMobileOpen((open) => !open)}
>
  {isMobileOpen ? (
    <FaXmark className="text-lg sm:text-xl" />
  ) : (
    <FaBars className="text-lg sm:text-xl" />
  )}
</button>
        </div>
      </div>

      {/* MOBILE + TABLET MENU */}
      {isMobileOpen && (
        <div
          className="
            max-w-7xl mx-auto
            mt-3
            glass-panel
            rounded-3xl
            border border-white/10
            p-5 sm:p-6
            lg:hidden
          "
        >
          <div className="flex flex-col gap-2 text-base font-medium">

            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `
                    px-4 py-3
                    rounded-xl
                    transition-all duration-300
                    ${
                      isActive
                        ? 'text-brand-gold bg-brand-gold/10 border border-brand-gold/20'
                        : 'text-white hover:text-brand-gold hover:bg-white/5'
                    }
                  `
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* MOBILE LET'S TALK */}
            <NavLink
              to="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="
                flex items-center justify-center
                px-6 py-3
                rounded-full
                bg-brand-gold
                text-black
                font-semibold
                hover:bg-brand-goldLight
                transition-colors
                mt-2
              "
            >
              Let's Talk
            </NavLink>

          </div>
        </div>
      )}
    </nav>
  );
}