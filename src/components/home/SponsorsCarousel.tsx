import React from 'react';
import { motion } from 'framer-motion';
import { CONFERENCE_INFO } from '../../config/conferenceData';
import { SectionHeader } from '../common/SectionHeader';

export const SponsorsCarousel: React.FC = () => {
  const partners = [
    { name: 'National Institute of Technology (NIT) Delhi', type: 'Primary Host Organizer', logo: CONFERENCE_INFO.organizer.logoNitDelhiHighRes },
    { name: 'CSIR - National Physical Laboratory (CSIR-NPL)', type: 'Research Collaborator', logo: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=200&auto=format&fit=crop&q=80' },
    { name: 'National Institute of Technology (NIT) Uttarakhand', type: 'Institutional Partner', logo: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=200&auto=format&fit=crop&q=80' },
    { name: 'Khalsa College of Engineering & Tech (KCET) Amritsar', type: 'Institutional Partner', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=200&auto=format&fit=crop&q=80' },
    { name: 'Springer Nature Conference Proceedings', type: 'Publication Partner', logo: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&auto=format&fit=crop&q=80' },
    { name: 'IEEE Delhi Section', type: 'Technical Sponsor', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&auto=format&fit=crop&q=80' }
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-nit-dark/90 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Collaborative Synergy"
          title="Organizing Institutions & Technical Partners"
          subtitle="Backed by premier national labs, statutory educational bodies, and publishing partners."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 my-8">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center text-center hover:border-nit-gold transition-all"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="w-12 h-12 object-contain mb-3"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-2">
                {p.name}
              </h4>
              <span className="text-[10px] text-nit-gold font-semibold mt-1">
                {p.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
