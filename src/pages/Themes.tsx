import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, Atom, Cpu, Waves, Dna, Zap, Network, Layers, Sparkles, X, BookOpen, ArrowRight } from 'lucide-react';
import { TRACKS } from '../config/conferenceData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { Track } from '../types';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  Atom,
  Cpu,
  Waves,
  Dna,
  Zap,
  Network,
  Layers,
  Sparkles,
};

export const Themes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTrackId, setExpandedTrackId] = useState<number | null>(1); // Expand track 1 by default
  const [selectedTrackModal, setSelectedTrackModal] = useState<Track | null>(null);

  const filteredTracks = TRACKS.filter((track) => {
    const matchesTitle = track.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSummary = track.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopics = track.topics.some(t =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.subtopics.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    return matchesTitle || matchesSummary || matchesTopics;
  });

  const toggleExpand = (id: number) => {
    setExpandedTrackId(expandedTrackId === id ? null : id);
  };

  return (
    <>
      <SEO
        title="Themes & Technical Tracks"
        description="Explore 8 comprehensive technical tracks of NS&NT 2026 covering 2D materials, nanoelectronics, nanomedicine, green energy, and computational nanoscience."
      />

      {/* Hero Header */}
      <section className="py-20 bg-gradient-to-r from-nit-dark via-nit-navy to-nit-dark text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-nit-gold bg-nit-gold/10 rounded-full border border-nit-gold/30">
            Scientific Program
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading">
            Technical Tracks & Subtopics
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Find your research domain among our 8 specialized tracks. Click any track card to view detailed subtopics and submission guidelines.
          </p>

          {/* Search Filter */}
          <div className="max-w-xl mx-auto pt-6">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search topics (e.g. Graphene, Solar Cells, Biosensors, DFT)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md border border-nit-gold/40 rounded-2xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nit-gold"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-3.5 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Accordion List */}
      <section className="py-16 bg-slate-50 dark:bg-nit-dark/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredTracks.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <p className="text-base text-slate-600 dark:text-slate-400">
                  No technical tracks found matching "<strong>{searchTerm}</strong>".
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 px-4 py-2 bg-nit-navy text-nit-gold font-bold text-xs rounded-lg"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              filteredTracks.map((track) => {
                const IconComp = iconMap[track.iconName] || Atom;
                const isExpanded = expandedTrackId === track.id;

                return (
                  <motion.div
                    key={track.id}
                    layout
                    className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden transition-all duration-300 hover:border-nit-gold/50"
                  >
                    {/* Header bar */}
                    <div
                      onClick={() => toggleExpand(track.id)}
                      className="p-6 md:p-8 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-nit-navy text-nit-gold dark:bg-nit-gold dark:text-nit-navy flex items-center justify-center shrink-0">
                          <IconComp className="w-6 h-6" />
                        </div>

                        <div>
                          <span className="text-xs font-extrabold text-nit-gold uppercase tracking-widest bg-nit-gold/10 px-2.5 py-0.5 rounded border border-nit-gold/30">
                            {track.trackNumber}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-heading mt-1">
                            {track.title}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed max-w-3xl">
                            {track.summary}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTrackModal(track);
                          }}
                          className="px-3.5 py-1.5 bg-nit-navy/10 text-nit-navy dark:bg-nit-gold/10 dark:text-nit-gold hover:bg-nit-navy hover:text-white font-bold text-xs rounded-xl transition-colors"
                        >
                          View Full Details
                        </button>
                        <div className="p-2 text-slate-400">
                          {isExpanded ? <ChevronUp className="w-6 h-6 text-nit-gold" /> : <ChevronDown className="w-6 h-6" />}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Topic Body */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 md:px-8 pb-8 pt-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40"
                        >
                          <h4 className="text-xs font-bold text-nit-gold uppercase tracking-wider mb-4">
                            Subtopic Categories Included in {track.trackNumber}
                          </h4>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {track.topics.map((topic, idx) => (
                              <div
                                key={idx}
                                className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
                              >
                                <h5 className="text-sm font-bold text-slate-900 dark:text-white font-heading border-b border-nit-gold/20 pb-2">
                                  {topic.title}
                                </h5>
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                  {topic.description}
                                </p>

                                <div className="space-y-1 pt-1">
                                  <span className="text-[10px] uppercase font-bold text-nit-gold">Key Focus Areas:</span>
                                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                                    {topic.subtopics.map((sub, sIdx) => (
                                      <li key={sIdx} className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-nit-gold shrink-0" />
                                        <span>{sub}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-6 flex justify-end">
                            <Link
                              to="/registration"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-nit-navy text-white hover:bg-nit-blue font-bold text-xs rounded-xl shadow transition-all"
                            >
                              <span>Submit Paper for {track.trackNumber}</span>
                              <ArrowRight className="w-4 h-4 text-nit-gold" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Modal detail popup if user clicks View Full Details */}
      {selectedTrackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl bg-white dark:bg-nit-dark rounded-3xl shadow-2xl border border-nit-gold/40 overflow-hidden">
            <div className="flex items-center justify-between p-6 bg-nit-navy text-white">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-nit-gold" />
                <div>
                  <h3 className="text-xl font-bold font-heading">{selectedTrackModal.title}</h3>
                  <p className="text-xs text-nit-gold">{selectedTrackModal.trackNumber} Technical Overview</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTrackModal(null)}
                className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {selectedTrackModal.summary}
              </p>

              <div className="space-y-4 pt-2">
                {selectedTrackModal.topics.map((t, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-nit-navy dark:text-nit-gold">{t.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{t.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {t.subtopics.map((sub, s) => (
                        <span key={s} className="px-2.5 py-0.5 bg-nit-navy/10 dark:bg-nit-gold/10 text-nit-navy dark:text-nit-gold text-[10px] font-semibold rounded-md">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">Abstract submission deadline: Sep 30, 2026</span>
              <Link
                to="/registration"
                onClick={() => setSelectedTrackModal(null)}
                className="px-5 py-2 bg-nit-gold text-nit-navy font-bold text-xs uppercase tracking-wider rounded-lg shadow"
              >
                Submit Paper Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
