import React from 'react';
import { MessageCircle, CreditCard } from 'lucide-react';
import { CONFERENCE_INFO } from '../../config/conferenceData';
import { Link } from 'react-router-dom';

export const FloatingButtons: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONFERENCE_INFO.links.whatsappNumber}?text=${encodeURIComponent(
    'Hello NS&NT 2026 Organizing Committee (NIT Delhi), I have a inquiry regarding paper submission / registration.'
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      {/* Floating Register CTA */}
      <Link
        to="/registration"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-nit-navy to-nit-blue hover:from-nit-blue hover:to-nit-navy text-white rounded-full shadow-2xl border border-nit-gold/50 transition-all duration-300 transform hover:scale-105"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nit-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-nit-gold"></span>
        </span>
        <CreditCard className="w-4 h-4 text-nit-gold" />
        <span className="text-xs md:text-sm font-bold tracking-wide">Register Now</span>
      </Link>

      {/* Floating WhatsApp Support */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Support"
        className="flex items-center justify-center w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 border border-white/20"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};
