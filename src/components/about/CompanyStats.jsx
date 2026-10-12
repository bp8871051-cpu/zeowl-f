'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FolderGit2, Users2, Award, Star } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const statsData = [
  {
    id: 1,
    target: 50,
    suffix: '+',
    label: 'Projects Delivered',
    icon: FolderGit2,
  },
  {
    id: 2,
    target: 30,
    suffix: '+',
    label: 'Happy Clients',
    icon: Users2,
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
    icon: Star,
  },
];

export default function CompanyStats() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      // Animate container upward reveal
      gsap.fromTo(
        cardRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Animate icons scale/fade
      const icons = cardRef.current.querySelectorAll('.stat-icon');
      gsap.fromTo(
        icons,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'back.out(1.8)',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Animate numbers counting from 0
      statsData.forEach((stat) => {
        const el = cardRef.current.querySelector(`.stat-number-${stat.id}`);
        if (!el) return;

        if (prefersReducedMotion) {
          el.textContent = `${stat.target}${stat.suffix}`;
          return;
        }

        const counterObj = { val: 0 };
        gsap.to(counterObj, {
          val: stat.target,
          duration: 2,
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
      className="relative w-full py-8 lg:py-12 bg-[#F7F9FC] font-sans"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        
        {/* Dark Navy Rounded Stats Container */}
        <div
          ref={cardRef}
          className="relative w-full bg-[#071A33] rounded-[2rem] p-8 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(7,26,51,0.25)] border border-white/10 overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#F58220]/15 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-[#168CFF]/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Stats Grid */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center">
            {statsData.map((stat, index) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={stat.id}
                  className={`flex flex-col items-center text-center px-4 relative ${
                    index !== statsData.length - 1
                      ? 'lg:border-r lg:border-white/[0.12]'
                      : ''
                  }`}
                >
                  {/* Glowing Icon Container */}
                  <div className="stat-icon w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-[#F58220] shadow-[0_0_20px_rgba(245,130,32,0.2)] mb-4 transition-transform duration-300 hover:scale-110">
                    <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Animated Number */}
                  <div
                    className={`stat-number-${stat.id} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2`}
                  >
                    0{stat.suffix}
                  </div>

                  {/* Label */}
                  <p className="text-white/70 text-xs sm:text-sm font-medium">
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
