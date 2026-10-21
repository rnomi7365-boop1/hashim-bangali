'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Info, MessageSquare } from 'lucide-react';

interface TestimonialItem {
  id: number;
  category: string;
  topic: string;
  message: string;
  authorLabel: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    category: 'Communication',
    topic: 'Respectful & Prompt Response',
    message:
      'The initial WhatsApp conversation was polite, prompt, and gave clear insight into available spiritual consultations without any pressure.',
    authorLabel: 'Sample visitor feedback — replace with verified client testimonial before publishing.',
  },
  {
    id: 2,
    category: 'Privacy',
    topic: 'Confidentiality & Discretion',
    message:
      'Appreciated the respectful and private atmosphere provided when discussing sensitive family matters and marriage concerns.',
    authorLabel: 'Sample visitor feedback — replace with verified client testimonial before publishing.',
  },
  {
    id: 3,
    category: 'Clarity',
    topic: 'Transparent Explanations',
    message:
      'Received thoughtful guidance on istikhara and spiritual prayers, along with realistic advice about family communication.',
    authorLabel: 'Sample visitor feedback — replace with verified client testimonial before publishing.',
  },
  {
    id: 4,
    category: 'Support',
    topic: 'Patient & Understanding Dialogue',
    message:
      'The conversation was patient, attentive, and focused on finding peaceful, responsible steps for relationship disagreements.',
    authorLabel: 'Sample visitor feedback — replace with verified client testimonial before publishing.',
  },
  {
    id: 5,
    category: 'Ethics',
    topic: 'No Unrealistic Promises',
    message:
      'Valued the honesty regarding spiritual guidance, respecting personal autonomy and offering calm spiritual reassurance.',
    authorLabel: 'Sample visitor feedback — replace with verified client testimonial before publishing.',
  },
  {
    id: 6,
    category: 'Accessibility',
    topic: 'Convenient Online Assistance',
    message:
      'Connecting online via phone and WhatsApp made it simple to discuss relationship guidance without difficult travel.',
    authorLabel: 'Sample visitor feedback — replace with verified client testimonial before publishing.',
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Maximum index is testimonials.length - 1 (6 items, indices 0..5)
  const total = testimonials.length;

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? total - 1 : prev - 1));
  }, [total]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= total - 1 ? 0 : prev + 1));
  }, [total]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 bg-[#09090d] border-b border-zinc-800/80 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spiritual-burgundy/15 border border-spiritual-burgundy/30 text-spiritual-gold text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-spiritual-burgundyLight" />
            <span>Visitor Reflections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
            What Visitors Appreciate
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent mx-auto rounded-full mb-5" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            We value respectful communication, privacy, and clear guidance for every enquiry.
          </p>

          {/* Ethical Notice Badge */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 max-w-2xl text-left">
            <Info className="w-4 h-4 text-spiritual-gold shrink-0" />
            <span>
              <strong>Transparency Notice:</strong> The cards below are structured feedback templates. Genuine, verified visitor testimonials will be added upon direct client verification and consent.
            </span>
          </div>
        </div>

        {/* Carousel Slider Viewport */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop/Tablet/Mobile Responsive track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {/* We chunk or display cards so that:
                On mobile: 1 card per slide (6 slides)
                On desktop/tablet: rendered cleanly with responsive flex wraps */}
            {testimonials.map((item, idx) => (
              <div
                key={item.id}
                className="w-full shrink-0 px-2 sm:px-4"
              >
                <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#12121b] to-[#0d0d14] rounded-2xl p-6 sm:p-8 border border-zinc-800 hover:border-spiritual-gold/40 shadow-xl flex flex-col justify-between transition-all duration-300">
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-spiritual-burgundy/20 border border-spiritual-burgundy/40 flex items-center justify-center text-red-500">
                        <Quote className="w-5 h-5 text-red-500" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-spiritual-gold bg-spiritual-card px-3 py-1 rounded-md border border-spiritual-gold/20">
                        {item.category} • Card {idx + 1} of {total}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                      {item.topic}
                    </h3>

                    <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                      &ldquo;{item.message}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80">
                    <span className="inline-block text-xs text-zinc-400 bg-zinc-900/90 px-3 py-2 rounded-lg border border-zinc-800 leading-tight w-full">
                      {item.authorLabel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls and Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 hover:border-spiritual-gold text-zinc-300 hover:text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-spiritual-gold shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-7 h-2 bg-spiritual-gold shadow-md shadow-spiritual-gold/40'
                    : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={idx === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 hover:border-spiritual-gold text-zinc-300 hover:text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-spiritual-gold shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
