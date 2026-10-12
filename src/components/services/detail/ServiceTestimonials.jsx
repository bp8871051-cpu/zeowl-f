'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';

export default function ServiceTestimonials({ service }) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const t = service.testimonial;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [service]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-36 bg-[#041525] text-white overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] rounded-full bg-[#F58220]/10 blur-[180px] pointer-events-none" />

      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono-tech uppercase tracking-widest text-[#F58220] font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F58220]" />
            <span>CLIENT EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-tight">
            TRUSTED BY <br className="hidden sm:inline" />
            <span className="text-[#F58220]">GROWING BUSINESSES.</span>
          </h2>
        </div>

        {/* Large Editorial Quotation Card */}
        <div
          ref={cardRef}
          className="relative rounded-[32px] bg-gradient-to-br from-[#0B2544] via-[#071D35] to-[#041525] border border-white/15 p-8 sm:p-14 lg:p-18 shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Subtle Orange Glow Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F58220]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Star Rating & Quote Icon */}
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div className="flex items-center gap-1.5 text-[#F58220]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-xs font-mono-tech text-white/70">
                5.0 VERIFIED CLIENT OUTCOME
              </span>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#F58220]">
              <Quote className="w-6 h-6" />
            </div>
          </div>

          {/* Large Editorial Quotation Text */}
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-medium leading-[1.25] text-white tracking-tight mb-12 max-w-5xl">
            {t.quote}
          </blockquote>

          {/* Client Attribution & Verified Metric Strip */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#F58220] text-[#071D35] font-heading font-black text-xl flex items-center justify-center shadow-lg">
                {t.author.charAt(0)}
              </div>
              <div>
                <div className="text-xl font-heading font-extrabold text-white">
                  {t.author}
                </div>
                <div className="text-sm font-body text-white/70">
                  {t.role} // <span className="text-[#F58220]">{t.company}</span>
                </div>
              </div>
            </div>

            {/* Impact Pill */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono-tech text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{t.impact}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
