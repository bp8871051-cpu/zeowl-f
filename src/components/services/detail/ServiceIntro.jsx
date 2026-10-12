'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Palette, Cpu, Sparkles } from 'lucide-react';

const principleIcons = [Compass, Palette, Cpu];

export default function ServiceIntro({ service }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const principlesRef = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
      );

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );

      tl.fromTo(
        principlesRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        },
        '-=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [service]);

  const statement = service.bigStatement;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-36 bg-[#F7F7F4] text-[#071D35] overflow-hidden border-b border-[#071D35]/10"
    >
      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#071D35]/5 border border-[#071D35]/10 text-xs font-mono-tech tracking-widest text-[#071D35] font-semibold uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F58220]" />
          <span>{statement.eyebrow}</span>
        </div>

        {/* 2-Column Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20 lg:mb-28">
          {/* LEFT: Large Typography */}
          <div className="lg:col-span-7">
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-black tracking-tight leading-[1.12] text-[#071D35]"
            >
              WE DON'T JUST BUILD{' '}
              <span className="text-[#F58220]">DIGITAL PRODUCTS.</span>
              <br className="hidden sm:inline" /> WE BUILD EXPERIENCES THAT CREATE{' '}
              <span className="text-[#F58220]">BUSINESS VALUE.</span>
            </h2>
          </div>

          {/* RIGHT: Professional Explanation */}
          <div className="lg:col-span-5 lg:pt-3">
            <p
              ref={textRef}
              className="text-base sm:text-lg text-[#071D35]/75 font-body leading-relaxed max-w-xl"
            >
              {statement.paragraph}
            </p>
          </div>
        </div>

        {/* THREE VISUAL PRINCIPLES (Not generic cards - clean editorial line items with generous whitespace) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-12 border-t border-[#071D35]/10">
          {statement.principles.map((p, index) => {
            const Icon = principleIcons[index] || Sparkles;

            return (
              <div
                key={p.title}
                ref={(el) => (principlesRef.current[index] = el)}
                className="group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-heading font-black text-[#071D35]/25 group-hover:text-[#F58220] transition-colors duration-300">
                      {p.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white border border-[#071D35]/10 shadow-sm flex items-center justify-center text-[#F58220] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-extrabold text-[#071D35] tracking-tight mb-3">
                    {p.title}
                  </h3>

                  <p className="text-sm text-[#071D35]/70 font-body leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {/* Subtle active accent indicator line */}
                <div className="w-0 group-hover:w-full h-0.5 bg-[#F58220] transition-all duration-500 mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
