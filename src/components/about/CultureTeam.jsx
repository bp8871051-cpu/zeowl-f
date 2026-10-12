'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Compass, Zap } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const teamPillars = [
  {
    role: 'Development',
    subtitle: 'Engineering & Code Excellence',
    desc: 'Full-stack engineers building resilient, scalable, modern applications.',
    image: '/about/team-dev.jpg',
    icon: Code,
  },
  {
    role: 'Design',
    subtitle: 'Human-Centered Experience',
    desc: 'UI/UX creators crafting intuitive interfaces that captivate and convert.',
    image: '/about/team-design.jpg',
    icon: Palette,
  },
  {
    role: 'Strategy',
    subtitle: 'Vision & Architecture',
    desc: 'Product architects shaping digital transformation roadmaps.',
    image: '/about/team-strategy.jpg',
    icon: Compass,
  },
  {
    role: 'Innovation',
    subtitle: 'AI & Emerging Tech',
    desc: 'Specialists automating workflows and training intelligent AI models.',
    image: '/about/team-innovation.jpg',
    icon: Zap,
  },
];

export default function CultureTeam() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      // Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Staggered cards reveal
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 lg:py-32 bg-[#F7F9FC] font-sans overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[2px] bg-[#F58220] rounded-full" />
            <span className="text-[#F58220] uppercase tracking-[0.2em] text-xs font-bold">
              THE ZEOWL TEAM
            </span>
            <div className="w-6 h-[2px] bg-[#F58220] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#071A33] tracking-tight leading-[1.15] mb-4">
            People Behind the Progress
          </h2>

          <p className="text-[#566579] text-base sm:text-lg leading-[1.75] font-normal">
            Great technology starts with great people. Our team brings together
            developers, designers, strategists and innovators who believe in
            solving real business challenges through technology.
          </p>
        </div>

        {/* 4 Team Cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7"
        >
          {teamPillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.role}
                className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_15px_35px_rgba(7,26,51,0.08)] border border-white/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(7,26,51,0.18)] bg-slate-900 cursor-default"
              >
                {/* Background Image */}
                <img
                  src={pillar.image}
                  alt={pillar.role}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/50 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end text-left">
                  {/* Icon Badge */}
                  <div className="w-10 h-10 rounded-xl bg-[#F58220]/20 border border-[#F58220]/30 backdrop-blur-md flex items-center justify-center text-[#F58220] mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#F58220] group-hover:text-white">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                    {pillar.role}
                  </h3>

                  <p className="text-[#F58220] text-xs font-semibold uppercase tracking-wider mb-2">
                    {pillar.subtitle}
                  </p>

                  <p className="text-white/70 text-xs leading-relaxed opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
