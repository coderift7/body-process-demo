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
          className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3"
          staggerDelay={0.1}
        >
          {siteConfig.pricing.map((plan, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300",
                  plan.featured
                    ? "border-accent/30 bg-card shadow-xl shadow-accent/8 ring-1 ring-accent/10"
                    : "border-border bg-card hover:shadow-lg"
                )}
              >
                {/* Featured top accent */}
                {plan.featured && (
                  <>
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-cta to-accent" />
                    <div className="flex items-center justify-center gap-1.5 bg-accent/5 py-2.5">
                      <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        Bester Preis pro Stunde
                      </span>
                    </div>
                  </>
                )}

                <div className={cn("flex flex-1 flex-col p-7", plan.featured && "pt-5")}>
                  <div className="mb-6">
                    <h3 className="font-heading text-lg font-semibold text-primary">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price block */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-heading text-5xl font-bold tracking-tight text-primary">
                        {plan.price}
                      </span>
                      <span className="text-lg font-medium text-muted-foreground">
                        €
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {plan.unit}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="mb-6 h-px bg-border" />

                  <ul className="mb-8 flex-1 space-y-3.5">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span className="text-sm leading-snug text-card-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#kontakt"
                    className={cn(
                      "block cursor-pointer rounded-xl px-6 py-3.5 text-center text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5",
                      plan.featured
                        ? "bg-cta text-white shadow-[0_4px_16px_rgba(234,88,12,0.3)] hover:bg-cta/90 hover:shadow-[0_6px_24px_rgba(234,88,12,0.4)]"
                        : "border border-border bg-card text-primary hover:border-accent/30 hover:shadow-md"
                    )}
                  >
                    Erstgespräch buchen
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <Reveal>
          <p className="mx-auto mt-10 max-w-lg text-center text-sm text-muted-foreground">
            Alle Preise inkl. gesetzl. MwSt. Ratenzahlung möglich.
            Erstgespräch immer kostenlos und unverbindlich.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
