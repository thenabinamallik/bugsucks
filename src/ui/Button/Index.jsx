/** @format */

import "./Button.css";

export function Button({
  label = "Button",
  onClick,
  theme = {},
  size = "md",
  className = "",
  ...props
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      tabIndex={0}
      data-component='star-button'
      className={`
        star-btn
        ${sizes[size]}
        relative
        font-semibold
        border-2
        transition-all duration-300
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{
        "--btn-bg": theme.bg ?? "#fec195",
        "--btn-border": theme.border ?? "#fec195",
        "--btn-text": theme.text ?? "#181818",
        "--btn-hover-text": theme.hoverText ?? "#fec195",
        "--star-glow": theme.starGlow ?? "#fffdef",
      }}
      {...props}>
      <span className='btn-label relative z-10'>{label}</span>

      {[1, 2, 3, 4, 5, 6].map((n) => (
        <span key={n} className={`star star-${n}`} aria-hidden='true'>
          <svg viewBox='0 0 784.11 815.53' className='w-full h-full'>
            <path
              className='star-fill'
              d='M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z'
            />
          </svg>
        </span>
      ))}
    </button>
  );
}


export function FlipButton({
  frontText,
  backText,
  frontIcon,
  backIcon,
  href = "#",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`btn-flip inline-grid ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Sizer */}
      <span className="btn-sizer">
        {frontIcon}
        {frontText}
        {backIcon}
        {backText}
      </span>

      {/* Front */}
      <span className="btn-face btn-front">
        {frontIcon && <span className="icon">{frontIcon}</span>}
        {frontText}
      </span>

      {/* Back */}
      <span className="btn-face btn-back">
        {backIcon && <span className="icon">{backIcon}</span>}
        {backText}
      </span>
    </a>
  );
}
