"use client";

import Image from "next/image";
import { MapPin, ShieldCheck, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/paths";
import Container from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

const principles = [
  { label: "FORTSCHRITT.", className: "text-white" },
  { label: "STRUKTUR.", className: "text-accent" },
  { label: "ERGEBNIS.", className: "text-white" },
];

const heroStats = [
  { icon: Users, value: "100+", label: "betreute Kunden" },
  { icon: MapPin, value: "Limburg", label: "und Umgebung" },
  { icon: ShieldCheck, value: "1:1", label: "individuelle Betreuung" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="grain relative isolate overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(243,146,0,0.18),transparent_28%),linear-gradient(115deg,rgba(3,7,18,0.9),rgba(15,23,42,0.94)_48%,rgba(3,7,18,0.84))]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_70%_42%,rgba(243,146,0,0.14),transparent_34%)] lg:block" />
      <Container className="relative z-10 min-h-[100svh] pb-12 pt-28 sm:pt-32 lg:pb-16 lg:pt-34">
        <div className="relative min-h-[calc(100svh-9rem)] lg:grid lg:grid-cols-[minmax(0,0.88fr)_minmax(28rem,1fr)] lg:items-center lg:gap-10 xl:gap-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="relative z-20 max-w-4xl md:pt-8 lg:flex lg:max-w-none lg:flex-col lg:justify-center lg:pt-0"
          >
            <div className="max-w-xl sm:flex sm:items-center sm:gap-5">
              <p className="max-w-sm text-xs font-semibold uppercase tracking-[0.34em] text-accent sm:shrink-0 sm:text-sm">
                {siteConfig.hero.eyebrow}
              </p>
              <span aria-hidden="true" className="hidden h-px flex-1 bg-white/18 sm:block" />
            </div>

            <h1
              className="display-heading mt-8 max-w-[44rem] text-[clamp(3.1rem,8.2vw,8rem)] sm:mt-10"
            >
              {principles.map((principle, index) => (
                <motion.span
                  key={principle.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.08 + index * 0.1, ease }}
                  className={`block ${principle.className}`}
                >
                  {principle.label}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.42, ease }}
              className="mt-8 max-w-xl text-base leading-8 text-white/78 sm:text-lg lg:max-w-[31rem]"
            >
              {siteConfig.hero.subheadline}
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.54, ease }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#kontakt"
                className="inline-flex touch-manipulation items-center justify-center bg-cta px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(180,83,9,0.32)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                {siteConfig.hero.cta1}
              </a>
              <a
                href="#leistungen"
                className="inline-flex touch-manipulation items-center justify-center border border-white/18 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/34 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                {siteConfig.hero.cta2}
              </a>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.66, ease }}
              className="mt-10 grid gap-4 sm:grid-cols-3 lg:max-w-2xl"
            >
              {heroStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <p className="font-heading text-lg font-semibold text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs leading-snug text-white/58">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease }}
            className="relative z-10 mt-12 aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10 bg-white/[0.03] shadow-[0_38px_100px_rgba(0,0,0,0.38)] sm:mx-0 sm:max-h-[44rem] lg:mt-0 lg:h-[min(66vh,43rem)] lg:min-h-[34rem] lg:max-w-[34rem] lg:justify-self-end xl:max-w-[36rem]"
          >
            <Image
              src={assetPath("/images/hero-justin-gym-demo.png")}
              alt="Justin Doms im Beratungsgespräch im Gym"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[46%_50%] saturate-[1.08] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/42 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 hidden gap-3 bg-primary/88 px-6 py-5 text-white backdrop-blur-sm sm:grid sm:grid-cols-[1fr_auto] sm:items-end sm:px-8">
              <div>
                <p className="font-heading text-2xl font-semibold tracking-[-0.02em]">
                  Justin Doms
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/68">
                  Personal Trainer & Ernährungscoach in Hadamar
                </p>
              </div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent sm:justify-self-end">
                Body Process
              </p>
            </figcaption>
          </motion.figure>
          <div className="bg-primary/90 px-6 py-5 text-white sm:hidden">
            <p className="font-heading text-2xl font-semibold tracking-[-0.02em]">
              Justin Doms
            </p>
            <p className="mt-1 text-sm leading-relaxed text-white/68">
              Personal Trainer & Ernährungscoach in Hadamar
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
