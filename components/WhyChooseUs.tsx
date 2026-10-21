'use client';
import React from 'react';
import { MessageSquare, Lock, Layers, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: MessageSquare,
      title: 'Easy Online Contact',
      description: 'Connect directly via WhatsApp or telephone from the comfort and privacy of your home with prompt responses.',
    },
    {
      icon: Lock,
      title: 'Respectful and Private Conversations',
      description: 'Your personal stories and relationship concerns are held in strict discretion and handled with absolute dignity.',
    },
    {
      icon: Layers,
      title: 'Guidance for Different Personal Concerns',
      description: 'Support tailored to individual family dynamics, marriage questions, personal disputes, and traditional spiritual inquiries.',
    },
    {
      icon: HelpCircle,
      title: 'Clear Communication About Available Services',
      description: 'Transparent discussions about spiritual remedies, prayer recommendations, and practical communication steps without unrealistic claims.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#09090d] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spiritual-card border border-spiritual-gold/30 text-spiritual-gold text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Our Approach</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Why Contact Baba Hashim Bangali?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent mx-auto rounded-full mb-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            We focus on honest, respectful, and accessible guidance to help you navigate relationship and personal challenges.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-[#111119] to-[#0d0d13] p-6 rounded-2xl border border-zinc-800 hover:border-spiritual-gold/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-md"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-spiritual-burgundy/20 border border-spiritual-burgundy/40 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-spiritual-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2.5 group-hover:text-spiritual-gold transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/923270855972?text=Assalamualaikum%20Baba%20Hashim%20Bangali%2C%20I%20would%20like%20to%20connect%20with%20you%20for%20guidance."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5"
            aria-label="Connect with Baba Hashim Bangali on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-black" />
            <span>Connect on WhatsApp Today</span>
          </a>
        </div>
      </div>
    </section>
  );
}
