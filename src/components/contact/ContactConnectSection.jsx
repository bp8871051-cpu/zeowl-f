'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const connectCards = [
  {
    id: 'project',
    title: 'Have a Project?',
    subtitle: 'Discuss your requirements',
    image: '/connect-card-1.png',
    actionType: 'scroll',
    target: 'contact-form',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#f57e20]"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
        <circle cx="8" cy="12" r="0.9" fill="currentColor" />
        <circle cx="12" cy="12" r="0.9" fill="currentColor" />
        <circle cx="16" cy="12" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'partnership',
    title: 'Explore Partnership',
    subtitle: "Let's create opportunities",
    image: '/connect-card-2.png',
    actionType: 'link',
    target:
      'mailto:info.zeowlinfotech@gmail.com?subject=Partnership%20Inquiry%20-%20Zeowl%20Infotech',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#f57e20]"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'general',
    title: 'General Inquiry',
    subtitle: 'Get in touch with us',
    image: '/connect-card-3.png',
    actionType: 'link',
    target:
      'mailto:info.zeowlinfotech@gmail.com?subject=General%20Inquiry%20-%20Zeowl%20Infotech',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#f57e20]"
      >
        <rect width="20" height="14" x="2" y="7" rx="3" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M2 13h20" />
        <circle cx="12" cy="13" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ContactConnectSection() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

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
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Cards reveal with subtle stagger
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const handleCardClick = (card, e) => {
    if (card.actionType === 'scroll') {
      e.preventDefault();
      const formEl = document.getElementById(card.target);
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const nameInput = document.getElementById('fullName');
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 600);
        }
      }
    } else if (card.actionType === 'link' && card.target) {
      window.location.href = card.target;
    }
  };

  return (
    <section
      id="connect-section"
      ref={containerRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white font-sans overflow-hidden"
    >
      {/* Ambient decorative glow at top-right echoing the hero artwork */}
      <div className="absolute -top-24 right-0 w-[550px] h-[350px] bg-gradient-to-bl from-[#f57e20]/15 via-purple-500/5 to-transparent rounded-full blur-[100px] pointer-events-none select-none" />

      <div className="max-w-[1400px] w-[92%] mx-auto relative z-10">
        {/* Section Header: Left-aligned with Eyebrow and accent line */}
        <div ref={headerRef} className="max-w-xl mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[#f57e20] text-xs font-bold uppercase tracking-[0.2em] font-button">
              CONNECT WITH US
            </span>
            <span className="w-10 h-[2px] bg-[#f57e20] rounded-full inline-block" />
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0B1528] tracking-tight leading-[1.12]">
            Choose <br />
            How to <span className="text-[#f57e20]">Connect</span>
          </h2>
        </div>

        {/* 3 Premium Cards with Angled Top-Right Corner */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {connectCards.map((card) => (
            <div
              key={card.id}
              onClick={(e) => handleCardClick(card, e)}
              className="relative p-[1px] rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] bg-neutral-800/80 hover:bg-[#f57e20]/80 transition-all duration-300 hover:shadow-[0_22px_55px_rgba(245,126,32,0.22)] hover:-translate-y-2 group cursor-pointer"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 56px) 0, 100% 56px, 100% 100%, 0 100%)',
              }}
            >
              <div
                className="relative w-full h-full min-h-[260px] sm:min-h-[280px] bg-[#0B1528] rounded-tl-[23px] rounded-bl-[23px] rounded-br-[23px] overflow-hidden p-6 sm:p-7 lg:p-8 flex flex-col justify-between"
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 55px) 0, 100% 55px, 100% 100%, 0 100%)',
                }}
              >
                {/* Right Side 3D Artwork with smooth navy fade */}
                <div className="absolute right-0 top-0 bottom-0 w-[58%] pointer-events-none select-none overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Seamless gradients blending art into navy card body */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/80 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/70 via-transparent to-[#0B1528]/40" />
                </div>

                {/* Left Side Content */}
                <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px] sm:min-h-[235px] max-w-[64%]">
                  {/* Top: Orange Line Icon + Titles */}
                  <div>
                    <div className="mb-5 sm:mb-6">{card.icon}</div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight group-hover:text-[#f57e20] transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-neutral-300/80 leading-relaxed font-normal">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Bottom: Circular Arrow Button */}
                  <div className="pt-6">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#f57e20] bg-[#0B1528]/80 text-[#f57e20] flex items-center justify-center group-hover:bg-[#f57e20] group-hover:text-[#0B1528] group-hover:shadow-[0_0_20px_rgba(245,126,32,0.45)] transition-all duration-300">
                      <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
