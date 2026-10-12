'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Palette,
  Terminal,
  TrendingUp,
  Smartphone,
  Share2,
  Film,
  Bot,
  Sparkles,
  Users,
} from 'lucide-react';
import PortfolioCard from './PortfolioCard';

// 10 Dedicated Portfolio Services in strictly ordered sequence (01 to 10)
const portfolioServices = [
  {
    id: 'web-development',
    number: '01',
    category: 'DIGITAL ENGINEERING',
    title: 'Web Development',
    description:
      'Modern, high-performance websites and web applications built for real business needs.',
    tags: ['Next.js', 'React', 'Laravel', 'PHP'],
    cta: 'View Case Study →',
    link: '/services/web-development',
    icon: Code2,
    image: '/portfolio/mockup-web-dev.jpg',
    imageType: 'cover',
    badge: 'Web Platform • 99+ Core Vitals',
  },
  {
    id: 'ui-ux-design',
    number: '02',
    category: 'EXPERIENCE DESIGN',
    title: 'UI/UX & Graphic Design',
    description:
      'User-focused digital experiences designed with clarity, usability and strong visual systems.',
    tags: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
    cta: 'View Case Study →',
    link: '/services/ui-ux-design',
    icon: Palette,
    image: '/portfolio/mockup-uiux-design.jpg',
    imageType: 'cover',
    badge: 'Design Systems • Interactive Figma',
  },
  {
    id: 'software-development',
    number: '03',
    category: 'CUSTOM ARCHITECTURE',
    title: 'Software Development',
    description:
      'Custom software solutions designed to streamline operations and solve complex business problems.',
    tags: ['Enterprise SaaS', 'Cloud-Native', 'APIs', 'Microservices'],
    cta: 'View Case Study →',
    link: '/services/software-development',
    icon: Terminal,
    image: '/portfolio/mockup-software-dev.jpg',
    imageType: 'cover',
    badge: 'Custom Software • 99.99% Reliability',
  },
  {
    id: 'digital-marketing',
    number: '04',
    category: 'PERFORMANCE & GROWTH',
    title: 'Digital Marketing',
    description:
      'Data-driven digital strategies designed to increase reach, engagement and conversions.',
    tags: ['SEO', 'Google Ads', 'Meta Ads', 'Funnel CRO'],
    cta: 'View Case Study →',
    link: '/services/digital-marketing',
    icon: TrendingUp,
    image: '/images for services/05_digital-marketing-removebg-preview.png',
    imageType: 'contain',
    badge: '4.2x ROAS • Full-Funnel CRO',
  },
  {
    id: 'app-development',
    number: '05',
    category: 'MOBILE PLATFORMS',
    title: 'App Development',
    description:
      'Feature-rich mobile applications designed for smooth, intuitive and scalable experiences.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
    cta: 'View Case Study →',
    link: '/services/app-development',
    icon: Smartphone,
    image: '/portfolio/mockup-mobile-app.jpg',
    imageType: 'cover',
    badge: 'Cross-Platform • 60fps Native',
  },
  {
    id: 'social-media-marketing',
    number: '06',
    category: 'COMMUNITY & VIRALITY',
    title: 'Social Media Marketing',
    description:
      'Strategic social media campaigns that build audience, engagement and brand awareness.',
    tags: ['Instagram', 'LinkedIn', 'Reels & Shorts', 'Community'],
    cta: 'View Case Study →',
    link: '/services/social-media-marketing',
    icon: Share2,
    image: '/images for services/06_social-media-marketing.jpg',
    imageType: 'cover',
    badge: '10M+ Impressions • High Engagement',
  },
  {
    id: 'video-editing',
    number: '07',
    category: 'CINEMATIC STORYTELLING',
    title: 'Video Editing',
    description:
      'Professional visual storytelling for brands, products, social media and campaigns.',
    tags: ['After Effects', 'Premiere Pro', 'Motion Graphics', 'Color Grading'],
    cta: 'View Case Study →',
    link: '/services/video-editing',
    icon: Film,
    image: '/images for services/07_video-editing.jpg',
    imageType: 'cover',
    badge: '82% Hook Retention • 4K Motion',
  },
  {
    id: 'ai-automation',
    number: '08',
    category: 'INTELLIGENT SYSTEMS',
    title: 'AI Automation',
    description:
      'Smart AI-powered automation solutions that streamline workflows and improve productivity.',
    tags: ['OpenAI', 'LangChain', 'n8n', 'Autonomous Agents'],
    cta: 'View Case Study →',
    link: '/services/ai-automation',
    icon: Bot,
    image: '/portfolio/mockup-ai-automation.jpg',
    imageType: 'cover',
    badge: 'Autonomous AI • 85% Ops Saved',
  },
  {
    id: 'branding',
    number: '09',
    category: 'IDENTITY & POSITIONING',
    title: 'Branding',
    description:
      'Distinctive visual identities that help businesses communicate clearly and stand out.',
    tags: ['Brand Identity', 'Logo Design', 'Typography', 'Tone of Voice'],
    cta: 'View Case Study →',
    link: '/services/branding',
    icon: Sparkles,
    image: '/images for services/09_branding.jpg',
    imageType: 'cover',
    badge: '100% Trademark Ready • Visual Systems',
  },
  {
    id: 'influencer-marketing',
    number: '10',
    category: 'ADVOCACY & REACH',
    title: 'Influencer Marketing',
    description:
      'Influencer campaigns and creator partnerships designed to connect brands with relevant audiences.',
    tags: ['Creator Matchmaking', 'UGC', 'Campaign ROI', 'Whitelisting'],
    cta: 'View Case Study →',
    link: '/services/influencer-marketing',
    icon: Users,
    image: '/images for services/10_influencer-marketing.jpg',
    imageType: 'cover',
    badge: '3.6x Earned Media Value',
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Editorial Header Reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 2. Sequential Portfolio Cards Reveal with subtle stagger
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: (index % 2) * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Subtly scale images from 0.96 to 1 on initial entrance
        const img = card.querySelector('.portfolio-image');
        if (img) {
          gsap.fromTo(
            img,
            { scale: 0.96, opacity: 0.9 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.85,
              delay: (index % 2) * 0.1 + 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        // Service numbers fade in smoothly
        const num = card.querySelector('.portfolio-number');
        if (num) {
          gsap.fromTo(
            num,
            { opacity: 0, x: -10 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              delay: (index % 2) * 0.1 + 0.05,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services-grid"
      ref={sectionRef}
      className="relative w-full pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-24 bg-[#F7F8FA] text-[#06182f] overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] rounded-full bg-[#f57e20]/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[700px] h-[700px] rounded-full bg-[#06182f]/[0.04] blur-[180px] pointer-events-none" />

      {/* Subtle fine geometric blueprint grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06182f_1px,transparent_1px),linear-gradient(to_bottom,#06182f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.025] pointer-events-none" />

      <div className="max-w-[88rem] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* SECTION HEADER: Editorial Layout */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20 pb-8 border-b border-[#06182f]/10"
        >
          <div>
            {/* SECTION EYEBROW */}
            <div className="inline-flex items-center gap-2.5 text-xs font-mono-tech uppercase tracking-[0.22em] text-[#06182f]/80 font-bold mb-4 px-3.5 py-1.5 rounded-full bg-[#06182f]/[0.04] border border-[#06182f]/8 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#f57e20] animate-pulse" />
              <span>OUR COMPLETE</span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-[#06182f] uppercase leading-[0.95]">
              PORTFOLIO
            </h2>
          </div>

          {/* SUBTEXT */}
          <div className="max-w-md lg:max-w-lg">
            <p className="text-base sm:text-lg text-[#64748B] font-body leading-relaxed">
              A curated showcase of our digital products, creative solutions, and technology-driven work.
            </p>
          </div>
        </div>

        {/* 2-COLUMN BALANCED PORTFOLIO GRID
            Desktop: 2 Columns (01-10 in natural alternating sequence)
            Tablet: 2 Columns with responsive spacing
            Mobile: 1 Column ordered 01 to 10
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {portfolioServices.map((service, idx) => (
            <PortfolioCard
              key={service.id}
              service={service}
              innerRef={(el) => (cardRefs.current[idx] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
