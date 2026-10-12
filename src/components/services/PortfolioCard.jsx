'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function PortfolioCard({ service, innerRef }) {
  const IconComponent = service.icon;
  const isCover = service.imageType === 'cover';

  return (
    <article
      ref={innerRef}
      className="portfolio-card group relative bg-white rounded-3xl border border-[#06182f]/10 hover:border-[#f57e20]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[0_10px_35px_rgba(22,43,83,0.03)] hover:shadow-[0_25px_60px_rgba(22,43,83,0.1)] hover:-translate-y-2 h-full w-full"
    >
      {/* 4. Yellow Accent Line Expands on Desktop Hover */}
      <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#f57e20] via-[#ff9b4e] to-[#f57e20] group-hover:w-full transition-all duration-500 ease-out z-20" />

      {/* Subtle top-right ambient gold sheen */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at top right, rgba(245, 126, 32, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Internal Content Container */}
      <div className="relative p-6 sm:p-8 lg:p-9 flex-1 flex flex-col justify-between z-10">
        <div>
          {/* Top Row: Category Indicator + Faded Number + Service Icon */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#06182f]/70 font-bold px-3 py-1 rounded-md bg-[#06182f]/[0.04] border border-[#06182f]/8">
                {service.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* 7. Large Faded Service Number that illuminates on hover */}
              <span className="portfolio-number text-4xl sm:text-5xl lg:text-6xl font-mono-tech font-black text-[#06182f]/[0.08] group-hover:text-[#f57e20]/40 transition-colors duration-500 select-none tracking-tighter leading-none">
                {service.number}
              </span>

              {/* Service Icon with smooth hover micro-interaction */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-[#06182f]/[0.04] border border-[#06182f]/10 text-[#06182f] group-hover:bg-[#06182f] group-hover:text-[#f57e20] group-hover:border-[#06182f] transition-all duration-300 shadow-xs group-hover:scale-105 flex-shrink-0">
                <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Service Title */}
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight text-[#06182f] mb-3 transition-transform duration-300 group-hover:translate-x-1">
            <Link
              href={service.link}
              className="hover:text-[#06182f] focus:outline-none focus:underline"
            >
              {service.title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-sm sm:text-base font-body text-[#64748B] leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Technology Pills / Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono-tech font-medium px-3 py-1 rounded-full bg-[#06182f]/[0.03] text-[#06182f]/80 border border-[#06182f]/8 group-hover:border-[#f57e20]/40 group-hover:bg-[#f57e20]/[0.05] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Middle CTA Row: "View Case Study →" and ↗ button */}
        <div className="flex items-center justify-between pt-4 pb-6 border-t border-[#06182f]/8">
          <Link
            href={service.link}
            className="inline-flex items-center gap-2 text-sm font-button font-bold text-[#06182f] group-hover:text-[#f57e20] transition-colors duration-300 focus:outline-none"
          >
            <span>View Case Study</span>
            {/* 5. CTA arrow moves slightly to the right */}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>

          {/* 6. External-link icon rotates subtly */}
          <Link
            href={service.link}
            aria-label={`View ${service.title} case study`}
            className="w-9 h-9 rounded-full bg-[#06182f]/[0.04] border border-[#06182f]/10 flex items-center justify-center text-[#06182f] group-hover:bg-[#f57e20] group-hover:text-white group-hover:border-[#f57e20] transition-all duration-300 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#f57e20]"
          >
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </div>

        {/* Portfolio Visual / Project Preview Showcase Container */}
        <div className="portfolio-preview relative w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-[#06182f]/[0.02] via-[#F7F8FA] to-[#06182f]/[0.05] border border-[#06182f]/8 p-4 flex items-center justify-center group-hover:border-[#f57e20]/30 transition-all duration-500">
          {/* Subtle architectural dot grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#06182f_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          {/* Radial gold spotlight on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(245, 126, 32, 0.16) 0%, transparent 70%)',
            }}
          />

          {/* Floating Category/Telemetry Pill */}
          <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#06182f]/10 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#f57e20] animate-pulse" />
            <span className="text-[11px] font-mono-tech font-bold text-[#06182f]/85 tracking-wide">
              {service.badge}
            </span>
          </div>

          {/* Visual Project Preview Image with 2. Smooth scale and 3. Parallax lift */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {isCover ? (
              <img
                src={service.image}
                alt={`${service.title} portfolio preview`}
                loading="lazy"
                className="portfolio-image w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <img
                src={service.image}
                alt={`${service.title} portfolio preview`}
                loading="lazy"
                className="portfolio-image max-h-[88%] max-w-[88%] object-contain filter drop-shadow-[0_16px_28px_rgba(22,43,83,0.12)] transition-transform duration-700 ease-out group-hover:scale-108 group-hover:-translate-y-1.5"
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
