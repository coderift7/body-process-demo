"use client";

import { ArrowRight, Check, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";
import { cn } from "@/lib/utils";
import { routePath } from "@/lib/paths";
import Container from "./Container";

export default function Pricing() {
  const pricing = siteConfig.pricing;

  return (
    <section
      id="preise"
      className="relative scroll-mt-24 bg-background py-24 lg:py-32"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Angebote
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              {pricing.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {pricing.intro}
            </p>
          </div>
        </Reveal>

        <StaggerContainer
          className="mt-12 grid gap-4 md:grid-cols-3"
          staggerDelay={0.08}
        >
          {pricing.recommended.map((item) => (
            <StaggerItem key={item.name}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-6 shadow-sm",
                  item.featured
                    ? "border-accent/35 bg-primary text-white shadow-xl shadow-primary/10"
                    : "border-border bg-card text-primary"
                )}
              >
                <p
                  className={cn(
                    "mb-5 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
                    item.featured
                      ? "bg-accent text-white"
                      : "bg-accent/10 text-accent"
                  )}
                >
                  {item.tag}
                </p>
                <h3 className="font-heading text-xl font-semibold">
                  {item.name}
                </h3>
                <p
                  className={cn(
                    "mt-4 font-heading text-4xl font-bold tabular-nums",
                    item.featured ? "text-white" : "text-primary"
                  )}
                >
                  {item.price}
                </p>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    item.featured ? "text-white/58" : "text-muted-foreground"
                  )}
                >
                  {item.unit}
                </p>
                <p
                  className={cn(
                    "mt-5 flex-1 text-sm leading-relaxed",
                    item.featured ? "text-white/72" : "text-muted-foreground"
                  )}
                >
                  {item.description}
                </p>
                <a
                  href="#kontakt"
                  className={cn(
                    "mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
                    item.featured
                      ? "border border-white/12 bg-white/[0.06] text-white hover:border-white/24 hover:bg-white/[0.1]"
                      : "border border-border bg-card text-primary hover:border-accent/30"
                  )}
                >
                  Einstieg besprechen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-14 space-y-14 lg:mt-16 lg:space-y-16">
          <Reveal>
            <article className="overflow-hidden rounded-3xl bg-primary text-white shadow-2xl shadow-primary/15">
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:p-10">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    {pricing.personalTraining.eyebrow}
                  </span>
                  <h3 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                    {pricing.personalTraining.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/68">
                    {pricing.personalTraining.description}
                  </p>
                  <a
                    href="#kontakt"
                    className="mt-7 inline-flex touch-manipulation items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                  >
                    PT-Erstgespräch anfragen
                  </a>
                  <a
                    href={routePath("/online-coaching")}
                    className="mt-4 inline-flex w-full touch-manipulation items-start gap-3 rounded-2xl border border-accent/30 bg-accent/[0.08] p-4 text-left text-sm leading-snug text-white/88 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 sm:max-w-md"
                  >
                    <Sparkles
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block font-semibold text-white">
                        Personal Training zu teuer?
                      </span>
                      <span className="mt-1 block text-white/68">
                        Online-Coaching ab 119 €/Monat — gleicher Plan, gleiche
                        Betreuung im vereinbarten Rahmen.
                      </span>
                    </span>
                    <ArrowRight
                      className="ml-auto mt-1 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {pricing.personalTraining.durations.map((duration) => (
                    <div
                      key={duration.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] p-5"
                    >
                      <h4 className="font-heading text-xl font-semibold text-white">
                        {duration.label}
                      </h4>
                      <div className="mt-5 divide-y divide-white/10">
                        {duration.rows.map((row) => (
                          <div
                            key={`${duration.label}-${row.label}`}
                            className="grid grid-cols-[1fr_auto] gap-4 py-3 first:pt-0 last:pb-0"
                          >
                            <div>
                              <p className="text-sm font-medium text-white">
                                {row.label}
                              </p>
                              {row.note && (
                                <p className="mt-1 text-xs leading-snug text-white/48">
                                  {row.note}
                                </p>
                              )}
                            </div>
                            <p className="whitespace-nowrap font-heading text-base font-bold tabular-nums text-accent">
                              {row.price}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-white/46">
                        inkl. gesetzl. MwSt.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <section aria-labelledby="nutrition-pricing-heading">
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  {pricing.nutrition.eyebrow}
                </span>
                <h3
                  id="nutrition-pricing-heading"
                  className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary"
                >
                  {pricing.nutrition.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {pricing.nutrition.description}
                </p>

                <div className="mt-6 grid gap-4">
                  {pricing.nutrition.packages.map((item) => (
                    <motion.article
                      key={item.name}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h4 className="font-heading text-xl font-semibold text-primary">
                            {item.name}
                          </h4>
                          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-heading text-3xl font-bold tabular-nums text-primary">
                            {item.price}
                          </p>
                          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            inkl. MwSt.
                          </p>
                        </div>
                      </div>

                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {item.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm leading-snug text-card-foreground"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section
                aria-labelledby="online-pricing-heading"
                className="rounded-3xl border border-accent/20 bg-card p-6 shadow-xl shadow-accent/8 sm:p-8"
              >
                <div className="flex items-center gap-2">
                  <Star
                    className="h-4 w-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {pricing.onlineCoaching.eyebrow}
                  </span>
                </div>
                <h3
                  id="online-pricing-heading"
                  className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary"
                >
                  {pricing.onlineCoaching.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {pricing.onlineCoaching.description}
                </p>

                <StaggerContainer
                  className="mt-7 grid gap-3 sm:grid-cols-2"
                  staggerDelay={0.06}
                >
                  {pricing.onlineCoaching.plans.map((plan) => (
                    <StaggerItem key={plan.name}>
                      <div
                        className={cn(
                          "relative h-full rounded-2xl border p-5",
                          plan.badge
                            ? "border-accent/35 bg-accent/[0.08]"
                            : "border-border bg-background"
                        )}
                      >
                        {plan.badge && (
                          <p className="mb-3 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                            {plan.badge}
                          </p>
                        )}
                        <h4 className="font-heading text-lg font-semibold text-primary">
                          {plan.name}
                        </h4>
                        <div className="mt-3">
                          <span className="font-heading text-3xl font-bold tabular-nums text-primary">
                            {plan.price}
                          </span>
                          <span className="ml-2 text-sm text-muted-foreground">
                            {plan.unit}
                          </span>
                        </div>
                        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          inkl. gesetzl. MwSt.
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <ul className="mt-7 grid gap-3">
                  {pricing.onlineCoaching.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-snug text-card-foreground"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <Check
                          className="h-3 w-3 text-accent"
                          aria-hidden="true"
                        />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={routePath("/online-coaching")}
                  className="mt-8 inline-flex w-full touch-manipulation items-center justify-center rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(180,83,9,0.24)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-cta/90 hover:shadow-[0_8px_24px_rgba(180,83,9,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  Online-Coaching ansehen
                </a>
              </section>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            {pricing.note}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
