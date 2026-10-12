'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react';

export default function ServiceProjects({ service }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const defaultProjects = [
    {
      number: '01',
      title: `${service.title} Flagship Solution`,
      category: service.title,
      tags: ['Strategy', 'Engineering', 'UI/UX'],
      result: '+180% Measurable Performance Uplift',
      image: '/portfolio/mockup-web-dev.jpg',
    },
    {
      number: '02',
      title: `${service.title} Enterprise Platform`,
      category: service.title,
      tags: ['Cloud', 'Scale', 'Analytics'],
      result: 'Sub-400ms High Concurrency Response',
      image: '/portfolio/mockup-software-dev.jpg',
    },
    {
      number: '03',
      title: `${service.title} Digital Transformation`,
      category: service.title,
      tags: ['Automation', 'APIs', 'Security'],
      result: '70% Operational Efficiency Gained',
      image: '/portfolio/mockup-ai-automation.jpg',
    },
    {
      number: '04',
      title: `${service.title} Growth Engine`,
      category: service.title,
      tags: ['Design System', 'Next.js', 'Tailwind'],
      result: '3.4x Conversion Growth Delivered',
      image: '/portfolio/mockup-uiux-design.jpg',
    },
  ];

  const projects =
    service.selectedWork && service.selectedWork.length > 0
      ? service.selectedWork
      : defaultProjects;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            delay: (idx % 2) * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [service]);

  return (
    <section
      id="selected-work"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 lg:py-36 bg-[#FFFFFF] text-[#071D35] overflow-hidden"
    >
      <div className="max-w-[88rem] w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14 lg:mb-18 pb-6 sm:pb-8 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-mono uppercase tracking-widest text-[#FF7900] font-bold mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF7900] animate-pulse" />
              <span>PORTFOLIO // SELECTED WORK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-[#0A1C30]">
              WORK THAT <br className="hidden sm:inline" />
              <span className="text-[#FF7900]">SPEAKS FOR ITSELF.</span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-orange-50 border border-slate-200/90 hover:border-orange-200 text-sm font-bold text-[#FF7900] shadow-sm hover:shadow transition-all duration-300 group cursor-pointer w-full sm:w-auto"
          >
            <span>Explore Complete Portfolio</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Dynamic Balanced Editorial Grid (Rows sum to 12 columns with zero empty spaces) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {projects.map((proj, idx) => {
            // Row 1: Card 0 (8 cols), Card 1 (4 cols) -> 12
            // Row 2: Card 2 (5 cols), Card 3 (7 cols) -> 12
            let colSpan = 'lg:col-span-6';
            if (idx === 0) {
              colSpan = 'lg:col-span-7 xl:col-span-8';
            } else if (idx === 1) {
              colSpan = 'lg:col-span-5 xl:col-span-4';
            } else if (idx === 2) {
              colSpan = 'lg:col-span-5 xl:col-span-5';
            } else if (idx === 3) {
              colSpan = 'lg:col-span-7 xl:col-span-7';
            }

            return (
              <Link
                key={proj.title + idx}
                href="/portfolio"
                ref={(el) => (cardsRef.current[idx] = el)}
                className={`${colSpan} group relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#0A1C30] text-white border border-slate-200/80 shadow-[0_20px_50px_rgba(10,28,48,0.08)] hover:shadow-[0_28px_60px_rgba(255,121,0,0.18)] transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between min-h-[380px] sm:min-h-[440px] lg:min-h-[490px] p-5 sm:p-8 lg:p-10`}
              >
                {/* Background Image Container with Zoom on Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-75 group-hover:opacity-90"
                    loading="lazy"
                  />

                  {/* High Legibility Dark Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C30] via-[#0A1C30]/75 to-[#0A1C30]/35 group-hover:via-[#0A1C30]/65 transition-colors duration-500" />
                </div>

                {/* Top Badges */}
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <span className="px-3 py-1.5 sm:px-3.5 rounded-full bg-[#0A1C30]/85 backdrop-blur-md text-[11px] sm:text-xs font-mono font-medium text-white/90 border border-white/15 shadow-sm">
                    {proj.number || `0${idx + 1}`} // {proj.category}
                  </span>

                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white group-hover:bg-[#FF7900] group-hover:border-[#FF7900] group-hover:scale-110 transition-all duration-300 group-hover:rotate-45 shadow-md shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Information Panel */}
                <div className="relative z-10 pt-10 sm:pt-16">
                  {/* Result / Impact Highlight */}
                  {proj.result && (
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#FF7900]/25 border border-[#FF7900]/45 backdrop-blur-md text-[11px] sm:text-xs font-bold text-[#FF7900] mb-2.5 sm:mb-3 shadow-sm">
                      <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      <span>{proj.result}</span>
                    </div>
                  )}

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-heading font-black text-white tracking-tight leading-snug mb-2 sm:mb-3 group-hover:text-[#FF7900] transition-colors">
                    {proj.title}
                  </h3>

                  {/* Tech Tags */}
                  {proj.tags && proj.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white/90 border border-white/15 group-hover:border-white/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Discovery Banner */}
        <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-slate-500 font-medium">
            Looking for something specific? We build custom solutions tailored to your unique requirements.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7900] hover:text-[#e66c00] transition-colors shrink-0 group"
          >
            <span>View All Zeowl Case Studies</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
