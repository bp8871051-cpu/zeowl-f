'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  TrendingUp,
} from 'lucide-react';

const projectsData = [
  {
    id: '01',
    domain: 'WEB DEVELOPMENT',
    title: 'Modern Real Estate & Web Engineering Platform',
    category: 'Web Apps',
    categoryLabel: 'EDTECH & WEB PLATFORMS',
    description:
      'High-performance full-stack web application featuring interactive property searches, real-time client consultations, verified mentor portals, and sub-second page transitions.',
    impact: '+180% Placement Rate',
    users: '15,000+ Active Users',
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    image: '/portfolio/mockup-web-dev.jpg',
  },
  {
    id: '02',
    domain: 'SOFTWARE DEVELOPMENT',
    title: 'FinVibe SaaS Enterprise Analytics Suite',
    category: 'Web Apps',
    categoryLabel: 'FINTECH & ENTERPRISE SAAS',
    description:
      'Comprehensive cloud software platform with real-time analytics, automated multi-currency ledger, live KPI telemetry dashboards, and instant automated vendor payouts.',
    impact: '$42M+ Processed Vol',
    users: 'Sub-50ms Query Latency',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'Chart.js', 'Go'],
    image: '/portfolio/mockup-software-dev.jpg',
  },
  {
    id: '03',
    domain: 'AI & AUTOMATION',
    title: 'AutomateIQ Multi-Agent Intelligence Engine',
    category: 'AI & Automation',
    categoryLabel: 'AI AGENTS & PIPELINES',
    description:
      'Enterprise autonomous AI pipeline and document intelligence system that extracts complex financial records, automates CRM syncs, and powers smart predictive decisions.',
    impact: '1,200+ Hrs Saved/Mo',
    users: '99.4% Extraction Acc',
    tech: ['Python', 'LangChain', 'FastAPI', 'OpenAI', 'Redis'],
    image: '/portfolio/mockup-ai-automation.jpg',
  },
  {
    id: '04',
    domain: 'APP DEVELOPMENT',
    title: 'Nova Health Telemedicine & Patient App',
    category: 'Mobile Apps',
    categoryLabel: 'HEALTHCARE & MOBILE',
    description:
      'Cross-platform telemedicine and EHR application featuring instant specialist video booking, biometric authentication, and digital prescription tracking.',
    impact: '4.9 App Store Rating',
    users: '85k+ Consultations',
    tech: ['Flutter', 'React Native', 'Firebase', 'WebRTC', 'FastAPI'],
    image: '/portfolio/mockup-mobile-app.jpg',
  },
  {
    id: '05',
    domain: 'SOFTWARE DEVELOPMENT',
    title: 'Zenro Omnichannel Cloud Commerce Platform',
    category: 'Web Apps',
    categoryLabel: 'E-COMMERCE & CLOUD',
    description:
      'High-velocity headless commerce storefront engineered with sub-second page loads, unified multi-warehouse inventory, and customized cart checkout.',
    impact: '+64% Checkout Lift',
    users: '99.99% Uptime',
    tech: ['Next.js', 'Shopify Plus', 'Stripe', 'GraphQL', 'Tailwind'],
    image: '/portfolio/mockup-ecommerce.jpg',
  },
  {
    id: '06',
    domain: 'UI/UX DESIGN',
    title: 'Apex Design System Architecture & Figma Tokens',
    category: 'UI/UX Design',
    categoryLabel: 'DESIGN SYSTEM & TOKENS',
    description:
      'Unified design system and component architecture comprising 400+ interactive Figma components, WCAG AAA accessibility tokens, and live React storybook.',
    impact: '3x Design Velocity',
    users: '12 Brands Unified',
    tech: ['Figma', 'Design Tokens', 'Storybook', 'WCAG AAA', 'Tailwind'],
    image: '/portfolio/mockup-uiux-design.jpg',
  },
];

