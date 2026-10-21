'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Phone, ArrowRight, Sparkles } from 'lucide-react';

interface Slide {
  id: number;
  tagline: string;
  heading: string;
  description: string;
  ctaPrimaryText: string;
  ctaPrimaryHref: string;
  ctaPrimaryType: 'link' | 'whatsapp' | 'call';
  ctaSecondaryText: string;
  ctaSecondaryHref: string;
  ctaSecondaryType: 'link' | 'whatsapp' | 'call';
}

const slides: Slide[] = [
  {
    id: 1,
    tagline: 'Trusted Confidential Guidance',
    heading: 'Love Marriage Guidance & Relationship Support',
    description:
      'Looking for guidance about manpasand shadi, pasand ki shadi, or relationship difficulties? Explore spiritual guidance and discuss your concerns privately.',
    ctaPrimaryText: 'Discuss Your Situation',
    ctaPrimaryHref: '#contact',
    ctaPrimaryType: 'link',
    ctaSecondaryText: 'Chat on WhatsApp',
    ctaSecondaryHref:
      'https://wa.me/923270855972?text=Assalamualaikum%20Baba%20Hashim%20Bangali%2C%20I%20would%20like%20to%20discuss%20Love%20Marriage%20Guidance.',
    ctaSecondaryType: 'whatsapp',
  },
  {
    id: 2,
    tagline: 'Spiritual Remedies & Protection',
    heading: 'Black Magic & Bandish Related Guidance',
    description:
      'Seeking guidance about kala jadu, kala ilm, or bandish concerns? Talk about your situation and learn about available spiritual guidance.',
    ctaPrimaryText: 'Explore Our Services',
    ctaPrimaryHref: '#services',
    ctaPrimaryType: 'link',
    ctaSecondaryText: 'Contact on WhatsApp',
    ctaSecondaryHref:
      'https://wa.me/923270855972?text=Assalamualaikum%20Baba%20Hashim%20Bangali%2C%20I%20would%20like%20to%20discuss%20Black%20Magic%20and%20Bandish%20Guidance.',
    ctaSecondaryType: 'whatsapp',
  },
  {
    id: 3,
    tagline: 'Direct Private Consultations',
    heading: 'Online Amil Baba — Personal Guidance',
    description:
      'Connect with Baba Hashim Bangali online to discuss marriage, family, relationship, and other personal concerns in a respectful and private conversation.',
    ctaPrimaryText: 'Get in Touch',
    ctaPrimaryHref: '#contact',
    ctaPrimaryType: 'link',
    ctaSecondaryText: 'Call Now',
    ctaSecondaryHref: 'tel:+923270855972',
    ctaSecondaryType: 'call',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section
      id="home"
      aria-label="Hero Slider"
      className="relative min-h-[600px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-[#08080a]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Exact Unsplash Background Image with dark luxury overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1753276489241-938268e7a2b6?q=80&w=2000&auto=format&fit=crop')`,
        }}
        role="img"
        aria-label="Spiritual lanterns and traditional illuminated background"
      >
        {/* Carefully adjusted multi-layer dark gradient overlay for optimal legibility while preserving imagery */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,17,30,0.18)_0,transparent_70%)]" />
      </div>

      {/* Slide Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-20 text-center flex flex-col items-center">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`transition-all duration-700 ease-in-out w-full flex flex-col items-center ${
                isActive
                  ? 'opacity-100 translate-y-0 scale-100 relative'
                  : 'opacity-0 translate-y-4 scale-95 absolute pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              {/* Badge Tagline */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-spiritual-card/90 border border-spiritual-gold/40 text-spiritual-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-md backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-spiritual-gold" />
                <span>{slide.tagline}</span>
              </div>

              {/* H1 for Slide 1, H2 for other slides for semantic hierarchy */}
              {index === 0 ? (
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl drop-shadow-md">
                  {slide.heading}
                </h1>
              ) : (
                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl drop-shadow-md">
                  {slide.heading}
                </h2>
              )}

              {/* Description */}
              <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10 font-normal">
                {slide.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                {/* Primary Button */}
                <a
                  href={slide.ctaPrimaryHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-spiritual-burgundy to-spiritual-burgundyLight hover:from-spiritual-burgundyLight hover:to-red-600 text-white font-semibold text-base px-8 py-3.5 rounded-lg shadow-xl shadow-red-950/50 hover:shadow-red-900/70 border border-red-500/30 transition-all transform hover:-translate-y-0.5"
                >
                  <span>{slide.ctaPrimaryText}</span>
                  <ArrowRight className="w-4 h-4 text-spiritual-gold" />
                </a>

                {/* Secondary Button */}
                <a
                  href={slide.ctaSecondaryHref}
                  target={slide.ctaSecondaryType === 'whatsapp' ? '_blank' : undefined}
                  rel={slide.ctaSecondaryType === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-semibold text-base px-8 py-3.5 rounded-lg transition-all transform hover:-translate-y-0.5 border ${
                    slide.ctaSecondaryType === 'whatsapp'
                      ? 'bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 border-[#25D366]/50 shadow-lg shadow-emerald-950/40'
                      : 'bg-spiritual-card/90 hover:bg-zinc-800 text-spiritual-gold border-spiritual-gold/40 shadow-lg'
                  }`}
                  aria-label={`${slide.ctaSecondaryText} - Baba Hashim Bangali`}
                >
                  {slide.ctaSecondaryType === 'whatsapp' && <MessageCircle className="w-5 h-5 text-emerald-400" />}
                  {slide.ctaSecondaryType === 'call' && <Phone className="w-5 h-5 text-spiritual-gold animate-bounce" />}
                  <span>{slide.ctaSecondaryText}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Previous / Next Controls */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-spiritual-burgundy/80 text-zinc-300 hover:text-white border border-zinc-700/60 flex items-center justify-center transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-spiritual-gold"
        aria-label="Previous Hero Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-spiritual-burgundy/80 text-zinc-300 hover:text-white border border-zinc-700/60 flex items-center justify-center transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-spiritual-gold"
        aria-label="Next Hero Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-6 z-20 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? 'w-8 h-2.5 bg-spiritual-gold shadow-md shadow-spiritual-gold/40'
                : 'w-2.5 h-2.5 bg-zinc-600 hover:bg-zinc-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === current ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
}
