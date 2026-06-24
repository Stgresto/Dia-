"use client";

import AnimateIn from "./ui/AnimateIn";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Discussion Forums",
    description: "Ask questions, share tips, and connect with thousands of people who truly understand what you are going through.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Community Groups",
    description: "Find your people. Groups for athletes, students, parents, travellers, and every life stage with T1D.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Success Stories",
    description: "Real stories from real people — the marathon finish lines, the graduation days, the moments that show T1D doesn&apos;t hold you back.",
  },
];

const mockPost = {
  name: "Sofia M.",
  time: "2 hours ago",
  initials: "SM",
  content: "Just completed my first triathlon with my Dexcom G7. Never thought this was possible when I was first diagnosed. If anyone is training with T1D and has questions, I am happy to share what worked for me.",
  likes: 142,
  comments: 38,
};

export default function Community() {
  return (
    <section id="community" className="py-28 lg:py-40 bg-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <AnimateIn delay={0}>
            <span className="text-2xs font-body font-medium tracking-[0.45em] uppercase text-gold block mb-5">
              Community
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-brand-text leading-[1.1] mb-6">
              You&apos;re Not Doing<br />
              <em className="font-normal text-forest">This Alone.</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="font-body font-light text-muted text-lg leading-relaxed">
              Living with diabetes can sometimes feel isolating. The DiaStyle Community
              brings together people from around the world to share experiences, ask
              questions, celebrate wins, and support each other.
            </p>
          </AnimateIn>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {features.map((f, i) => (
            <AnimateIn key={f.title} delay={0.1 * i} direction="up">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="text-forest mb-5">{f.icon}</div>
                <h3 className="font-display text-xl font-semibold text-brand-text mb-3">
                  {f.title}
                </h3>
                <p className="font-body font-light text-muted text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Mock post preview */}
        <AnimateIn delay={0.3}>
          <div className="bg-white rounded-2xl shadow-sm p-6 max-w-2xl mx-auto mb-12 border border-sand/60">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shrink-0">
                <span className="text-xs font-body font-semibold text-white">{mockPost.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-body font-semibold text-sm text-brand-text">{mockPost.name}</span>
                  <span className="w-1 h-1 rounded-full bg-muted/40" />
                  <span className="font-body text-xs text-muted">{mockPost.time}</span>
                </div>
                <p className="font-body font-light text-sm text-brand-text/80 leading-relaxed">
                  {mockPost.content}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4 border-t border-sand">
              <button className="flex items-center gap-2 text-xs font-body font-medium text-muted hover:text-forest transition-colors">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7.5 12.5C4.5 12.5 1.5 10 1.5 7c0-3 2-5.5 5-5.5 1.5 0 2.8.6 3.8 1.5L12.5 1"/>
                  <path d="M7 1c1.5 0 3 .5 4 1.5l1.5 1.5" strokeLinecap="round"/>
                </svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-forest">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                {mockPost.likes} likes
              </button>
              <button className="flex items-center gap-2 text-xs font-body font-medium text-muted hover:text-forest transition-colors">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 7.5c0 3.3-2.5 6-5.5 6-1 0-2-.3-2.8-.8L1.5 13.5l.8-3.2c-.5-.8-.8-1.8-.8-2.8C1.5 4.2 4 1.5 7.5 1.5S13 4.2 13 7.5z"/>
                </svg>
                {mockPost.comments} comments
              </button>
            </div>
          </div>
        </AnimateIn>

        {/* CTA */}
        <AnimateIn delay={0.35}>
          <div className="text-center">
            <a
              href="#pricing"
              className="inline-flex items-center bg-forest text-white font-body font-medium text-xs tracking-widest uppercase px-10 py-4 rounded-full hover:bg-forest-light transition-colors duration-200"
            >
              Join The Community
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
