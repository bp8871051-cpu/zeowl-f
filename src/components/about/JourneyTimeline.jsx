'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Rocket,
  Code2,
  Users,
  Globe2,
  Building2,
  Zap,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const milestones = [
  {
    year: '2020',
    title: 'Founded Zeowl Infotech',
    desc: 'Started our journey with a bold vision for digital engineering.',
    icon: Rocket,
  },
  {
    year: '2021',
    title: 'Completed 10+ Projects',
    desc: 'Delivered web and mobile platforms with 100% satisfaction.',
    icon: Code2,
  },
  {
    year: '2022',
    title: 'Expanded Team',
    desc: 'Brought on dedicated UI/UX designers and full-stack developers.',
    icon: Users,
  },
  {
    year: '2023',
    title: 'Served 30+ Clients',
    desc: 'Partnered with fast-growing startups and enterprises across India.',
    icon: Globe2,
  },
  {
    year: '2024',
    title: 'New Office & Global Reach',
    desc: 'Expanded physical office and onboarded international clientele.',
    icon: Building2,
  },
  {
    year: '2025',
    title: 'Stronger Than Ever',
    desc: 'Pioneering AI automation, scalable SaaS and enterprise technology.',
    icon: Zap,
  },
];

export default function JourneyTimeline() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);

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
          { y: 30, opacity: 0 },
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

      // Draw connecting timeline line progressively
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
              end: 'bottom 60%',
              scrub: 1,
            },
          }
        );
      }

      // Milestones sequential reveal
      if (cardsRef.current) {
        const items = cardsRef.current.querySelectorAll('.milestone-item');
        gsap.fromTo(
          items,
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
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
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[2px] bg-[#F58220] rounded-full" />
            <span className="text-[#F58220] uppercase tracking-[0.2em] text-xs font-bold">
              EVOLUTION & GROWTH
            </span>
            <div className="w-6 h-[2px] bg-[#F58220] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#071A33] tracking-tight leading-[1.15] mb-4">
            Our Journey
          </h2>

          <p className="text-[#566579] text-base sm:text-lg leading-relaxed font-normal">
            Key milestones in our growth story.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={cardsRef} className="relative w-full">
          
          {/* Horizontal Line on Desktop (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-[3px] bg-[#071A33]/[0.08] z-0">
            <div
              ref={lineRef}
              className="h-full bg-gradient-to-r from-[#F58220] via-[#168CFF] to-[#F58220] origin-left"
            />
          </div>

          {/* Milestones Grid (Horizontal on desktop, vertical on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {milestones.map((m, index) => {
              const IconComp = m.icon;
              return (
                <div
                  key={m.year}
                  className="milestone-item flex flex-col items-start lg:items-center text-left lg:text-center group"
                >
                  {/* Icon Node */}
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#F58220] flex items-center justify-center text-[#F58220] shadow-[0_0_20px_rgba(245,130,32,0.2)] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#F58220] group-hover:text-white shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Year Tag */}
                  <span className="text-2xl font-black text-[#F58220] tracking-tight mb-2">
                    {m.year}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#071A33] mb-2 leading-snug">
                    {m.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[#566579] text-xs leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
