'use client';

import React from 'react';
import Image from 'next/image';

interface JaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function JaLogo({
  className = '',
  size = 'md',
}: JaLogoProps) {
  const imgSizes = {
    sm: { w: 40, h: 40 },
    md: { w: 48, h: 48 },
    lg: { w: 64, h: 64 },
  };

  const current = imgSizes[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official J.A Logo Image */}
      <div className="relative rounded-xl overflow-hidden border border-emerald-500/25 shadow-[0_0_15px_rgba(34,197,94,0.3)] bg-[#0d1117] shrink-0">
        <Image
          src="/images/ja-logo-original.png"
          alt="J.A Produtos Automotivos Logo"
          width={current.w}
          height={current.h}
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <span className="font-extrabold tracking-wider text-white text-sm sm:text-base leading-tight uppercase font-sans">
          J.A <span className="text-emerald-400 font-semibold">PRODUTOS</span>
        </span>
        <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-neutral-400 font-medium uppercase">
          Estética Automotiva • Cango
        </span>
      </div>
    </div>
  );
}
