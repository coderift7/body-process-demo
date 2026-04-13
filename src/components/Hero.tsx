"use client";

import { ArrowRight, ChevronDown, Heart, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { hero, trustStats } = siteConfig;

  return (
    <section className="grain relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-primary">
      {/* Hero Background Image — Kling AI generated gym shot */}
      <div className="absolute inset-0">
        {/* Mobile: gym version (more context) */}
        <img
          src={`${basePath}/images/hero-gym.webp`}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[25%_center] md:hidden"
        />
        {/* Desktop: clean version (space for text on right) */}
        <img
          src={`${basePath}/images/hero-clean.webp`}
          alt=""
          aria-hidden="true"
          className="hidden h-full w-full object-cover object-[30%_center] md:block"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/80" />
        {/* Extra darkening at bottom for scroll indicator */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary to-transparent" />
      </div>

      {/* Geometric accent lines */}
      <div className="absolute left-0 top-1/4 h-px w-32 bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:w-64" />
      <div className="absolute right-0 bottom-1/3 h-px w-32 bg-gradient-to-l from-transparent via-cta/20 to-transparent lg:w-48" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-md"
          >
            <Heart className="h-4 w-4 text-cta" />
            <span className="text-sm font-medium tracking-wide text-white/80">
              Personal Training in Hadamar, Limburg &amp; Diez
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="font-heading text-[2.75rem] font-bold leading-[1.08] tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            {hero.headline.split(".").slice(0, -1).map((part, i, arr) => (
              <span key={i}>
                {i === arr.length - 1 ? (
                  <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                    {part.trim()}.
                  </span>
                ) : (
                  <>{part.trim()}. </>
                )}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 drop-shadow-md sm:text-xl"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#kontakt"
              className="group inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-cta px-8 py-4 text-base font-semibold text-white shadow-[0_4px_24px_rgba(234,88,12,0.35)] transition-all duration-200 hover:bg-cta/90 hover:shadow-[0_8px_32px_rgba(234,88,12,0.45)] hover:-translate-y-0.5"
            >
              {hero.cta1}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 px-8 py-4 text-base font-medium text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
            >
              {hero.cta2}
            </a>
          </motion.div>

          {/* Trust micro-bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {trustStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                {i === 0 && <Clock className="h-4 w-4 text-accent" />}
                {i === 1 && <Heart className="h-4 w-4 text-accent" />}
                {i === 2 && (
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                )}
                <span className="text-sm text-white/60 drop-shadow-sm">
                  <span className="font-semibold text-white/90">
                    {stat.value}
                  </span>{" "}
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 transition-colors hover:text-white/60"
        aria-label="Nach unten scrollen"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-7 w-7" />
        </motion.div>
      </motion.a>
    </section>
  );
}
