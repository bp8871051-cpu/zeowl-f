'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Mail, Phone } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutCTA() {
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
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about-cta"
      ref={containerRef}
      className="relative w-full py-28 lg:py-36 bg-[#06182F] text-white font-sans overflow-hidden"
    >
      {/* Background Architectural Mesh & Subtle Dots */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Vibrant Ambient Glows */}
      <div className="absolute -top-24 left-1/3 w-[600px] h-[600px] bg-[#F57E20]/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-[#168CFF]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-bold text-[#F57E20] uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET&apos;S BUILD SOMETHING TOGETHER</span>
          </div>

          {/* Heading from Prompt */}
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Have an Idea? <br className="hidden sm:inline" />
            <span className="text-[#F57E20]">Let&apos;s Build It.</span>
          </h2>

          {/* Supporting Text */}
          <p className="font-body text-white/75 text-base sm:text-lg leading-[1.8] font-normal mb-10 max-w-xl">
            We turn bold concepts into market-ready digital realities. Reach out
            today to collaborate with our engineering and design team.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-10">
            <a
              href="mailto:info.zeowlinfotech@gmail.com"
              className="font-button inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F57E20] text-white font-bold text-base rounded-full shadow-[0_0_35px_rgba(245,126,32,0.4)] hover:bg-white hover:text-[#06182F] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 group cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+916352524266"
              className="font-button inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-bold text-base rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-[#F57E20]" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Available for New Projects
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Fast Response within 24 Hours</span>
            <span className="hidden sm:inline">•</span>
            <span>NDA Protected Collaboration</span>
          </div>

        </div>
      </div>
    </section>
  );
}
