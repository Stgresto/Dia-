"use client";

import AnimateIn from "./ui/AnimateIn";

const topics = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Understanding Diabetes",
    description: "Clear, honest explanations of what T1D means for your body and your daily life.",
    ready: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Technology",
    description: "CGMs, pumps, closed-loop systems, and the devices that make modern T1D management possible.",
    ready: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Nutrition",
    description: "How different foods affect glucose levels, and how to eat well without obsessing.",
    ready: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Exercise",
    description: "Sport, movement, and activity — what to know before, during, and after.",
    ready: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    title: "Mental Health",
    description: "Diabetes burnout is real. Resources for managing the emotional weight of T1D.",
    ready: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.77 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
    title: "Travel",
    description: "Flying, time zones, airport security, and keeping your supplies safe anywhere in the world.",
    ready: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
    title: "School & University",
    description: "Managing T1D in class, during exams, with roommates, and on a student schedule.",
    ready: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    title: "Productivity",
    description: "How glucose levels affect focus, energy, and performance — and how to work with it.",
    ready: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 lg:py-40 bg-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <AnimateIn delay={0}>
            <span className="text-2xs font-body font-medium tracking-[0.45em] uppercase text-gold block mb-5">
              Education
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-brand-text leading-[1.1] mb-6">
              Knowledge Creates<br />
              <em className="font-normal text-forest">Confidence.</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="font-body font-light text-muted text-lg leading-relaxed">
              Understanding diabetes should not feel overwhelming. DiaStyle provides
              simple, modern educational resources designed to help people better
              understand their condition and make informed decisions in everyday life.
            </p>
          </AnimateIn>
        </div>

        {/* Topic cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map((t, i) => (
            <AnimateIn key={t.title} delay={0.06 * i} direction="up">
              <div className="relative bg-white rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col group cursor-pointer">
                {!t.ready && (
                  <span className="absolute top-4 right-4 text-2xs font-body font-medium tracking-widest uppercase text-muted border border-sand rounded-full px-2 py-0.5">
                    Soon
                  </span>
                )}
                <div className="text-forest mb-4">{t.icon}</div>
                <h3 className="font-display text-lg font-semibold text-brand-text mb-2 group-hover:text-forest transition-colors duration-200">
                  {t.title}
                </h3>
                <p className="font-body font-light text-muted text-sm leading-relaxed flex-1">
                  {t.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-body font-medium text-forest opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {t.ready ? "Read More" : "Coming Soon"}
                  {t.ready && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 6h7M6.5 3l3 3-3 3"/>
                    </svg>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
