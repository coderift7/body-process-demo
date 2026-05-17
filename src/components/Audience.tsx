"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/paths";
import { Reveal, slideFromLeft } from "./Motion";
import Container from "./Container";

export default function Audience() {
  const { audience } = siteConfig;

  return (
    <section
      id="fuer-wen"
      className="relative scroll-mt-24 overflow-hidden bg-white py-0 text-graphite"
    >
      <div className="grid lg:grid-cols-[1.03fr_0.97fr]">
        <div className="flex items-center bg-white py-20 lg:py-28">
          <Container className="lg:mr-0 lg:max-w-[42rem]">
            <Reveal variants={slideFromLeft}>
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-copper">
                Alltag statt Idealwelt
              </span>
              <h2 className="display-heading mt-5 text-5xl text-graphite sm:text-6xl">
                {audience.heading}
              </h2>
              <p className="mt-4 max-w-2xl font-heading text-2xl font-semibold leading-snug tracking-normal text-graphite sm:text-3xl">
                Sondern daran, dass Training und Ernährung nicht zum Alltag
                passen.
              </p>
              <p className="mt-8 max-w-xl text-base leading-8 text-graphite/68">
                {audience.intro}
              </p>

              <ul className="mt-10 divide-y divide-graphite/12 border-y border-graphite/12">
                {audience.profiles.map((profile) => (
                  <li key={profile.title} className="py-5">
                    <p className="font-heading text-xl font-semibold tracking-normal">
                      {profile.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-graphite/66">
                      {profile.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </div>

        <div className="relative min-h-[28rem] overflow-hidden bg-primary lg:min-h-[44rem]">
          <Reveal variants={slideFromLeft}>
            <figure className="absolute inset-0">
              <Image
                src={assetPath("/images/audience-coaching-demo.png")}
                alt="Justin Doms im Beratungsgespräch im Gym"
                fill
                className="object-cover object-[50%_42%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/28 via-transparent to-transparent" />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
