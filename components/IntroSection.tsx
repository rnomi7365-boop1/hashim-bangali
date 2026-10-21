'use client';
import React from 'react';
import Image from 'next/image';
import { MessageCircle, Compass, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function IntroSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0e] relative border-b border-zinc-800/80">
      {/* Subtle background ambient lights */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-spiritual-burgundy/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-spiritual-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spiritual-burgundy/15 border border-spiritual-burgundy/30 text-spiritual-gold text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-spiritual-burgundyLight" />
            <span>Compassionate Support</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Personal Spiritual Guidance for Life’s Challenges
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent mx-auto rounded-full mb-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Welcome to the spiritual guidance service of <strong className="text-white font-semibold">Baba Hashim Bangali</strong>. We offer an understanding, confidential space to discuss marital difficulties, relationship concerns, family disagreements, and personal spiritual questions.
          </p>
        </div>

        {/* Two Images Side-by-Side (Desktop & Tablet), Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12">
          {/* Image 1: 1001.webp */}
          <div className="flex flex-col items-center">
            <div className="w-full rounded-2xl bg-[#111117] border border-spiritual-gold/30 p-3 sm:p-4 shadow-2xl relative group hover:border-spiritual-gold/60 transition-all duration-300">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black/70 flex items-center justify-center">
                <Image
                  src="/imgs/1001.webp"
                  alt="Baba Hashim Bangali spiritual consultation service card with Arabic calligraphy and contact information"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-102"
                  priority
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs sm:text-sm uppercase tracking-widest text-spiritual-gold font-semibold">
                  Spiritual Guidance &amp; Protection
                </span>
                <p className="text-zinc-400 text-xs mt-1">Direct online spiritual consultation</p>
              </div>
            </div>
          </div>

          {/* Image 2: 1006.webp */}
          <div className="flex flex-col items-center">
            <div className="w-full rounded-2xl bg-[#111117] border border-spiritual-gold/30 p-3 sm:p-4 shadow-2xl relative group hover:border-spiritual-gold/60 transition-all duration-300">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black/70 flex items-center justify-center">
                <Image
                  src="/imgs/1006.webp"
                  alt="Baba Hashim Bangali consultation card featuring Manpasand Shadi, Quranic imagery, and contact number"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-102"
                  priority
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs sm:text-sm uppercase tracking-widest text-spiritual-gold font-semibold">
                  Manpasand Shadi &amp; Relationship Support
                </span>
                <p className="text-zinc-400 text-xs mt-1">Respectful love marriage &amp; family guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Explanatory Content & Action Block */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#12121a] to-[#0d0d12] p-6 sm:p-8 rounded-2xl border border-zinc-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Life can present complex challenges—from misunderstandings between spouses to obstacles in love marriage approvals or unexplained emotional burdens. Having someone listen with patience and spiritual insight can bring clarity.
              </p>
              <p>
                Baba Hashim Bangali engages in one-on-one private dialogues to understand your specific situation, offering traditional amliyat guidance, istikhara advice, and emotional reassurance tailored to your needs.
              </p>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2.5 text-sm text-zinc-200">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-spiritual-gold shrink-0" />
                  <span>Strictly private, one-on-one communication</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-spiritual-gold shrink-0" />
                  <span>Guidance for marriage, family, and relationships</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-spiritual-gold shrink-0" />
                  <span>Balanced advice without exaggerated claims</span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="https://wa.me/923270855972?text=Assalamualaikum%20Baba%20Hashim%20Bangali%2C%20I%20would%20like%20to%20discuss%20my%20situation%20and%20seek%20personal%20spiritual%20guidance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5"
                  aria-label="Chat on WhatsApp with Baba Hashim Bangali for Personal Guidance"
                >
                  <MessageCircle className="w-5 h-5 text-black" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
