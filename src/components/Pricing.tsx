"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";
import { cn } from "@/lib/utils";
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
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Angebote
            </span>
            <h2 className="display-heading mt-4 text-5xl text-primary sm:text-6xl">
              {pricing.heading}
            </h2>
            <p className="mt-4 text-lg font-semibold leading-relaxed text-muted-foreground">
              {pricing.intro}
            </p>
          </div>
        </Reveal>

        <StaggerContainer
          className="mt-12 grid gap-5 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {pricing.recommended.map((item) => (
            <StaggerItem key={item.name}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "flex h-full flex-col border p-7 shadow-sm",
                  item.featured
                    ? "border-primary bg-primary text-white shadow-xl shadow-primary/10"
                    : "border-border bg-card text-primary"
                )}
              >
                <p
                  className={cn(
                    "text-sm font-semibold uppercase tracking-[0.22em]",
                    item.featured ? "text-accent" : "text-accent"
                  )}
                >
                  {item.tag}
                </p>
                <h3 className="mt-5 font-heading text-2xl font-semibold tracking-normal">
                  {item.name}
                </h3>
                <p
                  className={cn(
                    "mt-5 font-heading text-5xl font-bold tabular-nums tracking-normal",
                    item.featured ? "text-white" : "text-primary"
                  )}
                >
                  {item.price}
                </p>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    item.featured ? "text-white/62" : "text-muted-foreground"
                  )}
                >
                  {item.unit}
                </p>
                <p
                  className={cn(
                    "mt-6 text-sm leading-7",
                    item.featured ? "text-white/74" : "text-muted-foreground"
                  )}
                >
                  {item.description}
                </p>

                <ul className="mt-7 grid flex-1 gap-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-start gap-2.5 text-sm leading-snug",
                        item.featured ? "text-white/82" : "text-card-foreground"
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          item.featured ? "bg-white/10" : "bg-accent/10"
                        )}
                      >
                        <Check
                          className={cn(
                            "h-3 w-3",
                            item.featured ? "text-accent" : "text-accent"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 border px-5 py-3 text-sm font-semibold transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
                    item.featured
                      ? "border-accent bg-cta text-white hover:bg-accent"
                      : "border-border bg-card text-primary hover:border-accent/30"
                  )}
                >
                  Erstgespräch sichern
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            {pricing.note}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
