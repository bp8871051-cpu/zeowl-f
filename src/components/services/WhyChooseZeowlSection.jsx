'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TrendingUp,
  Cpu,
  Eye,
  HeartHandshake,
  ArrowUpRight,
} from 'lucide-react';
import { whyChooseData } from '@/data/servicesData';

const iconList = [TrendingUp, Cpu, Eye, HeartHandshake];

export default function WhyChooseZeowlSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        const isEven = i % 2 === 0;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        tl.fromTo(
          card,
          {
            opacity: 0,
            x: prefersReducedMotion ? 0 : isEven ? -40 : 40,
            y: 30,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
          }
        );

        // Animate the internal accent line
        const line = card.querySelector('.why-accent-line');
        if (line && !prefersReducedMotion) {
          tl.fromTo(
            line,
            { scaleX: 0, transformOrigin: 'left center' },
            { scaleX: 1, duration: 0.8, ease: 'expo.out' },
            '-=0.4'
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#071A2F] text-white overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#F47B20]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#00A3FF]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono-tech uppercase tracking-widest text-[#F47B20] font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F47B20]" />
            <span>THE ZEOWL ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white mb-4">
            Why Businesses Choose Zeowl
          </h2>
          <p className="text-white/70 font-body text-base sm:text-lg">
            Engineering excellence, transparent collaboration, and a relentless focus on bottom-line business ROI.
          </p>
        </div>

        {/* 4 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {whyChooseData.map((item, index) => {
            const Icon = iconList[index] || TrendingUp;

            return (
              <div
                key={item.number}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#09223F]/90 via-[#0B2A4E]/80 to-[#071A2F]/90 border border-white/15 hover:border-[#F47B20]/60 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-between overflow-hidden"
              >
                {/* Background Number Watermark */}
                <span className="absolute -top-6 -right-2 text-7xl sm:text-9xl font-heading font-black text-white/[0.03] group-hover:text-[#F47B20]/[0.08] transition-colors duration-500 select-none pointer-events-none">
                  {item.number}
                </span>

                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <span className="text-4xl sm:text-5xl font-heading font-black text-[#F47B20]">
                      {item.number}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#F47B20] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight mb-2 group-hover:text-[#F47B20] transition-colors">
                    {item.title}
                  </h3>

                  {/* Tagline */}
                  <div className="text-xs font-mono-tech text-[#F47B20] uppercase tracking-wider mb-5">
                    {item.tagline}
                  </div>

                  {/* Animated orange line */}
                  <div className="why-accent-line h-[2px] w-16 bg-[#F47B20] rounded-full mb-6" />

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/70 font-body leading-relaxed">
                    {item.description}
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
