import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  HelpCircle,
  MessageSquareText,
  PlayCircle,
  ShieldCheck,
  Utensils,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/paths";

const coaching = siteConfig.onlineCoaching;
const pricing = siteConfig.pricing.onlineCoaching;

export const metadata: Metadata = {
  title: coaching.meta.title,
  description: coaching.meta.description,
  alternates: {
    canonical: "/online-coaching",
  },
};

const fitIcons = [ClipboardList, PlayCircle, Utensils];
const stepIcons = [ClipboardList, CheckCircle2, MessageSquareText];

function OnlineHeroPortrait({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[26rem] sm:max-w-[30rem] lg:mx-0 lg:max-w-none ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04] p-3 shadow-[0_30px_80px_rgba(2,6,23,0.34)] backdrop-blur-md">
        <div className="relative overflow-hidden rounded-[1.4rem]">
          <Image
            src={assetPath("/images/online-coaching-hero-gym-demo.png")}
            alt="Justin Doms analysiert Training per Tablet im Gym für Online-Coaching in Limburg"
            width={1122}
            height={1402}
            priority
            className="aspect-[5/6] w-full object-cover object-[50%_24%] sm:aspect-[4/5] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/82 via-primary/18 to-transparent" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 rounded-[1.3rem] border border-white/12 bg-primary/84 p-4 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Kein Standardplan
          </p>
          <p className="mt-2 font-heading text-xl font-semibold text-white sm:text-2xl">
            Training, Ernährung, Feedback.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/72 sm:mt-3">
            Persönliche Betreuung für Menschen, die selbst umsetzen und
            trotzdem nicht allein planen wollen.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OnlineCoachingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="grain relative overflow-hidden bg-primary pt-28 text-white sm:pt-32 lg:pt-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,146,0,0.18),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 sm:px-8 lg:grid-cols-[0.96fr_1.04fr] lg:px-12 lg:pb-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent sm:text-sm">
                {coaching.hero.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl font-heading text-3xl font-bold leading-[0.98] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl">
                {coaching.hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72 sm:text-xl">
                {coaching.hero.subheadline}
              </p>

              <OnlineHeroPortrait className="mt-8 lg:hidden" />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#kontakt"
                  className="inline-flex touch-manipulation items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(180,83,9,0.28)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-cta/90 hover:shadow-[0_12px_28px_rgba(180,83,9,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                >
                  {coaching.hero.cta1}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="#online-preise"
                  className="inline-flex touch-manipulation items-center justify-center rounded-xl border border-white/14 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                >
                  {coaching.hero.cta2}
                </a>
              </div>
            </div>

            <OnlineHeroPortrait className="hidden lg:block" />
          </div>
        </section>

        <section className="bg-background py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Für wen
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Online-Coaching passt, wenn du selbst trainieren kannst.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Es ist für Leute gedacht, die digital arbeiten können, aber
                klare Kontrolle und ehrliches Feedback brauchen.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {coaching.fit.map((item, index) => {
                const Icon = fitIcons[index];
                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Ablauf
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Klarer Rahmen statt Dauer-Chat.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Du bekommst Betreuung, die verbindlich ist, ohne unrealistische
                24/7-Versprechen zu machen.
              </p>
              <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/[0.06] p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-primary">
                    {coaching.boundaries}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {coaching.steps.map((step, index) => {
                const Icon = stepIcons[index];
                return (
                  <article
                    key={step.title}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-accent">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-primary">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-primary py-24 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Praxis
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  So sieht eine Coaching-Woche aus.
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/68">
                  Online-Coaching wird greifbarer, wenn klar ist, was du
                  wirklich machst und was ich prüfe.
                </p>
              </div>

              <div className="grid gap-3">
                {coaching.weeklyRhythm.map((item, index) => (
                  <article
                    key={item}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent font-heading text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="self-center text-sm leading-relaxed text-white/78 sm:text-base">
                      {item}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {coaching.expectations.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/64">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="online-preise"
          className="scroll-mt-24 bg-background py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Preise
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Online-Coaching transparent auswählen.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Gleicher Coaching-Rahmen, unterschiedliche Laufzeit. Alle Preise
                sind Endpreise inkl. gesetzlicher MwSt.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {pricing.plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative rounded-2xl border p-6 shadow-sm ${
                    plan.badge
                      ? "border-accent/35 bg-accent/[0.08]"
                      : "border-border bg-card"
                  }`}
                >
                  {plan.badge && (
                    <p className="mb-4 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {plan.badge}
                    </p>
                  )}
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    {plan.name}
                  </h3>
                  <p className="mt-4 font-heading text-3xl font-bold tabular-nums text-primary">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.unit}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    inkl. gesetzl. MwSt.
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-primary p-6 text-white sm:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                {pricing.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-relaxed text-white/78">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#kontakt"
                className="inline-flex touch-manipulation items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(180,83,9,0.24)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-cta/90 hover:shadow-[0_12px_28px_rgba(180,83,9,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                Erstgespräch anfragen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/#preise"
                className="text-sm font-semibold text-primary underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                Alle Angebote vergleichen
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Fragen vor dem Start
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Gute Einwände, klare Antworten.
              </h2>
            </div>

            <div className="mt-10 grid gap-4">
              {coaching.faq.map((item) => (
                <article
                  key={item.question}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <HelpCircle className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-primary">
                        {item.question}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
