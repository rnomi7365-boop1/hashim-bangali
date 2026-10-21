'use client';
import React from 'react';
import Image from 'next/image';
import { MessageCircle, BookOpen, Shield, HeartHandshake } from 'lucide-react';

export default function SeoContentSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0b0b10] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spiritual-burgundy/20 border border-spiritual-burgundy/40 text-spiritual-gold text-xs font-semibold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5 text-spiritual-burgundyLight" />
            <span>In-Depth Information &amp; Advice</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Guidance for Marriage, Relationships &amp; Spiritual Concerns
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent mx-auto rounded-full mb-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Understanding the traditional approaches to marriage, family harmony, and spiritual difficulties through respectful conversation.
          </p>
        </div>

        {/* Block 1: Left Image (1003.webp) + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          {/* Left Image Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-[#12121b] border border-spiritual-gold/30 p-4 shadow-2xl relative group hover:border-spiritual-gold/60 transition-all duration-300">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
                <Image
                  src="/imgs/1003.webp"
                  alt="Love problem solution consultation card by Baba Hashim Bangali with call and WhatsApp contact details"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                  className="object-contain transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs uppercase tracking-widest text-spiritual-gold font-semibold">
                  Relationship &amp; Marriage Guidance
                </span>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
              Love Marriage Guidance, Pasand Ki Shadi &amp; Family Harmony
            </h3>
            <p>
              Navigating marriage decisions often brings emotional stress, especially when facing parental hesitation or social complications. When individuals seek an <strong className="text-white font-semibold">amil baba online</strong> or consult an <strong className="text-white font-semibold">amil baba for love marriage</strong>, the primary goal is often seeking wisdom, prayers, and respectful communication to bridge the gap between families.
            </p>
            <p>
              Whether you are exploring guidance around <strong className="text-white font-semibold">manpasand shadi</strong> (<strong className="text-white font-semibold">pasand ki shadi</strong>) or seeking a grounded <strong className="text-white font-semibold">love marriage problem solution</strong>, traditional spiritual practices such as <strong className="text-white font-semibold">istikhara for love marriage</strong> and responsible spiritual advice (<strong className="text-white font-semibold">amliyat for love marriage</strong>) provide personal reflection and clarity. We believe every lasting union requires mutual affection, voluntary consent, and family understanding.
            </p>
            <p>
              Many people also inquire about reconciliations or search for an <strong className="text-white font-semibold">ex love back astrologer</strong> or terms like <strong className="text-white font-semibold">kisi ko apana banane ka amal</strong> and <strong className="text-white font-semibold">mohabat ka amal</strong>. Our approach focuses on ethical prayers for mutual compassion, understanding, and peaceful dialogue—always upholding personal autonomy and dignity.
            </p>
          </div>
        </div>

        {/* Block 2: Left Content + Right Image (1004.webp) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
              Resolving Marital Disputes &amp; Addressing Spiritual Obstacles
            </h3>
            <p>
              Marriages inevitably experience seasons of disagreement. Chronic <strong className="text-white font-semibold">husband wife dispute</strong> situations or distressing phases involving <strong className="text-white font-semibold">talaq ka masla</strong> require calm discernment rather than impulsive decisions. Discussing your marital strain privately provides a balanced setting to explore a practical <strong className="text-white font-semibold">divorce problem solution</strong>, aimed at restoring mutual empathy and communication between spouses.
            </p>
            <p>
              Additionally, many individuals experience unexplained domestic discord, persistent setbacks, or anxiety, leading them to look for spiritual protection or a <strong className="text-white font-semibold">black magic removal specialist</strong>. Concerns regarding spiritual restrictions—commonly called <strong className="text-white font-semibold">bandish ka tor</strong>—as well as queries regarding <strong className="text-white font-semibold">kala jadu ka tor taweez</strong>, <strong className="text-white font-semibold">kala ilam ka tor</strong>, and <strong className="text-white font-semibold">kala ilm ka tor</strong>, are addressed through protective supplications, spiritual counseling, and reassuring guidance.
            </p>
            <p>
              We prioritize transparency: spiritual advice is a support system that works alongside responsible personal effort, medical care, and professional counseling where appropriate.
            </p>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-[#12121b] border border-spiritual-gold/30 p-4 shadow-2xl relative group hover:border-spiritual-gold/60 transition-all duration-300">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
                <Image
                  src="/imgs/1004.webp"
                  alt="Islamic spiritual counseling poster for marital dispute and bandish guidance by Baba Hashim Bangali"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                  className="object-contain transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs uppercase tracking-widest text-spiritual-gold font-semibold">
                  Marital Harmony &amp; Spiritual Remedies
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section End CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/923270855972?text=Assalamualaikum%20Baba%20Hashim%20Bangali%2C%20I%20have%20read%20your%20guidance%20article%20and%20would%20like%20to%20discuss%20my%20situation%20confidentially."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-spiritual-burgundy to-spiritual-burgundyLight hover:from-spiritual-burgundyLight hover:to-red-600 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-red-950/40 border border-red-500/30 transition-all transform hover:-translate-y-0.5"
            aria-label="Discuss Marriage or Spiritual Concerns on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-emerald-300" />
            <span>Connect on WhatsApp for Confidential Guidance</span>
          </a>
        </div>
      </div>
    </section>
  );
}
