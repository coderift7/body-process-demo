"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Reveal } from "./Motion";

export default function Guarantee() {
  const { guarantee } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-accent/15 bg-gradient-to-br from-accent/[0.04] via-transparent to-cta/[0.03] p-8 sm:p-12"
          >
            {/* Decorative circles */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/5 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-cta/5 blur-2xl" />

            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                <ShieldCheck className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary sm:text-2xl">
                  {guarantee.headline}
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {guarantee.description}
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
