'use client';
import React, { useState } from 'react';
import {
  MessageSquare,
  Lock,
  Layers,
  HelpCircle,
  MessageCircle,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'How can I contact Baba Hashim Bangali online?',
    answer:
      'You can contact Baba Hashim Bangali directly through WhatsApp by clicking the WhatsApp buttons on this website or messaging 03270855972 (+923270855972). Direct telephone calls are also available on the same number.',
  },
  {
    question: 'Can I discuss a love marriage problem on WhatsApp?',
    answer:
      'Yes, you can initiate a confidential discussion on WhatsApp regarding your love marriage concerns, including family objections, mutual understanding, and traditional spiritual guidance.',
  },
  {
    question: 'Can I ask about manpasand shadi and pasand ki shadi?',
    answer:
      'Yes, consultations regarding manpasand shadi (pasand ki shadi) are welcome. You can explain your personal situation and receive guidance on prayers, istikhara, and respectful approaches to family approval.',
  },
  {
    question: 'Can I discuss husband wife disputes or talaq ka masla?',
    answer:
      'Yes, marital difficulties, communication issues between spouses, and distress around talaq ka masla can be discussed confidentially to explore constructive spiritual support and relationship reconciliation.',
  },
  {
    question: 'Can I discuss concerns about kala jadu, kala ilm, or bandish?',
    answer:
      'Yes, if you suspect spiritual obstacles, bandish, or negative influences, you can share your symptoms or concerns to receive traditional supplications and spiritual advice.',
  },
  {
    question: 'What information should I share when contacting you?',
    answer:
      'When reaching out via WhatsApp or phone, simply provide your name, the city or country you reside in, and a concise summary of the challenge or service you wish to discuss.',
  },
  {
    question: 'Are specific marriage or relationship outcomes guaranteed?',
    answer:
      'No. Individual circumstances vary greatly, and spiritual advice or supplications do not guarantee a specific personal or marital outcome. Relationships depend on human choices, mutual willingness, and circumstances beyond control.',
  },
  {
    question: 'How can I request further information about a service?',
    answer:
      'To inquire about any of our nine services or discuss personal circumstances, send a message to our official WhatsApp number at +923270855972 and Baba Hashim Bangali will provide detailed information.',
  },
];

const benefits = [
  {
    icon: MessageSquare,
    title: 'Easy Online Contact',
    description: 'Connect quickly via WhatsApp or phone from the comfort and privacy of your home.',
  },
  {
    icon: Lock,
    title: 'Respectful Conversations',
    description: 'Your personal stories and relationship concerns are handled with absolute confidentiality.',
  },
  {
    icon: Layers,
    title: 'Guidance for Different Concerns',
    description: 'Support tailored to family dynamics, marriage questions, and spiritual inquiries.',
  },
  {
    icon: HelpCircle,
    title: 'Clear Communication',
    description: 'Transparent discussions about spiritual remedies and prayers without exaggerated promises.',
  },
];

export default function WhyUsAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="why-us" className="py-14 sm:py-18 lg:py-20 bg-[#08080c] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Balanced Two-Column Grid: Left (Why Choose Us) | Right (FAQs) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Why Choose Us (lg: 5 cols or 6 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spiritual-card border border-spiritual-gold/30 text-spiritual-gold text-xs font-semibold tracking-wider uppercase mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-spiritual-gold" />
                <span>Our Principles</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Why Choose Us
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-spiritual-gold to-transparent rounded-full mt-2 mb-3" />
              <p className="text-zinc-300 text-sm leading-relaxed">
                We focus on honest, respectful, and accessible guidance to help you navigate relationship and personal challenges.
              </p>
            </div>

            {/* Compact 2x2 Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-b from-[#111119] to-[#0d0d13] p-4 rounded-xl border border-zinc-800/90 hover:border-spiritual-gold/40 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-spiritual-burgundy/20 border border-spiritual-burgundy/40 flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4 text-spiritual-gold" />
                      </div>
                      <h3 className="font-serif text-sm font-bold text-white mb-1.5 leading-snug">
                        {benefit.title}
                      </h3>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Compact WhatsApp CTA */}
            <div className="pt-1">
              <a
                href="https://wa.me/923270855972?text=Assalamualaikum%20Baba%20Hashim%20Bangali%2C%20I%20would%20like%20to%20connect%20with%20you%20for%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm px-5 py-3 rounded-xl shadow-md shadow-emerald-950/30 transition-all transform hover:-translate-y-0.5"
                aria-label="Connect with Baba Hashim Bangali on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions (lg: 7 cols) */}
          <div id="faq" className="lg:col-span-7 flex flex-col justify-start space-y-6 scroll-mt-24">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spiritual-burgundy/20 border border-spiritual-burgundy/40 text-spiritual-gold text-xs font-semibold tracking-wider uppercase mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-spiritual-burgundyLight" />
                <span>Common Questions</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-spiritual-gold to-transparent rounded-full mt-2 mb-3" />
              <p className="text-zinc-300 text-sm leading-relaxed">
                Find clear answers about our consultation process, privacy, and spiritual guidance.
              </p>
            </div>

            {/* Compact Accordion containing all 8 questions */}
            <div className="space-y-2.5">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const headingId = `faq-title-${index}`;
                const panelId = `faq-content-${index}`;

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-zinc-800/90 bg-[#0f0f16] overflow-hidden transition-all duration-200"
                  >
                    <h3>
                      <button
                        id={headingId}
                        type="button"
                        onClick={() => toggleItem(index)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left focus:outline-none focus:ring-1 focus:ring-spiritual-gold/40 hover:bg-[#14141e] transition-colors"
                      >
                        <span className="font-serif text-sm sm:text-base font-semibold text-white pr-3">
                          {faq.question}
                        </span>
                        <span
                          className={`w-6 h-6 rounded-full bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 bg-spiritual-burgundy/30 text-spiritual-gold' : 'text-zinc-400'
                          }`}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      className={`px-4 transition-all duration-300 ease-in-out ${
                        isOpen ? 'pb-4 pt-1 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/60 pt-2.5">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
