"use client";

import { useState } from "react";
import AnimateIn from "./ui/AnimateIn";

const collections = [
  { name: "Tennis Club", tag: "Summer 2025", from: "#d4edda", to: "#6aab7a" },
  { name: "Ocean Life", tag: "Coastal Edit", from: "#cce5f5", to: "#5aaddb" },
  { name: "Space & Galaxy", tag: "Limitless", from: "#1a237e", to: "#4a148c" },
  { name: "Fairytale", tag: "Magic Edition", from: "#fce4ec", to: "#c97faa" },
  { name: "Race & Speed", tag: "Motorsport", from: "#fff3cd", to: "#e67a30" },
  { name: "Adventure", tag: "Wanderlust", from: "#e8d5c4", to: "#8b5e3c" },
  { name: "Sweet Treats", tag: "Pastel Series", from: "#fde8f0", to: "#d47fa6" },
  { name: "Minimal", tag: "Classic Clean", from: "#f0eeec", to: "#b0a89e" },
];

const devices = ["Dexcom G7", "Omnipod 5", "Omnipod DASH", "Libre 3"];

export default function Shop() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="shop" className="py-28 lg:py-40 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <AnimateIn delay={0}>
            <span className="text-2xs font-body font-medium tracking-[0.45em] uppercase text-gold block mb-5">
              Shop
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-brand-text leading-[1.1] mb-6">
              Make Your<br />
              <em className="font-normal text-forest">Device Yours.</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="font-body font-light text-muted text-lg leading-relaxed mb-6">
              Your sensor. Your pump. Your style. DiaStyle creates premium decorative
              stickers and accessories that transform diabetes devices into something
              personal, expressive, and beautiful.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <div className="flex flex-wrap gap-2">
              {devices.map((d) => (
                <span
                  key={d}
                  className="text-xs font-body font-medium text-brand-text/60 border border-sand px-3 py-1.5 rounded-full bg-white"
                >
                  {d}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Coming Soon badge */}
        <AnimateIn delay={0.15}>
          <div className="inline-flex items-center gap-3 bg-gold/20 border border-gold rounded-full px-6 py-3 mb-12">
            <div className="w-2 h-2 rounded-full bg-gold-dark animate-pulse" />
            <span className="font-body font-medium text-sm tracking-widest uppercase text-brand-text">
              Coming Soon — Join the Waitlist
            </span>
          </div>
        </AnimateIn>

        {/* Collection grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {collections.map((c, i) => (
            <AnimateIn key={c.name} delay={0.05 * i} direction="up">
              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ aspectRatio: "3/4" }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${c.from}, ${c.to})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <span className="text-2xs font-body font-medium tracking-widest uppercase bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
                      Soon
                    </span>
                  </div>
                  <div>
                    <p className="text-2xs font-body tracking-widest uppercase text-white/60 mb-1">{c.tag}</p>
                    <h3 className="font-display text-base font-semibold text-white leading-tight">
                      {c.name}
                    </h3>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Waitlist form */}
        <AnimateIn delay={0.3}>
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-display text-2xl font-semibold text-brand-text mb-2">
              Be First to Know
            </h3>
            <p className="font-body font-light text-muted text-sm mb-6">
              Join the waitlist and get exclusive early access when the collection launches.
            </p>
            {submitted ? (
              <div className="bg-forest/10 border border-forest/20 rounded-2xl px-6 py-4">
                <p className="font-body font-medium text-forest text-sm">
                  ✓ You&apos;re on the list! We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-white border border-sand rounded-full px-5 py-3.5 text-sm font-body font-light text-brand-text placeholder:text-muted outline-none focus:border-forest/40 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-forest text-white font-body font-medium text-xs tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-forest-light transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
