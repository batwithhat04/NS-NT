import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Instagram, Youtube, Twitter, Globe, ExternalLink, CheckCircle } from 'lucide-react';
import { CONFERENCE_INFO } from '../../config/conferenceData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-nit-dark text-slate-300 pt-16 pb-8 border-t-2 border-nit-gold/40 relative overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nit-navy/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nit-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Institute Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-lg border border-nit-gold">
                <img
                  src={CONFERENCE_INFO.organizer.logoNitDelhiHighRes}
                  alt="NIT Delhi"
                  className="w-10 h-10 object-contain"
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-heading">{CONFERENCE_INFO.acronym}</h3>
                <p className="text-xs text-nit-gold font-semibold">NIT Delhi Conference</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              1st International Conference on Nanoscience and Advanced Nanotechnology organized by National Institute of Technology (NIT) Delhi in collaboration with KCET Amritsar, NIT Uttarakhand, and CSIR-NPL.
            </p>
            <div className="pt-2 text-xs space-y-1.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-nit-gold shrink-0 mt-0.5" />
                <span>{CONFERENCE_INFO.venue.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-nit-gold shrink-0" />
                <a href={`mailto:${CONFERENCE_INFO.links.contactEmail}`} className="hover:text-nit-gold transition-colors">
                  {CONFERENCE_INFO.links.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-nit-gold shrink-0" />
                <span>{CONFERENCE_INFO.links.phoneSupport}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-nit-gold/30 pb-2">
              Conference Pages
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" className="hover:text-nit-gold transition-colors flex items-center gap-1.5">
                  <span className="text-nit-gold">›</span> Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about-conference" className="hover:text-nit-gold transition-colors flex items-center gap-1.5">
                  <span className="text-nit-gold">›</span> About Conference
                </Link>
              </li>
              <li>
                <Link to="/about-nit-delhi" className="hover:text-nit-gold transition-colors flex items-center gap-1.5">
                  <span className="text-nit-gold">›</span> About NIT Delhi
                </Link>
              </li>
              <li>
                <Link to="/themes" className="hover:text-nit-gold transition-colors flex items-center gap-1.5">
                  <span className="text-nit-gold">›</span> 8 Technical Tracks
                </Link>
              </li>
              <li>
                <Link to="/organizers" className="hover:text-nit-gold transition-colors flex items-center gap-1.5">
                  <span className="text-nit-gold">›</span> Organizing Committee
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="hover:text-nit-gold transition-colors flex items-center gap-1.5">
                  <span className="text-nit-gold">›</span> Keynote & Invited Speakers
                </Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-nit-gold transition-colors flex items-center gap-1.5">
                  <span className="text-nit-gold">›</span> Registration & Bank Details
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-nit-gold transition-colors flex items-center gap-1.5">
                  <span className="text-nit-gold">›</span> Venue & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Useful Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-nit-gold/30 pb-2">
              Collaborators & Portals
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a
                  href="https://nitdelhi.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nit-gold transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-nit-gold" />
                  <span>NIT Delhi Official Website</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.nplindia.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nit-gold transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-nit-gold" />
                  <span>CSIR-NPL India</span>
                </a>
              </li>
              <li>
                <a
                  href="https://nituk.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nit-gold transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-nit-gold" />
                  <span>NIT Uttarakhand</span>
                </a>
              </li>
              <li>
                <a
                  href="https://kcet.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nit-gold transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-nit-gold" />
                  <span>KCET Amritsar</span>
                </a>
              </li>
              <li>
                <a
                  href={CONFERENCE_INFO.links.googleFormRegister}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nit-gold hover:underline font-bold flex items-center gap-1.5 pt-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Official Google Registration Form</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-nit-gold/30 pb-2">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe to receive latest notifications regarding paper acceptance, schedule releases, and keynote speaker announcements.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your academic email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 pr-10 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-nit-gold"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-nit-gold hover:bg-yellow-400 text-nit-navy rounded-md font-bold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Thank you! Subscribed successfully.</span>
                </p>
              )}
            </form>

            <div className="pt-2">
              <h5 className="text-xs font-semibold text-white mb-2">Connect with NIT Delhi</h5>
              <div className="flex items-center gap-2 text-slate-300">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 hover:bg-nit-navy hover:text-nit-gold rounded-lg transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 hover:bg-nit-navy hover:text-nit-gold rounded-lg transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 hover:bg-nit-navy hover:text-nit-gold rounded-lg transition-colors" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 hover:bg-nit-navy hover:text-nit-gold rounded-lg transition-colors" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 hover:bg-nit-navy hover:text-nit-gold rounded-lg transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2026 <strong>NS&NT 2026</strong> • National Institute of Technology (NIT) Delhi. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-nit-gold cursor-pointer">Privacy Policy</span>
            <span className="hover:text-nit-gold cursor-pointer">Terms & Conditions</span>
            <span>Developed for <strong>NIT Delhi Academic Events</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
