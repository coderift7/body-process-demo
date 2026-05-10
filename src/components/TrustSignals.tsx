"use client";

import { BriefcaseBusiness, HeartPulse, TimerReset } from "lucide-react";
import { siteConfig } from "@/config/site";
import { StaggerContainer, StaggerItem } from "./Motion";

const icons = [BriefcaseBusiness, HeartPulse, TimerReset];

export default function TrustSignals() {
  return (
    <section id="trust" className="relative bg-primary py-6">
      {/* Subtle top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <StaggerContainer
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:justify-between"
          staggerDelay={0.08}
        >
          {siteConfig.trustStats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-2xl font-bold tracking-tight text-white">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-white/50">
                      {stat.label}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center sm:px-7">
          <p className="font-heading text-base font-semibold leading-relaxed text-white sm:text-lg">
            {siteConfig.proof.quote}
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {siteConfig.proof.author}
          </p>
        </div>
      </div>
    </section>
  );
}
