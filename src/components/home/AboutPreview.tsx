import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { CONFERENCE_INFO } from '../../config/conferenceData';
import { SectionHeader } from '../common/SectionHeader';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-nit-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Premier Institutional Event"
          title="About NS&NT 2026 & NIT Delhi"
          subtitle="Fostering interdisciplinary breakthrough research in nanoscience, quantum nanostructures, and sustainable nanotechnology."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-nit-navy/10 dark:bg-nit-gold/10 text-nit-navy dark:text-nit-gold rounded-full text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Host Institution: National Institute of Technology Delhi</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-heading leading-tight">
              A Global Convergence of Nanoscience Researchers, Engineers, and Innovators
            </h3>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              The <strong>1st International Conference on Nanoscience and Advanced Nanotechnology (NS&NT 2026)</strong> is organized by the <strong>National Institute of Technology (NIT) Delhi</strong> in collaboration with premier partner institutions: <strong>KCET Amritsar, NIT Uttarakhand, and CSIR-NPL</strong>.
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              The conference provides an elite international forum for academicians, scientists, industry leaders, and research scholars to exchange ideas, showcase cutting-edge discoveries, and forge collaborative inter-institutional partnerships.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Scopus & WoS Indexed Proceedings',
                'State-of-the-Art Cleanroom Labs Tour',
                'International Keynote Speakers',
                'Industrial B2B Networking Conclave',
                'Student Poster Competition',
                'Delhi NCR Heritage Tour'
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-nit-gold shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/about-conference"
                className="flex items-center gap-2 px-6 py-3 bg-nit-navy hover:bg-nit-blue text-white font-bold text-sm rounded-xl shadow-lg transition-all transform hover:scale-105"
              >
                <span>Explore Conference Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about-nit-delhi"
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-900 dark:text-white font-bold text-sm rounded-xl border border-slate-300 dark:border-slate-700 transition-colors"
              >
                <span>About NIT Delhi Campus</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Visual Card Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-nit-gold/40">
              <img
                src={CONFERENCE_INFO.organizer.campusFrontGate}
                alt="NIT Delhi Main Campus Front Gate"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nit-dark via-nit-dark/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-nit-gold font-bold mb-1">
                  National Institute of Technology Delhi
                </span>
                <h4 className="text-xl font-bold font-heading">
                  Permanent Campus at Narela, New Delhi
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Autonomous institute under the aegis of Ministry of Education, Govt. of India.
                </p>
              </div>
            </div>

            {/* Floating Highlight Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-nit-navy p-4 rounded-2xl shadow-xl border border-nit-gold/50 flex items-center gap-3 hidden sm:flex max-w-xs">
              <Sparkles className="w-8 h-8 text-nit-gold shrink-0 animate-pulse" />
              <div>
                <div className="text-xs font-bold text-nit-navy dark:text-nit-gold uppercase">Collaborators</div>
                <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  CSIR-NPL • NIT UK • KCET Amritsar
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
