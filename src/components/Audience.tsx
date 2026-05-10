"use client";

import Image from "next/image";
import { BriefcaseBusiness, MapPin, RefreshCcw } from "lucide-react";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/paths";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";

const icons = [BriefcaseBusiness, MapPin, RefreshCcw];

export default function Audience() {
  const { audience } = siteConfig;

  return (
    <section
      id="fuer-wen"
      className="relative scroll-mt-24 overflow-hidden bg-muted py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,146,0,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal variants={slideFromLeft}>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-xl">
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image
                  src={assetPath("/images/justin-business-outdoor.jpeg")}
                  alt="Justin Doms in professionellem Umfeld im Freien"
                  width={1536}
                  height={2048}
                  className="aspect-[4/5] w-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-7 left-7 right-7 rounded-[1.25rem] border border-white/10 bg-primary/86 p-5 text-white backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Für wen Body Process passt
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/74">
                  Für Menschen, die Leistung im Alltag brauchen und einen klaren,
                  realistischen Weg zu mehr Fitness, Energie und Stabilität
                  suchen.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variants={slideFromRight}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Zielgruppe
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                {audience.heading}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {audience.intro}
              </p>

              <div className="mt-8 space-y-4">
                {audience.profiles.map((profile, index) => {
                  const Icon = icons[index];

                  return (
                    <article
                      key={profile.title}
                      className="rounded-3xl border border-border bg-card p-6 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl font-semibold text-primary">
                            {profile.title}
                          </h3>
                          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                            {profile.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-8 rounded-3xl border border-accent/15 bg-accent/[0.06] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Region
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                  {audience.locations.map((location) => (
                    <li
                      key={location}
                      className="rounded-2xl border border-accent/10 bg-white/70 px-4 py-3 text-sm font-medium text-primary"
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
