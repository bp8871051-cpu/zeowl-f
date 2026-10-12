'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ServiceProcess({ service }) {
  const sectionRef = useRef(null);
  const lineProgressRef = useRef(null);
  const nodesRef = useRef([]);
  const stepsContainerRef = useRef(null);

  const processSteps = service.process;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Progressive drawing of horizontal line on desktop
      if (lineProgressRef.current) {
        gsap.fromTo(
          lineProgressRef.current,
          { scaleX: 0, transformOrigin: 'left' },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 40%',
              scrub: 1.0,
            },
          }
        );
      }

      // Sequential activation of desktop nodes
      const validNodes = (nodesRef.current || []).filter(Boolean);
      validNodes.forEach((node, idx) => {
        gsap.fromTo(
          node,
          { opacity: 0, y: 25, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            delay: (idx % 7) * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: node,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // Mobile vertical timeline step entrance
      const mobileNodes = sectionRef.current.querySelectorAll('.mobile-process-step');
      if (mobileNodes && mobileNodes.length > 0) {
        gsap.fromTo(
          mobileNodes,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [service]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-36 bg-[#041525] text-white overflow-hidden"
    >
      {/* Subtle Mountain / Abstract Tech Wireframe Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#041525] via-[#041525]/90 to-[#041525] pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F58220]/10 blur-[180px] pointer-events-none" />

      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono-tech uppercase tracking-widest text-[#F58220] font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F58220]" />
            <span>OUR PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-tight">
            FROM STRATEGY <br className="hidden sm:inline" />
            <span className="text-[#F58220]">TO SUCCESS.</span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP TIMELINE (Horizontal Scrollable / Responsive Grid)               */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative mb-12">
          {/* Background Connecting SVG Track */}
          <div className="absolute top-8 left-6 right-6 h-0.5 bg-white/15 z-0">
            <div
              ref={lineProgressRef}
              className="w-full h-full bg-gradient-to-r from-[#F58220] via-[#ffaa64] to-[#F58220] shadow-[0_0_15px_#F58220] will-change-transform"
            />
          </div>

          {/* 7 Horizontal Step Cards */}
          <div
            ref={stepsContainerRef}
            className="grid grid-cols-7 gap-4 relative z-10"
          >
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                ref={(el) => (nodesRef.current[idx] = el)}
                className="group flex flex-col items-start pr-2"
              >
                {/* Glowing Node Circle */}
                <div className="w-16 h-16 rounded-full bg-[#071D35] border-2 border-white/20 group-hover:border-[#F58220] flex items-center justify-center text-sm font-mono-tech font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(245,130,32,0.5)] mb-6 bg-gradient-to-b from-[#0B2544] to-[#041525]">
                  <span className="group-hover:text-[#F58220] transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-base font-heading font-extrabold text-white tracking-tight mb-2 group-hover:text-[#F58220] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-white/70 font-body leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET TIMELINE (Vertical Progress)                             */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative pl-6 sm:pl-8 border-l-2 border-[#F58220]/40 space-y-10">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="mobile-process-step relative pl-6"
            >
              {/* Bullet Node on Border */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#041525] border-2 border-[#F58220] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#F58220]" />
              </div>

              <span className="text-xs font-mono-tech text-[#F58220] font-bold block mb-1">
                PHASE // {step.step}
              </span>

              <h3 className="text-xl font-heading font-bold text-white mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-white/70 font-body leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
