/** Quiet animated backdrop + subtle stardust. */
export function HeroField() {
  return (
    <div className="hero-field" aria-hidden="true">
      <svg className="hero-field-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="soft-bloom" cx="35%" cy="45%" r="40%">
            <stop offset="0%" stopColor="var(--logo-blue)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--logo-blue)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="420" cy="360" rx="380" ry="260" fill="url(#soft-bloom)" className="hero-bloom" />
        <g className="hero-orbit">
          <circle cx="180" cy="180" r="1.5" fill="#fff" opacity="0.25" />
          <circle cx="980" cy="220" r="1.2" fill="var(--logo-blue)" opacity="0.35" />
          <circle cx="860" cy="520" r="1.4" fill="#fff" opacity="0.2" />
          <circle cx="260" cy="560" r="1.1" fill="var(--logo-blue)" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

export function StarDust({ count = 48 }: { count?: number }) {
  const stars = Array.from({ length: count }, (_, index) => {
    const left = ((index * 47) % 100) + (index % 7) * 0.3;
    const top = ((index * 31) % 100) + (index % 5) * 0.4;
    const size = 1 + (index % 3) * 0.4;
    const delay = (index % 12) * 0.35;
    const duration = 4 + (index % 6);

    return (
      <span
        key={index}
        className="star-dust-speck"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });

  return (
    <div className="star-dust" aria-hidden="true">
      {stars}
    </div>
  );
}
