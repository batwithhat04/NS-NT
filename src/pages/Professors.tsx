import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, BookOpen, ExternalLink, Award, Sparkles, X, User } from 'lucide-react';
import { SPEAKERS } from '../config/conferenceData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { Speaker } from '../types';

export const Professors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const filteredSpeakers = SPEAKERS.filter((spk) => {
    const matchesCat = activeCategory === 'all' || spk.category === activeCategory;
    const matchesSearch =
      spk.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      spk.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      spk.researchArea.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Keynote & Invited Speakers"
        description="Meet distinguished keynote speakers, invited professors, and plenary lecturers at NS&NT 2026 organized by NIT Delhi."
      />

      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-r from-nit-dark via-nit-navy to-nit-dark text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-nit-gold bg-nit-gold/10 rounded-full border border-nit-gold/30">
            Distinguished Lecturers
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading">
            Keynote & Invited Speakers
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Internationally celebrated scientists and pioneering professors delivering plenary talks on frontier nanoscience breakthroughs.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto pt-6">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search speaker by name, country, or research domain..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md border border-nit-gold/40 rounded-2xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nit-gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-slate-50 dark:bg-nit-dark/90 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-3 mb-12">
            {[
              { key: 'all', label: 'All Speakers' },
              { key: 'keynote', label: 'Keynote Speakers' },
              { key: 'invited', label: 'Invited Speakers' },
              { key: 'featured', label: 'Featured Professors' }
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.key
                    ? 'bg-nit-navy text-nit-gold dark:bg-nit-gold dark:text-nit-navy shadow-lg scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-nit-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Speaker Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpeakers.map((spk, idx) => (
              <motion.div
                key={spk.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden hover:shadow-2xl hover:border-nit-gold/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-72 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={spk.image}
                      alt={spk.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-nit-navy/90 text-nit-gold text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-nit-gold/40">
                      {spk.category} Lecture
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/20">
                      📍 {spk.country}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading group-hover:text-nit-sky transition-colors">
                      {spk.name}
                    </h3>
                    <p className="text-xs font-semibold text-nit-gold dark:text-nit-goldLight">
                      {spk.title} • <strong>{spk.institution}</strong>
                    </p>

                    <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-nit-sky">Research Focus:</span>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium line-clamp-2">
                        {spk.researchArea}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {spk.bio}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedSpeaker(spk)}
                    className="text-xs font-bold text-nit-navy dark:text-nit-gold hover:underline"
                  >
                    Read Full Bio ›
                  </button>

                  <div className="flex items-center gap-2">
                    {spk.publicationsUrl && (
                      <a
                        href={spk.publicationsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-nit-gold rounded-lg shadow border border-slate-200 dark:border-slate-700 text-xs font-semibold flex items-center gap-1"
                        aria-label="Publications"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {spk.websiteUrl && (
                      <a
                        href={spk.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-nit-navy text-nit-gold hover:bg-nit-blue rounded-lg text-xs font-semibold flex items-center gap-1"
                        aria-label="Website"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Details Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white dark:bg-nit-dark rounded-3xl shadow-2xl border border-nit-gold/40 overflow-hidden">
            <div className="flex items-center justify-between p-6 bg-nit-navy text-white">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-nit-gold" />
                <div>
                  <h3 className="text-xl font-bold font-heading">{selectedSpeaker.name}</h3>
                  <p className="text-xs text-nit-gold uppercase">{selectedSpeaker.category} Speaker Profile</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-36 h-36 rounded-2xl object-cover shadow-lg border-2 border-nit-gold shrink-0"
                />

                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    {selectedSpeaker.name}
                  </h4>
                  <p className="text-sm font-semibold text-nit-gold">
                    {selectedSpeaker.title}
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {selectedSpeaker.institution} ({selectedSpeaker.country})
                  </p>
                  <div className="p-2 bg-nit-navy/10 dark:bg-nit-gold/10 rounded-lg text-xs font-semibold text-nit-navy dark:text-nit-gold">
                    Key Focus: {selectedSpeaker.researchArea}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h5 className="text-xs font-bold text-nit-gold uppercase tracking-wider mb-2">
                  Academic Biography & Keynote Theme
                </h5>
                <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedSpeaker.bio}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                {selectedSpeaker.publicationsUrl && (
                  <a
                    href={selectedSpeaker.publicationsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-nit-gold text-xs font-bold rounded-lg flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Google Scholar</span>
                  </a>
                )}
                {selectedSpeaker.websiteUrl && (
                  <a
                    href={selectedSpeaker.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-nit-navy text-nit-gold text-xs font-bold rounded-lg flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Personal Page</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedSpeaker(null)}
                className="px-4 py-1.5 bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
