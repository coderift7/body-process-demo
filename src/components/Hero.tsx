"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/paths";

const ease = [0.16, 1, 0.3, 1] as const;

const principles = [
  { label: "Klarheit.", className: "text-[clamp(3.45rem,8vw,8.25rem)]" },
  {
    label: "Progression.",
    className:
      "mt-3 text-[clamp(1.65rem,3vw,3.25rem)] italic font-normal text-graphite/68",
  },
  { label: "Ergebnis.", className: "mt-1 text-[clamp(3rem,6.6vw,6.8rem)] text-copper" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-editorial text-graphite">
      <div className="mx-auto min-h-[100svh] max-w-[96rem] px-6 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-34 xl:px-10">
        <div className="relative min-h-[calc(100svh-9rem)] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(23rem,0.52fr)] lg:items-stretch lg:gap-10 xl:grid-cols-[minmax(0,1.04fr)_minmax(25rem,0.5fr)] xl:gap-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="relative z-20 max-w-4xl md:pt-10 lg:flex lg:max-w-none lg:flex-col lg:justify-center lg:pt-0"
          >
            <div className="max-w-xl sm:flex sm:items-center sm:gap-5">
              <p className="max-w-sm text-xs font-semibold uppercase tracking-[0.34em] text-copper sm:shrink-0 sm:text-sm">
                {siteConfig.hero.eyebrow}
              </p>
              <span aria-hidden="true" className="hidden h-px flex-1 bg-graphite/18 sm:block" />
            </div>

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
              className="mt-9 max-w-xl text-base leading-8 text-graphite/72 sm:text-lg md:max-w-[28rem] lg:max-w-[34rem]"
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
            className="relative z-10 mt-12 -mx-6 aspect-[4/5] overflow-hidden sm:mx-0 sm:max-h-[44rem] lg:mx-0 lg:mt-0 lg:h-full lg:min-h-[calc(100svh-13rem)] lg:max-h-none lg:self-stretch"
          >
            <Image
              src={assetPath("/images/justin-consulting-portrait-hero.jpeg")}
              alt="Justin Doms im Beratungsgespräch"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[62%_18%]"
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
