"use client";

import Image from "next/image";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";

// TODO(justin-review): Transformation placeholder section.
// Pending inputs from Justin:
//   - Customer consent (written, ideally via DocuSeal)
//   - Name/initials, age, profession (CEO/selbstständig preferred)
//   - Timeframe, starting weight/situation, outcome
//   - Auslöser + Wendepunkt
//   - Short quote in customer's own words
// Once delivered, replace [...] blocks and remove this comment.

export default function Transformation() {
  return (
    <section
      id="transformation"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-accent/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Transformation
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              [Überschrift — Headline der Story]
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              [Kurze Einleitung — 1 bis 2 Sätze. Wer war der Kunde, was war der
              Auslöser?]
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-12">
          <Reveal variants={slideFromLeft}>
            <figure className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-muted shadow-xl">
                <Image
                  src="/images/kunde-vorher.webp"
                  alt="[Name] vor Trainingsbeginn bei Body Process"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Vorher
                </span>
                <span className="h-px flex-1 bg-border" />
                <span className="text-sm text-muted-foreground">[Monat/Jahr]</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal variants={slideFromRight}>
            <figure className="relative">
              <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-3xl bg-gradient-to-br from-accent/20 to-cta/10 lg:block" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-muted shadow-2xl">
                <Image
                  src="/images/kunde-nachher.webp"
                  alt="[Name] nach der Transformation mit Body Process"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  Nachher
                </span>
                <span className="h-px flex-1 bg-border" />
                <span className="text-sm text-muted-foreground">[Monat/Jahr]</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal>
          <div className="mx-auto mt-20 max-w-3xl text-center">
            <blockquote className="font-heading text-2xl leading-relaxed text-primary sm:text-3xl lg:text-4xl">
              <span aria-hidden="true" className="text-accent">&ldquo;</span>
              [Originalzitat des Kunden — 1 bis 2 Sätze in seinen Worten]
              <span aria-hidden="true" className="text-accent">&rdquo;</span>
            </blockquote>
            <p className="mt-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              [Name oder Initialen] &middot; [Beruf] &middot; [Ort]
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
