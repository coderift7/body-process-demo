export const siteConfig = {
  company: {
    name: "Body Process",
    legalName: "Justin Doms — Body Process Personal Training",
    tagline: "Just in form.",
    phone: "+49 176 XXXXXXXX",
    email: "info@body-process.de",
    address: "Mainzer Landstraße 54, 65589 Hadamar",
    hours: "Mo–Fr: 07:00–21:00 Uhr\nSa: 09:00–15:00 Uhr",
  },

  meta: {
    title:
      "Body Process — Personal Training in Hadamar, Limburg & Diez | Justin Doms",
    description:
      "Dein Personal Trainer in Hadamar, Limburg und Diez. Individuelles Training, Ernährungscoaching und ganzheitliche Betreuung. Kostenloses Erstgespräch buchen.",
  },

  hero: {
    headline: "Dein Körper. Dein Prozess. Dein Ergebnis.",
    subheadline:
      "Individuelles Personal Training mit wissenschaftlichem Ansatz — für Menschen, die nicht nur fit werden wollen, sondern es bleiben.",
    cta1: "Kostenloses Erstgespräch",
    cta2: "Mein Angebot",
  },

  trustStats: [
    { value: "100+", label: "Zufriedene Kunden" },
    { value: "4.9/5", label: "Google-Bewertung" },
    { value: "10+", label: "Jahre Erfahrung" },
  ],

  services: [
    {
      icon: "Dumbbell",
      title: "Personal Training",
      description:
        "Eins-zu-eins Training, perfekt auf deine Ziele abgestimmt. Ob Muskelaufbau, Fettreduktion oder Leistungssteigerung — dein Plan, dein Tempo.",
      image: "/images/service-training.png",
    },
    {
      icon: "Apple",
      title: "Ernährungscoaching",
      description:
        "Kein Diät-Wahnsinn, sondern ein Ernährungsplan, der zu deinem Alltag passt. Wissenschaftlich fundiert, alltagstauglich umgesetzt.",
      image: "/images/ernaehrung-coaching.webp",
    },
    {
      icon: "MapPin",
      title: "Outdoor-Training",
      description:
        "Training an der frischen Luft — Parks, Sportplätze und Natur rund um Hadamar, Limburg und Diez.",
      image: "/images/service-outdoor.png",
    },
    {
      icon: "Activity",
      title: "Regeneration & Comeback",
      description:
        "Nach Verletzung oder Pause wieder stark werden. Aus eigener Erfahrung als Ex-Leistungssportler weiß ich, wie man sicher zurückkommt.",
      image: "/images/service-regeneration.png",
    },
    {
      icon: "Target",
      title: "Leistungsdiagnostik",
      description:
        "Keine Vermutungen, sondern Daten. Körperanalyse, Leistungstests und regelmäßige Fortschrittsmessung für optimale Ergebnisse.",
      image: "/images/service-diagnostik.png",
    },
    {
      icon: "Brain",
      title: "Mentales Coaching",
      description:
        "Fitness beginnt im Kopf. Motivation, Gewohnheiten und Mindset — die Grundlage für langfristigen Erfolg.",
      image: "/images/service-mental.png",
    },
  ],

  team: {
    heading: "Über Justin",
    description:
      "Fitness ist kein Hobby für mich — es ist meine Geschichte. Vom Leistungsfußballer zum Personal Trainer: Ich weiß aus eigener Erfahrung, was es braucht, um Ziele zu erreichen — und nach Rückschlägen wieder aufzustehen.",
    members: [
      {
        name: "Justin Doms",
        role: "Personal Trainer & Ernährungscoach",
        description:
          "Ex-Leistungssportler mit Hintergrund im Profifußball. Wissenschaftlich fundierter Trainingsansatz, der Körper, Ernährung und Mindset verbindet. Zertifizierter Personal Trainer mit über 10 Jahren Erfahrung.",
        image: "/images/justin-profile.webp",
      },
    ],
    stats: [
      { value: "10+", label: "Jahre Erfahrung" },
      { value: "100+", label: "Zufriedene Kunden" },
      { value: "3", label: "Säulen: Körper, Ernährung, Mindset" },
    ],
  },

  pricing: [
    {
      name: "5er Karte",
      price: "450",
      unit: "5 Einheiten",
      description: "Ideal zum Einstieg",
      features: [
        "5 Personal Training Sessions à 60 Min",
        "Anamnese und Vorbereitungsgespräch",
        "Individueller Trainingsplan",
        "3 Monate gültig",
      ],
      featured: false,
    },
    {
      name: "10er Karte",
      price: "850",
      unit: "10 Einheiten",
      description: "Für nachhaltige Ergebnisse",
      features: [
        "10 Personal Training Sessions à 90 Min",
        "Anamnese und Vorbereitungsgespräch",
        "Individueller Trainingsplan",
        "Ernährungscoaching inklusive",
        "6 Monate gültig",
      ],
      featured: true,
    },
    {
      name: "24er Karte",
      price: "1.600",
      unit: "24 Einheiten",
      description: "Dein Jahresprogramm",
      features: [
        "24 Personal Training Sessions à 90 Min",
        "Anamnese und Vorbereitungsgespräch",
        "2x Trainingsplan-Anpassung",
        "Ernährungscoaching inklusive",
        "Ernährungsbegleitung im gesamten Zeitraum",
        "12 Monate gültig",
      ],
      featured: false,
    },
  ],

  testimonials: [
    {
      rating: 5,
      text: "Justin hat mir nicht nur beim Abnehmen geholfen, sondern mir einen komplett neuen Lebensstil beigebracht. 15 kg weniger in 4 Monaten — und ich halte das Gewicht seit über einem Jahr!",
      name: "Tobias H.",
      location: "Hadamar",
      image: "/images/testimonial-tobias.png",
    },
    {
      rating: 5,
      text: "Nach meiner Knieverletzung dachte ich, Sport wäre vorbei für mich. Justin hat mich Schritt für Schritt zurückgebracht. Heute bin ich fitter als vorher. Absolute Empfehlung!",
      name: "Janine M.",
      location: "Limburg",
      image: "/images/testimonial-janine.png",
    },
    {
      rating: 5,
      text: "Das Partner-Training mit meiner Frau ist das Beste, was wir für unsere Gesundheit getan haben. Justin motiviert, fordert und erklärt alles verständlich. Top Trainer!",
      name: "Theo S.",
      location: "Diez",
      image: "/images/testimonial-theo.png",
    },
  ],

  appointment: {
    heading: "Kostenloses Erstgespräch buchen",
    subheading:
      "Lass uns unverbindlich sprechen — über deine Ziele, deinen Alltag und wie ich dich am besten unterstützen kann. 30 Minuten, die sich lohnen.",
    treatmentTypes: [
      "Personal Training",
      "Ernährungscoaching",
      "Regeneration / Comeback",
      "Outdoor-Training",
      "Allgemeine Beratung",
    ],
    timeSlots: [
      "Morgens (7–9)",
      "Vormittags (9–12)",
      "Nachmittags (14–18)",
      "Abends (18–21)",
      "Flexibel",
    ],
    submitLabel: "Erstgespräch anfragen",
    successMessage:
      "Danke für deine Anfrage! Ich melde mich innerhalb von 24 Stunden bei dir — per WhatsApp oder E-Mail.",
  },

  faq: [
    {
      question: "Für wen ist Personal Training geeignet?",
      answer:
        "Für jeden — egal ob Anfänger, Wiedereinsteiger oder erfahrener Sportler. Ich passe jedes Training individuell an dein Level, deine Ziele und eventuelle Einschränkungen an. Du brauchst keine Vorkenntnisse.",
    },
    {
      question: "Wo findet das Training statt?",
      answer:
        "Ich trainiere mit dir im GYM%100 in Hadamar oder auf Wunsch auch outdoor. Für Ernährungscoaching und Beratungen sind auch Online-Termine möglich.",
    },
    {
      question: "Was kostet ein Erstgespräch?",
      answer:
        "Das Erstgespräch ist komplett kostenlos und unverbindlich. Wir schauen gemeinsam, wo du stehst, was du erreichen willst und welches Angebot am besten zu dir passt.",
    },
    {
      question: "Was unterscheidet dich von anderen Trainern?",
      answer:
        "Mein Ansatz verbindet drei Säulen: Körper, Ernährung und Mindset. Als ehemaliger Leistungsfußballer kenne ich beide Seiten — den Aufstieg und den Weg zurück nach Verletzungen. Ich arbeite wissenschaftlich fundiert, nicht nach Schema F.",
    },
  ],

  nav: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Über mich", href: "#ueber-mich" },
    { label: "Preise", href: "#preise" },
    { label: "Bewertungen", href: "#bewertungen" },
    { label: "Kontakt", href: "#kontakt" },
  ],
};
