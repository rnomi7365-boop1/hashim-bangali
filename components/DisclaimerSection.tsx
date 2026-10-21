'use client';
import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function DisclaimerSection() {
  return (
    <section id="disclaimer" className="py-12 bg-[#09090d] border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111118]/80 border border-zinc-800/80 shadow-md flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-spiritual-gold/10 border border-spiritual-gold/30 flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5 text-spiritual-gold" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Important Disclaimer &amp; Notice
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              <strong className="text-zinc-300">Disclaimer:</strong> The information on this website is provided for general informational purposes. Spiritual guidance does not guarantee a particular marriage, relationship, family, or personal outcome. Individual circumstances differ. Relationship decisions should respect the consent, safety, and autonomy of everyone involved. This website does not replace qualified legal, medical, or mental health advice where such support is needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
