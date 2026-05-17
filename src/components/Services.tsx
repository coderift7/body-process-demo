"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";
import { assetPath, routePath } from "@/lib/paths";
import Container from "./Container";

const paths = [
  {
    label: "Vor Ort",
    title: "Wenn du Fortschritt nicht dem Zufall überlassen willst.",
    description:
      "1:1 Personal Training mit direkter Korrektur, klarer Struktur und fester Verbindlichkeit.",
    image: "/images/service-personal-training-demo.png",
    href: "#kontakt",
    cta: "Termin anfragen",
  },
  {
    label: "Online",
    title: "Wenn du selbst trainierst, aber gezielter vorankommen willst.",
    description:
      "Online-Coaching mit Trainingsplan, Formcheck, Ernährung und regelmäßiger Anpassung.",
    image: "/images/service-online-coaching-demo.png",
    href: "/online-coaching",
    cta: "Mehr erfahren",
  },
  {
    label: "Hybrid",
    title: "Wenn dein Alltag Flexibilität braucht.",
    description:
      "Wir starten persönlich, prüfen Technik vor Ort und führen Training und Ernährung digital weiter.",
    image: "/images/service-hybrid-coaching-demo.png",
    href: "#kontakt",
    cta: "Mehr erfahren",
  },
];

export default function Services() {
  return (
    <section
      id="leistungen"
      className="relative scroll-mt-24 bg-white py-20 text-graphite lg:py-28"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-copper">
              Wähle den Rahmen, der zu deinem Alltag passt
            </span>
            <h2 className="display-heading mt-4 text-5xl text-graphite sm:text-6xl">
              Coaching ohne Umwege.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-graphite/68 sm:text-lg">
              Vor Ort, digital oder kombiniert: Du bekommst den Rahmen, der zu
              deinem Alltag passt und Fortschritt planbar macht.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="mt-14 grid gap-5 md:grid-cols-3" staggerDelay={0.12}>
          {paths.map((path) => (
            <StaggerItem key={path.label}>
              <motion.a
                href={routePath(path.href)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full min-h-[27rem] flex-col overflow-hidden rounded-sm border border-graphite/10 bg-graphite text-white shadow-[0_22px_60px_rgba(15,23,42,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/70"
              >
                <div className="relative min-h-[15rem] overflow-hidden">
                  <Image
                    src={assetPath(path.image)}
                    alt={`${path.title} Body Process Personal Training Limburg`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/18 to-transparent transition-colors duration-300 group-hover:from-graphite/88" />
                </div>

                <div className="relative flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                      {path.label}
                    </p>
                    <h3 className="mt-4 font-heading text-2xl font-bold leading-tight tracking-normal">
                      {path.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/68">
                      {path.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border border-white/10 px-4 py-3">
                    <span className="text-sm font-semibold">
                      {path.cta}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-xl leading-none text-accent transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
