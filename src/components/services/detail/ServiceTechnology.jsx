'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Cpu, Database, Server, Sparkles } from 'lucide-react';

export default function ServiceTechnology({ service }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const technologies = service.technologies;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const validCards = (cardsRef.current || []).filter(Boolean);
      validCards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            delay: (idx % 4) * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [service]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-36 bg-[#FFFFFF] text-[#071D35] overflow-hidden border-b border-[#071D35]/10"
    >
      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20 pb-8 border-b border-[#071D35]/10">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#071D35]/5 border border-[#071D35]/10 text-xs font-mono-tech uppercase tracking-widest text-[#071D35] font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F58220]" />
              <span>TECHNOLOGY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-[#071D35]">
              BUILT WITH <br className="hidden sm:inline" />
              <span className="text-[#F58220]">MODERN TECHNOLOGY.</span>
            </h2>
          </div>

          <p className="text-base text-[#071D35]/70 font-body max-w-md">
            We avoid brittle legacy software. Our stacks prioritize type safety, edge caching, zero downtime, and long-term maintainability.
          </p>
        </div>

        {/* Asymmetric Technology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {technologies.map((tech, idx) => {
            const isLarge = tech.size === 'large';
            const isMedium = tech.size === 'medium';

            // Asymmetric Column Spans
            let colSpan = 'lg:col-span-3'; // small
            if (isLarge) colSpan = 'lg:col-span-6';
            else if (isMedium) colSpan = 'lg:col-span-4';

            return (
              <div
                key={tech.name}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={`${colSpan} group relative flex flex-col justify-between p-7 rounded-3xl bg-[#F7F7F4] border border-[#071D35]/8 hover:border-[#F58220]/60 shadow-sm hover:shadow-[0_20px_45px_rgba(245,130,32,0.14)] transition-all duration-400 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Subtle Orange Glow on Hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(245,130,32,0.12)_0%,transparent_70%)]"
                />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#071D35]/60 bg-white px-2.5 py-1 rounded-md border border-[#071D35]/8">
                      {tech.category}
                    </span>

                    <span className="text-xs font-mono-tech text-[#F58220] font-bold">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#071D35] tracking-tight mb-2 group-hover:text-[#F58220] transition-colors duration-300">
                    {tech.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#071D35]/70 font-body leading-relaxed mb-6">
                    {tech.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#071D35]/8 flex items-center justify-between text-[11px] font-mono-tech text-[#071D35]/50">
                  <span>ENTERPRISE GRADE</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
