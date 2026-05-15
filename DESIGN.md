# Body Process — DESIGN.md

> Kanonische Design-Quelle für Body Process Website. Verheiratet Color-Briefing, Mood-Board und Q-Review-Erkenntnisse.
> Stand: 2026-05-15 — Premium-CEO-Pivot
> **Vor Code-Änderungen IMMER hier nachlesen.** CLAUDE.md (im Repo-Root) verweist hierhin, nicht doppelt pflegen.

---

## 1. Wirkungsziel (3 Adjektive)

- **Editorial** — gesetzt wie ein hochwertiges Magazin, kein Funnel
- **Präzise** — keine Floskeln, jede Aussage trägt, klare Hierarchie
- **Ruhig** — "expensive but quiet", Reduktion als Qualitätssignal

> **Pivot-Hinweis:** Frühere CLAUDE.md-Linie war "Professionell / Nahbar / Bodenständig". Pivot am 15.05.2026 nach Q-Review zu Premium-CEO-Linie. Nahbarkeit kommt über **Bildsprache + Tonalität in Texten**, nicht über Farbe.

---

## 2. Zielgruppe (Premium-Linie)

- 30–60 Jahre, Selbstständige / Geschäftsleute / CEOs
- Werte: Zeiteffizienz, sichtbare Ergebnisse, Diskretion, lange Betreuung
- Skeptisch gegenüber: Hochglanz-Hype, Hustle-Ästhetik, Card-Grids, Counter-Banner, Awards-Walls
- Vergleichs-Ästhetik: Norm Architects, Studio Ilse, deutsche Premium-Marken — NICHT Gym/Hustle

---

## 3. Palette (60-30-10) — WCAG-bestanden

| Rolle | Name | Hex | Wirkung | Anteil |
|---|---|---|---|---|
| Dominant | Warmes Off-White / Creme | `#F5F1EA` | Galerie, Wärme ohne Pastel | 60% |
| Sekundär | Warmes Graphit | `#1C1A18` | Premium-Schwarz mit warmer Note | 30% |
| Akzent | Kupfer / Gebranntes Orange | `#B85A2C` | CTAs, Highlights, Wort-Marken | 10% |
| System (nur Forms) | System-Rot `#C13525`, System-Grün `#3D7755` | — | Fehler/Erfolg | <1% |

**Kontraste (alle bestanden):**
- Graphit auf Off-White: 17.5:1 (AAA)
- Kupfer auf Off-White: 4.9:1 (AA Body, AAA Display)
- Weiß auf Kupfer: 4.7:1 (AA Body — knapp, Off-White-Schrift gibt mehr Spielraum)
- Kupfer auf Graphit: 3.6:1 (nur Display ≥24px erlaubt)

> Vor Production-Deploy: WebAIM-Screenshot in `code/COLOR-BRIEFING-WCAG-CHECK.png` ablegen.

---

## 4. Typografie-Stack

- **Display:** **Fraunces** (Google Fonts, kostenfrei) — Editorial-Serif, große Größen, leichtes Italic für Akzente. Upgrade-Pfad: GT Sectra (Klim, kostenpflichtig).
- **Body:** **Geist** (Vercel, kostenfrei) — geometrisch-quiet, NICHT in Inter/Poppins/Manrope-Familie. Max 2 Weights (400, 600).
- **Mono/Zahlen:** **JetBrains Mono** — für Preise, Daten, Telefon, Zeit-Slots.
- **Regel:** ❌ Inter, ❌ Poppins, ❌ Manrope, ❌ Lexend (war alte CLAUDE.md-Wahl, Q-Review: "zu rund/freundlich").

---

## 5. Sektions-Mapping

