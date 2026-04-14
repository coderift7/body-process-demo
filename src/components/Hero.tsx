"use client";

import { motion, useReducedMotion } from "framer-motion";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="grain relative flex min-h-[100dvh] items-end overflow-hidden bg-primary">
      {/* Fullscreen background — Justin, GYM100 Limburg */}
      <div className="absolute inset-0">
        <motion.img
          src={`${basePath}/images/hero-gym.webp`}
          alt=""
          aria-hidden="true"
          width={1200}
          height={1600}
          fetchPriority="high"
          className="h-full w-full object-cover object-[55%_35%] md:hidden"
          initial={reduceMotion ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <motion.img
          src={`${basePath}/images/hero-clean.webp`}
          alt=""
          aria-hidden="true"
          width={1600}
          height={2134}
          fetchPriority="high"
          className="hidden h-full w-full object-cover object-[55%_35%] md:block"
          initial={reduceMotion ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Cinematic multi-layer gradient — bottom-heavy for editorial text placement */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/15 to-transparent" />
        {/* Radial vignette for cinematic depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,transparent_30%,rgba(15,23,42,0.35)_100%)]" />
      </div>

      {/* Editorial name block — bottom left, golden ratio spacing */}
      <div className="relative z-10 w-full pb-24 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Accent line — slides in from left with subtle glow */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="mb-6 h-[1.5px] w-12 origin-left bg-accent shadow-[0_0_8px_rgba(243,146,0,0.3)] sm:mb-8 sm:w-20 lg:w-24"
          />

          {/* Name — single semantic h1 with staggered word reveal */}
          <h1 className="sr-only">Justin Doms — Personal Training</h1>

          <div className="overflow-hidden" aria-hidden="true">
            <motion.span
              className="block font-heading text-[3rem] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white sm:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
            >
              Justin
            </motion.span>
          </div>
          <div className="overflow-hidden" aria-hidden="true">
            <motion.span
              className="block font-heading text-[3rem] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white sm:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease }}
            >
              Doms
            </motion.span>
          </div>

          {/* Subtitle with extending accent line */}
          <motion.div
            className="mt-5 flex items-center gap-4 sm:mt-6 lg:mt-8"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease }}
          >
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-white/50 sm:text-[0.7rem] sm:tracking-[0.4em] lg:text-xs lg:tracking-[0.45em]">
              Personal Training
            </p>
            <motion.div
              className="h-px max-w-24 flex-1 bg-gradient-to-r from-white/20 to-transparent sm:max-w-32 lg:max-w-48"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2, ease }}
              style={{ originX: 0 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — breathing pulse line */}
      <motion.a
        href="#trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="group absolute bottom-8 left-1/2 -translate-x-1/2 rounded-sm p-2 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none"
        aria-label="Nach unten scrollen"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/25 to-white/8 transition-all duration-300 group-hover:via-accent/40 group-hover:to-accent/15" />
        </motion.div>
      </motion.a>
    </section>
  );
}
