"use client";

import { useState } from "react";
import { CalendarDays, CheckCircle2, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { routePath } from "@/lib/paths";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";
import Container from "./Container";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/30 backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-200 focus-visible:border-accent/50 focus-visible:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-accent/20";

const labelClasses = "mb-1.5 block text-sm font-medium text-white/70";

export default function AppointmentForm() {
  const { appointment } = siteConfig;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const isOnlineLead =
    selectedTreatment === "Online-Coaching" ||
    selectedTreatment === "Hybrid / unsicher";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const fields = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      treatment: String(formData.get("treatment") || ""),
      date: String(formData.get("date") || ""),
      timeSlot: String(formData.get("timeSlot") || ""),
      goal: String(formData.get("goal") || ""),
      experience: String(formData.get("experience") || ""),
      equipment: String(formData.get("equipment") || ""),
      weeklyTime: String(formData.get("weeklyTime") || ""),
      nutritionTopic: String(formData.get("nutritionTopic") || ""),
      startWindow: String(formData.get("startWindow") || ""),
      message: String(formData.get("message") || ""),
    };
    const body = [
      "Hallo Justin,",
      "",
      "ich möchte ein kostenloses Erstgespräch anfragen.",
      "",
      `Name: ${fields.name}`,
      `E-Mail: ${fields.email}`,
      `Telefon: ${fields.phone || "Nicht angegeben"}`,
      `Thema: ${fields.treatment}`,
      `Wunschtermin: ${fields.date}`,
      `Zeitfenster: ${fields.timeSlot || "Offen"}`,
      "",
      "Lead-Qualifizierung:",
      `Ziel: ${fields.goal || "Nicht angegeben"}`,
      `Trainingserfahrung: ${fields.experience || "Nicht angegeben"}`,
      `Verfügbares Equipment: ${fields.equipment || "Nicht angegeben"}`,
      `Zeit pro Woche: ${fields.weeklyTime || "Nicht angegeben"}`,
      `Ernährungsthema: ${fields.nutritionTopic || "Nicht angegeben"}`,
      `Gewünschter Startzeitraum: ${fields.startWindow || "Nicht angegeben"}`,
      "",
      "Anmerkungen:",
      fields.message || "Keine",
    ].join("\n");

    window.location.href = `mailto:${siteConfig.company.email}?subject=${encodeURIComponent(
      "Anfrage Erstgespräch Body Process"
    )}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
  };

  const whatsappHref = `https://wa.me/${siteConfig.company.whatsapp.replace(/\D/g, "")}`;

  return (
    <section
      id="kontakt"
      className="grain relative scroll-mt-24 overflow-hidden bg-primary py-24 lg:py-32"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(249,115,22,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_80%,rgba(13,148,136,0.1),transparent)]" />

      <Container className="relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <Reveal variants={slideFromLeft}>
            <div className="lg:sticky lg:top-28">
              <span className="text-sm font-semibold uppercase tracking-widest text-cta">
                Online-Terminbuchung
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {appointment.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/50">
                {appointment.subheading}
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Unverbindliche Anfrage statt vorschneller Entscheidung",
                  "Einschätzung, welcher Betreuungsweg zu dir passt",
                  "Rückmeldung in der Regel innerhalb von 24 Stunden",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    <span className="text-white/70">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal variants={slideFromRight} delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-16 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.1,
                      }}
                      className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15"
                    >
                      <CheckCircle2
                        className="h-8 w-8 text-emerald-400"
                        aria-hidden="true"
                      />
                    </motion.div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      E-Mail vorbereitet
                    </h3>
                    <p className="mt-2 max-w-sm text-white/50">
                      {appointment.successMessage}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Name & Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className={labelClasses}>
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="name"
                          required
                          placeholder="Max Mustermann…"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClasses}>
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          spellCheck={false}
                          required
                          placeholder="max@beispiel.de…"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    {/* Phone & Treatment Type */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className={labelClasses}>
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          inputMode="tel"
                          placeholder="+49 123 456 789…"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="treatment" className={labelClasses}>
                          Trainingsart *
                        </label>
                        <select
                          id="treatment"
                          name="treatment"
                          required
                          value={selectedTreatment}
                          onChange={(event) =>
                            setSelectedTreatment(event.currentTarget.value)
                          }
                          className={inputClasses}
                        >
                          <option value="">Bitte wählen</option>
                          {appointment.treatmentTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date & Time preference */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="date" className={labelClasses}>
                          Wunschtermin *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          autoComplete="off"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="timeSlot" className={labelClasses}>
                          Zeitfenster
                        </label>
                        <select
                          id="timeSlot"
                          name="timeSlot"
                          autoComplete="off"
                          className={inputClasses}
                        >
                          <option value="">Bitte wählen</option>
                          {appointment.timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Online coaching qualification */}
                    {isOnlineLead && (
                      <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-white">
                            Online-Coaching Vorqualifikation
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-white/45">
                            Diese Angaben helfen mir, direkt einzuschätzen,
                            ob das 12-Wochen-Coaching zu deinem Alltag passt.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label htmlFor="goal" className={labelClasses}>
                              Ziel *
                            </label>
                            <textarea
                              id="goal"
                              name="goal"
                              rows={3}
                              required={isOnlineLead}
                              placeholder="Was soll sich in den nächsten 12 Wochen verändern?"
                              className={inputClasses}
                            />
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label htmlFor="experience" className={labelClasses}>
                                Trainingserfahrung *
                              </label>
                              <select
                                id="experience"
                                name="experience"
                                required={isOnlineLead}
                                className={inputClasses}
                              >
                                <option value="">Bitte wählen</option>
                                {appointment.experienceLevels.map((level) => (
                                  <option key={level} value={level}>
                                    {level}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label htmlFor="equipment" className={labelClasses}>
                                Equipment *
                              </label>
                              <select
                                id="equipment"
                                name="equipment"
                                required={isOnlineLead}
                                className={inputClasses}
                              >
                                <option value="">Bitte wählen</option>
                                {appointment.equipmentOptions.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label htmlFor="weeklyTime" className={labelClasses}>
                                Zeit pro Woche *
                              </label>
                              <select
                                id="weeklyTime"
                                name="weeklyTime"
                                required={isOnlineLead}
                                className={inputClasses}
                              >
                                <option value="">Bitte wählen</option>
                                {appointment.weeklyTimeOptions.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label htmlFor="nutritionTopic" className={labelClasses}>
                                Ernährungsthema *
                              </label>
                              <select
                                id="nutritionTopic"
                                name="nutritionTopic"
                                required={isOnlineLead}
                                className={inputClasses}
                              >
                                <option value="">Bitte wählen</option>
                                {appointment.nutritionTopics.map((topic) => (
                                  <option key={topic} value={topic}>
                                    {topic}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="startWindow" className={labelClasses}>
                              Gewünschter Startzeitraum *
                            </label>
                            <select
                              id="startWindow"
                              name="startWindow"
                              required={isOnlineLead}
                              className={inputClasses}
                            >
                              <option value="">Bitte wählen</option>
                              {appointment.startWindows.map((window) => (
                                <option key={window} value={window}>
                                  {window}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className={labelClasses}>
                        Anmerkungen
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Besondere Wünsche, Verletzungen, Ziele…"
                        className={inputClasses}
                      />
                    </div>

                    {/* Privacy */}
                    <label className="flex cursor-pointer items-start gap-2.5">
                      <input
                        type="checkbox"
                        name="privacy-consent"
                        required
                        className="mt-1 rounded border-white/20 bg-white/5"
                      />
                      <span className="text-xs leading-relaxed text-white/40">
                        Ich stimme der{" "}
                        <a
                          href={routePath("/datenschutz")}
                          className="text-accent underline decoration-accent/30 transition-colors duration-200 hover:decoration-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                        >
                          Datenschutzerklärung
                        </a>{" "}
                        zu. *
                      </span>
                    </label>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group flex w-full cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 font-semibold text-white shadow-[0_4px_16px_rgba(180,83,9,0.3)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-cta/90 hover:shadow-[0_6px_24px_rgba(180,83,9,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                    >
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      {appointment.submitLabel}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </button>
                    <p className="text-center text-xs leading-relaxed text-white/35">
                      Dein E-Mail-Programm öffnet sich mit deiner vorbereiteten
                      Anfrage.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${siteConfig.company.whatsapp.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Anrufen
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
