'use client';
import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ServicesMarquee() {
  const items = [
    'Love Marriage Guidance',
    'Manpasand Shadi',
    'Black Magic Guidance',
    'Bandish Guidance',
    'Husband Wife Disputes',
    'Divorce Problem Guidance',
    'Online Amil Baba',
  ];

  return (
    <div
      className="bg-[#0e0e14] border-b border-spiritual-border/60 overflow-hidden select-none py-2.5 relative group"
      aria-label="Popular Spiritual Services ticker"
    >
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0e0e14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0e0e14] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max marquee-track animate-marquee group-hover:[animation-play-state:paused]">
        {/* First repetition */}
        <div className="flex items-center gap-6 sm:gap-8 px-4 shrink-0">
          {items.map((item, idx) => (
            <div key={`item-1-${idx}`} className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold tracking-wide text-zinc-200">
              <span className="hover:text-spiritual-gold transition-colors whitespace-nowrap">{item}</span>
              <Sparkles className="w-3.5 h-3.5 text-spiritual-burgundyLight shrink-0" />
            </div>
          ))}
        </div>

        {/* Second repetition for seamless infinite loop */}
        <div className="flex items-center gap-6 sm:gap-8 px-4 shrink-0" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`item-2-${idx}`} className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold tracking-wide text-zinc-200">
              <span className="hover:text-spiritual-gold transition-colors whitespace-nowrap">{item}</span>
              <Sparkles className="w-3.5 h-3.5 text-spiritual-burgundyLight shrink-0" />
            </div>
          ))}
        </div>

        {/* Third repetition to guarantee full screen widths on ultra-wide monitors */}
        <div className="flex items-center gap-6 sm:gap-8 px-4 shrink-0" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`item-3-${idx}`} className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold tracking-wide text-zinc-200">
              <span className="hover:text-spiritual-gold transition-colors whitespace-nowrap">{item}</span>
              <Sparkles className="w-3.5 h-3.5 text-spiritual-burgundyLight shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
