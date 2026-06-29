import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Aquila Software Corporation",
    date: "Feb 2026 – May 2026",
    type: "Internship",
    desc: "Built and maintained full stack modules for a client-facing accounting system using React, Next.js, TypeScript, and Tailwind CSS on the frontend, and C# ASP.NET Web API with PostgreSQL on the backend, following clean architecture with CQRS patterns. Delivered features including general ledger, inventory management, and trial balance reporting while collaborating with senior developers across agile sprint cycles.",
    isWork: true,
  },
  {
    role: "Full Stack Developer",
    company: "University of Mindanao — Capstone",
    date: "Aug 2025 – Feb 2026",
    type: "Academic",
    desc: "Developed Efres Seedlings, a full stack agricultural management platform for a real-world client using Laravel, MySQL, and Tailwind CSS. Integrated a machine learning module for predictive crop yield insights and designed Figma-based dashboards for crop tracking, seedling inventory, and sales monitoring.",
    isWork: false,
  },
];

const Experience = () => {
  const headerAnim = useScrollAnimation({ threshold: 0.3 });

  return (
    <div name='experience' className='w-full min-h-screen bg-[#0B1120] text-gray-300 relative overflow-hidden py-20'>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 2.5 + 1}px`,
              height: `${Math.random() * 2.5 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className='max-w-5xl mx-auto px-6 flex flex-col items-center w-full mt-7'>
        <div
          ref={headerAnim.ref}
          className={`text-center mb-16 scroll-hidden scroll-down ${headerAnim.isVisible ? 'scroll-visible' : ''}`}
        >
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Experience</p>
          <p className='py-4 text-[#8892b0]'>A brief look at my professional journey.</p>
        </div>

        <div className='w-full relative'>
          {/* Desktop: center line — hidden on mobile */}
          <div className='hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/25 -translate-x-1/2' />
          {/* Mobile: left line */}
          <div className='sm:hidden absolute left-4 top-0 bottom-0 w-px bg-cyan-500/25' />

          <div className='space-y-10 sm:space-y-14 text-justify'>
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceItem = ({ exp, index }) => {
  const itemAnim = useScrollAnimation({ threshold: 0.1 });
  const isEven = index % 2 === 0;
  const dotColor = exp.isWork
    ? 'bg-cyan-500 shadow-[0_0_0_2px_rgba(6,182,212,0.25)]'
    : 'bg-violet-500 shadow-[0_0_0_2px_rgba(139,92,246,0.25)]';

  const DOT_TOP = 24;

  return (
    <div
      ref={itemAnim.ref}
      className={`relative scroll-hidden ${isEven ? 'scroll-left' : 'scroll-right'} ${itemAnim.isVisible ? 'scroll-visible' : ''}`}
    >
      {/* ── MOBILE layout: full-width card offset from left line ── */}
      <div className='flex sm:hidden items-start'>
        {/* dot on left line — use style prop so the value is applied correctly at runtime */}
        <div
          className={`shrink-0 w-4 h-4 rounded-full border-4 border-[#0B1120] z-10 ${dotColor}`}
          style={{ marginTop: `${DOT_TOP}px`, marginLeft: '8px' }}
        />
        <div className='flex-1 ml-4'>
          <MobileCard exp={exp} dotTop={DOT_TOP} />
        </div>
      </div>

      {/* ── DESKTOP layout: alternating sides ── */}
      <div className='hidden sm:flex items-start'>
        <div className='w-1/2 flex justify-end pr-10'>
          {isEven && <Card exp={exp} side="right" dotTop={DOT_TOP} />}
        </div>

        <div
          className={`absolute left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full border-4 border-[#0B1120] ${dotColor}`}
          style={{ top: `${DOT_TOP}px` }}
        />

        <div className='w-1/2 flex justify-start pl-10'>
          {!isEven && <Card exp={exp} side="left" dotTop={DOT_TOP} />}
        </div>
      </div>
    </div>
  );
};

/* Mobile card — with left-pointing tail aligned to dot */
const MobileCard = ({ exp, dotTop }) => {
  const badgeBg     = exp.isWork ? 'bg-cyan-500/10'    : 'bg-violet-500/10';
  const badgeText   = exp.isWork ? 'text-cyan-400'     : 'text-violet-400';
  const companyText = exp.isWork ? 'text-cyan-500'     : 'text-violet-400';
  const borderColor = exp.isWork ? 'border-cyan-500/30' : 'border-violet-500/30';
  const tailBg      = 'bg-[#131c2e]';
  const tailBorder  = exp.isWork ? 'border-cyan-500/30' : 'border-violet-500/30';
  const tailTop = dotTop - 0;

  return (
    <div className={`relative w-full bg-[#131c2e] border ${borderColor} rounded-2xl p-5`}>
      {/* Left-pointing tail — points back toward the dot on the line */}
      <div
        className={`absolute -left-[9px] w-4 h-4 ${tailBg} border-b border-l ${tailBorder} rotate-45`}
        style={{ top: `${tailTop}px` }}
      />

      <div className='flex items-center justify-between mb-3'>
        <span className={`text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${badgeBg} ${badgeText}`}>
          {exp.type}
        </span>
        <span className='text-xs text-gray-500 font-medium'>{exp.date}</span>
      </div>
      <div className='h-px bg-white/5 mb-3' />
      <h3 className='text-base font-bold text-white leading-snug mb-1'>{exp.role}</h3>
      <p className={`text-sm font-semibold mb-3 ${companyText}`}>{exp.company}</p>
      <p className='text-[13px] text-[#8892b0] leading-6'>{exp.desc}</p>
    </div>
  );
};

/* Desktop card — with bubble tail */
const Card = ({ exp, side, dotTop }) => {
  const badgeBg    = exp.isWork ? 'bg-cyan-500/10'  : 'bg-violet-500/10';
  const badgeText  = exp.isWork ? 'text-cyan-400'   : 'text-violet-400';
  const companyText = exp.isWork ? 'text-cyan-500'  : 'text-violet-400';
  const borderColor = exp.isWork ? 'border-cyan-500/30' : 'border-violet-500/30';
  const tailBg     = 'bg-[#131c2e]';
  const tailBorder = exp.isWork ? 'border-cyan-500/30' : 'border-violet-500/30';
  const tailTop    = dotTop - 8;

  const tailClass = side === 'right'
    ? `absolute -right-[9px] w-4 h-4 ${tailBg} border-t border-r ${tailBorder} rotate-45`
    : `absolute -left-[9px] w-4 h-4 ${tailBg} border-b border-l ${tailBorder} rotate-45`;

  return (
    <div className={`relative w-full max-w-[420px] bg-[#131c2e] border ${borderColor} rounded-2xl p-6 hover:brightness-110 transition-all duration-300`}>
      <div className={tailClass} style={{ top: `${tailTop}px` }} />

      <div className='flex items-center justify-between mb-4'>
        <span className={`text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${badgeBg} ${badgeText}`}>
          {exp.type}
        </span>
        <span className='text-xs text-gray-500 font-medium'>{exp.date}</span>
      </div>

      <div className='h-px bg-white/5 mb-4' />
      <h3 className='text-lg font-bold text-white leading-snug mb-1'>{exp.role}</h3>
      <p className={`text-sm font-semibold mb-4 ${companyText}`}>{exp.company}</p>
      <p className='text-[14px] text-[#8892b0] leading-7'>{exp.desc}</p>
    </div>
  );
};

export default Experience;