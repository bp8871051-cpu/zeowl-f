'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Lightbulb, Compass, Code, Rocket, CheckCircle2 } from 'lucide-react';

export default function ProcessHeroSection() {
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
        '.process-reveal-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
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
      id="process-hero"
      className="relative w-full min-h-[660px] sm:min-h-[720px] lg:min-h-[820px] xl:min-h-[880px] flex items-center overflow-hidden bg-white text-[#06182F] pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 select-none"
    >
      {/* Background Graphic Image - Right side has glowing lightbulb & illuminated trail to summit */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="/process-bg.jpg"
          alt="Zeowl Process - From Idea Spark to Digital Summit"
          className="w-full h-full object-cover object-[80%_center] md:object-[75%_center] lg:object-center opacity-75 sm:opacity-80 lg:opacity-85"
        />
        {/* Soft light blend mask on the left side to guarantee 100% text legibility */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.75)_35%,rgba(255,255,255,0.15)_52%,transparent_65%)] pointer-events-none" />
        {/* Soft opacity reduction mask on the right side as requested */}
        <div className="absolute inset-0 bg-gradient-to-l from-white/50 via-white/25 to-transparent pointer-events-none" />
        {/* Responsive mobile/tablet overlay so text is ultra-crisp on small screens */}
        <div className="absolute inset-0 bg-white/60 md:bg-white/30 lg:bg-transparent pointer-events-none" />
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-[580px] h-[520px] bg-white/70 blur-[75px] rounded-full pointer-events-none" />
      </div>

      {/* Content Container (Positioned on the Left to complement the mountain & lightbulb visual on the right) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-xl lg:max-w-2xl" ref={contentRef}>

          {/* Eyebrow Pill */}
          <div className="process-reveal-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#06182F]/15 text-xs font-mono-tech uppercase tracking-widest text-[#f57e20] font-bold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#f57e20] animate-pulse" />
            <span>OUR PROVEN PROCESS</span>
          </div>

          {/* Main Heading */}
          <h1 className="process-reveal-item text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-black tracking-tight text-[#06182F] leading-[1.12] mb-6 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            From The Spark of An Idea <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#f57e20] via-[#E86714] to-[#C8550B] bg-clip-text text-transparent">
              To Digital Summit
            </span>
          </h1>

          {/* Divider */}
          <div className="process-reveal-item h-[3.5px] w-20 bg-[#f57e20] rounded-full shadow-[0_2px_8px_rgba(244,123,32,0.4)] mb-6" />

          {/* Subheading / Description */}
          <p className="process-reveal-item text-base sm:text-lg md:text-xl text-[#06182F] font-semibold leading-relaxed mb-8 drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
            We follow a transparent, collaborative, and agile delivery process engineered to bring clarity to complex challenges and turn your vision into high-impact digital solutions.
          </p>

          {/* Feature Badges */}
          <div className="process-reveal-item grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#06182F]/15 shadow-sm hover:border-[#f57e20]/60 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#f57e20]/15 flex items-center justify-center text-[#f57e20] shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-heading font-extrabold text-[#06182F]">1. Discovery</div>
                <div className="text-xs text-[#06182F]/80 font-mono-tech font-bold">Goal Alignment</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#06182F]/15 shadow-sm hover:border-[#f57e20]/60 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#f57e20]/15 flex items-center justify-center text-[#f57e20] shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-heading font-extrabold text-[#06182F]">2. Strategy</div>
                <div className="text-xs text-[#06182F]/80 font-mono-tech font-bold">Roadmap &amp; Tech</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#06182F]/15 shadow-sm hover:border-[#f57e20]/60 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#f57e20]/15 flex items-center justify-center text-[#f57e20] shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-heading font-extrabold text-[#06182F]">3. Execution</div>
                <div className="text-xs text-[#06182F]/80 font-mono-tech font-bold">Sprint Builds &amp; QA</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#06182F]/15 shadow-sm hover:border-[#f57e20]/60 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#f57e20]/15 flex items-center justify-center text-[#f57e20] shrink-0">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-heading font-extrabold text-[#06182F]">4. Scale &amp; Grow</div>
                <div className="text-xs text-[#06182F]/80 font-mono-tech font-bold">Continuous Success</div>
              </div>
            </div>
          </div>

          {/* CTA & Explore Button */}
          <div className="process-reveal-item flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href="#our-journey"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#f57e20] text-white font-button font-bold text-sm hover:bg-[#06182F] shadow-lg shadow-[#f57e20]/30 transition-all duration-300 group cursor-pointer text-center"
            >
              <span>Explore The Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:rotate-45 transition-transform" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-[#06182F] font-button font-bold text-sm border border-[#06182F]/15 shadow-sm transition-all duration-300 text-center"
            >
              <span>Let's Work Together</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Seamless curved transition from Section 1 (Hero) into Section 2 (#040C1A) */}
      <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 sm:h-20 md:h-24 lg:h-28 block"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 120 L 1440 120 L 1440 15 C 1180 45 950 100 720 105 C 460 110 200 80 0 75 Z"
            fill="#040C1A"
          />
        </svg>
      </div>
    </section>
  );
}
