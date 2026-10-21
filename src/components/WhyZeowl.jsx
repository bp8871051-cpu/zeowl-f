'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const capabilities = [
  { id: '01', title: 'Web Development' },
  { id: '02', title: 'AI & Automation' },
  { id: '03', title: 'UI/UX Design' },
  { id: '04', title: 'Digital Solutions' },
];

export default function WhyZeowl() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      });

      // 1. Eyebrow reveal
      tl.fromTo(
        '[data-why-eyebrow]',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )
        // 2. Heading reveal
        .fromTo(
          '[data-why-heading]',
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
          '-=0.4'
        )
        // 3. Description reveal
        .fromTo(
          '[data-why-desc]',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.45'
        )
        // 4. Capability labels appear sequentially
        .fromTo(
          '[data-why-cap]',
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.35'
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="why-zeowl"
      className="relative w-full bg-[#FFFFFF] py-20 sm:py-28 lg:py-36 overflow-hidden font-sans text-[#071A36]"
    >
      <div className="max-w-[1280px] w-[90%] mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Small Orange Eyebrow */}
        <div
          data-why-eyebrow
          className="inline-flex items-center gap-3.5 mb-5 sm:mb-6"
        >
          <div className="w-8 sm:w-10 h-[2px] bg-[#FF7A00] rounded-full" />
          <span className="text-[#FF7A00] uppercase text-[13px] sm:text-[14px] font-bold tracking-[0.14em] font-mono">
            WHY ZEOWL
          </span>
          <div className="w-8 sm:w-10 h-[2px] bg-[#FF7A00] rounded-full" />
        </div>

        {/* Strong Dark Navy Headline */}
        <h2
          data-why-heading
          className="font-extrabold tracking-[-0.03em] leading-[1.08] sm:leading-[1.06] text-[28px] sm:text-[42px] md:text-[52px] lg:text-[62px] xl:text-[66px] text-[#071A36] max-w-4xl mx-auto"
        >
          Built for Results.{' '}
          <span className="text-[#071A36] block sm:inline">
            Designed for Growth.
          </span>
        </h2>

        {/* Short Refined Supporting Paragraph */}
        <p
          data-why-desc
          className="text-[#64748B] text-[16px] sm:text-[18px] lg:text-[19.5px] leading-[1.65] max-w-2xl mx-auto mt-6 mb-14 sm:mb-20 font-normal"
        >
          We bring together engineering excellence, intuitive design, and intelligent
          automation to build modern technology solutions that drive lasting business momentum.
        </p>

        {/* 4 Minimal Capability Labels with subtle typography hierarchy */}
        <div
          data-why-capabilities
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-14 pt-2"
        >
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              data-why-cap
              className="group flex flex-col items-center text-center cursor-default select-none transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Subtle Numeric Index in Orange Monospace */}
              <span className="text-[12px] sm:text-[13px] font-mono font-bold text-[#FF7A00] tracking-widest mb-2 sm:mb-2.5 block">
                {cap.id}
              </span>

              {/* Minimal Capability Label */}
              <h3 className="text-[17px] sm:text-[19px] lg:text-[21px] font-bold text-[#071A36] group-hover:text-[#FF7A00] transition-colors duration-300 tracking-tight leading-snug">
                {cap.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
