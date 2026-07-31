import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Home, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="Page Not Found (404)" />

      <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 dark:bg-nit-dark px-4 py-20">
        <div className="max-w-md w-full text-center space-y-6 p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
          <div className="relative w-24 h-24 mx-auto bg-nit-navy/10 dark:bg-nit-gold/10 text-nit-navy dark:text-nit-gold rounded-full flex items-center justify-center animate-pulse">
            <Atom className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h1 className="text-6xl font-black font-mono text-nit-navy dark:text-nit-gold">
              404
            </h1>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
              Quantum State Not Found
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              The conference page or document URL you requested does not exist or has been shifted in energy state.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 px-6 py-3 bg-nit-navy hover:bg-nit-blue text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              <Home className="w-4 h-4 text-nit-gold" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
