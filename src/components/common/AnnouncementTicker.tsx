import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import { ANNOUNCEMENTS } from '../../config/conferenceData';
import { Link } from 'react-router-dom';

export const AnnouncementTicker: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-nit-navy via-nit-blue to-nit-navy text-white text-xs md:text-sm py-2 px-4 shadow-md border-b border-nit-gold/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2 font-bold shrink-0 bg-nit-gold text-nit-navy px-2.5 py-1 rounded-md text-xs uppercase tracking-wider">
          <Bell className="w-3.5 h-3.5 animate-bounce" />
          <span>Announcements</span>
        </div>

        <div className="overflow-hidden whitespace-nowrap w-full mx-4">
          <div className="inline-block animate-marquee hover:[animation-play-state:paused]">
            {ANNOUNCEMENTS.map((ann, idx) => (
              <span key={ann.id} className="inline-flex items-center mx-6 font-medium text-slate-100">
                <span className="text-nit-gold font-bold mr-2">[{ann.date}]</span>
                <span>{ann.title}</span>
                {idx < ANNOUNCEMENTS.length - 1 && (
                  <span className="mx-4 text-nit-gold/50">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <Link
          to="/registration"
          className="shrink-0 flex items-center gap-1 text-xs font-semibold text-nit-gold hover:text-white transition-colors"
        >
          <span>Submit Paper</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
