import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Globe2, Users, FileCheck, Layers } from 'lucide-react';
import { STATS } from '../../config/conferenceData';

export const ConferenceHighlights: React.FC = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Scopus & WoS Publication',
      desc: 'All peer-reviewed and accepted full papers will be published in Scopus & Web of Science indexed proceedings.'
    },
    {
      icon: Users,
      title: 'World-Renowned Keynote Speakers',
      desc: 'Plenary lectures and keynote addresses by distinguished scientists from MIT, CSIR-NPL, IIT Delhi, and ANU Australia.'
    },
    {
      icon: Globe2,
      title: 'International Collaboration',
      desc: 'Jointly organized by NIT Delhi with KCET Amritsar, NIT Uttarakhand, and CSIR National Physical Laboratory.'
    },
    {
      icon: Layers,
      title: '8 Specialized Technical Tracks',
      desc: 'Covering 2D nanomaterials, nanoelectronics, nanomedicine, green hydrogen energy, and quantum computational physics.'
    },
    {
      icon: Award,
      title: 'Best Presentation Awards',
      desc: 'Young Researcher and Best Oral & Poster Presentation Awards in each technical track with cash prizes.'
    },
    {
      icon: FileCheck,
      title: 'Industry-Academia Conclave',
      desc: 'B2B networking sessions bridging fundamental nanotech research with commercial manufacturing and startups.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-nit-dark/60 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Counter Stats Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-5 text-center bg-white dark:bg-nit-navy/80 rounded-2xl border border-nit-gold/30 shadow-md hover:shadow-xl hover:border-nit-gold transition-all"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-nit-navy dark:text-nit-gold font-mono">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-nit-gold/50 transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 mb-5 rounded-xl bg-nit-navy/10 dark:bg-nit-gold/10 text-nit-navy dark:text-nit-gold flex items-center justify-center group-hover:bg-nit-navy group-hover:text-nit-gold transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
