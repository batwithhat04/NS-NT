import React from 'react';
import { X, ExternalLink, FileText, CheckCircle2, Download } from 'lucide-react';
import { CONFERENCE_INFO } from '../../config/conferenceData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOpenDrive = () => {
    window.open(CONFERENCE_INFO.links.brochurePdf, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-nit-dark rounded-2xl shadow-2xl border border-nit-gold/40 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-nit-navy text-white">
          <div className="flex items-center gap-3">
            <FileText className="w-7 h-7 text-nit-gold" />
            <div>
              <h3 className="text-xl font-bold font-heading">{CONFERENCE_INFO.acronym} Official Brochure</h3>
              <p className="text-xs text-slate-300">NIT Delhi & Collaborators Event Document</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div className="p-4 rounded-xl bg-nit-navy/5 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-nit-navy dark:text-nit-gold text-lg mb-2">
              Official Conference Brochure Document
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              The official NS&NT 2026 conference brochure is hosted on Google Drive. It includes full technical track scopes, publication guidelines (Scopus/WoS), registration fee details, key speakers, and campus logistics at NIT Delhi.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-semibold text-sm text-slate-800 dark:text-slate-200">Brochure Highlights Included:</h5>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Complete 8 Technical Track Specs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Scopus & WoS Journal List</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>GST Breakdown & Payment Modes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>NIT Delhi Travel & Accommodation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-end gap-3 p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleOpenDrive}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-nit-navy bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 rounded-lg shadow-md transition-all transform hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open Google Drive Brochure</span>
          </button>
        </div>
      </div>
    </div>
  );
};
