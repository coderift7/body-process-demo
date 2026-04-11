"use client";

import { Award, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";

const statIcons = [Users, Award, BookOpen];
const statColors = [
  "bg-accent/8 text-accent",
  "bg-emerald-500/10 text-emerald-600",
  "bg-amber-500/10 text-amber-600",
];

export default function Team() {
  const { team } = siteConfig;
  const member = team.members[0];

  return (
    <section
      id="ueber-mich"
      className="noise-overlay relative bg-white py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: About text */}
          <Reveal variants={slideFromLeft}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Dein Trainer
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                {team.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {team.description}
              </p>

              {/* Member info */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <span className="font-heading text-lg font-bold text-accent">
                    JD
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {member.description}
              </p>
            </div>
          </Reveal>

          {/* Right: Stats */}
          <Reveal variants={slideFromRight} delay={0.15}>
            <div className="relative">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-cta/5 blur-2xl" />

              <div className="relative space-y-4">
                {team.stats.map((stat, i) => {
                  const Icon = statIcons[i];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + i * 0.12,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
                    >
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${statColors[i]}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-heading text-2xl font-bold tracking-tight text-primary">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
