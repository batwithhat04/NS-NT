import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Navigation, ArrowRight } from 'lucide-react';
import { CONFERENCE_INFO } from '../../config/conferenceData';
import { SectionHeader } from '../common/SectionHeader';

export const ContactPreview: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-nit-dark/90 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Venue & Location"
          title="Reach NIT Delhi Campus"
          subtitle="Situated along GT Karnal Road in Narela, New Delhi. Connected via Delhi Metro and national highways."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12 items-center">
          {/* Info cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-nit-navy/10 dark:bg-nit-gold/10 text-nit-navy dark:text-nit-gold rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                    Campus Address
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {CONFERENCE_INFO.venue.address}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-nit-gold" />
                  <span>{CONFERENCE_INFO.links.contactEmail}</span>
                </span>
                <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                  <Phone className="w-4 h-4 text-nit-gold" />
                  <span>{CONFERENCE_INFO.links.phoneSupport.split('/')[0]}</span>
                </span>
              </div>
            </div>

            <div className="p-6 bg-nit-navy text-white rounded-2xl shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-nit-gold font-bold text-xs uppercase tracking-wider">
                <Navigation className="w-4 h-4" />
                <span>Transportation Logistics</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nearest Airport: Indira Gandhi International Airport (DEL) - 42 km.
                Nearest Metro: Jahangirpuri / Samaypur Badli (Yellow Line).
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-nit-gold hover:underline pt-2"
              >
                <span>View Complete Directions & Accommodation Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Embedded map preview */}
          <div className="lg:col-span-7 h-80 rounded-3xl overflow-hidden shadow-2xl border-2 border-nit-gold/30">
            <iframe
              title="NIT Delhi Location Map"
              src={CONFERENCE_INFO.venue.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
