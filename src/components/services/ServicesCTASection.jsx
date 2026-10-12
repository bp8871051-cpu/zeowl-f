'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, MessageSquare, Zap, ShieldCheck } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function ServicesCTASection() {
  const sectionRef = useRef(null);
  const orbitalContainerRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // 1. Text entrance animation
      gsap.fromTo(
        '.cta-reveal-item',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 2. Orbital animations
      if (!prefersReducedMotion) {
        if (ring1Ref.current) {
          gsap.to(ring1Ref.current, {
            rotation: 360,
            duration: 25,
            repeat: -1,
            ease: 'none',
          });
        }
        if (ring2Ref.current) {
          gsap.to(ring2Ref.current, {
            rotation: -360,
            duration: 35,
            repeat: -1,
            ease: 'none',
          });
        }
        if (ring3Ref.current) {
          gsap.to(ring3Ref.current, {
            rotation: 360,
            duration: 45,
            repeat: -1,
            ease: 'none',
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 lg:py-36 bg-[#031326] text-white overflow-hidden border-t border-white/10"
    >
      {/* Background Glows and Atmospheric Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[170px] opacity-30"
          style={{
            background: 'radial-gradient(circle, #F47B20 0%, rgba(3, 19, 38, 0) 70%)',
          }}
        />
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #00A3FF 0%, rgba(3, 19, 38, 0) 70%)',
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* Left Column: CTA Content */}
        <div ref={textContainerRef} className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow badge */}
          <div className="cta-reveal-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 w-fit mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F47B20]" />
            <span className="text-xs font-mono-tech tracking-wider uppercase text-white/90 font-semibold">
              START YOUR TRANSFORMATION
            </span>
          </div>

          {/* Heading */}
          <h2 className="cta-reveal-item text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-[1.1] mb-6">
            Have A Digital Idea? <br />
            <span className="text-[#F47B20] relative inline-block">
              Let's Build It Together.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="cta-reveal-item text-base sm:text-xl text-white/75 font-body leading-relaxed max-w-xl mb-10">
            Tell us what you're building. We'll help you turn your idea into a scalable digital solution.
          </p>

          {/* CTA Buttons */}
          <div className="cta-reveal-item flex flex-wrap items-center gap-4 mb-10">
            <MagneticButton
              href="#contact"
              className="px-8 py-4 bg-[#F47B20] hover:bg-[#ff8930] text-white rounded-full shadow-[0_12px_35px_rgba(244,123,32,0.4)] hover:shadow-[0_18px_45px_rgba(244,123,32,0.55)] transition-all flex items-center gap-2 text-base font-bold group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/35 rounded-full backdrop-blur-md transition-all text-base font-bold"
            >
              <span>Talk To An Expert</span>
            </MagneticButton>
          </div>

          {/* Fast Response Guarantee */}
          <div className="cta-reveal-item flex items-center gap-6 text-xs sm:text-sm text-white/60 font-body">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#F47B20]" />
              <span>Prompt 24hr discovery response</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% NDA &amp; IP Protection</span>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Glowing Orange Orbital Visual */}
        <div
          ref={orbitalContainerRef}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px]"
        >
          {/* Orbital Concentric SVG Rings */}
          <div className="relative w-[340px] sm:w-[420px] aspect-square flex items-center justify-center">
            {/* Outer Ring 3 */}
            <div
              ref={ring3Ref}
              className="absolute inset-0 rounded-full border border-dashed border-white/10"
            >
              {/* Particle node on outer ring */}
              <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-[#00A3FF] shadow-[0_0_8px_#00A3FF]" />
            </div>

            {/* Middle Ring 2 */}
            <div
              ref={ring2Ref}
              className="absolute inset-8 sm:inset-10 rounded-full border border-[#F47B20]/30 shadow-[0_0_20px_rgba(244,123,32,0.1)]"
            >
              {/* Particle node on middle ring */}
              <div className="absolute bottom-10 right-10 w-2.5 h-2.5 rounded-full bg-[#F47B20] shadow-[0_0_12px_#F47B20]" />
            </div>

            {/* Inner Ring 1 */}
            <div
              ref={ring1Ref}
              className="absolute inset-16 sm:inset-20 rounded-full border border-dashed border-white/20"
            >
              <div className="absolute top-4 right-12 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
            </div>

            {/* Central Glowing Core */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#F47B20] via-[#ff9543] to-[#FFAA6B] shadow-[0_0_60px_rgba(244,123,32,0.6)] flex flex-col items-center justify-center text-center p-4 border border-white/40">
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#071A2F] font-bold">
                ZEOWL
              </span>
              <span className="text-sm sm:text-base font-heading font-black text-[#071A2F] leading-tight">
                LAUNCH
              </span>
              <span className="text-[9px] font-mono-tech text-[#071A2F]/80">2026 Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
