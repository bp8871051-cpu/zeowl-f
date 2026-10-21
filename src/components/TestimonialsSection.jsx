'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Star,
  Quote,
  FileText,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Headphones,
} from 'lucide-react';
import { fetchTestimonials } from '@/lib/api';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const defaultTestimonialsCards = [
  {
    id: 1,
    name: 'Rahul Mehta',
    designation: 'Business Owner',
    review:
      'Zeowl delivered an amazing website for our business. The team was professional and supportive throughout the process. Highly recommended!',
    rating: 5,
    initials: 'RM',
    avatarBg: 'bg-gradient-to-tr from-[#071A36] to-[#1E293B]',
  },
  {
    id: 2,
    name: 'Priya Shah',
    designation: 'Startup Founder',
    review:
      'Great communication, on-time delivery and outstanding quality. The team understood our requirements perfectly.',
    rating: 5,
    initials: 'PS',
    avatarBg: 'bg-gradient-to-tr from-[#FF7A00] to-[#FFA84A]',
  },
  {
    id: 3,
    name: 'Amit Patel',
    designation: 'Marketing Head',
    review:
      'They provided a solution that really helped us grow our business. Professional team and excellent support.',
    rating: 5,
    initials: 'AP',
    avatarBg: 'bg-gradient-to-tr from-[#0F2D59] to-[#FF7A00]',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [testimonials, setTestimonials] = useState(defaultTestimonialsCards);

  // Fetch dynamic testimonials from Laravel API with fallback to static cards
  useEffect(() => {
    let isMounted = true;
    async function loadTestimonials() {
      try {
        const apiData = await fetchTestimonials();
        if (isMounted && apiData && Array.isArray(apiData) && apiData.length > 0) {
          const mapped = apiData.slice(0, 3).map((item, index) => {
            const clientName = item.name || item.client_name || 'Client';
            const initials = clientName
              ? clientName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)
              : 'CL';
            const bgs = [
              'bg-gradient-to-tr from-[#071A36] to-[#1E293B]',
              'bg-gradient-to-tr from-[#FF7A00] to-[#FFA84A]',
              'bg-gradient-to-tr from-[#0F2D59] to-[#FF7A00]',
            ];
            return {
              id: item.id || index + 1,
              name: clientName,
              designation: item.role || item.client_role || item.designation || 'Client',
              review: item.content || item.review,
              rating: item.rating || 5,
              initials,
              avatarBg: bgs[index % bgs.length],
            };
          });
          setTestimonials(mapped);
        }
      } catch (err) {
        // Fallback remains in place
      }
    }
    loadTestimonials();
    return () => {
      isMounted = false;
    };
  }, []);

  // Ensure ScrollTrigger positions stay accurate after hydration
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);
    return () => clearTimeout(timer);
  }, [testimonials]);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion) return;

      const isMobile = window.innerWidth < 768;

      // ----------------------------------------------------
      // 1. HERO SCROLL ENTRANCE TIMELINE
      // ----------------------------------------------------
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-testi-hero]',
          start: 'top 88%',
          once: true,
        },
      });

      heroTl
        .from('[data-testi-badge]', {
          opacity: 0,
          y: 12,
          duration: 0.35,
          ease: 'power3.out',
        })
        .from(
          '[data-testi-eyebrow]',
          { opacity: 0, y: 15, duration: 0.35, ease: 'power3.out' },
          '-=0.2'
        )
        .from(
          '[data-testi-heading]',
          { opacity: 0, y: 25, duration: 0.45, ease: 'power3.out' },
          '-=0.2'
        )
        .from(
          '[data-testi-desc]',
          { opacity: 0, y: 15, duration: 0.4, ease: 'power3.out' },
          '-=0.25'
        )
        .from(
          '[data-testi-pillars]',
          { opacity: 0, y: 15, duration: 0.4, ease: 'power3.out' },
          '-=0.25'
        );

      // ----------------------------------------------------
      // 2. CLIENT TESTIMONIAL CARDS SCROLL ENTRANCE
      // ----------------------------------------------------
      gsap.from('[data-testi-card-header]', {
        opacity: 0,
        y: 25,
        duration: 0.5,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '[data-testi-card-header]',
          start: 'top 92%',
          once: true,
        },
      });

      gsap.from('[data-testi-card]', {
        opacity: 0,
        y: 25,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '[data-testi-cards-grid]',
          start: 'top 92%',
          once: true,
        },
      });

      // ----------------------------------------------------
      // 3. PDF SHOWCASE SCROLL ENTRANCE
      // ----------------------------------------------------
      gsap.from('[data-testi-pdf-mockup]', {
        opacity: 0,
        x: isMobile ? 0 : -25,
        y: isMobile ? 20 : 0,
        scale: 0.96,
        duration: 0.55,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '[data-testi-pdf-container]',
          start: 'top 92%',
          once: true,
        },
      });

      gsap.from('[data-testi-pdf-content]', {
        opacity: 0,
        x: isMobile ? 0 : 25,
        y: isMobile ? 20 : 0,
        duration: 0.55,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '[data-testi-pdf-container]',
          start: 'top 92%',
          once: true,
        },
      });

    },
    { scope: sectionRef }
  );

  // Desktop subtle mouse parallax on the background collage image (max 8-12px)
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    const isTouch =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!isDesktop || isTouch || prefersReducedMotion || !imageRef.current) return;

    const el = imageRef.current;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power2.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xOffset = (e.clientX / innerWidth - 0.5) * 20; // max +/- 10px
      const yOffset = (e.clientY / innerHeight - 0.5) * 16; // max +/- 8px
      xTo(xOffset);
      yTo(yOffset);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="testimonials-section relative w-full bg-[#FFFFFF] overflow-hidden font-sans text-[#071A36]"
    >
      {/* ======================================================== */}
      {/* PART 1: TESTIMONIALS & TRUST (DIRECT FULL-WIDTH HERO)    */}
      {/* Edge-to-edge direct background, NO block borders/margins */}
      {/* Strictly ends before Client Testimonials                 */}
      {/* ======================================================== */}
      <div
        data-testi-hero
        className="relative w-full overflow-hidden bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:py-0 lg:min-h-[490px] lg:h-[500px] xl:h-[530px] 2xl:h-[560px] flex items-center"
      >
        {/* Full-width Direct Background Layer (Edge-to-Edge) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none hidden lg:block z-0">
          <img
            src="/testimonials/testimonials-trust-bg.png"
            alt="Zeowl Infotech Testimonials & Trust Background"
            className="w-full h-full object-cover object-right"
          />
          {/* Subtle soft gradient overlay to lower the opacity of the left-side wave graphics */}
          <div
            className="absolute inset-y-0 left-0 w-[55%] pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.28) 45%, rgba(255, 255, 255, 0) 85%)',
            }}
          />
        </div>

        {/* Main Content Layout Grid */}
        <div className="relative z-10 max-w-[1440px] w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-12 h-full items-center">
            {/* LEFT COLUMN: Eyebrow, Rating, Headings, Subtitle, 3 Trust Badges */}
            <div className="lg:col-span-6 xl:col-span-6 py-4 sm:py-6 lg:py-4 pr-0 lg:pr-6 flex flex-col justify-center text-left">
              {/* Eyebrow: orange horizontal bar + TESTIMONIALS & TRUST */}
              <div data-testi-eyebrow className="flex items-center gap-3 mb-3.5">
                <div className="w-8 sm:w-10 h-[2.5px] bg-[#FF7A00] rounded-full" />
                <span className="text-[#FF7A00] font-extrabold text-[12px] sm:text-[13px] tracking-[0.16em] uppercase font-mono">
                  TESTIMONIALS & TRUST
                </span>
              </div>

              {/* Rating Pill Badge: 5 stars + 4.9/5 FROM 150+ CLIENTS */}
              <div
                data-testi-badge
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FF7A00]/30 shadow-sm text-[#071A36] w-fit mb-4"
              >
                <div className="flex items-center text-[#FF7A00] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF7A00] text-[#FF7A00]" />
                  ))}
                </div>
                <span className="font-extrabold text-[11px] sm:text-[12px] tracking-wide text-[#071A36]">
                  4.9/5 FROM 150+ CLIENTS
                </span>
              </div>

              {/* Main Heading: Real People. Real Results. */}
              <h2
                data-testi-heading
                className="font-black tracking-[-0.03em] leading-[1.05] text-[36px] sm:text-[46px] md:text-[52px] lg:text-[48px] xl:text-[56px] mb-4"
              >
                <span className="text-[#071A36] block">Real People.</span>
                <span className="text-[#FF7A00] block">Real Results.</span>
              </h2>

              {/* Description Paragraph */}
              <p
                data-testi-desc
                className="text-[#475569] text-[14.5px] sm:text-[15.5px] lg:text-[15.5px] xl:text-[16.5px] leading-[1.65] max-w-xl mb-6 font-normal"
              >
                Discover why startups, businesses, and global <strong className="font-semibold text-[#071A36]">enterprises</strong> trust Zeowl Infotech to build powerful software, web applications, and automation solutions that create real impact.
              </p>

              {/* 3 Trust Feature Badges */}
              <div
                data-testi-pillars
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full"
              >
                {/* 1. 99.4% On-Time */}
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-[0_4px_16px_rgba(7,26,54,0.04)] hover:border-[#FF7A00]/40 transition-all">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-extrabold text-[#071A36] text-[12.5px] sm:text-[13px] leading-snug">
                      99.4% On-Time
                    </div>
                    <div className="text-[10px] sm:text-[10.5px] text-[#64748B] leading-tight mt-0.5">
                      All projects delivered on schedule
                    </div>
                  </div>
                </div>

                {/* 2. 100% IP Ownership */}
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-[0_4px_16px_rgba(7,26,54,0.04)] hover:border-[#FF7A00]/40 transition-all">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-50 text-[#FF7A00] border border-orange-200/60 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-extrabold text-[#071A36] text-[12.5px] sm:text-[13px] leading-snug">
                      100% IP Ownership
                    </div>
                    <div className="text-[10px] sm:text-[10.5px] text-[#64748B] leading-tight mt-0.5">
                      Your idea, your ownership
                    </div>
                  </div>
                </div>

                {/* 3. Direct Support */}
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-[0_4px_16px_rgba(7,26,54,0.04)] hover:border-[#FF7A00]/40 transition-all">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-200/60 flex items-center justify-center shrink-0">
                    <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-extrabold text-[#071A36] text-[12.5px] sm:text-[13px] leading-snug">
                      Direct Support
                    </div>
                    <div className="text-[10px] sm:text-[10.5px] text-[#64748B] leading-tight mt-0.5">
                      Dedicated team, always available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Floating Reviews & Annotations */}
            <div
              ref={imageRef}
              className="lg:col-span-6 xl:col-span-6 relative w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-0 lg:h-full flex items-center justify-center py-4 lg:py-0"
            >
              {/* Mobile/Tablet Background View (Visible only < lg so team image is crisp on phones) */}
              <div className="lg:hidden relative w-full h-[320px] sm:h-[380px] overflow-hidden">
                <img
                  src="/testimonials/testimonials-trust-bg.png"
                  alt="Zeowl Engineering Team"
                  className="w-full h-full object-contain sm:object-cover object-right"
                />
              </div>

              {/* Doodles & Handwritten Annotations */}
              {/* 1. Collaborative Approach */}
              <div className="absolute top-[6%] sm:top-[8%] left-[2%] sm:left-[4%] lg:left-[2%] xl:left-[4%] z-20 flex flex-col items-center pointer-events-none select-none">
                <span
                  className="text-[#071A36] text-[18px] sm:text-[22px] font-bold -rotate-6 tracking-wide drop-shadow-sm font-handwriting"
                >
                  Collaborative<br />Approach
                </span>
                <svg width="42" height="34" viewBox="0 0 46 38" fill="none" className="text-[#FF7A00] -mt-1 ml-3 rotate-12">
                  <path d="M6 4C18 6 32 16 38 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M30 31L38 34L39 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* 2. Top Arching Arrow to Card 1 */}
              <div className="absolute top-[4%] sm:top-[5%] left-[34%] lg:left-[32%] xl:left-[34%] z-20 pointer-events-none select-none hidden sm:block">
                <svg width="68" height="32" viewBox="0 0 70 35" fill="none" className="text-[#FF7A00]">
                  <path d="M6 28C22 8 48 6 62 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
                  <path d="M53 19L63 19L60 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* 3. Turning Ideas into Impact */}
              <div className="absolute top-[8%] sm:top-[10%] right-[1%] sm:right-[3%] lg:right-[-1%] xl:right-[1%] z-20 flex flex-col items-center pointer-events-none select-none">
                <span
                  className="text-[#071A36] text-[18px] sm:text-[22px] font-bold rotate-6 tracking-wide text-right drop-shadow-sm font-handwriting"
                >
                  Turning<br />Ideas into<br />Impact
                </span>
                <svg width="46" height="50" viewBox="0 0 50 55" fill="none" className="text-[#FF7A00] mt-1 -rotate-6">
                  <path d="M8 8C26 4 38 18 36 32C34 44 20 46 16 38C12 30 22 22 36 28C42 32 44 42 42 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M35 48L42 52L46 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* 4. Bottom Sweeping Arrow under laptop */}
              <div className="absolute bottom-[6%] sm:bottom-[7%] left-[18%] lg:left-[16%] xl:left-[20%] z-20 pointer-events-none select-none hidden sm:block">
                <svg width="78" height="34" viewBox="0 0 80 40" fill="none" className="text-[#FF7A00]">
                  <path d="M72 8C52 28 28 32 10 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 33L10 26L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Floating Review Card 1 (Top Right) */}
              <div
                className="absolute top-[5%] sm:top-[7%] right-[6%] sm:right-[10%] lg:right-[6%] xl:right-[10%] z-30 flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-md rounded-2xl px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-[0_12px_28px_rgba(7,26,54,0.12)] border border-neutral-100 hover:scale-105 transition-all duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                  alt="Client Reviewer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-[#FF7A00]/30 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-0.5 text-[#FF7A00] mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#FF7A00]" />
                    ))}
                  </div>
                  <div className="text-[10.5px] sm:text-[11.5px] font-bold text-[#071A36] leading-tight">
                    Amazing team!<br className="hidden sm:inline" /> Highly recommended.
                  </div>
                </div>
              </div>

              {/* Floating Review Card 2 (Bottom Left, to the left of laptop) */}
              <div
                className="absolute bottom-[20%] sm:bottom-[18%] left-[-2%] sm:left-[2%] lg:left-[-4%] xl:left-[-1%] z-30 flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-md rounded-2xl px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-[0_12px_28px_rgba(7,26,54,0.12)] border border-neutral-100 hover:scale-105 transition-all duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                  alt="Client Reviewer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-[#FF7A00]/30 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-0.5 text-[#FF7A00] mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#FF7A00]" />
                    ))}
                  </div>
                  <div className="text-[10.5px] sm:text-[11.5px] font-bold text-[#071A36] leading-tight">
                    Great communication<br className="hidden sm:inline" /> and professional work.
                  </div>
                </div>
              </div>

              {/* Floating Review Card 3 (Bottom Right) */}
              <div
                className="absolute bottom-[6%] sm:bottom-[8%] right-[2%] sm:right-[4%] lg:right-[0%] xl:right-[2%] z-30 flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-md rounded-2xl px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-[0_12px_28px_rgba(7,26,54,0.12)] border border-neutral-100 hover:scale-105 transition-all duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80"
                  alt="Client Reviewer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-[#FF7A00]/30 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-0.5 text-[#FF7A00] mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#FF7A00]" />
                    ))}
                  </div>
                  <div className="text-[10.5px] sm:text-[11.5px] font-bold text-[#071A36] leading-tight">
                    Delivered beyond<br className="hidden sm:inline" /> our expectations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PART 2 & 3: CLIENT TESTIMONIALS & PDF SHOWCASE           */}
        {/* Clean container starting below Part 1                    */}
        {/* ======================================================== */}
        <div className="testimonials-container max-w-[1450px] w-[92%] mx-auto relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
          {/* PART 2: CLIENT TESTIMONIALS (What Our Clients Say) */}
          <div id="testimonials-cards">
          {/* Section Header */}
          <div
            data-testi-card-header
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-3.5">
              <div className="w-6 h-[2px] bg-[#FF7A00] rounded-full" />
              <span className="text-[#FF7A00] uppercase text-[13px] font-bold tracking-[0.12em] font-mono">
                CLIENT TESTIMONIALS
              </span>
              <div className="w-6 h-[2px] bg-[#FF7A00] rounded-full" />
            </div>

            {/* Heading: "What Our" (Dark Navy) + "Clients Say" (Orange) */}
            <h3 className="text-[#071A36] text-[30px] sm:text-[38px] lg:text-[44px] font-extrabold tracking-tight leading-[1.1] mb-4">
              What Our <span className="text-[#FF7A00]">Clients Say</span>
            </h3>

            {/* Description */}
            <p className="text-[#64748B] text-[15.5px] sm:text-[17px] leading-[1.6] font-normal">
              Read genuine feedback and experiences from the businesses and clients
              we've worked with.
            </p>
          </div>

          {/* 3 Premium Testimonial Cards */}
          <div
            data-testi-cards-grid
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {testimonials.map((card) => (
              <div
                key={card.id}
                data-testi-card
                className="group relative bg-[#FFFFFF] border border-[#071A36]/[0.08] hover:border-[#FF7A00]/40 rounded-[20px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(7,26,54,0.05)] hover:shadow-[0_20px_45px_rgba(7,26,54,0.11)] transition-all duration-300 hover:-translate-y-1.5 cursor-default overflow-hidden"
              >
                {/* Top Corner Orange Accent on Hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[rgba(255,122,0,0.08)] to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Orange Quote Icon + 5 Orange Stars */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-[12px] bg-[rgba(255,122,0,0.10)] text-[#FF7A00] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Quote className="w-5 h-5 fill-[#FF7A00] text-[#FF7A00]" />
                    </div>

                    {/* 5 Orange Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(card.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FF7A00] text-[#FF7A00]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-[#334155] text-[15px] sm:text-[15.5px] leading-[1.65] font-normal mb-8 italic">
                    "{card.review}"
                  </p>
                </div>

                {/* Bottom Bar: Avatar + Name + Designation */}
                <div className="flex items-center gap-3.5 pt-5 border-t border-[#071A36]/[0.06]">
                  <div
                    className={`w-11 h-11 rounded-full ${card.avatarBg} text-white font-bold text-[14px] flex items-center justify-center shrink-0 shadow-sm ring-2 ring-white`}
                  >
                    {card.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#071A36] text-[16px] tracking-tight leading-snug">
                      {card.name}
                    </h4>
                    <span className="text-[13px] text-[#64748B] font-medium leading-none block mt-0.5">
                      {card.designation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* PART 3: PDF TESTIMONIAL SHOWCASE                         */}
        {/* ======================================================== */}
        <div
          data-testi-pdf-container
          className="mt-20 sm:mt-24 lg:mt-28 bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9] border border-[#071A36]/[0.08] rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 lg:p-14 shadow-[0_15px_40px_rgba(7,26,54,0.04)] relative overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div
            className="absolute -right-20 -bottom-20 w-[400px] h-[400px] rounded-full pointer-events-none blur-[90px] -z-10 opacity-40"
            style={{
              background:
                'radial-gradient(circle, rgba(255,122,0,0.2) 0%, transparent 70%)',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-[46%_54%] gap-10 lg:gap-14 items-center">
            {/* LEFT: Realistic Layered PDF Document Preview Mockup */}
            <div
              data-testi-pdf-mockup
              className="flex items-center justify-center w-full"
            >
              <a
                href="/testimonials/zeowl-testimonials.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full max-w-[420px] aspect-[1.32/1] sm:aspect-[1.38/1] flex items-center justify-center cursor-pointer select-none transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Stacked Sheet 2 (Backmost Page) */}
                <div className="absolute inset-x-5 top-0 bottom-6 bg-[#E2E8F0]/70 rounded-[18px] transform rotate-[4deg] shadow-sm border border-slate-300/40" />

                {/* Stacked Sheet 1 (Middle Page) */}
                <div className="absolute inset-x-2.5 top-1 bottom-3 bg-[#EEF2F6] rounded-[18px] transform -rotate-[2.5deg] shadow-md border border-slate-300/60" />

                {/* Main Front Document Card */}
                <div className="relative w-full h-full bg-[#FFFFFF] rounded-[20px] border border-[#071A36]/[0.10] shadow-[0_15px_35px_rgba(7,26,54,0.09)] group-hover:shadow-[0_20px_45px_rgba(255,122,0,0.18)] p-6 sm:p-7 flex flex-col justify-between transition-shadow duration-300 overflow-hidden">
                  {/* Top Bar: PDF Pill Badge + Verified Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-[#FF7A00]/10 text-[#FF7A00] border border-[#FF7A00]/25 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                      <FileText className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>PDF Document</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-emerald-600 text-[11px] font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Reviews</span>
                    </div>
                  </div>

                  {/* Document Content Simulation */}
                  <div className="my-3 sm:my-4">
                    <span className="text-[11px] font-bold text-[#FF7A00] uppercase tracking-wider block font-mono mb-1">
                      ZEOWL INFOTECH
                    </span>
                    <h5 className="font-extrabold text-[#071A36] text-[16px] sm:text-[18px] leading-tight tracking-tight mb-2">
                      Client Feedback &amp; Verified Case Studies
                    </h5>
                    <p className="text-[#64748B] text-[12px] sm:text-[12.5px] leading-relaxed line-clamp-2">
                      Comprehensive portfolio of authentic client testimonials, project
                      satisfaction scores, and digital growth metrics.
                    </p>
                  </div>

                  {/* Document Footer: Rating Score + Open Prompt */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#071A36]/[0.06] text-xs">
                    <div className="flex items-center gap-1 text-[#FF7A00] font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#FF7A00]" />
                      <span className="text-[#071A36]">5.0 / 5.0</span>
                      <span className="text-[#64748B] font-normal text-[11px] ml-1">
                        (Audited)
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[#FF7A00] font-semibold text-[12px] group-hover:translate-x-0.5 transition-transform">
                      Click to Preview <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* RIGHT: Heading + Description + ONE BUTTON ONLY */}
            <div data-testi-pdf-content className="flex flex-col items-start text-left">
              {/* Eyebrow: CLIENT FEEDBACK */}
              <div className="flex items-center gap-3 mb-3.5">
                <div className="w-7 h-[2px] bg-[#FF7A00] rounded-full" />
                <span className="text-[#FF7A00] uppercase text-[13px] font-bold tracking-[0.12em] font-mono">
                  CLIENT FEEDBACK
                </span>
              </div>

              {/* Heading: "Real Experiences." (Navy) + "Real Feedback." (Orange) */}
              <h4 className="font-extrabold text-[28px] sm:text-[36px] lg:text-[42px] tracking-tight leading-[1.1] mb-4">
                <span className="text-[#071A36] block">Real Experiences.</span>
                <span className="text-[#FF7A00] block">Real Feedback.</span>
              </h4>

              {/* Description */}
              <p className="text-[#64748B] text-[15.5px] sm:text-[16.5px] leading-[1.65] max-w-lg mb-8 font-normal">
                Explore our client testimonials and feedback to see how Zeowl Infotech
                has helped businesses with digital solutions.
              </p>

              {/* ONE BUTTON ONLY: View Testimonials PDF -> (opens PDF in new tab, NO download button) */}
              <div className="w-full flex justify-center lg:justify-start">
                <a
                  href="/testimonials/zeowl-testimonials.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#FF7A00] hover:bg-[#071A36] text-white font-bold text-[15px] rounded-full shadow-[0_10px_25px_rgba(255,122,0,0.28)] hover:shadow-[0_12px_30px_rgba(7,26,54,0.25)] transition-all duration-300 group cursor-pointer"
                >
                  <span>View Testimonials PDF</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
