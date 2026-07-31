import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, CreditCard, ArrowRight, ShieldAlert } from 'lucide-react';
import { PRICING_TIERS, CONFERENCE_INFO } from '../../config/conferenceData';
import { SectionHeader } from '../common/SectionHeader';

export const FeeCardsPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-nit-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Transparent Pricing"
          title="Registration Fees Tiers"
          subtitle="Select your delegate category. Standard registration includes technical session access, delegate kit, and Scopus publication opportunity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {PRICING_TIERS.slice(0, 3).map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                tier.recommended
                  ? 'bg-nit-navy text-white border-nit-gold shadow-2xl scale-105 ring-2 ring-nit-gold'
                  : 'bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 shadow-lg hover:border-nit-gold/50'
              }`}
            >
              {tier.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-nit-gold text-nit-navy font-extrabold text-xs uppercase tracking-widest rounded-full shadow">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold font-heading mb-3">
                  {tier.category}
                </h3>

                <div className="my-4">
                  <span className="text-3xl font-black font-mono tracking-tight text-nit-gold">
                    {tier.inrPrice}
                  </span>
                  <p className="text-xs text-slate-400 mt-1">
                    Overseas Delegate: {tier.usdPrice}
                  </p>
                </div>

                <ul className="space-y-3 my-6 text-xs sm:text-sm">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-nit-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  to="/registration"
                  className={`w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all ${
                    tier.recommended
                      ? 'bg-nit-gold text-nit-navy hover:bg-yellow-400 shadow-md'
                      : 'bg-nit-navy text-white hover:bg-nit-blue dark:bg-nit-gold dark:text-nit-navy'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Register for {tier.category.split('/')[0]}</span>
                </Link>
                {tier.notes && (
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    {tier.notes}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/registration"
            className="inline-flex items-center gap-2 text-sm font-bold text-nit-navy dark:text-nit-gold hover:underline"
          >
            <span>View Full Pricing Matrix (Industry & Foreign Participants)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
