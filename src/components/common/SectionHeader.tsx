import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider text-nit-gold dark:text-nit-goldLight bg-nit-navy/10 dark:bg-nit-gold/10 border border-nit-gold/30 rounded-full uppercase"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nit-navy dark:text-white tracking-tight"
      >
        {title}
      </motion.h2>

      <div className={`w-24 h-1.5 mt-4 mb-4 rounded-full bg-gradient-to-r from-nit-navy via-nit-gold to-nit-sky ${centered ? 'mx-auto' : ''}`} />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto text-base md:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
