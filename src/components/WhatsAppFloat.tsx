"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = `https://wa.me/${siteConfig.company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi, ich habe eine Frage zu Body Process."
  )}`;

  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Per WhatsApp Kontakt aufnehmen"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 24,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 touch-manipulation items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.42)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1FB955] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 sm:h-8 sm:w-8"
        fill="currentColor"
      >
        <path d="M19.11 17.39c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.54-.45-.46-.62-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16 5.33C10.11 5.33 5.33 10.11 5.33 16c0 1.86.49 3.68 1.42 5.29L5.33 26.67l5.5-1.41a10.6 10.6 0 005.17 1.34h.01c5.88 0 10.66-4.78 10.66-10.67 0-2.85-1.11-5.53-3.13-7.55A10.59 10.59 0 0016 5.33zm0 19.55h-.01a8.86 8.86 0 01-4.51-1.24l-.32-.19-3.36.86.9-3.27-.21-.34a8.85 8.85 0 01-1.36-4.7c0-4.89 3.98-8.87 8.87-8.87 2.37 0 4.59.92 6.27 2.6a8.81 8.81 0 012.59 6.27c0 4.89-3.98 8.88-8.87 8.88z" />
      </svg>
    </motion.a>
  );
}
