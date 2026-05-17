"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { assetPath, routePath } from "@/lib/paths";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="mb-5">
              <Link
                href={routePath("/")}
                className="inline-block focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <Image
                  src={assetPath("/logo-bp-dark-nav.png")}
                  alt="Body Process — Personal Training"
                  width={1202}
                  height={150}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              {siteConfig.company.tagline} In {siteConfig.company.serviceArea}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
              Schnellzugriff
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={routePath(item.href)}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href={routePath("/impressum")}
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href={routePath("/datenschutz")}
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent/70"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/70">
                  {siteConfig.company.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent/70" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
                  className="text-sm text-white/70 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  {siteConfig.company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent/70" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-sm text-white/70 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  {siteConfig.company.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
              Trainingszeiten
            </h3>
            <div className="flex items-start gap-2.5">
              <Clock
                className="mt-0.5 h-4 w-4 shrink-0 text-accent/70"
                aria-hidden="true"
              />
              <div className="whitespace-pre-line text-sm leading-relaxed text-white/70">
                {siteConfig.company.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/[0.06] pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-white/30"
          >
            © {new Date().getFullYear()} {siteConfig.company.legalName}. Alle
            Rechte vorbehalten.
          </motion.p>
        </div>
      </Container>
    </footer>
  );
}
