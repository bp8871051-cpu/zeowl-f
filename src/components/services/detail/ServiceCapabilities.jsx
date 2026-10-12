'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ServiceCapabilities({ service }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const rowsRef = useRef([]);
  const rightVisualRef = useRef(null);

  const capabilities =
    service.capabilities && service.capabilities.length > 0
      ? service.capabilities
      : [
          {
            number: '01',
            title: `${service.title} Strategy & Architecture`,
            description: `Custom ${service.title} architecture engineered to scale your business operations and maximize digital ROI.`,
            details: ['Strategic Planning', 'Technical Blueprint', 'Production Deployment'],
            image: '/portfolio/mockup-web-dev.jpg',
          },
        ];
  const activeCap = capabilities[activeIndex] || capabilities[0];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Rows stagger entrance
      const validRows = (rowsRef.current || []).filter(Boolean);
      if (validRows.length > 0) {
        gsap.fromTo(
          validRows,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );
      }

      // Right visual entrance
      if (rightVisualRef.current) {
        gsap.fromTo(
          rightVisualRef.current,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [service]);

  // Image swap transition on activeIndex change
  const handleSelectRow = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);

    if (rightVisualRef.current) {
      gsap.fromTo(
        rightVisualRef.current,
        { opacity: 0.4, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-36 bg-[#F8FAFC] text-[#0A1C30] overflow-hidden"
    >
      {/* Background Tech Grid Artwork */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/services-capabilities-bg.png"
          alt="Capabilities Background"
          className="w-full h-full object-cover object-center select-none"
        />
        {/* Soft overlay to ensure pristine contrast */}
        <div className="absolute inset-0 bg-white/25 pointer-events-none" />
      </div>

      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-orange-200/80 text-xs font-mono uppercase tracking-widest text-[#FF7900] font-bold mb-3 sm:mb-4 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FF7900] animate-pulse" />
            <span>WHAT WE DO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-[#0A1C30] leading-tight">
            EVERYTHING YOU NEED <br className="hidden sm:inline" />
            <span className="text-[#FF7900]">TO GROW DIGITALLY.</span>
          </h2>
        </div>

        {/* 2-Column Split: Interactive Rows (Left) & Dynamic Visual (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* LEFT: Interactive Numbered Capability Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-slate-200/90 border-y border-slate-200/90">
            {capabilities.map((cap, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={cap.number || index}
                  ref={(el) => (rowsRef.current[index] = el)}
                  onMouseEnter={() => handleSelectRow(index)}
                  onClick={() => handleSelectRow(index)}
                  className={`group relative py-5 sm:py-8 cursor-pointer transition-all duration-300 select-none rounded-xl my-1 ${
                    isActive
                      ? 'pl-4 sm:pl-7 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(10,28,48,0.06)] border border-slate-200/70'
                      : 'hover:pl-3 hover:bg-white/40'
                  }`}
                >
                  {/* Active Orange Left Indicator Bar */}
                  <div
                    className={`absolute left-0 top-2 bottom-2 w-1.5 bg-[#FF7900] transition-all duration-300 rounded-r ${
                      isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                    }`}
                  />

                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-baseline gap-3 sm:gap-6">
                      {/* Number */}
                      <span
                        className={`text-lg sm:text-2xl font-mono font-bold transition-all duration-300 ${
                          isActive
                            ? 'text-[#FF7900] translate-x-0.5 sm:translate-x-1'
                            : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      >
                        {cap.number || `0${index + 1}`}
                      </span>

                      {/* Title */}
                      <h3
                        className={`text-lg sm:text-2xl lg:text-3xl font-heading font-extrabold tracking-tight transition-colors duration-300 ${
                          isActive ? 'text-[#0A1C30]' : 'text-[#0A1C30]/80 group-hover:text-[#0A1C30]'
                        }`}
                      >
                        {cap.title}
                      </h3>
                    </div>

                    {/* Arrow Icon */}
                    <div
                      className={`w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isActive
                          ? 'bg-[#FF7900] text-white rotate-45 shadow-[0_4px_16px_rgba(255,121,0,0.4)]'
                          : 'bg-slate-100 text-slate-400 group-hover:text-[#0A1C30] group-hover:bg-slate-200/80'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Description & Technical Bullet Tags (Expands when active) */}
                  <div
                    className={`grid transition-all duration-400 ease-out overflow-hidden ${
                      isActive
                        ? 'grid-rows-[1fr] opacity-100 pt-3 sm:pt-4 mt-2'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden pl-7 sm:pl-12">
                      <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-3 sm:mb-4 max-w-xl">
                        {cap.description}
                      </p>

                      {/* Mobile Inline Deliverable Image */}
                      <div className="block lg:hidden my-3 rounded-xl overflow-hidden aspect-[16/10] bg-[#041525] border border-slate-200/80 shadow-sm">
                        <img
                          src={cap.image}
                          alt={cap.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {cap.details && cap.details.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {cap.details.map((detail) => (
                            <span
                              key={detail}
                              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-orange-50/90 text-[11px] sm:text-xs font-mono font-semibold text-[#0A1C30] border border-orange-200/70 shadow-2xs"
                            >
                              <CheckCircle2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF7900]" />
                              <span>{detail}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dynamic Image & Specification Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div
              ref={rightVisualRef}
              className="relative rounded-3xl overflow-hidden bg-[#0A1C30] text-white border border-slate-700/60 shadow-[0_25px_60px_rgba(10,28,48,0.22)] p-4 sm:p-6"
            >
              {/* Image Preview Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#041525]">
                <img
                  src={activeCap.image}
                  alt={activeCap.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041525] via-[#041525]/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#041525]/85 backdrop-blur-md text-[11px] font-mono text-[#FF7900] border border-[#FF7900]/40 font-bold uppercase shadow-sm">
                    CAPABILITY {activeCap.number || '01'} // ACTIVE
                  </span>
                </div>
              </div>

              {/* Title & Micro Summary */}
              <div className="px-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                  DELIVERABLE SPECIFICATION
                </div>
                <h4 className="text-xl font-heading font-bold text-white mb-3">
                  {activeCap.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-4">
                  {activeCap.description}
                </p>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>DEPLOYMENT GRADE</span>
                  <span className="text-emerald-400 font-bold">100% PRODUCTION READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
