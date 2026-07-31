import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../config/conferenceData';
import { SectionHeader } from '../common/SectionHeader';

export const TestimonialsCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-nit-dark border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Community Endorsements"
          title="What Academicians Say"
          subtitle="Reflections on the interdisciplinary vision of NS&NT 2026 at NIT Delhi."
        />

        <div className="relative my-8 p-8 md:p-12 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-nit-gold/30 shadow-xl overflow-hidden">
          <Quote className="w-16 h-16 text-nit-gold/20 absolute top-4 left-4 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 text-center space-y-6"
            >
              <p className="text-lg md:text-2xl font-serif italic text-slate-800 dark:text-slate-100 leading-relaxed max-w-3xl mx-auto">
                "{TESTIMONIALS[current].quote}"
              </p>

              <div>
                <h4 className="text-base font-bold text-nit-navy dark:text-nit-gold font-heading">
                  {TESTIMONIALS[current].name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {TESTIMONIALS[current].role} • <strong>{TESTIMONIALS[current].institution}</strong>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-nit-gold shadow transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    current === i ? 'bg-nit-gold w-6' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-nit-gold shadow transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
