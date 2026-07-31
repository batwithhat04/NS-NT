import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, Award, Users, FileCheck, Layers, ArrowRight, Lightbulb, Target } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { CONFERENCE_INFO, IMPORTANT_DATES } from '../config/conferenceData';

export const AboutConference: React.FC = () => {
  const objectives = [
    'Establish a global interdisciplinary platform for researchers in 2D materials, spintronics, and nanobiomedicine.',
    'Promote collaboration between NIT Delhi, CSIR-NPL, NIT Uttarakhand, KCET Amritsar, and international institutions.',
    'Provide PhD scholars and young researchers direct feedback from world-renowned keynote scientists.',
    'Publish high-impact, peer-reviewed full papers in Scopus and Web of Science (WoS) indexed conference proceedings.',
    'Bridge the gap between laboratory nano-synthesis and industrial-scale nanofabrication applications.'
  ];

  const benefitsResearchers = [
    'Scopus & WoS Indexed Proceedings Publication',
    'Best Oral & Poster Presentation Awards with Cash Prizes',
    'One-on-One Networking with International Keynote Speakers',
    'Interactive Workshops on Density Functional Theory (DFT) & LAMMPS',
    'Certificate of Presentation recognized globally for academic tenure'
  ];

  const benefitsStudents = [
    'Subsidized Registration Fee Tier for UG/PG & Doctoral Scholars',
    'Poster Presentation Entry with Expert Mentorship',
    'Insight into Emerging Nanotech Career Opportunities',
    'Access to All Technical Sessions & Hands-On Cleanroom Demonstration',
    'Full Delegate Kit & Certificate of Participation'
  ];

  return (
    <>
      <SEO
        title="About Conference Scope"
        description="Detailed objectives, expected outcomes, publication opportunities in Scopus & WoS, and benefits for students and researchers at NS&NT 2026."
      />

      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-r from-nit-dark via-nit-navy to-nit-dark text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-nit-gold bg-nit-gold/10 rounded-full border border-nit-gold/30">
            {CONFERENCE_INFO.acronym} Overview
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading">
            About the Conference
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-light">
            Pioneering Molecular Innovations for Sustainable Global Future • December 10 - 12, 2026
          </p>
        </div>
      </section>

      {/* Conference Overview & Scope */}
      <section className="py-16 bg-white dark:bg-nit-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                badge="Scientific Scope"
                title="Conference Objectives & Importance"
                centered={false}
              />
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Nanoscience and Advanced Nanotechnology have emerged as transformative drivers of 21st-century technological revolutions across semiconductors, clean energy, precision nanomedicine, and quantum computing.
              </p>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                The <strong>1st International Conference on Nanoscience and Advanced Nanotechnology (NS&NT 2026)</strong> aims to synthesize fundamental atomic-scale physics with scalable engineering applications. Organized at NIT Delhi, the conference brings together theoretical physicists, synthetic chemists, device engineers, and clinical nanobiologists.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                  Core Objectives:
                </h4>
                {objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                    <Target className="w-5 h-5 text-nit-gold shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-nit-gold/40 shadow-xl space-y-4">
                <div className="flex items-center gap-3 text-nit-navy dark:text-nit-gold font-bold text-lg">
                  <BookOpen className="w-6 h-6" />
                  <span>Publication Opportunities</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  All peer-reviewed and accepted full papers presented at NS&NT 2026 will be published in official <strong>Scopus and Web of Science (WoS) indexed proceedings</strong> (Springer / AIP / IOP Publishing).
                </p>
                <div className="p-3 bg-nit-navy/10 dark:bg-nit-gold/10 rounded-xl border border-nit-gold/30 text-xs text-nit-navy dark:text-nit-gold font-semibold">
                  ✔ SCI Journal Special Issue selection for top-rated papers
                </div>
              </div>

              <div className="p-8 bg-nit-navy text-white rounded-3xl shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-nit-gold font-bold text-sm uppercase">
                  <Lightbulb className="w-5 h-5" />
                  <span>Expected Conference Outcomes</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Establishment of multi-institutional research consortia, joint PhD co-supervision proposals, and patents licensing pathways for sustainable nanotech start-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Matrix */}
      <section className="py-16 bg-slate-50 dark:bg-nit-dark/90 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Delegate Value"
            title="Benefits for Researchers & Students"
            subtitle="Designed to empower scholars at every stage of their academic and industrial careers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            {/* For Researchers */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
              <div className="flex items-center gap-3 text-nit-navy dark:text-nit-gold font-bold text-xl font-heading">
                <Users className="w-6 h-6 text-nit-gold" />
                <span>Benefits for Faculty & Researchers</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {benefitsResearchers.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Students */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
              <div className="flex items-center gap-3 text-nit-navy dark:text-nit-gold font-bold text-xl font-heading">
                <Award className="w-6 h-6 text-nit-gold" />
                <span>Benefits for UG/PG & PhD Students</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {benefitsStudents.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/registration"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-nit-navy font-black text-sm uppercase tracking-wider rounded-xl shadow-lg hover:from-amber-300 hover:to-yellow-400 transition-all transform hover:scale-105"
            >
              <span>Register Now for NS&NT 2026</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
