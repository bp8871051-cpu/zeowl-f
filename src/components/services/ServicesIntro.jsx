'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ServicesIntro() {
  const containerRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        '.intro-reveal-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );

      if (!prefersReducedMotion && dividerRef.current) {
        tl.fromTo(
          dividerRef.current,
          { scaleX: 0, transformOrigin: 'center left' },
          { scaleX: 1, duration: 1.0, ease: 'expo.out' },
          '-=0.4'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 lg:py-28 bg-[#F6F7F9] text-[#10243E] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Small label */}
        <div className="intro-reveal-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#071A2F]/10 text-xs font-mono-tech uppercase tracking-widest text-[#F47B20] font-semibold mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F47B20]" />
          <span>WHAT WE DO</span>
        </div>

        {/* Heading */}
        <h2 className="intro-reveal-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-[#071A2F] leading-[1.15] mb-6">
          Everything You Need <br className="hidden sm:block" />
          <span className="text-[#071A2F]">To Build, Grow & Scale</span>
        </h2>

        {/* Animated Orange Divider */}
        <div
          ref={dividerRef}
          className="h-[3px] w-24 sm:w-32 bg-[#F47B20] rounded-full shadow-[0_2px_10px_rgba(244,123,32,0.4)] my-6"
        />

        {/* Description */}
        <p className="intro-reveal-item text-base sm:text-lg md:text-xl text-[#10243E]/75 font-body leading-relaxed max-w-2xl">
          We combine technology, creativity and strategy to deliver digital solutions designed around your business goals.
        </p>
      </div>
    </section>
  );
}
