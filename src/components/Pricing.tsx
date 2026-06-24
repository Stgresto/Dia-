"use client";

import AnimateIn from "./ui/AnimateIn";

const freePlan = [
  "Community access",
  "Limited AI Coach (5 messages/day)",
  "Educational resources",
  "Basic device sticker previews",
];

const premiumPlan = [
  "Unlimited AI Coach conversations",
  "Live Dexcom glucose integration",
  "Personalized daily plans",
  "Premium educational content",
  "Exclusive member benefits",
  "Priority support",
  "Early access to new sticker collections",
  "Community verified badge",
];

function CheckIcon({ green = false }: { green?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={green ? "text-forest" : "text-white/60"}
    >
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.25"/>
      <path d="M5 8.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 lg:py-40 bg-forest">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <AnimateIn delay={0}>
            <span className="text-2xs font-body font-medium tracking-[0.45em] uppercase text-gold block mb-5">
              Membership
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[1.1]">
              Free to Start.
              <br />
              <em className="font-normal text-gold">Powerful When You Need More.</em>
            </h2>
          </AnimateIn>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Free */}
          <AnimateIn delay={0.15} direction="right">
            <div className="bg-white/8 border border-white/15 rounded-3xl p-10 flex flex-col h-full">
              <div className="mb-8">
                <span className="text-2xs font-body font-medium tracking-[0.45em] uppercase text-white/50 block mb-4">
                  Free Plan
                </span>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-5xl font-semibold text-white">€0</span>
                </div>
                <span className="text-xs font-body text-white/40 tracking-wide">Forever free</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {freePlan.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="font-body font-light text-sm text-white/70 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="block text-center border border-white/30 text-white font-body font-medium text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white hover:text-forest transition-all duration-200"
              >
                Get Started Free
              </a>
            </div>
          </AnimateIn>

          {/* Premium */}
          <AnimateIn delay={0.25} direction="left">
            <div className="bg-white rounded-3xl p-10 flex flex-col h-full relative overflow-hidden shadow-2xl">
              {/* Gold accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-dark to-gold" />

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xs font-body font-medium tracking-[0.45em] uppercase text-muted">
                    Premium Plan
                  </span>
                  <span className="text-2xs font-body font-semibold tracking-widest uppercase bg-gold/30 text-brand-text px-2.5 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-body text-2xl text-muted font-light">€</span>
                  <span className="font-display text-5xl font-semibold text-brand-text">3</span>
                  <span className="font-body text-xl text-muted font-light">.49</span>
                </div>
                <span className="text-xs font-body text-muted tracking-wide">per month &mdash; cancel anytime</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {premiumPlan.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckIcon green />
                    <span className="font-body font-light text-sm text-brand-text/80 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/test_7sY00iep23XxbBCfY5eQM01"
                className="block text-center bg-forest text-white font-body font-medium text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-forest-light transition-colors duration-200"
              >
                Start Premium
              </a>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.4}>
          <p className="text-center text-xs font-body font-light text-white/30 mt-10">
            No setup fees. No contracts. Cancel at any time.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
