'use client';
import React from 'react';
import { Moon, MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] text-zinc-400 border-t border-zinc-800/80 pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-spiritual-burgundy to-spiritual-burgundyLight flex items-center justify-center text-spiritual-gold border border-spiritual-gold/30">
                <Moon className="w-4 h-4 fill-spiritual-gold/20 text-spiritual-gold" />
              </span>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                Baba Hashim Bangali
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Confidential online spiritual guidance and relationship support helping individuals and couples address marriage concerns, family harmony, and spiritual questions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-spiritual-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-spiritual-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-spiritual-gold transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-spiritual-gold transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-spiritual-gold transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-spiritual-gold transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Featured Guidance
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-spiritual-gold transition-colors">
                  Love Marriage Guidance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-spiritual-gold transition-colors">
                  Manpasand Shadi &amp; Family Approval
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-spiritual-gold transition-colors">
                  Istikhara &amp; Amliyat Advice
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-spiritual-gold transition-colors">
                  Bandish Ka Tor &amp; Protection
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-spiritual-gold transition-colors">
                  Husband Wife Dispute Reconciliation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Legal Anchor Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact &amp; Policies
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-spiritual-gold shrink-0" />
                <a href="tel:+923270855972" className="text-white hover:text-spiritual-gold font-mono">
                  03270855972
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/923270855972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: 03270855972
                </a>
              </li>
              <li className="pt-2">
                <a href="#disclaimer" className="text-zinc-400 hover:text-spiritual-gold underline text-xs">
                  Important Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {currentYear} Baba Hashim Bangali. All rights reserved. For general informational and personal guidance only.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-spiritual-gold transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
