"use client";

import Image from "next/image";
import AnimateIn from "./ui/AnimateIn";

export default function Story() {
  return (
    <section id="story" className="py-28 lg:py-40 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <AnimateIn delay={0} direction="right">
              <span className="text-2xs font-body font-medium tracking-[0.45em] uppercase text-gold block mb-5">
                Our Story
              </span>
            </AnimateIn>
            <AnimateIn delay={0.1} direction="right">
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-brand-text leading-[1.1] mb-8">
                Why I Created<br />
                <em className="font-normal text-forest">DiaStyle</em>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="right">
              <div className="space-y-5 font-body font-light text-muted text-lg leading-relaxed mb-10">
                <p>
                  Living with Type 1 Diabetes means making decisions every single day.
                </p>
                <p>
                  Over time, I realized that one of the hardest parts is not always managing
                  diabetes itself &mdash; it&apos;s understanding all the information that comes with it.
                  Doctor&apos;s appointments, medical reports, and glucose data can often feel overwhelming.
                </p>
                <p>
                  That&apos;s why I created DiaStyle.
                </p>
                <p>
                  A place where people can get support, learn from each other, and feel less alone.
                  A place where technology makes life simpler. A place where diabetes devices become
                  something personal instead of something you want to hide.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.3} direction="right">
              <blockquote className="border-l-2 border-forest pl-6">
                <p className="font-display text-xl lg:text-2xl font-normal italic text-forest leading-relaxed">
                  &ldquo;Because diabetes is part of life. But it should never stop you from living it your way.&rdquo;
                </p>
              </blockquote>
            </AnimateIn>
          </div>

          {/* Image */}
          <AnimateIn delay={0.15} direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=900&q=85"
                  alt="DiaStyle founder — living confidently with T1D"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-5 max-w-[200px]">
                <div className="font-display text-3xl font-semibold text-forest mb-0.5">537M+</div>
                <div className="font-body text-xs font-light text-muted leading-snug">
                  People living with diabetes worldwide
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
