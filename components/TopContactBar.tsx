'use strict';
import React from 'react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';

export default function TopContactBar() {
  return (
    <div className="bg-[#0b0b10] border-b border-zinc-800/80 text-xs sm:text-sm text-zinc-300 py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Message */}
        <div className="flex items-center gap-2 text-zinc-300 font-medium tracking-wide text-center md:text-left">
          <ShieldCheck className="w-4 h-4 text-spiritual-gold shrink-0 hidden sm:inline-block" />
          <span>Online Spiritual Guidance &amp; Relationship Support</span>
        </div>

        {/* Right: Contact Links */}
        <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
          <a
            href="tel:+923270855972"
            className="flex items-center gap-1.5 text-zinc-200 hover:text-spiritual-gold transition-colors font-semibold"
            aria-label="Call Baba Hashim Bangali at 03270855972"
          >
            <Phone className="w-3.5 h-3.5 text-spiritual-gold animate-pulse" />
            <span>Call Now: <span className="text-white font-bold tracking-wider">03270855972</span></span>
          </a>

          <span className="text-zinc-600 hidden sm:inline">|</span>

          <a
            href="https://wa.me/923270855972"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] px-3 py-1 rounded-full border border-[#25D366]/30 text-xs font-semibold transition-all hover:scale-105"
            aria-label="Chat with Baba Hashim Bangali on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
