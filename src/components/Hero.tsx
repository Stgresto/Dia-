"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type BezierDefinition = [number, number, number, number];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as BezierDefinition },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1800&q=85"
          alt="Confident woman living actively with diabetes"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest/60 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span
          {...fade(0.1)}
          className="inline-block text-2xs font-body font-medium tracking-[0.5em] uppercase text-gold mb-8"
        >
          DiaStyle &mdash; For The T1D Lifestyle
        </motion.span>

        <motion.h1
          {...fade(0.25)}
          className="font-display text-white leading-[1.05] mb-8"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 600 }}
        >
          Live Beyond
          <br />
          <em style={{ fontWeight: 400 }}>Diabetes.</em>
        </motion.h1>

        <motion.p
          {...fade(0.4)}
          className="font-body font-light text-white/80 text-lg lg:text-xl leading-relaxed mb-12 max-w-xl mx-auto"
        >
          The tennis court. The pool. The classroom. The adventure.
          <br />
          <span className="text-white font-normal">
            Life doesn&apos;t stop for diabetes.
            <br />
            Neither should you.
          </span>
        </motion.p>

        <motion.div
          {...fade(0.55)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#coach"
            className="inline-flex items-center justify-center bg-forest text-white font-body font-medium text-xs tracking-widest uppercase px-10 py-4 rounded-full hover:bg-forest-light transition-colors duration-300"
          >
            Try AI Coach
          </Link>
          <Link
            href="#community"
            className="inline-flex items-center justify-center border border-white/60 text-white font-body font-medium text-xs tracking-widest uppercase px-10 py-4 rounded-full hover:bg-white hover:text-brand-text transition-all duration-300"
          >
            Join Community
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-2xs font-body tracking-[0.4em] uppercase text-white/40">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
