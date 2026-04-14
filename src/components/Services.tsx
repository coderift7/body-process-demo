"use client";

import {
  Dumbbell,
  Apple,
  MapPin,
  Activity,
  Target,
  Brain,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Dumbbell,
  Apple,
  MapPin,
  Activity,
  Target,
  Brain,
  Sparkles,
};

export default function Services() {
  return (
    <section id="leistungen" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Mein Angebot
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Training. Ernährung. Mindset.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Drei Säulen für dein Ziel — individuell auf dich abgestimmt,
              wissenschaftlich fundiert.
            </p>
          </div>
        </Reveal>

        {/* Service Grid */}
        <StaggerContainer
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <StaggerItem key={i} className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  {/* Photo */}
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={`${basePath}${service.image}`}
                      alt={service.title}
                      width={600}
                      height={400}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {/* Gradient blend into card */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
                    {/* Icon badge — floats at bottom-left of photo */}
                    <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/90 shadow-lg backdrop-blur-sm">
                      <Icon className="h-4.5 w-4.5 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 pt-4">
                    <h3 className="font-heading text-lg font-semibold tracking-tight text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
