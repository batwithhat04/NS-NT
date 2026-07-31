import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Sparkles, Award, MapPin, Calendar, CheckCircle2, CreditCard } from 'lucide-react';
import { CONFERENCE_INFO } from '../config/conferenceData';
import { SEO } from '../components/common/SEO';
import { HeroParticles } from '../components/common/HeroParticles';
import { CountdownTimer } from '../components/common/CountdownTimer';
import { AnnouncementTicker } from '../components/common/AnnouncementTicker';
import { BrochureModal } from '../components/common/BrochureModal';
import { ScheduleModal } from '../components/common/ScheduleModal';
import { ConferenceHighlights } from '../components/home/ConferenceHighlights';
import { AboutPreview } from '../components/home/AboutPreview';
import { ImportantDatesTimeline } from '../components/home/ImportantDatesTimeline';
import { ThemesPreview } from '../components/home/ThemesPreview';
import { OrganizersPreview } from '../components/home/OrganizersPreview';
import { FeeCardsPreview } from '../components/home/FeeCardsPreview';
import { SponsorsCarousel } from '../components/home/SponsorsCarousel';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { ContactPreview } from '../components/home/ContactPreview';

export const Home: React.FC = () => {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <>
      <SEO />

      {/* Ticker Bar */}
      <AnnouncementTicker />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-nit-dark via-nit-navy to-nit-dark text-white overflow-hidden py-16">
        {/* Nanotechnology Particle Canvas */}
        <HeroParticles />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Institutional Branding Row */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
          >
            {/* NIT Delhi Logo */}
            <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl border border-nit-gold/40">
              <img
                src={CONFERENCE_INFO.organizer.logoNitDelhiHighRes}
                alt="NIT Delhi"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
              <div className="text-left">
                <span className="block text-xs font-bold text-nit-gold">NATIONAL INSTITUTE OF TECHNOLOGY DELHI</span>
                <span className="text-[10px] text-slate-300">An Institute of National Importance under MoE, Govt. of India</span>
              </div>
            </div>

            {/* Collaborators Badge */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-300 bg-black/30 px-3 py-2 rounded-xl border border-white/10">
              <span>In Collaboration With:</span>
              <strong className="text-nit-gold">KCET Amritsar • NIT Uttarakhand • CSIR-NPL</strong>
            </div>
          </motion.div>

          {/* Conference Title Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-nit-gold/20 via-nit-gold/40 to-nit-gold/20 border border-nit-gold/60 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-nit-gold" />
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-nit-gold font-heading">
              1st International Flagship Edition • NS&NT 2026
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-tight max-w-5xl mx-auto"
          >
            1st International Conference on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
              Nanoscience
            </span>{' '}
            & Advanced{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400">
              Nanotechnology
            </span>
          </motion.h1>

          {/* Theme Motto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            "{CONFERENCE_INFO.theme}"
          </motion.p>

          {/* Date & Venue Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-bold text-slate-200"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-nit-navy/80 rounded-xl border border-nit-gold/30">
              <Calendar className="w-4 h-4 text-nit-gold" />
              <span>{CONFERENCE_INFO.dates.display}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-nit-navy/80 rounded-xl border border-nit-gold/30">
              <MapPin className="w-4 h-4 text-nit-gold" />
              <span>NIT Delhi Campus, Narela, New Delhi</span>
            </div>
          </motion.div>

          {/* Live Countdown Component */}
          <CountdownTimer />

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/registration"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-nit-navy font-black text-sm md:text-base uppercase tracking-wider rounded-2xl shadow-2xl hover:from-amber-300 hover:to-yellow-400 transition-all transform hover:scale-105"
            >
              <CreditCard className="w-5 h-5" />
              <span>Register Now</span>
            </Link>

            <button
              onClick={() => setIsBrochureOpen(true)}
              className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm md:text-base rounded-2xl border border-nit-gold/50 shadow-lg backdrop-blur-md transition-all transform hover:scale-105"
            >
              <FileText className="w-5 h-5 text-nit-gold" />
              <span>Download Brochure</span>
            </button>

            <button
              onClick={() => setIsScheduleOpen(true)}
              className="flex items-center gap-2 px-8 py-4 bg-nit-blue/40 hover:bg-nit-blue/60 text-white font-bold text-sm md:text-base rounded-2xl border border-white/20 shadow-lg backdrop-blur-md transition-all transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 text-cyan-300" />
              <span>Event Schedule</span>
            </button>

            <Link
              to="/about-conference"
              className="flex items-center gap-2 px-6 py-4 text-slate-300 hover:text-nit-gold font-semibold text-sm transition-colors"
            >
              <span>Explore Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Page Sections */}
      <ConferenceHighlights />
      <AboutPreview />
      <ImportantDatesTimeline />
      <ThemesPreview />
      <OrganizersPreview />
      <FeeCardsPreview />
      <TestimonialsCarousel />
      <SponsorsCarousel />
      <ContactPreview />

      {/* Dialog Modals */}
      <BrochureModal isOpen={isBrochureOpen} onClose={() => setIsBrochureOpen(false)} />
      <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
    </>
  );
};
