"use client";

import { ArrowRight, BadgeCheck, ShieldCheck, Wrench } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";
import Container from "./Container";

const featureItems = [
  { icon: BadgeCheck, title: "Individuell", text: "Keine Standardpläne" },
  { icon: ShieldCheck, title: "Nachhaltig", text: "Langfristige Ergebnisse" },
  { icon: Wrench, title: "Praxisnah", text: "Umsetzung im Alltag" },
];

export default function Transformation() {
  const { process } = siteConfig;

  return (
    <section
      id="ablauf"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 lg:py-28"
    >
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-copper">
              So läuft dein Einstieg ab
            </span>
            <h2 className="display-heading mt-4 text-5xl text-primary sm:text-6xl">
              {process.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {process.intro}
            </p>
          </div>
        </Reveal>

        <StaggerContainer
          className="mt-14 grid gap-5 md:grid-cols-3"
          staggerDelay={0.1}
        >
          {process.steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <article
                className="relative h-full border border-border bg-card p-7 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent font-heading text-lg font-bold text-white">
                  0{index + 1}
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold tracking-normal text-primary">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
                {index < process.steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 z-10 hidden h-5 w-5 text-graphite/42 md:block"
                    aria-hidden="true"
                  />
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal>
          <div className="mt-10 grid gap-4 border border-border bg-white p-5 sm:grid-cols-3">
            {featureItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-4 p-3">
                  <Icon className="h-8 w-8 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="font-heading text-xl font-semibold tracking-normal text-primary">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
