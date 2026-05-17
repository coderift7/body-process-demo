"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/paths";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";
import Container from "./Container";

export default function Audience() {
  const { audience } = siteConfig;

  return (
    <section
      id="fuer-wen"
      className="relative scroll-mt-24 overflow-hidden bg-editorial py-24 text-graphite lg:py-32"
    >
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
          <Reveal variants={slideFromLeft}>
            <figure className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={assetPath("/images/audience-coaching-demo.png")}
                  alt="Justin Doms im Beratungsgespräch im Gym"
                  fill
                  className="object-cover object-[46%_42%]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <figcaption className="mt-5 border-l-2 border-copper pl-5 text-sm leading-7 text-graphite/68">
                Für Menschen, die im Alltag funktionieren müssen und trotzdem
                stärker, fitter und stabiler werden wollen.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal variants={slideFromRight} delay={0.12}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-copper">
                Qualifizierung
              </span>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[0.95] tracking-[-0.035em] text-graphite sm:text-5xl lg:text-6xl">
                Besonders sinnvoll, wenn Fortschritt zu deinem Leben passen muss.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-graphite/68 sm:text-lg">
                {audience.intro}
              </p>

              <div className="mt-12">
                <h3 className="font-heading text-2xl font-semibold tracking-[-0.02em]">
                  Besonders sinnvoll, wenn...
                </h3>
                <ul className="mt-7 divide-y divide-graphite/12 border-y border-graphite/12">
                  {audience.profiles.map((profile) => (
                    <li
                      key={profile.title}
                      className="grid gap-3 py-6 sm:grid-cols-[0.48fr_1fr] sm:gap-8"
                    >
                      <p className="font-heading text-xl font-semibold">
                        {profile.title}
                      </p>
                      <p className="text-sm leading-7 text-graphite/66">
                        {profile.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-10 max-w-2xl text-xs font-semibold uppercase leading-6 tracking-[0.24em] text-copper">
                {audience.locations.join(" · ")}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
