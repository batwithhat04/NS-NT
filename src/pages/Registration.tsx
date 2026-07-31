import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CreditCard, ExternalLink, Copy, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, HelpCircle, Building2, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_TIERS, CONFERENCE_INFO, FAQS } from '../config/conferenceData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';

export const Registration: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('all');

  const handleRegisterClick = () => {
    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Open Google Form in a new tab
    window.open(CONFERENCE_INFO.links.googleFormRegister, '_blank');
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 3000);
  };

  const filteredFaqs = FAQS.filter(
    (faq) => selectedFaqCategory === 'all' || faq.category === selectedFaqCategory
  );

  return (
    <>
      <SEO
        title="Registration & Payment Details"
        description="Register for NS&NT 2026 conference at NIT Delhi. View registration pricing, GST breakdown, bank transfer details, UPI QR code, and FAQs."
      />

      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-r from-nit-dark via-nit-navy to-nit-dark text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-nit-gold bg-nit-gold/10 rounded-full border border-nit-gold/30">
            Delegate Registration
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading">
            Registration Fees & Guidelines
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Choose your category below, review payment instructions, and complete the official Google Form registration.
          </p>

          <div className="pt-4">
            <button
              onClick={handleRegisterClick}
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-nit-navy font-black text-base uppercase tracking-wider rounded-2xl shadow-2xl hover:from-amber-300 hover:to-yellow-400 transition-all transform hover:scale-105"
            >
              <CreditCard className="w-5 h-5" />
              <span>Click Here to Register via Google Form</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-16 bg-slate-50 dark:bg-nit-dark/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Fee Schedule"
            title="Registration Categories & Fees"
            subtitle="Base fees exclude 18% GST for Indian delegates. Early bird rates apply until Nov 10, 2026."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
            {PRICING_TIERS.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  tier.recommended
                    ? 'bg-nit-navy text-white border-nit-gold shadow-2xl scale-105 ring-2 ring-nit-gold'
                    : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 shadow-lg hover:border-nit-gold/50'
                }`}
              >
                {tier.recommended && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-nit-gold text-nit-navy font-extrabold text-xs uppercase tracking-widest rounded-full shadow">
                    Most Popular Tier
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold font-heading mb-2">
                    {tier.category}
                  </h3>

                  <div className="my-4">
                    <span className="text-3xl font-black font-mono tracking-tight text-nit-gold">
                      {tier.inrPrice}
                    </span>
                    <p className="text-xs text-slate-400 mt-1">
                      Foreign Participant: {tier.usdPrice}
                    </p>
                  </div>

                  <ul className="space-y-3 my-6 text-xs sm:text-sm">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-nit-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={handleRegisterClick}
                    className={`w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all ${
                      tier.recommended
                        ? 'bg-nit-gold text-nit-navy hover:bg-yellow-400 shadow-md'
                        : 'bg-nit-navy text-white hover:bg-nit-blue dark:bg-nit-gold dark:text-nit-navy'
                    }`}
                  >
                    <span>Proceed to Register</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  {tier.notes && (
                    <p className="text-[10px] text-center text-slate-400 mt-2">
                      {tier.notes}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comparison Matrix Table */}
          <div className="my-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-x-auto p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-6 border-b border-nit-gold/30 pb-3">
              Registration Category Feature Matrix
            </h3>

            <table className="w-full text-xs sm:text-sm text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-nit-navy dark:text-nit-gold uppercase">
                  <th className="py-3 px-4 font-bold">Feature Included</th>
                  <th className="py-3 px-4 font-bold">Faculty</th>
                  <th className="py-3 px-4 font-bold">PhD / Postdoc</th>
                  <th className="py-3 px-4 font-bold">UG / PG Student</th>
                  <th className="py-3 px-4 font-bold">Industry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="py-3 px-4 font-semibold">Technical Sessions Access</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ Full</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ Full</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ Full</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ VIP</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Scopus/WoS Paper Proceeding Entry</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ Included</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ Included</td>
                  <td className="py-3 px-4 text-slate-400">Poster Only</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Delegate Kit & Certificate</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ Hardcopy Kit</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ Standard Kit</td>
                  <td className="py-3 px-4 text-slate-400">Digital / Basic</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ Premium Kit</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Gala Dinner & Networking Lunch</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ Included</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ Included</td>
                  <td className="py-3 px-4 text-slate-400">Working Lunch</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">✔ Gala Dinner</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Payment Instructions & Bank Account Details */}
      <section className="py-16 bg-white dark:bg-nit-dark border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Payment Guidelines"
            title="Official Payment & Bank Account Details"
            subtitle="Payments can be made via NEFT / RTGS / IMPS / UPI or Swift transfer directly to NIT Delhi Conference Account."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
            {/* Account Details Box */}
            <div className="lg:col-span-8 p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-nit-gold/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-nit-gold/30 pb-3">
                <div className="flex items-center gap-2 text-nit-navy dark:text-nit-gold font-bold text-lg">
                  <Building2 className="w-6 h-6" />
                  <span>State Bank of India (SBI) - NIT Delhi Campus</span>
                </div>
                <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded">
                  Verified Account
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Account Name</span>
                    <strong className="text-slate-900 dark:text-white">{CONFERENCE_INFO.bankDetails.accountName}</strong>
                  </div>
                  <button
                    onClick={() => copyToClipboard(CONFERENCE_INFO.bankDetails.accountName, 'accountName')}
                    className="p-1.5 text-slate-400 hover:text-nit-gold"
                  >
                    {copiedField === 'accountName' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Account Number</span>
                    <strong className="text-nit-gold font-mono text-base">{CONFERENCE_INFO.bankDetails.accountNumber}</strong>
                  </div>
                  <button
                    onClick={() => copyToClipboard(CONFERENCE_INFO.bankDetails.accountNumber, 'accountNumber')}
                    className="p-1.5 text-slate-400 hover:text-nit-gold"
                  >
                    {copiedField === 'accountNumber' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">IFSC Code</span>
                    <strong className="text-slate-900 dark:text-white font-mono">{CONFERENCE_INFO.bankDetails.ifscCode}</strong>
                  </div>
                  <button
                    onClick={() => copyToClipboard(CONFERENCE_INFO.bankDetails.ifscCode, 'ifscCode')}
                    className="p-1.5 text-slate-400 hover:text-nit-gold"
                  >
                    {copiedField === 'ifscCode' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">SWIFT Code (Overseas)</span>
                    <strong className="text-slate-900 dark:text-white font-mono">{CONFERENCE_INFO.bankDetails.swiftCode}</strong>
                  </div>
                  <button
                    onClick={() => copyToClipboard(CONFERENCE_INFO.bankDetails.swiftCode, 'swiftCode')}
                    className="p-1.5 text-slate-400 hover:text-nit-gold"
                  >
                    {copiedField === 'swiftCode' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="p-3 bg-nit-gold/10 rounded-xl border border-nit-gold/30 text-xs text-slate-700 dark:text-slate-300">
                <strong>Important Note:</strong> After completing the bank transaction, please save the UTR / Transaction Reference receipt screenshot to upload into the Google Registration Form.
              </div>
            </div>

            {/* UPI QR Simulation Box */}
            <div className="lg:col-span-4 p-6 bg-nit-navy text-white rounded-3xl shadow-xl text-center space-y-4 border border-nit-gold/40">
              <div className="flex items-center justify-center gap-2 text-nit-gold font-bold text-sm uppercase">
                <QrCode className="w-5 h-5" />
                <span>UPI Scan & Pay</span>
              </div>

              <div className="p-4 bg-white rounded-2xl max-w-[200px] mx-auto shadow-inner">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=nitdelhi.nsnt2026@sbi&pn=NIT%20Delhi%20NSNT2026"
                  alt="UPI QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-xs text-slate-300">
                <span className="block text-[10px] text-slate-400 uppercase font-bold">UPI VPA Handle</span>
                <strong className="text-nit-gold font-mono">{CONFERENCE_INFO.bankDetails.upiId}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-slate-50 dark:bg-nit-dark/90 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Find quick answers regarding paper submission templates, registration fees, and NIT Delhi venue logistics."
          />

          <div className="space-y-4 my-8">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white font-heading hover:text-nit-gold transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-nit-gold shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-nit-gold shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
