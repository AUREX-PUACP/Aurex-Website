import { Link } from 'react-router-dom';

const VARIANTS = {
  primary:
    'bg-brand-gold text-black font-semibold hover:bg-brand-goldLight shadow-[0_0_20px_rgba(214,168,90,0.2)]',
  ghost: 'glass-panel text-white hover:text-brand-gold',
};


export default function Button({
  to,
  href = '#',
  variant = 'primary',
  icon = 'fa-solid fa-arrow-right',
  className = '',
  children,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-colors ${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
        {icon && <i className={`${icon} text-sm`} />}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
      {icon && <i className={`${icon} text-sm`} />}
    </a>
  );
}
