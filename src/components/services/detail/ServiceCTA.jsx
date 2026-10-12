'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function ServiceCTA({ service }) {
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const tagsRef = useRef([]);

  const ctaData = service.cta;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Slow glowing orbit rotation
      if (orbitRef.current) {
        gsap.to(orbitRef.current, {
          rotate: 360,
          duration: 40,
          repeat: -1,
          ease: 'none',
        });
      }

      // Floating tags subtle floating oscillation
      tagsRef.current.forEach((tag, idx) => {
        if (!tag) return;
        gsap.to(tag, {
          y: idx % 2 === 0 ? -12 : 12,
          duration: 3 + (idx % 3),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: idx * 0.4,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [service]);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#F8FAFC] text-[#0A1C30] overflow-hidden"
    >
      {/* BACKGROUND ABSTRACT VISUAL */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/services-cta-bg.png"
          alt="CTA Background"
          className="w-full h-full object-cover object-center select-none"
        />
        {/* Subtle white vignette to guarantee crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40 pointer-events-none" />

        {/* Thin Animated Rotating Orbit */}
        <div
          ref={orbitRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full border border-[#FF7900]/20 border-dashed will-change-transform"
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#FF7900] shadow-[0_0_20px_#FF7900]" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#3B82F6] shadow-[0_0_15px_#3B82F6]" />
        </div>
      </div>

      {/* Floating Service Tags */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block z-10">
        {(ctaData?.floatingTags || ['FIGMA', 'UI/UX', 'BRANDING', '3D ASSETS', 'MOTION', 'DESIGN SYSTEMS']).map((tag, idx) => {
          const positions = [
            'top-16 left-10 lg:left-16',
            'top-20 right-10 lg:right-20',
            'bottom-28 left-12 lg:left-24',
            'bottom-24 right-12 lg:right-24',
            'top-1/2 left-8 lg:left-14',
            'top-2/3 right-8 lg:right-16',
          ];

          return (
            <div
              key={tag}
              ref={(el) => (tagsRef.current[idx] = el)}
              className={`absolute ${positions[idx % positions.length]} px-4 py-2 rounded-full bg-white/85 border border-slate-200/90 backdrop-blur-md text-xs font-mono font-bold text-[#0A1C30] uppercase tracking-widest shadow-[0_8px_24px_rgba(10,28,48,0.06)] will-change-transform`}
            >
              <span className="text-[#FF7900] mr-1.5">//</span>
              <span>{tag}</span>
            </div>
          );
        })}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/90 border border-orange-200/80 text-xs font-mono font-bold uppercase tracking-widest text-[#FF7900] shadow-sm mb-5 sm:mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#FF7900] animate-ping" />
          <span>START A CONVERSATION</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black tracking-tight text-[#0A1C30] leading-[1.14] sm:leading-[1.12] mb-4 sm:mb-8">
          READY TO BUILD <br className="hidden sm:inline" />
          <span className="text-[#FF7900]">SOMETHING EXCEPTIONAL?</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-12">
          {ctaData?.subtext || "Let's craft a visual language that commands respect, captivates your ideal audience, and sets a new industry standard."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-6 w-full sm:w-auto">
          <Link
            href="/services#contact"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#FF7900] hover:bg-[#e66c00] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_12px_32px_rgba(255,121,0,0.35)] hover:shadow-[0_16px_40px_rgba(255,121,0,0.5)] hover:-translate-y-0.5 group cursor-pointer text-center w-full sm:w-auto"
          >
            <span>START YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white/90 hover:bg-white text-[#0A1C30] border border-slate-200/90 hover:border-slate-300 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5 backdrop-blur-md cursor-pointer text-center w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 text-[#FF7900]" />
            <span>TALK TO AN EXPERT</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
