import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Building, ShieldCheck } from 'lucide-react';
import { ORGANIZERS } from '../../config/conferenceData';
import { SectionHeader } from '../common/SectionHeader';

export const OrganizersPreview: React.FC = () => {
  // Showcase patrons & chairs on home page
  const featuredOrganizers = ORGANIZERS.filter(m => m.role === 'patron' || m.role === 'chair').slice(0, 4);

  return (
    <section className="py-20 bg-slate-50 dark:bg-nit-dark/80 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Leadership & Patrons"
          title="Organizing Leadership"
          subtitle="Led by visionary leaders and academic directors from NIT Delhi, CSIR-NPL, NIT Uttarakhand, and KCET Amritsar."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
          {featuredOrganizers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden hover:shadow-2xl hover:border-nit-gold/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-nit-navy/90 text-nit-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-nit-gold/40">
                  {member.role}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading group-hover:text-nit-sky transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-nit-gold dark:text-nit-goldLight">
                  {member.designation}
                </p>
                <div className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <Building className="w-3.5 h-3.5 text-nit-sky shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{member.institution}</span>
                </div>

                {member.email && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <Mail className="w-3 h-3 text-nit-gold" />
                    <span className="truncate">{member.email}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/organizers"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-nit-gold text-nit-navy dark:text-nit-gold font-bold text-sm rounded-xl shadow hover:bg-nit-navy hover:text-nit-gold transition-all"
          >
            <span>View Complete Organizing & Advisory Committee</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
