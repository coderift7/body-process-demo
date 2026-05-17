"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";
import { assetPath, routePath } from "@/lib/paths";
import Container from "./Container";

const paths = [
  {
    label: "Vor Ort",
    title: "Wenn du direkte Korrektur brauchst.",
    description:
      "Personal Training vor Ort für saubere Technik, passende Belastung und feste Termine.",
    image: "/images/service-personal-training-demo.png",
    href: "#kontakt",
    cta: "Termin anfragen",
  },
  {
    label: "Online",
    title: "Wenn du selbst trainierst, aber nicht raten willst.",
    description:
      "Online-Coaching mit Trainingsplan, Formcheck, Ernährung und regelmäßiger Anpassung.",
    image: "/images/service-online-coaching-demo.png",
    href: "/online-coaching",
    cta: "Online-Coaching ansehen",
  },
  {
    label: "Hybrid",
    title: "Wenn dein Alltag Flexibilität braucht.",
    description:
      "Wir starten persönlich, prüfen Technik vor Ort und führen Training und Ernährung digital weiter.",
    image: "/images/service-hybrid-coaching-demo.png",
    href: "#kontakt",
    cta: "Termin anfragen",
  },
];

export default function Services() {
  return (
    <section
      id="leistungen"
      className="relative scroll-mt-24 bg-editorial py-24 text-graphite lg:py-32"
    >
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-copper">
                Drei Wege
              </span>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[0.95] tracking-[-0.035em] text-graphite sm:text-5xl lg:text-6xl">
                Wähle den Rahmen, der zu deinem Alltag passt.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-graphite/68 sm:text-lg">
              Entscheidend ist nicht, möglichst viel zu buchen. Entscheidend ist
              der Rahmen, der zu deinem Alltag passt: nah, digital oder
              kombiniert.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="mt-16 space-y-8" staggerDelay={0.12}>
          {paths.map((path, index) => (
            <StaggerItem key={path.label}>
              <motion.a
                href={routePath(path.href)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group grid min-h-[31rem] overflow-hidden border border-graphite/12 bg-graphite text-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/70 lg:grid-cols-[1.18fr_0.82fr]"
              >
                <div
                  className={`relative min-h-[21rem] overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={assetPath(path.image)}
                    alt={`${path.title} Body Process Personal Training Limburg`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    loading="lazy"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-graphite/18 transition-colors duration-300 group-hover:bg-graphite/6" />
                </div>

                <div className="relative flex flex-col justify-between p-7 sm:p-9 lg:p-12">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-copper">
                      {path.label}
                    </p>
                    <h3 className="mt-8 max-w-xl font-heading text-3xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                      {path.title}
                    </h3>
                    <p className="mt-6 max-w-md text-base leading-8 text-editorial/68">
                      {path.description}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-editorial/14 pt-6">
                    <span className="text-sm font-semibold">
                      {path.cta}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-16 bg-copper transition-all duration-300 group-hover:w-24"
                    />
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
