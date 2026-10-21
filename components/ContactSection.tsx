'use client';
import React from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#07070a] relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spiritual-burgundy/20 border border-spiritual-burgundy/40 text-spiritual-gold text-xs font-semibold tracking-wider uppercase mb-3">
            <Phone className="w-3.5 h-3.5 text-spiritual-burgundyLight" />
            <span>Direct Communication</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Contact Baba Hashim Bangali
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent mx-auto rounded-full mb-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Reach out directly to discuss available spiritual guidance, marriage support, and family solutions in a private and respectful environment.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp Direct Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#12121a] to-[#0d0d12] border border-spiritual-border hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">WhatsApp Chat</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Send a direct message on WhatsApp for rapid, discreet spiritual consultation and questions.
              </p>
              <div className="text-xl font-bold text-white mb-6 font-mono tracking-wider">
                03270855972
              </div>
            </div>

            <a
              href="https://wa.me/923270855972?text=Assalamualaikum%20Baba%20Hashim%20Bangali%2C%20I%20would%20like%20to%20discuss%20available%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5"
              aria-label="Chat on WhatsApp with Baba Hashim Bangali"
            >
              <MessageCircle className="w-5 h-5 text-black" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Telephone Call Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#12121a] to-[#0d0d12] border border-spiritual-border hover:border-spiritual-gold/50 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-spiritual-burgundy/20 border border-spiritual-burgundy/40 flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-spiritual-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Direct Phone Call</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Speak directly by phone to explain your situation and request confidential personal guidance.
              </p>
              <div className="text-xl font-bold text-white mb-6 font-mono tracking-wider">
                03270855972
              </div>
            </div>

            <a
              href="tel:+923270855972"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-spiritual-burgundy to-spiritual-burgundyLight hover:from-spiritual-burgundyLight hover:to-red-600 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-red-950/40 border border-red-500/30 transition-all transform hover:-translate-y-0.5"
              aria-label="Call Baba Hashim Bangali at 03270855972"
            >
              <Phone className="w-5 h-5 text-spiritual-gold animate-pulse" />
              <span>Call Now (03270855972)</span>
            </a>
          </div>
        </div>

        {/* Reassurance strip */}
        <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-spiritual-gold" />
            <span>Strict Privacy Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-spiritual-gold" />
            <span>Available Online</span>
          </div>
        </div>
      </div>
    </section>
  );
}
