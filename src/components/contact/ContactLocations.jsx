'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Globe, Clock, ExternalLink, Building, Compass } from 'lucide-react';

const locations = [
  {
    city: 'Vadodara & Surat',
    country: 'Gujarat, India',
    type: 'Headquarters & Engineering Lab',
    address: 'Vadodara & Surat Tech Corridor, Gujarat 395007, India',
    timezone: 'Asia/Kolkata (IST • UTC+5:30)',
    hours: 'Mon - Sat: 9:30 AM – 7:30 PM',
    mapLink: 'https://maps.google.com/?q=Vadodara+Gujarat+India',
    isPrimary: true,
  },
  {
    city: 'North America',
    country: 'USA & Canada',
    type: 'Client Success & Overlap Support',
    address: 'Dedicated Eastern & Pacific Time overlap coverage',
    timezone: 'EST (UTC-5) / PST (UTC-8)',
    hours: 'Flexible sprint syncs & daily standups',
    mapLink: 'https://maps.google.com/?q=New+York+USA',
    isPrimary: false,
  },
  {
    city: 'Europe & UK',
    country: 'London / Berlin',
    type: 'European Client Operations',
    address: 'GMT & CET direct working hours coordination',
    timezone: 'GMT (UTC+0) / CET (UTC+1)',
    hours: 'Dedicated afternoon overlap slots',
    mapLink: 'https://maps.google.com/?q=London+UK',
    isPrimary: false,
  },
];

export default function ContactLocations() {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] border-t border-neutral-200/60 font-sans">
      <div className="max-w-[1400px] w-[92%] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-bold text-[#06182F] uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5 text-[#f57e20]" />
              <span>GLOBAL FOOTPRINT</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#06182F] tracking-tight">
              Where We Are &amp; How We Work
            </h2>
            <p className="font-body text-[#475569] text-base mt-2 max-w-xl">
              Headquartered in Gujarat, India, delivering enterprise-grade engineering solutions across 4 continents.
            </p>
          </div>

          {/* Real-time HQ Clock Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-neutral-200 shadow-sm shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div className="text-left">
              <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                India HQ Time (IST)
              </div>
              <div className="text-base font-mono-tech font-bold text-[#06182F]">
                {istTime || 'Loading...'}
              </div>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                loc.isPrimary
                  ? 'bg-white border-2 border-[#f57e20]/30 shadow-[0_15px_35px_rgba(245,126,32,0.08)]'
                  : 'bg-white border border-neutral-200/80 shadow-sm hover:shadow-md'
              }`}
            >
              {loc.isPrimary && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#f57e20]/10 text-[#f57e20] text-[10px] font-extrabold uppercase tracking-wider">
                  Headquarters
                </div>
              )}

              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#06182F]/5 text-[#06182F] group-hover:bg-[#f57e20] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-6">
                  {loc.isPrimary ? <Building className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                </div>

                <div className="text-xs font-semibold text-[#f57e20] uppercase tracking-wider mb-1">
                  {loc.type}
                </div>

                <h3 className="font-heading text-2xl font-bold text-[#06182F] mb-1">
                  {loc.city}
                </h3>
                <div className="text-sm font-medium text-[#64748B] mb-5">{loc.country}</div>

                <div className="space-y-2.5 text-xs text-[#475569] mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#f57e20] shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#64748B] shrink-0" />
                    <span>{loc.timezone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-medium text-[#64748B]">{loc.hours}</span>
                <a
                  href={loc.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06182F] group-hover:text-[#f57e20] transition-colors"
                >
                  <span>View Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
