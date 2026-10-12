'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Star, Award, TrendingUp } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const statsData = [
  {
    id: 1,
    target: 50,
    suffix: '+',
    label: 'Projects Delivered',
    icon: Users,
  },
  {
    id: 2,
    target: 30,
    suffix: '+',
    label: 'Happy Clients',
    icon: Star,
  },
  {
    id: 3,
    target: 5,
    suffix: '+',
    label: 'Years of Experience',
    icon: Award,
  },
  {
    id: 4,
    target: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: TrendingUp,
  },
];

export default function AboutStats() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      // 1. Entrance animation: Card moves from y: 60 -> 0, opacity 0 -> 1
      gsap.fromTo(
        cardRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // 2. Each statistic appears with stagger
      const statItems = cardRef.current?.querySelectorAll('.stat-item');
      if (statItems && statItems.length > 0) {
        gsap.fromTo(
          statItems,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }

      // 3. Counter animations: 0 -> target when visible
      statsData.forEach((stat) => {
        const el = cardRef.current?.querySelector(`.stat-number-${stat.id}`);
        if (!el) return;

        if (prefersReducedMotion) {
          el.textContent = `${stat.target}${stat.suffix}`;
          return;
        }

        const counterObj = { val: 0 };
        gsap.to(counterObj, {
          val: stat.target,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.floor(counterObj.val)}${stat.suffix}`;
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-6 lg:py-10 bg-white font-sans"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        
        {/* Large Rounded Container: Dark Navy */}
        <div
          ref={cardRef}
          className="relative w-full bg-[#06182F] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(6,24,47,0.3)] border border-white/10 overflow-hidden"
        >
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#F57E20]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-[#168CFF]/12 rounded-full blur-[100px] pointer-events-none" />

          {/* Desktop 4 columns, Mobile 2x2 grid */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center">
            {statsData.map((stat, index) => {
              const IconComp = stat.icon;
              const isLast = index === statsData.length - 1;

              return (
                <div
                  key={stat.id}
                  className={`stat-item flex flex-col items-center text-center px-4 relative ${
                    !isLast ? 'lg:border-r lg:border-white/10' : ''
                  }`}
                >
                  {/* Glowing Orange Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-[#F57E20] shadow-[0_0_20px_rgba(245,126,32,0.25)] mb-4 transition-transform duration-300 hover:scale-110">
                    <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Large Animated Number */}
                  <div
                    className={`font-heading stat-number-${stat.id} text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-1.5`}
                  >
                    0{stat.suffix}
                  </div>

                  {/* Small Descriptive Text */}
                  <p className="font-body text-white/70 text-xs sm:text-sm font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
