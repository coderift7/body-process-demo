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
          <h1 className="sr-only">Justin Doms — Personal Training</h1>

          <div className="overflow-hidden" aria-hidden="true">
            <motion.span
              className="block font-heading text-[3.5rem] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white sm:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
            >
              Justin
            </motion.span>
          </div>
          <div className="overflow-hidden" aria-hidden="true">
            <motion.span
              className="block font-heading text-[3.5rem] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white sm:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease }}
            >
              Doms
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
