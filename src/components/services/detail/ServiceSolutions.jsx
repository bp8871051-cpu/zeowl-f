'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Building2,
  Target,
  ShoppingBag,
  Users2,
  Cloud,
  Calendar,
  BarChart3,
  Cpu,
  Layers,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

const solutionIcons = {
  building: Building2,
  target: Target,
  'shopping-bag': ShoppingBag,
  users: Users2,
  cloud: Cloud,
  calendar: Calendar,
  'bar-chart': BarChart3,
  cpu: Cpu,
  layers: Layers,
};

export default function ServiceSolutions({ service }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const solutions = service.solutions;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const validCards = (cardsRef.current || []).filter(Boolean);
      validCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: (index % 4) * 0.08,
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
      className="relative w-full py-24 lg:py-36 bg-[#FFFFFF] text-[#071D35] overflow-hidden"
    >
      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20 pb-8 border-b border-[#071D35]/10">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#071D35]/5 border border-[#071D35]/10 text-xs font-mono-tech uppercase tracking-widest text-[#071D35] font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F58220]" />
              <span>TAILORED ARCHITECTURES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-[#071D35]">
              FROM IDEAS <br className="hidden sm:inline" />
              <span className="text-[#F58220]">TO REAL PRODUCTS.</span>
            </h2>
          </div>

          <p className="text-base text-[#071D35]/70 font-body max-w-md">
            Engineered tailored architectures designed to solve specific operational bottlenecks and capture measurable market share.
          </p>
        </div>

        {/* Editorial Grid: Asymmetric rhythm with varying card styles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {solutions.map((item, index) => {
            const Icon = solutionIcons[item.icon] || Sparkles;

            return (
              <div
                key={item.number}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-[#F7F7F4] border border-[#071D35]/8 hover:border-[#F58220]/60 shadow-[0_10px_30px_rgba(7,29,53,0.03)] hover:shadow-[0_20px_50px_rgba(245,130,32,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                {/* Subtle Hover Gradient Sheen */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(245,130,32,0.12)_0%,transparent_70%)]"
                />

                {/* Animated Bottom Orange Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#F58220] group-hover:w-full transition-all duration-500 rounded-b-3xl" />

                <div>
                  {/* Top Row: Number, Icon, Arrow */}
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <span className="text-sm font-mono-tech font-bold text-[#071D35]/40 group-hover:text-[#F58220] transition-colors duration-300">
                      // {item.number}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#071D35]/8 shadow-sm flex items-center justify-center text-[#071D35] group-hover:bg-[#F58220] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#071D35] tracking-tight mb-3 transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#071D35]/70 font-body leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono-tech px-2.5 py-0.5 rounded-full bg-white text-[#071D35]/70 border border-[#071D35]/8 group-hover:border-[#F58220]/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#071D35]/8 flex items-center justify-between text-xs font-button font-bold text-[#071D35]">
                    <span className="group-hover:text-[#F58220] transition-colors">
                      Learn Solution
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#F58220] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
