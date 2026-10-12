'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';
import { getServiceNavigation } from '@/data/servicesDetailData';

export default function ServiceNavigation({ currentSlug }) {
  const { prev, next } = getServiceNavigation(currentSlug);

  return (
    <nav
      aria-label="Previous and Next Service Navigation"
      className="w-full bg-[#041525] border-t border-white/10 py-10 px-6 lg:px-12 text-white"
    >
      <div className="max-w-[88rem] w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* PREVIOUS SERVICE */}
        {prev ? (
          <Link
            href={`/services/${prev.slug}`}
            className="group flex items-center gap-4 text-left w-full sm:w-auto"
          >
            <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-[#F58220] group-hover:border-[#F58220] transition-all duration-300 shrink-0">
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </div>

            <div>
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-white/50 block mb-0.5">
                PREVIOUS SERVICE
              </span>
              <span className="text-sm sm:text-base font-heading font-bold text-white group-hover:text-[#F58220] transition-colors">
                {prev.title}
              </span>
            </div>
          </Link>
        ) : (
          <div className="w-32" />
        )}

        {/* ALL SERVICES (CENTER) */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white/90 hover:text-white border border-white/15 text-xs font-mono-tech tracking-wider uppercase transition-all duration-300"
        >
          <Grid className="w-3.5 h-3.5 text-[#F58220]" />
          <span>ALL SERVICES</span>
        </Link>

        {/* NEXT SERVICE */}
        {next ? (
          <Link
            href={`/services/${next.slug}`}
            className="group flex items-center justify-end gap-4 text-right w-full sm:w-auto"
          >
            <div>
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-white/50 block mb-0.5">
                NEXT SERVICE
              </span>
              <span className="text-sm sm:text-base font-heading font-bold text-white group-hover:text-[#F58220] transition-colors">
                {next.title}
              </span>
            </div>

            <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-[#F58220] group-hover:border-[#F58220] transition-all duration-300 shrink-0">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        ) : (
          <div className="w-32" />
        )}
      </div>
    </nav>
  );
}
