"use client";

import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section id="preise" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Preise
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Finde dein passendes Paket
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Personal Training mit flexiblen Kartenpaketen. Erstgespräch immer
              kostenlos.
            </p>
          </div>
        </Reveal>

        {/* Pricing Cards */}
        <StaggerContainer
          className="mt-14 grid gap-6 md:grid-cols-3"
          staggerDelay={0.1}
        >
          {siteConfig.pricing.map((plan, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-7 transition-shadow duration-300",
                  plan.featured
                    ? "border-accent/30 bg-card shadow-lg shadow-accent/5"
                    : "border-border bg-card hover:shadow-md"
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
                      <Star className="h-3 w-3 fill-current" />
                      Beliebteste Wahl
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold tracking-tight text-primary">
                      {plan.price} €
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {plan.unit}
                    </span>
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-card-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={cn(
                    "block cursor-pointer rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5",
                    plan.featured
                      ? "bg-cta text-white shadow-[0_4px_16px_rgba(234,88,12,0.3)] hover:bg-cta/90 hover:shadow-[0_6px_24px_rgba(234,88,12,0.4)]"
                      : "border border-border bg-card text-primary hover:border-accent/30 hover:shadow-md"
                  )}
                >
                  Erstgespräch buchen
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <Reveal>
          <p className="mx-auto mt-10 max-w-lg text-center text-sm text-muted-foreground">
            Preise auf Anfrage. Erstgespräch immer kostenlos und
            unverbindlich.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
