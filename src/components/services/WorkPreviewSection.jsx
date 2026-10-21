'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';
import { caseStudiesData } from '@/data/servicesData';

export default function WorkPreviewSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        if (!prefersReducedMotion) {
          gsap.fromTo(
            card,
            {
              clipPath: 'inset(18% 0% 0% 0%)',
              opacity: 0,
              y: 50,
            },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              opacity: 1,
              y: 0,
              duration: 1.0,
              delay: index * 0.15,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        } else {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#F6F7F9] text-[#10243E] overflow-hidden"
    >
      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#071A2F]/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#F47B20] font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F47B20]" />
              <span>PROVEN TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-[#071A2F]">
              Solutions We've Built
            </h2>
          </div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-button font-bold text-[#F47B20] hover:text-[#071A2F] transition-colors group self-center md:self-auto"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3 Large Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudiesData.map((project, index) => {
            return (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative flex flex-col justify-between rounded-3xl overflow-hidden bg-[#071A2F] text-white shadow-[0_20px_50px_rgba(7,26,47,0.12)] border border-white/10 hover:border-[#F47B20]/60 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Project Visual Area */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0B2544]">
                  {/* Background Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-95"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-[#071A2F]/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#071A2F]/80 backdrop-blur-md text-[11px] font-mono-tech text-white/90 border border-white/15">
                      {project.industry}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#F47B20] text-[11px] font-mono-tech text-white font-bold shadow-[0_2px_10px_rgba(244,123,32,0.4)]">
                      {project.metric}
                    </span>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Service Used Label */}
                    <div className="text-xs font-mono-tech text-[#F47B20] uppercase tracking-wider mb-2">
                      {project.service}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl font-heading font-extrabold text-white tracking-tight mb-3 transition-transform duration-300 group-hover:translate-x-1">
                      {project.title}
                    </h3>

                    {/* Short Result */}
                    <p className="text-sm text-white/70 font-body leading-relaxed mb-6">
                      {project.result}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.06] text-white/70 text-[11px] font-mono-tech border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link Row */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm font-button font-bold text-white group-hover:text-[#F47B20] transition-colors">
                    <Link href="/#work" className="flex items-center gap-2">
                      <span>View Case Study</span>
                    </Link>
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#F47B20] text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
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
