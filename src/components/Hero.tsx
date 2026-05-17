"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/paths";
import Container from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

const principles = [
  { label: "Progress.", className: "text-[clamp(3.2rem,7.1vw,7.5rem)]" },
  {
    label: "Struktur.",
    className:
      "mt-3 text-[clamp(1.6rem,2.7vw,3rem)] italic font-normal text-graphite/68",
  },
  { label: "Ergebnis.", className: "mt-1 text-[clamp(2.85rem,6vw,6.25rem)] text-copper" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-editorial text-graphite">
      <Container className="min-h-[100svh] pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-34">
        <div className="relative min-h-[calc(100svh-9rem)] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(21rem,34rem)] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(24rem,36rem)] xl:gap-16">
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
              Training, Ernährung und Kontrolle mit mir an deiner Seite:
              strukturiert geplant, sauber angepasst und so übersetzt, dass es
              in deinem Alltag funktioniert.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.54, ease }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#kontakt"
                className="inline-flex touch-manipulation items-center justify-center bg-graphite px-6 py-4 text-sm font-semibold text-editorial transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-graphite/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/70"
              >
                Kostenloses Erstgespräch anfragen
              </a>
              <a
                href="#fuer-wen"
                className="inline-flex touch-manipulation items-center justify-center border border-graphite/18 px-6 py-4 text-sm font-semibold text-graphite transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-graphite/34 hover:bg-graphite/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/70"
              >
                Passt das zu mir?
              </a>
            </motion.div>
          </motion.div>

          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease }}
            className="relative z-10 mt-12 aspect-[4/5] w-full overflow-hidden sm:mx-0 sm:max-h-[44rem] lg:mt-0 lg:h-[min(66vh,43rem)] lg:min-h-[34rem] lg:max-w-[34rem] lg:justify-self-end xl:max-w-[36rem]"
          >
            <Image
              src={assetPath("/images/hero-justin-gym-demo.png")}
              alt="Justin Doms im Beratungsgespräch im Gym"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[46%_50%] saturate-[1.06] contrast-[1.03]"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 hidden gap-3 bg-graphite px-6 py-5 text-editorial sm:grid sm:grid-cols-[1fr_auto] sm:items-end sm:px-8">
              <div>
                <p className="font-heading text-2xl font-semibold tracking-[-0.02em]">
                  Justin Doms
                </p>
                <p className="mt-1 text-sm leading-relaxed text-editorial/68">
                  Personal Trainer & Ernährungscoach in Hadamar
                </p>
              </div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-copper sm:justify-self-end">
                Body Process
              </p>
            </figcaption>
          </motion.figure>
          <div className="bg-graphite px-6 py-5 text-editorial sm:hidden">
            <p className="font-heading text-2xl font-semibold tracking-[-0.02em]">
              Justin Doms
            </p>
            <p className="mt-1 text-sm leading-relaxed text-editorial/68">
              Personal Trainer & Ernährungscoach in Hadamar
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
