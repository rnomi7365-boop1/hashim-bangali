'use client';
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'How can I contact Baba Hashim Bangali online?',
    answer:
      'You can easily contact Baba Hashim Bangali online through WhatsApp by clicking the WhatsApp buttons on this website or messaging directly at 03270855972 (+923270855972). You can also place a direct phone call to the same number.',
  },
  {
    question: 'Can I discuss a love marriage problem on WhatsApp?',
    answer:
      'Yes, you can initiate a private conversation on WhatsApp regarding your love marriage concerns, including family hesitations, mutual understanding, and traditional spiritual guidance.',
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

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#08080c] border-b border-zinc-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spiritual-burgundy/20 border border-spiritual-burgundy/40 text-spiritual-gold text-xs font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-spiritual-burgundyLight" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Common Inquiries &amp; Information
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent mx-auto rounded-full mb-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Find clear answers to common questions about our consultation process, privacy, and spiritual guidance.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800 bg-[#0f0f16] overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-spiritual-gold/40 hover:bg-[#14141e] transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-spiritual-burgundy/30 text-spiritual-gold' : 'text-zinc-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  className={`px-5 sm:px-6 transition-all duration-300 ease-in-out ${
                    isOpen ? 'pb-6 pt-1 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-zinc-800/60 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
