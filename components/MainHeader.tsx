'use client';
import React, { useState } from 'react';
import { Menu, X, MessageCircle, Moon } from 'lucide-react';

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#08080a]/90 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Text-based Logo */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-spiritual-gold/50 rounded-lg p-1"
            aria-label="Baba Hashim Bangali Homepage"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-spiritual-burgundy to-spiritual-burgundyLight flex items-center justify-center text-spiritual-gold border border-spiritual-gold/30 shadow-md">
                <Moon className="w-4 h-4 fill-spiritual-gold/20 text-spiritual-gold" />
              </span>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-spiritual-gold transition-colors">
                Baba Hashim Bangali
              </span>
            </div>
            <span className="text-[10px] tracking-widest uppercase text-spiritual-gold/80 pl-10 -mt-1 font-medium">
              Spiritual &amp; Relationship Guidance
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-spiritual-gold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-spiritual-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop WhatsApp CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/923270855972?text=Assalamualaikum%20Baba%20Hashim%20Bangali%2C%20I%20would%20like%20to%20request%20a%20spiritual%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-spiritual-burgundy to-spiritual-burgundyLight hover:from-spiritual-burgundyLight hover:to-red-600 text-white font-medium text-sm px-5 py-2.5 rounded-lg border border-red-500/30 shadow-lg shadow-red-950/40 hover:shadow-red-900/60 transition-all transform hover:-translate-y-0.5"
              aria-label="Request WhatsApp Consultation with Baba Hashim Bangali"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 focus:outline-none focus:ring-2 focus:ring-spiritual-gold"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0e14] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-zinc-200 hover:text-spiritual-gold hover:bg-zinc-800/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-zinc-800">
            <a
              href="https://wa.me/923270855972?text=Assalamualaikum%20Baba%20Hashim%20Bangali%2C%20I%20would%20like%20to%20request%20a%20spiritual%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-spiritual-burgundy to-spiritual-burgundyLight text-white font-medium py-3 px-4 rounded-lg shadow-md border border-red-500/30"
            >
              <MessageCircle className="w-5 h-5 text-emerald-300" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
