import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, Linkedin, BookOpen, Building, X, UserCheck, ShieldCheck, User } from 'lucide-react';
import { ORGANIZERS } from '../config/conferenceData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { CommitteeMember } from '../types';

export const Organizers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);

  const categories = [
    { key: 'all', label: 'All Members' },
    { key: 'patron', label: 'Patrons' },
    { key: 'chair', label: 'Organizing Chairs' },
    { key: 'secretary', label: 'Secretaries' },
    { key: 'convener', label: 'Conveners' },
    { key: 'advisory', label: 'Advisory Committee' },
  ];

  const filteredMembers = ORGANIZERS.filter((member) => {
    const matchesCategory = activeTab === 'all' || member.role === activeTab;
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Organizing Committee"
        description="Meet the Patrons, Chairpersons, Organizing Secretaries, Conveners, and Advisory Committee members of NS&NT 2026 at NIT Delhi."
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-nit-dark via-nit-navy to-nit-dark text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-nit-gold bg-nit-gold/10 rounded-full border border-nit-gold/30">
            Leadership Directory
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading">
            Organizing & Advisory Committee
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Prominent academicians, institution directors, and senior scientists leading the vision and execution of NS&NT 2026.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto pt-6">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search committee member by name or institution..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md border border-nit-gold/40 rounded-2xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nit-gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-slate-50 dark:bg-nit-dark/90 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === cat.key
                    ? 'bg-nit-navy text-nit-gold dark:bg-nit-gold dark:text-nit-navy shadow-lg scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-nit-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Members Grid */}
          {filteredMembers.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <p className="text-slate-600 dark:text-slate-400">
                No committee members found matching your query.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  onClick={() => setSelectedMember(member)}
                  className="group cursor-pointer bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden hover:shadow-2xl hover:border-nit-gold/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300 dark:text-slate-600">
                          <User className="w-20 h-20" />
                        </div>
                      )}
                      <div className="absolute top-3 left-3 bg-nit-navy/90 text-nit-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-nit-gold/40">
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
                      <div className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400 pt-1">
                        <Building className="w-3.5 h-3.5 text-nit-sky shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{member.institution}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 text-center">
                    <span className="text-xs font-bold text-nit-navy dark:text-nit-gold group-hover:underline">
                      View Full Bio & Details ›
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white dark:bg-nit-dark rounded-3xl shadow-2xl border border-nit-gold/40 overflow-hidden">
            <div className="flex items-center justify-between p-6 bg-nit-navy text-white">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-nit-gold" />
                <div>
                  <h3 className="text-xl font-bold font-heading">{selectedMember.name}</h3>
                  <p className="text-xs text-nit-gold font-semibold uppercase">{selectedMember.role} • Committee</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {selectedMember.image ? (
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-36 h-36 rounded-2xl object-cover shadow-lg border-2 border-nit-gold shrink-0"
                  />
                ) : (
                  <div className="w-36 h-36 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-nit-gold shrink-0 flex items-center justify-center text-slate-300 dark:text-slate-600 shadow-lg">
                    <User className="w-16 h-16" />
                  </div>
                )}

                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    {selectedMember.name}
                  </h4>
                  <p className="text-sm font-semibold text-nit-gold">
                    {selectedMember.designation}
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {selectedMember.institution}
                  </p>
                  {selectedMember.department && (
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {selectedMember.department}
                    </p>
                  )}

                  {selectedMember.email && (
                    <div className="pt-2 flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <Mail className="w-4 h-4 text-nit-gold" />
                      <a href={`mailto:${selectedMember.email}`} className="hover:underline">
                        {selectedMember.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {selectedMember.bio && (
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <h5 className="text-xs font-bold text-nit-gold uppercase tracking-wider mb-2">
                    Biography & Research Expertise
                  </h5>
                  <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-5 py-2 bg-nit-navy text-white font-bold text-xs rounded-lg hover:bg-nit-blue"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
