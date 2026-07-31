import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { IMPORTANT_DATES } from '../../config/conferenceData';
import { SectionHeader } from '../common/SectionHeader';
import { Link } from 'react-router-dom';

export const ImportantDatesTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-nit-dark/90 border-t border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Mark Your Calendar"
          title="Important Conference Dates"
          subtitle="Keep track of paper submission deadlines, acceptance notifications, and registration dates."
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {IMPORTANT_DATES.map((item, idx) => {
            const isPassed = item.status === 'passed';
            const isActive = item.status === 'active';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-br from-nit-navy to-nit-blue text-white border-nit-gold shadow-2xl scale-105'
                    : isPassed
                    ? 'bg-slate-200/60 dark:bg-slate-900/40 text-slate-500 border-slate-300 dark:border-slate-800'
                    : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 shadow-md hover:border-nit-gold'
                }`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      isActive
                        ? 'bg-nit-gold text-nit-navy'
                        : isPassed
                        ? 'bg-slate-300 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        : 'bg-nit-navy/10 text-nit-navy dark:bg-nit-gold/10 dark:text-nit-gold'
                    }`}
                  >
                    {isPassed && <CheckCircle className="w-3.5 h-3.5" />}
                    {isActive && <Clock className="w-3.5 h-3.5 animate-spin" />}
                    <span>{item.status}</span>
                  </span>

                  {item.note && (
                    <span className="text-xs font-extrabold text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/40 animate-pulse">
                      {item.note}
                    </span>
                  )}
                </div>

                <h3 className={`text-lg font-bold font-heading mb-2 ${isActive ? 'text-white' : ''}`}>
                  {item.title}
                </h3>

                <div className={`flex items-center gap-2 text-base font-bold font-mono mt-4 ${isActive ? 'text-nit-gold' : 'text-nit-sky dark:text-cyan-400'}`}>
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Submit Call to Action */}
        <div className="mt-8 text-center p-6 bg-white dark:bg-nit-navy/90 rounded-2xl border border-nit-gold/40 shadow-xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-lg font-bold text-nit-navy dark:text-white font-heading">
              Ready to Submit Your Abstract?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Submit 1-page standard abstract before September 30, 2026.
            </p>
          </div>

          <Link
            to="/registration"
            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-nit-navy font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-transform transform hover:scale-105"
          >
            <span>Submit via Google Form</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
