import React from 'react';
import { X, Calendar, Download, Clock } from 'lucide-react';
import { CONFERENCE_INFO } from '../../config/conferenceData';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const scheduleDays = [
    {
      day: 'Day 1: Dec 10, 2026',
      events: [
        { time: '08:30 AM - 09:30 AM', title: 'Registration & Welcome Kit Distribution', loc: 'Main Auditorium Foyer' },
        { time: '09:30 AM - 11:00 AM', title: 'Inaugural Ceremony & Keynote Address by MIT Speaker', loc: 'Main Auditorium' },
        { time: '11:00 AM - 11:30 AM', title: 'High Tea & Exhibition Viewing', loc: 'Convention Plaza' },
        { time: '11:30 AM - 01:30 PM', title: 'Technical Session 1: Nanomaterials & 2D Physics', loc: 'Hall A & Hall B' },
        { time: '01:30 PM - 02:30 PM', title: 'Networking Lunch', loc: 'Dining Pavilion' },
        { time: '02:30 PM - 05:00 PM', title: 'Poster Session A & Nanoelectronics Track', loc: 'Exhibition Center' }
      ]
    },
    {
      day: 'Day 2: Dec 11, 2026',
      events: [
        { time: '09:00 AM - 10:30 AM', title: 'Plenary Lecture: Bharat Ratna Prof. C.N.R. Rao Session', loc: 'Main Auditorium' },
        { time: '10:40 AM - 01:00 PM', title: 'Technical Session 2: Nanobiotech & Energy Storage', loc: 'Hall A, B & C' },
        { time: '01:00 PM - 02:00 PM', title: 'Lunch & Industry-Academia Conclave', loc: 'Convention Plaza' },
        { time: '02:00 PM - 04:30 PM', title: 'Computational Nanoscience & DFT Workshop', loc: 'Computer Lab 3' },
        { time: '06:30 PM - 09:30 PM', title: 'Cultural Evening & Cultural Gala Dinner', loc: 'Open Air Amphitheatre' }
      ]
    },
    {
      day: 'Day 3: Dec 12, 2026',
      events: [
        { time: '09:30 AM - 11:30 AM', title: 'Technical Session 3: Nanofabrication & Emerging Trends', loc: 'Hall A & B' },
        { time: '11:30 AM - 01:00 PM', title: 'Valedictory Function & Best Paper Awards Ceremony', loc: 'Main Auditorium' },
        { time: '01:00 PM - 02:30 PM', title: 'Farewell Lunch & NIT Delhi Campus Tour', loc: 'Main Lounge' }
      ]
    }
  ];

  const handleDownload = () => {
    const textContent = `
====================================================================
${CONFERENCE_INFO.fullTitle} (${CONFERENCE_INFO.acronym})
PROVISIONAL PROGRAMME SCHEDULE (DECEMBER 10 - 12, 2026)
Venue: National Institute of Technology (NIT) Delhi
====================================================================

${scheduleDays.map(d => `${d.day}\n${d.events.map(e => `  [${e.time}] ${e.title} (${e.loc})`).join('\n')}`).join('\n\n')}
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NSNT_2026_Schedule_NIT_Delhi.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white dark:bg-nit-dark rounded-2xl shadow-2xl border border-nit-gold/40 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-nit-navy text-white">
          <div className="flex items-center gap-3">
            <Calendar className="w-7 h-7 text-nit-gold" />
            <div>
              <h3 className="text-xl font-bold font-heading">{CONFERENCE_INFO.acronym} Event Program</h3>
              <p className="text-xs text-slate-300">December 10-12, 2026 • NIT Delhi</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Schedule timeline list */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {scheduleDays.map((dayObj, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-nit-navy dark:text-nit-gold text-lg mb-3 pb-2 border-b border-nit-gold/30 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-nit-gold" />
                <span>{dayObj.day}</span>
              </h4>
              <div className="space-y-3">
                {dayObj.events.map((evt, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-800/80 shadow-sm gap-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-nit-sky dark:text-cyan-400 shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {evt.title}
                    </div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 italic">
                      📍 {evt.loc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-nit-navy bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 rounded-lg shadow-md transition-all transform hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>Download Schedule PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
