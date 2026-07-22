/** Center focus — Agent Circle brand mark with soft orbital rings. */
export function HeroMark() {
  return (
    <div className="hero-mark" aria-hidden="true">
      <div className="hero-mark-glow" />
      <div className="hero-mark-ring hero-mark-ring-outer" />
      <div className="hero-mark-ring hero-mark-ring-mid">
        <span className="hero-mark-node hero-mark-node-a" />
        <span className="hero-mark-node hero-mark-node-b" />
        <span className="hero-mark-node hero-mark-node-c" />
      </div>
      <div className="hero-mark-ring hero-mark-ring-inner" />
      <div className="hero-mark-core">
        <img
          src="/logo.png"
          alt=""
          width={512}
          height={512}
          decoding="async"
          draggable={false}
        />
      </div>
    </div>
  );
}

/** Rising performance bars — discover / scout. */
export function FeatureSignalIcon() {
  return (
    <svg viewBox="0 0 48 48" className="feature-ico feature-signal-icon" aria-hidden="true">
      <rect className="fbar fbar-1" x="6" y="28" width="7" height="14" rx="2.5" />
      <rect className="fbar fbar-2" x="16" y="20" width="7" height="22" rx="2.5" />
      <rect className="fbar fbar-3" x="26" y="12" width="7" height="30" rx="2.5" />
      <rect className="fbar fbar-4" x="36" y="6" width="7" height="36" rx="2.5" />
      <path
        className="fbar-spark"
        d="M38 8l2.2-2.2M42 12l2.4-1.2M40 4.5l.4-2.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Lightning deploy pulse. */
export function FeatureDeployIcon() {
  return (
    <svg viewBox="0 0 48 48" className="feature-ico feature-deploy-icon" aria-hidden="true">
      <circle className="deploy-ring" cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle className="deploy-ring deploy-ring-2" cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path
        className="deploy-bolt"
        d="M26.5 8L15 26h8l-1.5 14L34 22h-8L26.5 8z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Shield + check draw — risk control. */
export function FeatureShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" className="feature-ico feature-shield-icon" aria-hidden="true">
      <path
        className="shield-body"
        d="M24 6l14 6v11c0 9.2-6.1 15.8-14 19-7.9-3.2-14-9.8-14-19V12l14-6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        className="shield-check"
        d="M17.5 24.5l4.2 4.2 9.3-9.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="shield-pulse" cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
