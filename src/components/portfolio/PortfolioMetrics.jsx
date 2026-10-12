'use client';

import React from 'react';
import { Award, ShieldCheck, Zap, Users } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    metric: '120+',
    label: 'Digital Products Shipped',
    detail: 'From early-stage MVPs to enterprise-grade platforms.',
  },
  {
    icon: Award,
    metric: '99.8%',
    label: 'Client Satisfaction',
    detail: 'Consistent 5.0 rating across verified client reviews.',
  },
  {
    icon: Users,
    metric: '4+',
    label: 'Continents Served',
    detail: 'Delivering engineering excellence across global time zones.',
  },
  {
    icon: ShieldCheck,
    metric: '100%',
    label: 'Code & IP Ownership',
    detail: 'You retain full repository rights and zero vendor lock-in.',
  },
];

export default function PortfolioMetrics() {
  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#06182f] text-white overflow-hidden font-sans select-none">
      {/* Ambient Glow Spots */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-[#f57e20]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#f57e20]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1420px] w-[92%] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#f57e20]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f57e20]/10 border border-[#f57e20]/25 text-[#f57e20] flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-1 font-mono">
                    <span className="text-white">{s.metric.replace('+', '')}</span>
                    <span className="text-[#f57e20]">{s.metric.includes('+') ? '+' : ''}</span>
                    {s.metric.includes('%') && <span className="text-[#f57e20]">%</span>}
                  </div>
                  <div className="text-sm font-bold text-white/90 mb-1.5 font-sans">
                    {s.label}
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-normal">
                    {s.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
