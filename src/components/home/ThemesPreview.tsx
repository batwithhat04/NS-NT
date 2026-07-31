import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Cpu, Waves, Dna, Zap, Network, Layers, Sparkles } from 'lucide-react';
import { TRACKS } from '../../config/conferenceData';
import { SectionHeader } from '../common/SectionHeader';

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

export const ThemesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-nit-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Scientific Scope"
          title="Conference Themes & Tracks"
          subtitle="Explore our 8 multidisciplinary technical tracks bridging core physics, chemistry, biology, electrical engineering, and materials science."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          {TRACKS.map((track, idx) => {
            const IconComp = iconMap[track.iconName] || Atom;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group relative p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-nit-gold transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-nit-gold uppercase tracking-widest bg-nit-gold/10 px-2.5 py-1 rounded-md border border-nit-gold/30">
                      {track.trackNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-nit-navy text-nit-gold dark:bg-nit-gold dark:text-nit-navy flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading group-hover:text-nit-sky dark:group-hover:text-nit-gold transition-colors mb-2">
                    {track.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {track.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-nit-navy dark:text-nit-gold">
                  <span>{track.topics.length} Topic Clusters</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/themes"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-nit-navy hover:bg-nit-blue text-white font-bold text-sm rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            <span>View All Detailed Subtopics & Track Details</span>
            <ArrowRight className="w-4 h-4 text-nit-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
};
