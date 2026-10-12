'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Layers,
  Server,
  Database,
  Cpu,
  Palette,
  Sparkles,
  Cloud,
  Check,
  Terminal,
  Code2,
  Atom,
} from 'lucide-react';
import { technologyCategories } from '@/data/servicesData';

export default function TechnologyStackSection() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [hoveredTech, setHoveredTech] = useState(null);
  const sectionRef = useRef(null);
  const centralHubRef = useRef(null);
  const nodesGridRef = useRef(null);

  const categories = ['ALL', ...technologyCategories.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'ALL'
      ? technologyCategories
      : technologyCategories.filter((c) => c.category === selectedCategory);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // Animate central hub
      if (centralHubRef.current) {
        gsap.fromTo(
          centralHubRef.current,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Stagger in tech cards
      if (!prefersReducedMotion && nodesGridRef.current) {
        gsap.fromTo(
          '.tech-node-item',
          { opacity: 0, y: 25, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.04,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: nodesGridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#F6F7F9] text-[#10243E] overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#F47B20]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-[#071A2F]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#071A2F]/10 text-xs font-mono-tech uppercase tracking-widest text-[#F47B20] font-semibold mb-4 shadow-sm">
            <Atom className="w-3.5 h-3.5 text-[#F47B20] animate-spin" />
            <span>MODERN STACK ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-[#071A2F] mb-4">
            Technology That Powers Our Work
          </h2>
          <p className="text-base sm:text-lg text-[#10243E]/75 font-body">
            We use modern technologies and proven tools to build fast, scalable and future-ready digital products.
          </p>
        </div>

        {/* Central Visual Node: ZEOWL DIGITAL ENGINEERING */}
        <div
          ref={centralHubRef}
          className="relative max-w-2xl mx-auto mb-16 p-8 rounded-3xl bg-[#071A2F] text-white border border-white/10 shadow-[0_20px_60px_rgba(7,26,47,0.25)] flex flex-col items-center justify-center text-center overflow-hidden"
        >
          {/* Subtle Rotating Orbital Glow Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[380px] h-[380px] rounded-full border border-dashed border-[#F47B20]/30 animate-spin opacity-40 duration-1000" />
            <div className="w-[260px] h-[260px] rounded-full border border-white/10 animate-reverse-spin opacity-30" />
          </div>

          <div className="relative z-10">
            <span className="text-xs uppercase font-mono-tech tracking-[0.3em] text-[#F47B20] font-semibold block mb-2">
              ZEOWL INFOTECH
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-white mb-2">
              DIGITAL ENGINEERING
            </h3>
            <p className="text-xs sm:text-sm font-body text-white/70 max-w-md mx-auto">
              Modular, resilient and hyper-optimized tech stacks customized for high throughput.
            </p>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono-tech font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#F47B20] text-white shadow-[0_4px_15px_rgba(244,123,32,0.35)]'
                  : 'bg-white text-[#071A2F]/75 border border-[#071A2F]/10 hover:border-[#F47B20]/50 hover:text-[#071A2F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Tech Grid */}
        <div ref={nodesGridRef} className="space-y-12">
          {filteredCategories.map((catGroup) => (
            <div key={catGroup.category} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono-tech font-bold uppercase tracking-widest text-[#F47B20]">
                  {catGroup.category}
                </span>
                <div className="flex-1 h-[1px] bg-[#071A2F]/10" />
                <span className="text-xs text-[#10243E]/50 font-body hidden sm:inline-block">
                  {catGroup.description}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {catGroup.technologies.map((tech) => {
                  const isHovered = hoveredTech === tech.name;
                  return (
                    <div
                      key={tech.name}
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="tech-node-item group relative p-4 rounded-2xl bg-white border border-[#071A2F]/8 hover:border-[#F47B20] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(244,123,32,0.18)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer overflow-hidden"
                    >
                      {/* Top Row: Tech Name & Badge */}
                      <div className="flex items-start justify-between gap-1 mb-2">
                        <span className="text-sm font-heading font-bold text-[#071A2F] group-hover:text-[#F47B20] transition-colors">
                          {tech.name}
                        </span>
                        <span className="text-[10px] font-mono-tech text-[#10243E]/50 bg-[#F6F7F9] px-1.5 py-0.5 rounded border border-[#071A2F]/5 group-hover:border-[#F47B20]/30 transition-colors">
                          {tech.badge}
                        </span>
                      </div>

                      {/* Tooltip Description on Hover */}
                      <p className="text-[11px] text-[#10243E]/60 font-body leading-tight mt-1 line-clamp-2 group-hover:text-[#10243E]/90 transition-colors">
                        {tech.desc}
                      </p>

                      {/* Bottom glowing indicator */}
                      <div className="mt-3 pt-2 border-t border-[#071A2F]/5 flex items-center justify-between text-[10px] font-mono-tech text-[#10243E]/40 group-hover:text-[#F47B20]">
                        <span>Verified</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:bg-[#F47B20] transition-colors" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
