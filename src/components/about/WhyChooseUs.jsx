'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, ShieldCheck, Cpu, HeartHandshake } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    id: 'innovation',
    title: 'Innovation',
    icon: Lightbulb,
    description:
      'We continually explore emerging paradigms, modern frameworks, and creative problem-solving methods to build solutions that outpace industry trends.',
  },
  {
    id: 'quality',
    title: 'Quality',
    icon: ShieldCheck,
    description:
      'Uncompromising attention to detail with rigorous code standards, automated testing, responsive performance benchmarks, and robust security by design.',
  },
  {
    id: 'technology',
    title: 'Technology',
    icon: Cpu,
    description:
      'Building with scalable modern stacks, cloud-native infrastructure, and intelligent automation built to handle growing enterprise demands.',
  },
  {
    id: 'client-focus',
    title: 'Client Focus',
    icon: HeartHandshake,
    description:
      'We work as an agile extension of your team with transparent communication, predictable sprint cycles, and dedicated ongoing technical partnership.',
  },
];

export default function WhyChooseUs() {
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
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
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

      // Feature blocks stagger
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 40, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.14,
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
      id="why-choose-us"
      ref={containerRef}
      className="relative w-full py-20 lg:py-32 bg-[#F7F9FC] font-sans overflow-hidden"
    >
      {/* Background Subtle Accent Blur */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#F57E20]/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[2px] bg-[#F57E20] rounded-full" />
            <span className="text-[#F57E20] uppercase tracking-[0.2em] text-xs font-bold">
              THE ZEOWL ADVANTAGE
            </span>
            <div className="w-6 h-[2px] bg-[#F57E20] rounded-full" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#06182F] tracking-tight leading-[1.15] mb-4">
            Why Choose Us
          </h2>

          <p className="font-body text-[#566579] text-base sm:text-lg leading-relaxed font-normal">
            We unite technical rigor with creative agility to build digital
            products that deliver durable competitive advantages.
          </p>
        </div>

        {/* 4 Feature Blocks Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const IconComp = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-[2rem] p-8 sm:p-9 border border-[#06182F]/[0.08] hover:border-[#F57E20]/40 shadow-[0_10px_30px_rgba(6,24,47,0.04)] hover:shadow-[0_20px_50px_rgba(245,126,32,0.12)] transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Minimal Line Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-[#06182F]/[0.03] border border-[#06182F]/[0.08] flex items-center justify-center text-[#06182F] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F57E20] group-hover:text-white group-hover:border-[#F57E20] group-hover:shadow-[0_0_20px_rgba(245,126,32,0.3)]">
                    <IconComp className="w-6 h-6" strokeWidth={1.8} />
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#06182F] mb-3 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="font-body text-[#566579] text-sm sm:text-base leading-[1.75] font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Indicator Number */}
                <div className="mt-8 pt-4 border-t border-[#06182F]/[0.06] flex items-center justify-between text-xs font-bold text-[#06182F]/40 group-hover:text-[#F57E20] transition-colors">
                  <span>PILLAR 0{index + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#F57E20] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
