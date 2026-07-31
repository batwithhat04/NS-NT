import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nsnt-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nsnt-cookie-consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto p-4 md:p-5 bg-nit-navy/95 dark:bg-nit-dark/95 backdrop-blur-md text-white rounded-2xl border border-nit-gold/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs md:text-sm text-slate-200">
          <ShieldCheck className="w-6 h-6 text-nit-gold shrink-0" />
          <p>
            We use essential academic cookies to optimize user experience and analyze conference registration traffic. By continuing to browse, you agree to our privacy standards.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-xs font-bold text-nit-navy bg-nit-gold hover:bg-yellow-400 rounded-lg shadow transition-colors"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
};
