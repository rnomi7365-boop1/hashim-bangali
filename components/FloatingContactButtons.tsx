'use client';
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingContactButtons() {
  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 pointer-events-auto"
      aria-label="Quick contact buttons"
    >
      {/* Call Now Floating Button */}
      <a
        href="tel:+923270855972"
        className="group flex items-center gap-2.5 bg-[#9B111E] hover:bg-[#C41E3A] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl border border-red-400/40 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-spiritual-gold"
        aria-label="Call Baba Hashim Bangali directly at 03270855972"
      >
        <Phone className="w-5 h-5 text-spiritual-gold animate-bounce" />
        <span className="hidden sm:inline-block font-semibold text-xs tracking-wider uppercase">
          Call Now
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923270855972?text=Assalamualaikum%20Baba%20Hashim%20Bangali%2C%20I%20would%20like%20to%20request%20a%20spiritual%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-black p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl border border-emerald-300/40 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Chat with Baba Hashim Bangali on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-black" />
        <span className="hidden sm:inline-block font-bold text-xs tracking-wider uppercase">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
