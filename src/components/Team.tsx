"use client";

import Image from "next/image";
import { Award, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/paths";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";
import Container from "./Container";

const statIcons = [Users, Award, BookOpen];
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

              <div className="mt-10">
                <p className="font-heading text-4xl italic tracking-normal text-primary">
                  Justin Doms
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variants={slideFromRight} delay={0.15}>
            <div className="relative min-h-[34rem] bg-primary">
              <Image
                src={assetPath(member.image)}
                alt={`${member.name} Personal Trainer in Limburg und Hadamar`}
                fill
                className="object-cover object-[50%_30%]"
                sizes="(max-width: 1024px) 100vw, 54vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/0 to-primary/14 lg:from-white/35" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 bg-primary p-7 text-white sm:p-9">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                  Coaching, das in deinen Alltag passt
                </span>
                <h3 className="mt-4 max-w-3xl font-heading text-3xl font-bold leading-tight tracking-normal sm:text-4xl">
                  Ich arbeite mit Menschen, die Verantwortung tragen, wenig Zeit
                  haben und trotzdem leistungsfähig bleiben wollen.
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 md:min-w-[30rem]">
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
                      className="border border-white/14 bg-white/[0.04] p-5 text-center"
                    >
                      <div
                        className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center text-accent"
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="mt-3">
                        <div className="font-heading text-2xl font-bold tracking-normal text-white">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-xs leading-5 text-white/60">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
