'use client';
import React from 'react';
import {
  Globe,
  Heart,
  Scroll,
  HelpCircle,
  EyeOff,
  Unlock,
  Users,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  whatsappMessage: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Amil Baba Online',
    description: 'Contact an online amil baba to discuss your personal concerns and available spiritual guidance.',
    icon: Globe,
    whatsappMessage: 'Assalamualaikum Baba Hashim Bangali, I would like to discuss Amil Baba Online services.',
  },
  {
    id: 2,
    title: 'Amil Baba for Love Marriage',
    description: 'Discuss love marriage concerns, family objections, and your hopes for a respectful marriage.',
    icon: Heart,
    whatsappMessage: 'Assalamualaikum Baba Hashim Bangali, I would like to discuss Amil Baba for Love Marriage.',
  },
  {
    id: 3,
    title: 'Manpasand Shadi & Pasand Ki Shadi',
    description: 'Seek guidance about manpasand shadi, pasand ki shadi, and challenges involving family acceptance.',
    icon: Sparkles,
    whatsappMessage: 'Assalamualaikum Baba Hashim Bangali, I would like to discuss Manpasand Shadi & Pasand Ki Shadi guidance.',
  },
  {
    id: 4,
    title: 'Amliyat for Love Marriage',
    description: 'Explore spiritual guidance for love marriage concerns with a focus on personal circumstances and responsible advice.',
    icon: Scroll,
    whatsappMessage: 'Assalamualaikum Baba Hashim Bangali, I would like to discuss Amliyat for Love Marriage.',
  },
  {
    id: 5,
    title: 'Istikhara for Love Marriage',
    description: 'Discuss marriage-related questions and seek guidance when considering an important relationship decision.',
    icon: HelpCircle,
    whatsappMessage: 'Assalamualaikum Baba Hashim Bangali, I would like to request Istikhara for Love Marriage consultation.',
  },
  {
    id: 6,
    title: 'Black Magic & Kala Jadu Guidance',
    description: 'Discuss concerns about kala jadu, kala ilm, and black magic with a focus on reassurance and responsible guidance.',
    icon: EyeOff,
    whatsappMessage: 'Assalamualaikum Baba Hashim Bangali, I would like to discuss Black Magic & Kala Jadu Guidance.',
  },
  {
    id: 7,
    title: 'Bandish Ka Tor & Spiritual Guidance',
    description: 'Talk about concerns involving bandish and explore available spiritual guidance without promises of guaranteed results.',
    icon: Unlock,
    whatsappMessage: 'Assalamualaikum Baba Hashim Bangali, I would like to discuss Bandish Ka Tor & Spiritual Guidance.',
  },
  {
    id: 8,
    title: 'Husband Wife Dispute & Divorce Problem',
    description: 'Discuss marital disagreements, communication difficulties, and divorce-related concerns in a respectful setting.',
    icon: Users,
    whatsappMessage: 'Assalamualaikum Baba Hashim Bangali, I would like to discuss Husband Wife Dispute & Divorce Problem guidance.',
  },
  {
    id: 9,
    title: 'Love Marriage Problem Solution & Relationship Support',
    description: 'Talk about relationship difficulties, emotional concerns, or separation and explore practical next steps.',
    icon: Heart,
    whatsappMessage: 'Assalamualaikum Baba Hashim Bangali, I would like to discuss Love Marriage Problem Solution & Relationship Support.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#08080c] relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spiritual-burgundy/20 border border-spiritual-burgundy/40 text-spiritual-gold text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Specialized Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Best Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent mx-auto rounded-full mb-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Explore guidance for marriage, relationships, family concerns, and spiritual questions. Choose the service that best matches your situation and contact us to discuss your needs.
          </p>
        </div>

        {/* 9 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            const encodedMsg = encodeURIComponent(service.whatsappMessage);
            const waUrl = `https://wa.me/923270855972?text=${encodedMsg}`;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between bg-gradient-to-b from-[#111118] to-[#0c0c11] rounded-2xl p-7 border border-zinc-800 hover:border-spiritual-gold/50 shadow-lg hover:shadow-xl hover:shadow-spiritual-burgundy/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Top: Icon + Title + Description */}
                <div>
                  {/* Lucide icon in RED as requested */}
                  <div className="w-14 h-14 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-red-500" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-spiritual-gold transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom: Discuss on WhatsApp CTA */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-spiritual-gold py-2 transition-colors"
                    aria-label={`Discuss ${service.title} on WhatsApp`}
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Discuss on WhatsApp</span>
                    </span>
                    <span className="text-spiritual-gold transition-transform group-hover:translate-x-1 font-bold">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
