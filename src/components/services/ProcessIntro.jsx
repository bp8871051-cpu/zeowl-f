'use client';

import React from 'react';

export default function ProcessIntro({
  introRef,
  eyebrowRef,
  lineRef,
  headingRef,
  descRef,
  handwrittenRef,
}) {
  return (
    <div
      ref={introRef}
      className="process-intro flex flex-col justify-center text-left w-full max-w-[440px] z-20"
    >
      {/* 1. EYEBROW: OUR PROCESS ───── */}
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        <span
          ref={eyebrowRef}
          className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#f57e20] select-none"
          style={{
            fontFamily: 'var(--font-manrope), sans-serif',
          }}
        >
          OUR PROCESS
        </span>
        <span
          ref={lineRef}
          className="h-[2px] bg-[#f57e20] rounded-full inline-block origin-left"
          style={{ width: '45px' }}
        />
      </div>

      {/* 2. MAIN HEADING: From Strategy to Success */}
      <h2
        ref={headingRef}
        className="font-bold tracking-tight mb-4 sm:mb-5 select-none leading-[1.08]"
        style={{
          fontSize: 'clamp(32px, 3.4vw, 50px)',
          fontFamily: 'var(--font-space-grotesk), sans-serif',
        }}
      >
        <span className="block heading-line text-white">
          From Strategy to
        </span>
        <span className="block heading-line text-[#f57e20]">
          Success
        </span>
      </h2>

      {/* 3. DESCRIPTION: Clean 2 natural lines */}
      <p
        ref={descRef}
        className="text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed max-w-[420px] mb-6 sm:mb-7 font-normal text-white/85"
        style={{
          fontFamily: 'var(--font-inter), sans-serif',
        }}
      >
        A simple and transparent process to deliver result-driven digital solutions.
      </p>

      {/* 4. HANDWRITTEN DECORATION: Caveat font + subtle curved arrow */}
      <div
        ref={handwrittenRef}
        className="decorative-script flex items-center gap-3 pt-1 select-none"
      >
        <div
          className="text-[20px] sm:text-[22px] lg:text-[24px] font-normal text-[#f57e20] leading-tight tracking-wide -rotate-2"
          style={{ fontFamily: 'var(--font-caveat), cursive' }}
        >
          <span className="block whitespace-nowrap">A Journey Built</span>
          <span className="block whitespace-nowrap">for Real Results</span>
        </div>

        {/* Small curved handwritten arrow pointing toward the process timeline */}
        <svg
          viewBox="0 0 54 34"
          className="w-10 h-6 text-[#f57e20] -rotate-6 pointer-events-none flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 22 C 18 12, 32 10, 48 18" />
          <path d="M38 11 L 48 18 L 38 24" />
        </svg>
      </div>
    </div>
  );
}
