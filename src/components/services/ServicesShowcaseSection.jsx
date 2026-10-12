'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Layers, Code2, TrendingUp, Cpu } from 'lucide-react';

export default function ServicesShowcaseSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.showcase-reveal-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[820px] xl:min-h-[880px] flex items-center overflow-hidden bg-white text-[#06182F] pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 select-none"
    >
      {/* Background Graphic Image - Right side has 100% full vibrant opacity */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="/services-showcase-bg.jpg"
          alt="Zeowl Digital Services 3D Showcase"
          className="w-full h-full object-cover object-[75%_center] md:object-[70%_center] lg:object-center opacity-100"
        />
        {/* Luminous soft white backdrop strictly on the left for text readability, leaving the right side 100% vivid & untouched */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.65)_32%,rgba(255,255,255,0.08)_50%,transparent_58%)] pointer-events-none" />
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-[580px] h-[520px] bg-white/60 blur-[75px] rounded-full pointer-events-none" />
      </div>

      {/* Content Container (Positioned on the Left half to complement the 3D graphics on the right) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-xl lg:max-w-2xl" ref={contentRef}>
          
          {/* Eyebrow Pill */}
          <div className="showcase-reveal-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#06182F]/15 text-xs font-mono-tech uppercase tracking-widest text-[#F47B20] font-bold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F47B20] animate-pulse" />
            <span>OUR CORE SERVICES</span>
          </div>

          {/* Main Heading */}
          <h1 className="showcase-reveal-item text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-black tracking-tight text-[#06182F] leading-[1.12] mb-6 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            Transforming Ideas Into <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#F47B20] via-[#E86714] to-[#C8550B] bg-clip-text text-transparent">
              Scalable Digital Realities
            </span>
          </h1>

          {/* Divider */}
          <div className="showcase-reveal-item h-[3.5px] w-20 bg-[#F47B20] rounded-full shadow-[0_2px_8px_rgba(244,123,32,0.4)] mb-6" />

          {/* Subheading / Description - Darker, bolder, high-contrast text */}
          <p className="showcase-reveal-item text-base sm:text-lg md:text-xl text-[#06182F] font-semibold leading-relaxed mb-8 drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
            We engineer high-performance web applications, intuitive UI/UX design, custom software architectures, and automated digital ecosystems tailored for forward-thinking enterprises.
          </p>

          {/* Feature Badges matching the 4 visual icons in the graphic */}
          <div className="showcase-reveal-item grid grid-cols-2 gap-3 sm:gap-4 mb-8">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#06182F]/15 shadow-sm hover:border-[#F47B20]/60 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#F47B20]/15 flex items-center justify-center text-[#F47B20]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-heading font-extrabold text-[#06182F]">UI/UX Design</div>
                <div className="text-xs text-[#06182F]/80 font-mono-tech font-bold">Human-Centered</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#06182F]/15 shadow-sm hover:border-[#F47B20]/60 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#F47B20]/15 flex items-center justify-center text-[#F47B20]">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-heading font-extrabold text-[#06182F]">Web &amp; Software</div>
                <div className="text-xs text-[#06182F]/80 font-mono-tech font-bold">Full-Stack Tech</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#06182F]/15 shadow-sm hover:border-[#F47B20]/60 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#F47B20]/15 flex items-center justify-center text-[#F47B20]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-heading font-extrabold text-[#06182F]">Digital Growth</div>
                <div className="text-xs text-[#06182F]/80 font-mono-tech font-bold">Data &amp; Scale</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#06182F]/15 shadow-sm hover:border-[#F47B20]/60 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#F47B20]/15 flex items-center justify-center text-[#F47B20]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-heading font-extrabold text-[#06182F]">AI &amp; Automation</div>
                <div className="text-xs text-[#06182F]/80 font-mono-tech font-bold">Smart Pipelines</div>
              </div>
            </div>
          </div>

          {/* CTA & Placeholder Ready indicator */}
          <div className="showcase-reveal-item flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F47B20] text-white font-button font-bold text-sm hover:bg-[#06182F] shadow-lg shadow-[#F47B20]/30 transition-all duration-300 group"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <span className="text-xs text-[#06182F]/80 font-mono-tech font-bold bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#06182F]/15 shadow-xs">
              Awaiting your custom content
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
