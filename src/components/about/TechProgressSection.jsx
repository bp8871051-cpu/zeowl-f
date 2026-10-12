'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Cpu,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Megaphone,
  Database,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const techTags = [
  { name: 'AI & Automation', icon: Cpu },
  { name: 'Web Development', icon: Globe },
  { name: 'App Development', icon: Smartphone },
  { name: 'UI/UX Design', icon: Palette },
  { name: 'Cloud Solutions', icon: Cloud },
  { name: 'Digital Marketing', icon: Megaphone },
  { name: 'CRM & ERP', icon: Database },
  { name: 'E-Commerce', icon: ShoppingBag },
];

export default function TechProgressSection() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const tagsRef = useRef(null);
  const bgGridRef = useRef(null);
  const [activeTag, setActiveTag] = useState('AI & Automation');

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      // Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // Tags stagger into view
      if (tagsRef.current) {
        gsap.fromTo(
          tagsRef.current.children,
          { scale: 0.85, opacity: 0, y: 25 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'back.out(1.6)',
            scrollTrigger: {
              trigger: tagsRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Background grid movement
      if (bgGridRef.current) {
        gsap.to(bgGridRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 lg:py-36 bg-[#071A33] text-white font-sans overflow-hidden"
    >
      {/* Background Animated Dots/Grid */}
      <div
        ref={bgGridRef}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#F58220]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-[#168CFF]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#F58220] rounded-full" />
            <span className="text-[#F58220] uppercase tracking-[0.2em] text-xs font-bold">
              ENGINEERING DIGITAL VALUE
            </span>
            <div className="w-8 h-[2px] bg-[#F58220] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-black tracking-tight leading-[1.15] mb-6">
            Technology That Moves{' '}
            <span className="text-[#F58220]">Businesses Forward.</span>
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-[1.8] font-normal">
            We combine modern technology, creative thinking and business strategy
            to build digital solutions that create measurable impact.
          </p>
        </div>

        {/* Interactive Technology Tags Grid */}
        <div
          ref={tagsRef}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 max-w-4xl mx-auto"
        >
          {techTags.map((tag) => {
            const IconComp = tag.icon;
            const isSelected = activeTag === tag.name;
            return (
              <button
                key={tag.name}
                type="button"
                onClick={() => setActiveTag(tag.name)}
                className={`group px-5 sm:px-6 py-3.5 rounded-full border text-sm sm:text-base font-semibold flex items-center gap-3 transition-all duration-300 focus:outline-none cursor-pointer ${
                  isSelected
                    ? 'bg-[#F58220] border-[#F58220] text-white shadow-[0_0_25px_rgba(245,130,32,0.4)] scale-105'
                    : 'bg-white/[0.06] border-white/10 text-white/80 hover:text-white hover:border-[#F58220]/60 hover:bg-white/[0.1] hover:scale-105'
                }`}
              >
                <IconComp
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isSelected ? 'scale-110' : 'text-[#F58220] group-hover:scale-110'
                  }`}
                />
                <span>{tag.name}</span>
                {isSelected && <Sparkles className="w-3.5 h-3.5 animate-pulse" />}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
