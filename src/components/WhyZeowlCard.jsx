'use client';
import React from 'react';
import { Target, Cpu, Layers, Lightbulb, Handshake } from 'lucide-react';

const iconMap = {
  Target,
  Cpu,
  Layers,
  Lightbulb,
  Handshake,
};

export default function WhyZeowlCard({ card }) {
  const IconComponent = iconMap[card.icon] || Target;

  return (
    <div
      data-why-card
      className="group relative bg-[#FFFFFF] border border-[#071A36]/[0.08] hover:border-[#FF7A00]/40 rounded-[22px] p-6 sm:p-6 lg:px-7 lg:py-6 transition-all duration-[350ms] ease-out shadow-[0_10px_30px_rgba(7,26,54,0.06)] hover:shadow-[0_16px_36px_rgba(7,26,54,0.10)] hover:-translate-y-[5px] flex flex-col justify-between h-auto min-h-[145px] sm:min-h-[155px] max-h-[175px] overflow-hidden"
    >
      {/* Top Row: Icon Container (48px x 48px) + Subtle Orange Hover Indicator */}
      <div className="flex items-center justify-between mb-3">
        <div className="w-12 h-12 rounded-[14px] bg-[rgba(255,122,0,0.10)] text-[#FF7A00] flex items-center justify-center transition-transform duration-[350ms] ease-out group-hover:scale-[1.08] shrink-0">
          <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
        </div>
        {/* Subtle orange accent indicator on hover */}
        <div className="w-0 group-hover:w-6 h-[2px] bg-[#FF7A00] transition-all duration-[350ms] rounded-full" />
      </div>

      {/* Content: Title (18-20px font-weight: 700) + Description (14-15px line-height: 1.5) */}
      <div>
        <h3 className="text-[#071A36] text-[18px] sm:text-[19px] font-bold tracking-tight mb-1.5 transition-colors">
          {card.title}
        </h3>
        <p className="text-[#64748B] text-[14px] leading-[1.5] font-normal line-clamp-2">
          {card.description}
        </p>
      </div>
    </div>
  );
}
