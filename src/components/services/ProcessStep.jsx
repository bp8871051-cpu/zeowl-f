'use client';

import React from 'react';

export default function ProcessStep({
  number,
  icon: IconComponent,
  title,
  description,
  isActive = false,
  stepRef,
  onSelect,
}) {
  return (
    <div
      ref={stepRef}
      onClick={onSelect}
      onMouseEnter={onSelect}
      className="process-step group relative flex flex-col items-center text-center cursor-pointer select-none transition-all duration-300 w-full"
    >
      {/* 1. NUMBER: Positioned ABOVE Icon, JetBrains Mono 13-14px */}
      <span
        className={`step-number text-[13px] sm:text-[14px] font-bold mb-2 tracking-widest transition-colors duration-300 ${
          isActive
            ? 'text-[#f57e20]'
            : 'text-white/70 group-hover:text-[#f57e20]'
        }`}
        style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
      >
        {number}
      </span>

      {/* 2. CIRCULAR ICON: 64px x 64px, Solid Deep Navy Background to block connecting line */}
      <div
        className={`step-circle relative w-[60px] h-[60px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
          isActive
            ? 'border-2 border-[#f57e20] bg-[#0E223D] shadow-[0_0_25px_rgba(245, 126, 32,0.45)] scale-105'
            : 'border border-[rgba(245, 126, 32,0.6)] bg-[#071629] group-hover:border-[#f57e20] group-hover:bg-[#0C1F38] group-hover:shadow-[0_0_20px_rgba(245, 126, 32,0.35)] group-hover:scale-105'
        }`}
      >
        {/* White / Gold line icon: 24-28px */}
        <IconComponent
          className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ${
            isActive
              ? 'text-[#f57e20]'
              : 'text-white group-hover:text-[#f57e20]'
          }`}
          strokeWidth={1.75}
        />
      </div>

      {/* 3. TITLE: Space Grotesk 14-15px, Weight 500-600 */}
      <h3
        className={`step-title mt-3 font-medium sm:font-semibold text-[14px] sm:text-[15px] leading-tight text-center whitespace-pre-line tracking-tight transition-all duration-300 min-h-[36px] flex items-center justify-center ${
          isActive
            ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(245, 126, 32,0.4)]'
            : 'text-white/85 group-hover:text-white'
        }`}
        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
      >
        {title}
      </h3>

      <span className="sr-only">{description}</span>
    </div>
  );
}
