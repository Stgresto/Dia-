"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=85"
          alt="Young adults with diabetes living fully and joyfully"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl lg:text-7xl font-semibold text-white leading-[1.08] mb-10"
        >
          Understand More.
          <br />
          <em className="font-normal text-gold">Worry Less.</em>
          <br />
          Live Better.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center bg-white text-forest font-body font-semibold text-sm tracking-widest uppercase px-12 py-5 rounded-full hover:bg-ivory transition-colors duration-200 shadow-lg"
          >
            Get Started
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-xs font-body font-light text-white/40 tracking-wide"
        >
          Free to start &mdash; no credit card required
        </motion.p>
      </div>
    </section>
  );
}