| Section | Dominant | Akzent | Pattern |
|---|---|---|---|
| Hero | Off-White + großes Foto | Kupfer-Detail (Punkt/Pfeil) | Stimmungs-Bild + Claim-Satz, kein CTA above-fold |
| Über Justin / Philosophie | Off-White | Kupfer in Zitat-Hervorhebungen | Editorial, Justin als Person früher zeigen |
| Für wen / nicht für wen | Off-White, 2-Spalten | Graphit-Liste, Kupfer-Trenner | Klare Qualifizierung |
| Services / 3 Wege | Off-White, große Foto-Blöcke | Kupfer auf Hover/Selected | Foto-Entscheidungskarten (Q-Review), kein Card-Grid |
| Preise | Graphit-Block | Kupfer für CTA + Plan-Highlight | Entscheidungsmoment durch Farbwechsel |
| Social Proof | Off-White | Graphit-Fließtext | Frequency-Breathwork-Style, keine Cards |
| FAQ | Off-White | Graphit-Trenner | Beruhigend, minimal |
| Kontakt | Off-White ODER Graphit | Kupfer-CTA | Klarer Klickmoment |
| Footer | Graphit | Kupfer für Wortmarken | Seriöser Abschluss |

---

## 6. Strukturelle Eigenheiten (Distinct Design)

5 Pattern, die Body-Process distinkt machen — vom 0815-KI-Look weg:

1. **Editorial Hero statt Split-Hero**
   - 1 starkes Hochformat-Portrait (freigestellt oder atmosphärisch)
   - 3 Schlagworte als gewichtete Typo-Sequenz: *"Klarheit. Progression. Ergebnis."*
   - KEIN CTA above-fold, KEINE Pills, KEINE Counter
   - Inspiration: Isa de Burgh + Vincent Van Duysen

2. **Services als Foto-Entscheidungskarten**
   - 3 Wege (Vor-Ort / Online / Hybrid) statt 6 gleichwertige Leistungen
   - Jeder Weg: 1 atmosphärisches Foto + 1 Satz + 1 Sekundär-CTA
   - Inspiration: Norm Architects, abgewandelt für Solo-Brand

3. **Trust als Fließtext, nicht als Cards**
   - Stimmen als Anführungszeichen + Name + Rolle, kein Avatar, kein Sternchen
   - 1 Kernzahl groß und allein: *"Seit 10 Jahren. Über 100 Klienten. Messbare Fortschritte."*
   - Inspiration: Frequency Breathwork

4. **Transformation als Scroll-Story**
   - Benedict Glaeser: 143,1 → 119,9 kg über 5 Fotos + Zeit-Achse
   - Kein Slider, kein Vorher-Nachher-Direct-Compare-Klischee
   - Nutzt scroll-triggered Reveal sparsam

5. **Zertifikate als Badges, nicht als Logo-Grid**
   - Maximal 4–5 Badges, einheitlich gesetzt
   - Differenzierung zu Standard-PT-Sites mit "Logo-Wall of Certs"

---

## 7. Bildsprache

- **Pflicht:** Echte Justin-Fotos. Stocks/unDraw/Storyset/3D-Blobs sind verboten.
- **Juli-Shoot (geplant):** Mit 7-Eleven-Fotograf + Kundin in Diät. Wird Hero + 3 Service-Anker liefern. **Vor Juli:** mit aktuellen Fotos arbeiten, aber Caveat im Repo dokumentieren.
- **KI-Bilder:** Kling + Midjourney in `fotos/ki/` nur als Ergänzung, nie als Hauptidentität. Bei Personenbildern: NIEMALS Kling (DSGVO, Datenort China).
- **Transformation:** `fotos/kunde-vorher-nachher/` — Benedict Glaeser, 5 Bilder. **OFFEN (Phase 0 TODO):** Justin nach finaler Bildauswahl + Layout fragen.

---

## 8. Q-Review-Anschluss (15.05.2026)

Q hat 5 Befunde + 3 Top-Hebel für 4-6h Arbeit identifiziert. Hier als Iterations-Backlog dokumentiert — Reihenfolge nach Wirkung:

