import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Navigation, Building, Clock } from 'lucide-react';
import { CONFERENCE_INFO } from '../config/conferenceData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    subject: 'Paper Submission Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          institution: '',
          subject: 'Paper Submission Inquiry',
          message: ''
        });
      }, 5000);
    }
  };

  return (
    <>
      <SEO
        title="Contact & Venue Location"
        description="Contact NS&NT 2026 organizing committee at NIT Delhi. View address, embedded Google Map, phone support, and inquiry form."
      />

      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-r from-nit-dark via-nit-navy to-nit-dark text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-nit-gold bg-nit-gold/10 rounded-full border border-nit-gold/30">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading">
            Contact & Venue Logistics
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Have questions regarding paper templates, registration payment, or accommodation? Reach out to the NIT Delhi organizing team.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-12 bg-white dark:bg-nit-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-nit-navy text-nit-gold mx-auto flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">Official Email</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">For paper submission & registration inquiries</p>
              <a href={`mailto:${CONFERENCE_INFO.links.contactEmail}`} className="block text-sm font-bold text-nit-gold hover:underline">
                {CONFERENCE_INFO.links.contactEmail}
              </a>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-nit-navy text-nit-gold mx-auto flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">Phone Support</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">Available Monday - Saturday (9:00 AM - 5:00 PM IST)</p>
              <span className="block text-sm font-bold text-nit-gold font-mono">
                {CONFERENCE_INFO.links.phoneSupport}
              </span>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-nit-navy text-nit-gold mx-auto flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">Campus Address</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">NIT Delhi Permanent Campus</p>
              <span className="block text-xs font-semibold text-slate-800 dark:text-slate-200">
                Plot No. FA1, Narela, Delhi - 110040
              </span>
            </div>
          </div>

          {/* Form & Map Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Interactive Contact Form */}
            <div className="lg:col-span-6 p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <div className="border-b border-nit-gold/30 pb-3">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                  Send an Online Inquiry
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Fill out the form below and our organizing desk will respond within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-500">Inquiry Received!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Thank you, {formData.name}. We have logged your query and will email you back shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-nit-gold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Academic Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. ramesh@nit.ac.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-nit-gold"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Institution / University
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. IIT Delhi / CSIR"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-nit-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-nit-gold"
                    >
                      <option value="Paper Submission Inquiry">Paper Submission Inquiry</option>
                      <option value="Registration Fee & Invoice">Registration Fee & Invoice</option>
                      <option value="Keynote / Invited Speaker Query">Keynote / Invited Speaker Query</option>
                      <option value="Campus Accommodation">Campus Accommodation</option>
                      <option value="Sponsorship & Exhibition">Sponsorship & Exhibition</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please write your detailed query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-nit-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-nit-navy hover:bg-nit-blue text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-nit-gold" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map & Logistics */}
            <div className="lg:col-span-6 space-y-6">
              <div className="h-80 rounded-3xl overflow-hidden shadow-2xl border-2 border-nit-gold/40">
                <iframe
                  title="NIT Delhi Location Map Large"
                  src={CONFERENCE_INFO.venue.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-6 bg-nit-navy text-white rounded-3xl shadow-xl space-y-4 border border-nit-gold/30">
                <h4 className="text-base font-bold text-nit-gold font-heading flex items-center gap-2">
                  <Navigation className="w-5 h-5" />
                  <span>Travel Directions to NIT Delhi</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-nit-gold font-bold">•</span>
                    <span><strong>From IGI Airport (DEL):</strong> Taxis / Cabs available directly to Narela via Western Peripheral Expressway (~45 min).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-nit-gold font-bold">•</span>
                    <span><strong>From New Delhi Railway Station (NDLS):</strong> Take Yellow Line Metro to Jahangirpuri or Samaypur Badli, followed by direct campus feeder shuttle.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