export default function PortfolioGrid({
  activeCategory = 'All Projects',
  setActiveCategory,
  categories = [
    'All Projects',
    'Web Apps',
    'Mobile Apps',
    'UI/UX Design',
    'AI & Automation',
  ],
}) {
  const filteredProjects =
    activeCategory === 'All Projects'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects-grid" className="relative w-full py-20 lg:py-28 bg-white font-sans text-[#06182f] overflow-hidden">
      <div className="max-w-[1420px] w-[92%] mx-auto relative z-10">
        {/* ========================================================================= */}
        {/* Section Header + FILTER BY DOMAIN PILLS                                   */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 pb-8 border-b border-[#06182f]/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57e20]/10 border border-[#f57e20]/25 text-[#f57e20] text-xs font-bold font-mono uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>CURATED CASE STUDIES</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#06182f] tracking-tight">
              Selected Work &amp; <span className="text-[#f57e20]">Featured Products</span>
            </h2>
            <div className="text-sm font-medium text-[#64748B] max-w-lg mt-3">
              Showing <span className="font-bold text-[#06182f] font-mono">{filteredProjects.length}</span> proven engineering solutions engineered with modern technology standards.
            </div>
          </div>

          {/* FILTER BY DOMAIN: Interactive Category Pills */}
          <div className="flex flex-col gap-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748B]">
              FILTER BY DOMAIN:
            </div>
            <div className="flex flex-wrap gap-2.5 items-center">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory?.(cat)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer select-none ${
                      isActive
                        ? 'bg-[#f57e20] text-white border-[#f57e20] shadow-[0_6px_20px_rgba(245,126,32,0.35)] scale-[1.02]'
                        : 'bg-white hover:bg-[#F8FAFC] text-[#06182f] border-[#06182f]/10 hover:border-[#f57e20]/50 shadow-xs'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? 'bg-white' : 'bg-[#f57e20]'
                      }`}
                    />
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-[26px] border border-[#06182f]/[0.08] hover:border-[#f57e20]/50 shadow-[0_8px_30px_rgba(6,24,47,0.04)] hover:shadow-[0_20px_50px_rgba(6,24,47,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-2"
              >
                {/* Top Glowing Brand Accent Line */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#f57e20] via-[#FFA84A] to-[#f57e20] group-hover:w-full transition-all duration-500 ease-out z-30" />

                {/* 1. Top Photorealistic Device Mockup Preview Area */}
                <div className="relative w-full aspect-[16/9] sm:h-72 overflow-hidden bg-[#06182f]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                  />

                  {/* Gradient Overlay for visual depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-[#06182f]/85 backdrop-blur-md border border-white/20 text-white/95 text-[11px] font-mono font-bold tracking-wider uppercase shadow-sm">
                      {project.categoryLabel}
                    </span>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f57e20] text-white text-[11px] font-mono font-bold shadow-[0_2px_12px_rgba(245,126,32,0.4)]">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{project.impact}</span>
                    </div>
                  </div>
                </div>

                {/* 2. Bottom-Left Notch / Pill Badge matching user reference design */}
                <div className="relative -mt-5 ml-6 sm:ml-8 z-20">
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-[0_6px_20px_rgba(6,24,47,0.1)] border border-[#06182f]/[0.08]">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#f57e20] text-white flex items-center justify-center text-[11px] sm:text-xs font-mono font-black shadow-xs">
                      {project.id}
                    </span>
                    <span className="text-xs sm:text-sm font-heading font-black tracking-wider text-[#f57e20] uppercase">
                      {project.domain}
                    </span>
                  </div>
                </div>

                {/* 3. Card Content & Details */}
                <div className="p-6 sm:p-8 pt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-[#06182f] tracking-tight group-hover:text-[#f57e20] transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>
                    <p className="font-body text-[#64748B] text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges + Action Button */}
                  <div className="pt-5 border-t border-[#06182f]/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-[#06182f]/[0.04] border border-[#06182f]/[0.08] text-[11px] font-mono font-semibold text-[#06182f]/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06182f] group-hover:text-[#f57e20] transition-colors shrink-0 group/link"
                    >
                      <span>Inquire Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
