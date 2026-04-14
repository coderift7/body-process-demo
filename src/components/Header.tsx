"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggle = useCallback(() => setIsOpen((o) => !o), []);

  // Color logic: open → always white, scrolled → dark, default → white
  const lineColor = "bg-white";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled && !isOpen
            ? "bg-primary/85 shadow-[0_1px_2px_rgba(0,0,0,0.15)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:h-20 sm:px-8 lg:px-12">
          {/* Logo — always the same, dark header keeps it consistent */}
          <a
            href="#"
            className="relative z-50 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            aria-label="Body Process — Startseite"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.__NEXT_ROUTER_BASEPATH || ""}/logo-real-dark.webp`}
              alt="Body Process"
              width={200}
              height={70}
              className="h-9 w-auto transition-opacity duration-300 sm:h-11"
            />
          </a>

          {/* Custom burger — two asymmetric lines, animated to X */}
          <button
            onClick={toggle}
            className="group fixed right-5 top-4 z-50 flex h-12 w-12 flex-col items-center justify-center gap-[6px] rounded-sm sm:right-8 sm:top-5 lg:right-12 lg:top-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
          >
            {/* Top line */}
            <motion.span
              className={`block h-[2px] rounded-full transition-colors duration-300 ${lineColor}`}
              animate={
                isOpen
                  ? { width: 28, rotate: 45, y: 8 }
                  : { width: 28, rotate: 0, y: 0 }
              }
              transition={{ duration: 0.4, ease }}
            />
            {/* Middle line */}
            <motion.span
              className={`block h-[2px] rounded-full transition-colors duration-300 ${lineColor}`}
              animate={
                isOpen
                  ? { width: 28, opacity: 0, x: 10 }
                  : { width: 28, opacity: 1, x: 0 }
              }
              transition={{ duration: 0.3, ease }}
            />
            {/* Bottom line */}
            <motion.span
              className={`block h-[2px] rounded-full transition-colors duration-300 ${lineColor}`}
              animate={
                isOpen
                  ? { width: 28, rotate: -45, y: -8 }
                  : { width: 28, rotate: 0, y: 0 }
              }
              transition={{ duration: 0.4, ease }}
            />
          </button>
        </div>
      </motion.header>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-primary/[0.97] backdrop-blur-md"
          >
            <nav className="flex flex-col items-center gap-1">
              {siteConfig.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease }}
                  className="group relative px-4 py-3 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  <span className="font-heading text-2xl font-medium tracking-tight text-white/70 transition-colors duration-200 group-hover:text-white sm:text-3xl">
                    {item.label}
                  </span>
                  {/* Hover underline — slides in from left */}
                  <span className="absolute bottom-2 left-4 right-4 h-px origin-left scale-x-0 bg-accent/60 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </motion.a>
              ))}

              {/* CTA */}
              <motion.a
                href="#kontakt"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  delay: 0.1 + siteConfig.nav.length * 0.06 + 0.08,
                  duration: 0.5,
                  ease,
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-widest text-accent transition-all duration-200 hover:border-accent/50 hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                Erstgespräch buchen
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
