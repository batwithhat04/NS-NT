import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, Award, Sparkles, Phone, Mail } from 'lucide-react';
import { CONFERENCE_INFO } from '../../config/conferenceData';
import { useTheme } from '../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [themesDropdown, setThemesDropdown] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about-conference',
      hasDropdown: true,
      subLinks: [
        { name: 'About NS&NT 2026', path: '/about-conference' },
        { name: 'About NIT Delhi', path: '/about-nit-delhi' },
      ]
    },
    { name: 'Themes & Tracks', path: '/themes' },
    { name: 'Organizers', path: '/organizers' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Registration', path: '/registration' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-nit-dark text-slate-300 text-xs py-1.5 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-nit-gold" />
              <strong className="text-white">NIT Delhi</strong> • NIRF Ranked Institute of National Importance
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-nit-gold" />
              <a href={`mailto:${CONFERENCE_INFO.links.contactEmail}`} className="hover:underline">
                {CONFERENCE_INFO.links.contactEmail}
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-nit-gold" />
              <span>{CONFERENCE_INFO.links.phoneSupport}</span>
            </span>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="text-[11px] font-medium">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-blue-300" />
                  <span className="text-[11px] font-medium">Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-nit-navy/95 dark:bg-nit-dark/95 backdrop-blur-md shadow-xl py-2.5'
            : 'bg-nit-navy dark:bg-nit-dark py-3.5 border-b border-nit-gold/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Institution & Conference Logos Header */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative p-1 bg-white rounded-lg shadow-md border border-nit-gold/50 group-hover:scale-105 transition-transform">
              <img
                src={CONFERENCE_INFO.organizer.logoNitDelhiHighRes}
                alt="NIT Delhi Logo"
                className="w-9 h-9 md:w-11 md:h-11 object-contain"
                onError={(e) => {
                  // Fallback logo placeholder if external link is restricted
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <Sparkles className="w-4 h-4 text-nit-gold absolute -top-1 -right-1" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl font-black tracking-wider text-nit-gold font-heading">
                  {CONFERENCE_INFO.acronym}
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 bg-nit-gold/20 text-nit-gold rounded border border-nit-gold/40">
                  2026
                </span>
              </div>
              <span className="block text-[10px] md:text-xs text-slate-300 font-medium max-w-[220px] md:max-w-none truncate">
                National Institute of Technology Delhi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  if (link.name === 'About') setAboutDropdown(true);
                  if (link.name === 'Themes & Tracks') setThemesDropdown(true);
                }}
                onMouseLeave={() => {
                  if (link.name === 'About') setAboutDropdown(false);
                  if (link.name === 'Themes & Tracks') setThemesDropdown(false);
                }}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'text-nit-gold bg-white/10'
                      : 'text-slate-100 hover:text-nit-gold hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Dropdown Menu for About */}
                {link.hasDropdown && aboutDropdown && link.name === 'About' && (
                  <div className="absolute top-full left-0 w-48 py-2 bg-nit-navy dark:bg-slate-900 border border-nit-gold/30 rounded-xl shadow-2xl animate-fade-in">
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setAboutDropdown(false)}
                        className={`block px-4 py-2 text-xs font-semibold hover:bg-nit-gold/20 hover:text-nit-gold transition-colors ${
                          isActive(sub.path) ? 'text-nit-gold font-bold bg-white/10' : 'text-slate-200'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Quick CTA */}
            <Link
              to="/registration"
              className="ml-3 px-4 py-2 text-xs font-bold text-nit-navy bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button & Mobile Dark Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-200 hover:text-nit-gold rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode Mobile"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-300" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-nit-gold" /> : <Menu className="w-6 h-6 text-slate-200" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-nit-navy/98 dark:bg-nit-dark/98 border-t border-nit-gold/20 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 text-sm font-semibold rounded-lg ${
                    isActive(link.path)
                      ? 'text-nit-gold bg-white/10 font-bold'
                      : 'text-slate-200 hover:bg-white/5 hover:text-nit-gold'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-6 space-y-1 my-1">
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-1.5 text-xs text-slate-300 hover:text-nit-gold"
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link
                to="/registration"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full py-3 text-sm font-bold text-nit-navy bg-nit-gold rounded-lg shadow"
              >
                Register Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
