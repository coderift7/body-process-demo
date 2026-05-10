"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";

export default function Transformation() {
  const { process } = siteConfig;

  return (
    <section
      id="ablauf"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-accent/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Ablauf
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              {process.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {process.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-8 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal variants={slideFromLeft}>
            <div className="relative overflow-hidden rounded-3xl bg-primary p-7 text-white shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,146,0,0.22),transparent_32%)]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Für deinen Alltag gemacht
                </p>
                <h3 className="mt-4 font-heading text-3xl font-bold leading-tight">
                  Weniger Reibung. Mehr Verbindlichkeit. Bessere Ergebnisse.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-white/72">
                  {process.highlight}
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/images/ernaehrungsberatung-justin-premium.png"
                    alt="Justin Doms im Beratungsgespräch mit Kundin"
                    width={2048}
                    height={1536}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-center"
                  />
                </div>

                <a
                  href="#kontakt"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                >
                  Kostenloses Erstgespräch sichern
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal variants={slideFromRight}>
            <div className="space-y-4">
              {process.steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-3xl border border-border bg-card p-7 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 font-heading text-lg font-bold text-accent">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold tracking-tight text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
