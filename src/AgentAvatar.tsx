import type { CSSProperties } from "react";

/** Deterministic hash → pastel-tinted unique SVG mark per agent name. */
function hashSeed(input: string): number {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

const PASTEL_STOPS = ["#1885FF", "#4DA3FF", "#8FC4FF", "#C9E2FF", "#FFFFFF"] as const;

type AgentAvatarProps = {
  name: string;
  size?: number;
  className?: string;
};

export function AgentAvatar({ name, size = 48, className = "" }: AgentAvatarProps) {
  const seed = hashSeed(name);
  const hueA = seed % 360;
  const hueB = (seed * 7) % 360;
  const lobe = 3 + (seed % 4);
  const rotation = (seed % 48) - 24;
  const sparkleX = 70 + (seed % 18);
  const sparkleY = 12 + ((seed >> 4) % 14);
  const eyeGap = 6 + (seed % 5);
  const stopA = PASTEL_STOPS[seed % PASTEL_STOPS.length];
  const stopB = PASTEL_STOPS[(seed + 2) % PASTEL_STOPS.length];
  const gradientId = `agent-grad-${seed.toString(16)}`;
  const clipId = `agent-clip-${seed.toString(16)}`;

  const blobPath = buildBlobPath(lobe, seed);

  const style: CSSProperties = {
    width: size,
    height: size,
    flexShrink: 0,
  };

  return (
    <svg
      className={`agent-avatar-svg ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={style}
      role="img"
      aria-label={`${name} agent mark`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={stopA} />
          <stop offset="50%" stopColor={stopB} />
          <stop offset="100%" stopColor={`hsl(${hueA} 70% 72%)`} />
        </linearGradient>
        <clipPath id={clipId}>
          <path d={blobPath} />
        </clipPath>
      </defs>

      <rect width="100" height="100" rx="22" fill={`hsl(${hueB} 55% 42%)`} opacity="0.95" />

      <g transform={`rotate(${rotation} 50 50)`}>
        <path d={blobPath} fill={`url(#${gradientId})`} opacity="0.95" />
        <g clipPath={`url(#${clipId})`}>
          <rect x="28" y="34" width="44" height="36" rx="12" fill={`hsl(${hueB} 60% 28%)`} />
          <rect x="44" y="24" width="12" height="14" rx="5" fill={`hsl(${hueB} 60% 28%)`} />
          <rect
            x={50 - eyeGap - 6}
            y="46"
            width="10"
            height="7"
            rx="3.5"
            fill="#fff"
          />
          <rect
            x={50 + eyeGap - 4}
            y="46"
            width="10"
            height="7"
            rx="3.5"
            fill="#fff"
          />
        </g>
      </g>

      <path
        d={sparklePath(sparkleX, sparkleY, 5 + (seed % 4))}
        fill="#fff"
        opacity="0.92"
      />
    </svg>
  );
}

function buildBlobPath(lobes: number, seed: number): string {
  const points: string[] = [];
  const steps = lobes * 2;
  for (let index = 0; index < steps; index += 1) {
    const angle = (Math.PI * 2 * index) / steps - Math.PI / 2;
    const radius = index % 2 === 0 ? 34 + (seed % 5) : 26 + ((seed >> 3) % 4);
    const x = 50 + Math.cos(angle) * radius;
    const y = 50 + Math.sin(angle) * radius;
    points.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return `M ${points[0]} ${points
    .slice(1)
    .map((point) => `L ${point}`)
    .join(" ")} Z`;
}

function sparklePath(cx: number, cy: number, radius: number): string {
  return [
    `M ${cx} ${cy - radius}`,
    `C ${cx + radius * 0.15} ${cy - radius * 0.15}, ${cx + radius * 0.15} ${cy - radius * 0.15}, ${cx + radius} ${cy}`,
    `C ${cx + radius * 0.15} ${cy + radius * 0.15}, ${cx + radius * 0.15} ${cy + radius * 0.15}, ${cx} ${cy + radius}`,
    `C ${cx - radius * 0.15} ${cy + radius * 0.15}, ${cx - radius * 0.15} ${cy + radius * 0.15}, ${cx - radius} ${cy}`,
    `C ${cx - radius * 0.15} ${cy - radius * 0.15}, ${cx - radius * 0.15} ${cy - radius * 0.15}, ${cx} ${cy - radius}`,
    "Z",
  ].join(" ");
}
