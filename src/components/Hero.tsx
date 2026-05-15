"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/paths";

const ease = [0.16, 1, 0.3, 1] as const;

const principles = [
  { label: "Klarheit.", className: "text-[clamp(3rem,10vw,9.5rem)]" },
  { label: "Progression.", className: "text-[clamp(1.4rem,4vw,4rem)] italic font-normal text-graphite/72" },
  { label: "Ergebnis.", className: "text-[clamp(3rem,11vw,10.5rem)] text-copper" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-editorial text-graphite">
      <div className="mx-auto min-h-[100svh] max-w-7xl px-6 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36">
        <div className="relative min-h-[calc(100svh-9rem)]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="relative z-20 max-w-4xl md:max-w-[68%] md:pt-10"
          >
            <p className="max-w-sm text-xs font-semibold uppercase tracking-[0.34em] text-copper sm:text-sm">
              {siteConfig.hero.eyebrow}
            </p>

            <h1 className="mt-10 font-heading font-bold leading-[0.82] tracking-[-0.04em] text-graphite">
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
              className="mt-9 max-w-xl text-base leading-8 text-graphite/72 sm:text-lg md:max-w-[28rem] lg:max-w-xl"
            >
              Training, Ernährung und Kontrolle mit Justin an deiner Seite:
              ruhig geplant, präzise angepasst und verbindlich in deinen Alltag
              übersetzt.
            </motion.p>
          </motion.div>

          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease }}
            className="relative z-10 mt-12 -mx-6 aspect-[4/5] overflow-hidden sm:mx-0 sm:max-h-[44rem] md:absolute md:bottom-0 md:right-0 md:top-0 md:mt-0 md:w-[44%] md:max-h-none"
          >
            <Image
              src={assetPath("/images/justin-consulting-portrait-hero.jpeg")}
              alt="Justin Doms im Beratungsgespräch"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[65%_18%]"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 grid gap-3 bg-graphite px-6 py-5 text-editorial sm:grid-cols-[1fr_auto] sm:items-end sm:px-8">
              <div>
                <p className="font-heading text-2xl font-semibold tracking-[-0.02em]">
                  Justin Doms
                </p>
                <p className="mt-1 text-sm leading-relaxed text-editorial/68">
                  Personal Trainer & Ernährungscoach in Hadamar
                </p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-copper">
                Body Process
              </p>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
