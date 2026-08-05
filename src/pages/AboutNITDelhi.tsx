import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Building, Compass, CheckCircle2, GraduationCap, Microscope, ShieldCheck, Users } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { CONFERENCE_INFO } from '../config/conferenceData';

export const AboutNITDelhi: React.FC = () => {
  const stats = [
    { label: 'Full-Time Faculty', count: '120+', icon: GraduationCap },
    { label: 'Enrolled Students', count: '2,500+', icon: Users },
    { label: 'Research Publications (Scopus)', count: '1,800+', icon: BookOpen },
    { label: 'Patents Granted & Filed', count: '45+', icon: Award },
    { label: 'Academic Departments', count: '8', icon: Building },
    { label: 'NIRF Engineering Rank Band', count: 'Top 51-100', icon: ShieldCheck },
  ];

  const galleryImages = [
    { url: CONFERENCE_INFO.organizer.campusFrontGate, title: 'NIT Delhi Front Campus Gate' },
    { url: '/images/NITD/MainAdminstrative_and_Academic_Block.webp', title: 'Main Administrative & Academic Block' },
    { url: '/images/NITD/Nanotechnology_lab.jpg', title: 'Advanced Nanotechnology Cleanroom' },
    { url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80', title: 'Central Research Facility (CRF)' },
    { url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=600&auto=format&fit=crop&q=80', title: 'Central Library & Learning Resource Center' },
    { url: '/images/NITD/Smart_Lecture_Complex.jpeg', title: 'Smart Lecture Complex' },
  ];

  const departments = [
    'Department of Applied Sciences (Physics, Chemistry, Mathematics)',
    'Department of Computer Science & Engineering',
    'Department of Electronics & Communication Engineering',
    'Department of Electrical Engineering',
    'Department of Mechanical and Aerospace Engineering',
    'Department of Civil Engineering',
    'Center for Energy & Environment',
    'Center for Biomedical Engineering & Nanotechnology'
  ];

  return (
    <>
      <SEO
        title="About NIT Delhi"
        description="Learn about National Institute of Technology (NIT) Delhi history, vision, mission, NIRF rankings, director's message, research facilities, and departments."
      />

      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-r from-nit-dark via-nit-navy to-nit-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-nit-gold bg-nit-gold/10 rounded-full border border-nit-gold/30">
            Host Institution
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            National Institute of Technology Delhi
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            An Autonomous Institute under the aegis of Ministry of Education, Govt. of India.
          </p>
        </div>
      </section>

      {/* Intro & History */}
      <section className="py-16 bg-white dark:bg-nit-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                badge="Institutional Profile"
                title="Engineering Excellence in the Heart of India"
                centered={false}
              />
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                National Institute of Technology Delhi (NIT Delhi) is one of the 31 NITs established by the Government of India through an Act of Parliament (NIT Act, 2007). It has been declared an <strong>Institute of National Importance</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                The institute started functioning in 2010 and operates from its state-of-the-art permanent campus spanning over 50 acres along GT Karnal Road, Narela, New Delhi. Equipped with modern research cleanrooms, supercomputing clusters, and smart classrooms, NIT Delhi is a premier destination for higher technical learning.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-nit-gold/30 shadow">
                  <div className="flex items-center gap-2 text-nit-navy dark:text-nit-gold font-bold text-sm mb-2">
                    <Compass className="w-5 h-5" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    To develop NIT Delhi into a holistic hub of academic brilliance, research, and innovation, producing world-class technocrats capable of solving global challenges.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-nit-gold/30 shadow">
                  <div className="flex items-center gap-2 text-nit-navy dark:text-nit-gold font-bold text-sm mb-2">
                    <Microscope className="w-5 h-5" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    To impart quality technical education, advance interdisciplinary research in nanotechnology and AI, and foster industry collaborations with social integrity.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-nit-gold/40">
                <img
                  src={CONFERENCE_INFO.organizer.campusFrontGate}
                  alt="NIT Delhi Campus Main Gate"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Statistics */}
      <section className="py-16 bg-nit-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="By the Numbers"
            title="Institutional Growth & Impact"
            subtitle="Demonstrating academic leadership, research output, and technological achievements."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 my-8">
            {stats.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-6 text-center bg-white/10 backdrop-blur-md rounded-2xl border border-nit-gold/30 shadow-lg hover:border-nit-gold transition-all"
                >
                  <IconComp className="w-8 h-8 text-nit-gold mx-auto mb-3" />
                  <div className="text-3xl font-black font-mono text-nit-gold mb-1">
                    {s.count}
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    {s.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Director Message */}
      <section className="py-16 bg-white dark:bg-nit-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-nit-gold/40 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center">
              <img
                src="/images/director_Ajay_NITDelhi.webp"
                alt="Prof. Ajay K. Sharma Director"
                className="w-44 h-44 rounded-2xl object-cover mx-auto shadow-lg border-2 border-nit-gold"
              />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white font-heading mt-4">
                Prof. (Dr.) Ajay K. Sharma
              </h4>
              <p className="text-xs text-nit-gold font-semibold">Hon’ble Director, NIT Delhi</p>
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold text-nit-gold uppercase tracking-wider bg-nit-gold/10 px-3 py-1 rounded-full border border-nit-gold/30">
                Message from the Director
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
                "Welcome to NS&NT 2026 at NIT Delhi"
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "It gives me immense pleasure to invite global researchers, scientists, and academicians to the 1st International Conference on Nanoscience and Advanced Nanotechnology (NS&NT 2026). At NIT Delhi, we believe nanotechnology holds the key to next-generation energy, health, and semiconductor solutions. We look forward to hosting you at our vibrant New Delhi campus."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments & Infrastructure */}
      <section className="py-16 bg-slate-50 dark:bg-nit-dark/90 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Academic Ecosystem"
            title="Departments & Specializations"
            subtitle="Fostering interdisciplinary collaboration across foundational sciences and engineering branches."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {departments.map((dept, i) => (
              <div key={i} className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-nit-gold shrink-0" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Image Gallery */}
      <section className="py-16 bg-white dark:bg-nit-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Campus Life"
            title="NIT Delhi Campus Gallery"
            subtitle="Explore our academic blocks, permanent campus front gate, advanced cleanrooms, and learning resources."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 h-64">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-sm font-bold text-white font-heading">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
