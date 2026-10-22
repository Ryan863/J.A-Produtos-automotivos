import React from "react";

interface JaLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function JaLogo({
  className = "",
  showSubtitle = true,
  size = "md",
}: JaLogoProps) {
  const sizeClasses = {
    sm: "h-9",
    md: "h-11 sm:h-12",
    lg: "h-16 sm:h-20",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`relative ${sizeClasses[size]} aspect-[2.1/1]`}>
        <svg
          viewBox="0 0 210 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(34,197,94,0.35)]"
        >
          <defs>
            {/* J gradient: Magenta -> Cyan */}
            <linearGradient id="jaGradJ" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#d946ef" />
              <stop offset="35%" stopColor="#a855f7" />
              <stop offset="70%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            {/* J inner shadow */}
            <linearGradient id="jaGradJFold" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            {/* A left ribbon gradient */}
            <linearGradient id="jaGradALeft" x1="0%" y1="100%" x2="80%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="45%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            {/* A right ribbon gradient */}
            <linearGradient id="jaGradARight" x1="20%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>

            {/* Neon Green Car Glow Filter */}
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#22c55e" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Aerodynamic Sports Car Outline on top */}
          <g filter="url(#neonGlow)">
            {/* Roofline, Windshield, Hood, Spoiler curve */}
            <path
              d="M 28 32 C 34 26, 44 23, 62 23 C 86 23, 108 15, 138 15 C 168 15, 185 24, 204 27"
              stroke="#22c55e"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Front headlight/hood accent */}
            <path
              d="M 28 32 C 24 35, 23 38, 25 41 C 28 41, 35 39, 44 38"
              stroke="#22c55e"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Window pillars/body line */}
            <path
              d="M 68 24 C 84 22, 106 17, 132 17 C 148 17, 160 21, 172 25"
              stroke="#4ade80"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.85"
            />
            {/* Rear spoiler wing detail */}
            <path
              d="M 186 28 L 206 28"
              stroke="#22c55e"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </g>

          {/* LETTER 'J' - Ribbon Style */}
          {/* Top curve and vertical stem */}
          <path
            d="M 52 35 C 44 35, 41 40, 41 48 L 41 72 C 41 84, 33 89, 23 89 C 14 89, 7 84, 7 76 C 7 72, 10 68, 14 68 C 17 68, 20 70, 21 73 C 21 77, 20 78, 22 78 C 24 78, 27 76, 27 70 L 27 48 C 27 34, 38 27, 52 27 Z"
            fill="url(#jaGradJ)"
          />
          {/* J front curl highlight */}
          <path
            d="M 7 76 C 7 84, 14 89, 23 89 C 30 89, 36 86, 39 80 C 35 83, 29 84, 23 84 C 15 84, 11 80, 11 76 Z"
            fill="url(#jaGradJFold)"
            opacity="0.9"
          />

          {/* DOT '.' between J and A */}
          <circle cx="60" cy="83" r="5" fill="#38bdf8" />
          <circle cx="60" cy="83" r="2.2" fill="#e0f2fe" />

          {/* LETTER 'A' - Ribbon 3D Folded Style */}
          {/* Left ribbon leg */}
          <path
            d="M 98 27 L 66 89 L 81 89 L 98 54 L 110 54 L 105 44 L 95 44 L 102 30 Z"
            fill="url(#jaGradALeft)"
          />
          {/* Top fold connector */}
          <path
            d="M 98 27 L 116 27 L 108 42 L 95 42 Z"
            fill="#06b6d4"
          />
          {/* Right ribbon leg */}
          <path
            d="M 116 27 L 148 89 L 132 89 L 119 63 L 95 63 L 90 73 L 83 73 L 104 35 L 116 27 Z"
            fill="url(#jaGradARight)"
          />
          {/* Internal shadow ribbon overlap */}
          <path
            d="M 95 63 L 119 63 L 123 72 L 90 72 Z"
            fill="#0f766e"
            opacity="0.65"
          />

          {/* Green speedline underline */}
          <path
            d="M 6 95 L 204 95"
            stroke="#22c55e"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showSubtitle && (
        <div className="flex flex-col justify-center">
          <span className="font-extrabold tracking-wider text-white text-base sm:text-lg leading-tight uppercase font-sans">
            J.A <span className="text-emerald-400 font-semibold">Produtos</span>
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.22em] text-neutral-400 font-medium uppercase">
            Estética Automotiva
          </span>
        </div>
      )}
    </div>
  );
}
