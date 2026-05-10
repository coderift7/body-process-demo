"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const whatsappHref = `https://wa.me/${siteConfig.company.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="grain relative overflow-hidden bg-primary pt-28 text-white sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,146,0,0.16),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="max-w-3xl">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-accent sm:text-sm"
            >
              {siteConfig.hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
              className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-[0.96] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl"
            >
              {siteConfig.hero.headline}
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72 sm:text-xl"
            >
              {siteConfig.hero.subheadline}
            </motion.p>

            <div className="mt-8 grid gap-3 sm:max-w-xl">
              {siteConfig.hero.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.24 + index * 0.08, ease }}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-white/82 sm:text-base">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36, ease }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#kontakt"
                className="inline-flex touch-manipulation items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(180,83,9,0.28)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-cta/90 hover:shadow-[0_12px_28px_rgba(180,83,9,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                {siteConfig.hero.cta1}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#ablauf"
                className="inline-flex touch-manipulation items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                {siteConfig.hero.cta2}
              </a>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.44, ease }}
              className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/62"
            >
              <span>{siteConfig.hero.note}</span>
              <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Direkt per WhatsApp
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease }}
            className="relative"
          >
            <div className="absolute -left-6 top-8 hidden h-40 w-40 rounded-full bg-accent/15 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04] p-3 shadow-[0_30px_80px_rgba(2,6,23,0.34)] backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/images/justin-consulting-portrait-premium.png"
                  alt="Justin Doms im Beratungsgespräch"
                  width={1536}
                  height={2048}
                  priority
                  className="aspect-[4/5] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/78 via-primary/10 to-transparent" />
              </div>

              <div className="absolute bottom-8 left-8 right-8 rounded-[1.3rem] border border-white/12 bg-primary/82 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Body Process
                </p>
                <p className="mt-2 font-heading text-2xl font-semibold text-white">
                  Persönlich. Verlässlich. Klar.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/72">
                  Für Menschen, die Gesundheit, Leistungsfähigkeit und sichtbare
                  Ergebnisse professionell angehen wollen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-14 grid gap-4 border-t border-white/10 pt-8 text-white/78 sm:grid-cols-3"
        >
          {siteConfig.trustStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
              <div className="font-heading text-3xl font-bold tracking-tight text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-sm leading-relaxed text-white/56">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
