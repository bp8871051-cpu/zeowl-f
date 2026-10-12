'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, TrendingUp, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function ServiceBenefits({ service }) {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);

  const benefits = service.whyChooseUs;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const validBlocks = (blocksRef.current || []).filter(Boolean);
      validBlocks.forEach((block, idx) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            delay: idx * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
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
      className="relative w-full py-24 lg:py-36 bg-[#F7F7F4] text-[#071D35] overflow-hidden"
    >
      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#071D35]/5 border border-[#071D35]/10 text-xs font-mono-tech uppercase tracking-widest text-[#071D35] font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F58220]" />
            <span>WHY ZEOWL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-[#071D35] leading-tight">
            DESIGNED AROUND <br className="hidden sm:inline" />
            <span className="text-[#F58220]">YOUR BUSINESS.</span>
          </h2>
        </div>

        {/* 4 Large Asymmetric Editorial Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {benefits.map((b, idx) => {
            // Asymmetric rhythm: Row 1 has 7-col and 5-col; Row 2 has 5-col and 7-col
            const colSpan =
              idx === 0
                ? 'lg:col-span-7 bg-[#071D35] text-white border-white/10'
                : idx === 1
                ? 'lg:col-span-5 bg-white text-[#071D35] border-[#071D35]/10'
                : idx === 2
                ? 'lg:col-span-5 bg-white text-[#071D35] border-[#071D35]/10'
                : 'lg:col-span-7 bg-[#071D35] text-white border-white/10';

            const isDark = idx === 0 || idx === 3;

            return (
              <div
                key={b.title}
                ref={(el) => (blocksRef.current[idx] = el)}
                className={`${colSpan} group relative flex flex-col justify-between p-8 sm:p-12 rounded-[28px] border shadow-[0_15px_40px_rgba(7,29,53,0.06)] hover:shadow-[0_25px_60px_rgba(245,130,32,0.15)] transition-all duration-500 overflow-hidden`}
              >
                {/* Subtle Orange Accent Top Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F58220] transition-colors duration-400" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <span
                      className={`text-2xl sm:text-3xl font-heading font-black ${
                        isDark ? 'text-white/30' : 'text-[#071D35]/25'
                      } group-hover:text-[#F58220] transition-colors`}
                    >
                      {b.number}
                    </span>

                    <span
                      className={`text-xs font-mono-tech uppercase tracking-wider px-3 py-1 rounded-full ${
                        isDark
                          ? 'bg-white/10 text-white/80 border border-white/15'
                          : 'bg-[#071D35]/5 text-[#071D35]/70 border border-[#071D35]/8'
                      }`}
                    >
                      {b.subtitle}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight mb-4 ${
                      isDark ? 'text-white' : 'text-[#071D35]'
                    }`}
                  >
                    {b.title}
                  </h3>

                  <p
                    className={`text-sm sm:text-base font-body leading-relaxed mb-8 max-w-xl ${
                      isDark ? 'text-white/75' : 'text-[#071D35]/75'
                    }`}
                  >
                    {b.desc}
                  </p>
                </div>

                {/* Bottom Metric Stamp */}
                <div
                  className={`pt-6 border-t flex items-baseline justify-between gap-4 ${
                    isDark ? 'border-white/10' : 'border-[#071D35]/10'
                  }`}
                >
                  <span
                    className={`text-xs font-mono-tech ${
                      isDark ? 'text-white/60' : 'text-[#071D35]/60'
                    }`}
                  >
                    VERIFIED BENCHMARK
                  </span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-heading font-black text-[#F58220] block">
                      {b.metric}
                    </span>
                    <span
                      className={`text-xs font-mono-tech ${
                        isDark ? 'text-white/70' : 'text-[#071D35]/70'
                      }`}
                    >
                      {b.metricLabel}
                    </span>
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
