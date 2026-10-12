'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactFinalCTA() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.16,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const handleStartProject = (e) => {
    e.preventDefault();
    const formEl = document.getElementById('contact-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const nameInput = document.getElementById('fullName');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 600);
      }
    }
  };

  return (
    <section
      id="final-cta-section"
      ref={containerRef}
      className="relative w-full py-24 sm:py-28 lg:py-32 bg-[#06182f] text-white font-sans overflow-hidden"
    >
      {/* Background Graphic & Atmospheric Depth */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="/lets-build-bg.png"
          alt="Zeowl Infotech Summit"
          className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06182f] via-[#06182f]/85 to-[#06182f]/95" />
      </div>

      {/* Ambient Orange & Navy Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#f57e20]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1200px] w-[92%] mx-auto relative z-10 text-center">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto flex flex-col items-center justify-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[#f57e20] uppercase tracking-[0.2em] mb-6 backdrop-blur-md font-button shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#f57e20]" />
            <span>HAVE A BIGGER IDEA?</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6">
            Let’s Make It <br className="hidden sm:inline" />
            <span className="text-[#f57e20]">Happen Together.</span>
          </h2>

          {/* Description */}
          <p className="font-body text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Have a bold idea or a business challenge?
            Let’s turn it into a powerful digital solution that creates real impact.
          </p>

          {/* Button */}
          <button
            type="button"
            onClick={handleStartProject}
            className="font-button inline-flex items-center justify-center gap-3 px-9 py-4.5 bg-[#f57e20] hover:bg-white text-white hover:text-[#06182f] font-black text-base rounded-full shadow-[0_0_35px_rgba(245,126,32,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all duration-300 group cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Small text */}
          <p className="font-body text-xs text-white/60 tracking-wider mt-4">
            No commitment • Free initial consultation
          </p>
        </div>
      </div>
    </section>
  );
}