### Iteration 1 (HIGH-Severity, 4-6h)
1. **Hero radikal enttemplaten** — `src/components/Hero.tsx`. Editorial-Portrait-Stage + wiederkehrendes BP-Signet/Slash-Muster. Ersetzt Split-Hero + Glass-Portrait.
2. **Flow neu sortieren** — `src/app/page.tsx`. Reihenfolge: Hero → Justin/Philosophie → Für wen/nicht für wen → 3 Wege → Ablauf → Preise → Proof. Trust-Zahlen aus Hero raus (waren doppelt mit TrustSignals).
3. **Services zu Foto-Entscheidungskarten** — `src/components/Services.tsx`. Aus 6 Cards → 3 starke Wege (Vor-Ort / Online / Hybrid). Ara8-Effekt, aber ruhiger.

### Iteration 2 (MED, nach Iteration 1)
4. **Typografie umstellen** — `src/app/layout.tsx`. Lexend → Fraunces (Display) + Geist (Body) + JetBrains Mono (Zahlen).
5. **Palette umstellen** — Tailwind-Config + globale CSS-Tokens. Navy `#0F172A` → Graphit `#1C1A18`, Orange `#F97316` → Kupfer `#B85A2C`, BG → `#F5F1EA`.
6. **Logo-Slash auf Kupfer ändern** — Justin abnehmen lassen (Logo-Favorit war Navy+Orange-Slash).

### Iteration 3 (MED, Trust-Schicht)
7. **Justin früher als Person zeigen** — kurze Prinzipien-Karte oder "so korrigiere ich"-Detail in About-Section, keine generischen Nutzenclaims.
8. **Testimonials näher an Ablauf ziehen + Fließtext** — TrustSignals.tsx neu strukturieren, Card-Design raus, Fließtext rein.

---

## 9. Preise (Pflicht-Info, von Justin zu bestätigen)

- 5er Karte: **450 €**
- 10er Karte: **850 €**
- 24er Karte: **1.600 €**
- ⚠️ Brutto (Endpreise), nicht Netto (außer B2B-only)
- ⚠️ 60+90 Min Pakete getrennt anzeigen
- ⚠️ KI-Preisfehler beim Stundenpreis prüfen (Justin: "da hat er sich einen schönen Preis ausgesucht")

---

## 10. Pflicht-Checks vor Deploy

- [ ] Lighthouse A11y ≥ 90
- [ ] WCAG-Kontrast 4.5:1 für Body (siehe Tabelle in Abschnitt 3)
- [ ] Favicon korrekt
- [ ] Meta-Tags vollständig
- [ ] Keine Broken Links
- [ ] Mobile < 2s Ladezeit
- [ ] Mood-Board-Pattern eingehalten (1 starkes Foto, Typo trägt, keine Cards/Counter)
- [ ] Logo-Slash-Farbe stimmt mit aktueller Palette überein

---

## 11. Quellen / verlinkte Dokumente

- Mood-Board: `../mood-board/MOODBOARD.md`
- Color-Briefing (vollständig): `../COLOR-BRIEFING.md`
- Konzept (alt, Hintergrund): `../konzept-bodyprocess.md`
- CLAUDE.md (Repo-Root): zeigt auf dieses Dokument
- Brain (Kundenkontext): `~/silverbullet/space/Claude/Projekte/project_bodyprocess_justin.md`
- Q-Review Quelle: Cluster-Befund 15.05.2026 (3 HIGH + 2 MED, siehe `project_bodyprocess_justin.md`)

---

## 12. Was VOR Code passieren muss

- [x] Mood-Board kuratiert
- [x] Color-Briefing ausgefüllt
- [x] DESIGN.md geschrieben
- [ ] **Justin-Pivot-Abnahme**: Palette + Wirkungsziel mit Justin durchsprechen, bevor Iteration 1 startet. Risiko sonst: er sieht "andere Marke" und ist verunsichert.

---

**Letzter Stand:** 2026-05-15 — Premium-Pivot Phase A abgeschlossen
**Nächster Schritt:** Iteration 1 in eigener Code-Session (Hero + Flow + Services)
