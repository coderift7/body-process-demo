"use client";

import Image from "next/image";
import { BadgeCheck, ShieldCheck, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/paths";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";
import Container from "./Container";

const statIcons = [BadgeCheck, ShieldCheck, Wrench];
export default function Team() {
  const { team } = siteConfig;
  const member = team.members[0];

  return (
    <section
      id="ueber-mich"
      className="relative scroll-mt-24 bg-white py-20 lg:py-28"
    >
      <Container className="relative z-10">
        <div className="grid items-stretch gap-0 overflow-hidden border border-border bg-white lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal variants={slideFromLeft}>
            <div className="flex h-full flex-col justify-center p-7 sm:p-10 lg:p-14">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                Über mich
              </span>
              <h2 className="display-heading mt-4 text-5xl text-primary sm:text-6xl">
                {team.heading}
              </h2>
              <p className="mt-7 text-base leading-8 text-muted-foreground">
                {team.description}
              </p>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {member.description}
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {team.stats.map((stat, i) => {
                  const Icon = statIcons[i];
                  return (
                    <motion.div
                      key={stat.value}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.15 + i * 0.08,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="border border-border bg-background p-4"
                    >
                      <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                      <p className="mt-4 font-heading text-xl font-semibold tracking-normal text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal variants={slideFromRight} delay={0.15}>
            <div className="relative min-h-[34rem] bg-primary">
              <Image
                src={assetPath(member.image)}
                alt={`${member.name} Personal Trainer und Ernährungscoach`}
                fill
                className="object-cover object-[50%_30%]"
                sizes="(max-width: 1024px) 100vw, 54vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/0 to-primary/14 lg:from-white/35" />
            </div>
          </Reveal>
        </div>

      </Container>
    </section>
  );
}
