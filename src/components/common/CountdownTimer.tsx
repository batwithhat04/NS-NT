import React, { useState, useEffect } from 'react';
import { CONFERENCE_INFO } from '../../config/conferenceData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date(CONFERENCE_INFO.dates.targetDateISO).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-4 md:p-6 bg-nit-navy/90 dark:bg-nit-dark/95 backdrop-blur-md rounded-2xl border border-nit-gold/40 shadow-2xl">
      <p className="text-center text-xs md:text-sm font-semibold tracking-widest text-nit-gold uppercase mb-4">
        Conference Countdown • December 10, 2026
      </p>

      <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full py-3 md:py-4 bg-nit-dark/80 dark:bg-slate-900/90 rounded-xl border border-slate-700/50 shadow-inner">
              <span className="text-2xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 tracking-tight font-mono">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-2 text-xs md:text-sm font-medium text-slate-300 dark:text-slate-400 uppercase tracking-wider">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
