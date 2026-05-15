# Q-Briefing — Body Process Code-Iteration 1

> **Modus:** Coding mit Doc-Vorarbeit (Phase A Design abgeschlossen).
> **Repo:** `~/Documents/Freelance/kunden/body-process/code/`
> **Stack:** Next.js + Tailwind, GitHub Pages Demo (https://coderift7.github.io/body-process-demo/)

---

## ⚠️ Pflicht VOR jeder Code-Änderung lesen

1. **`code/DESIGN.md`** — kanonische Design-Quelle (Premium-CEO-Pivot 15.05.). Hier steht Palette, Typo, Sektions-Mapping, Q-Review-Iterations-Backlog.
2. **`mood-board/MOODBOARD.md`** — visuelle Referenzen (Norm Architects, Studio Ilse, Isa de Burgh, Vincent Van Duysen) + 4 Anti-Patterns
3. **`COLOR-BRIEFING.md`** — Hex-Codes + WCAG-Checks (alle bestanden)

**Nicht doppelt pflegen:** CLAUDE.md im Repo-Root verweist nur auf DESIGN.md. Bei Konflikt zwischen alten Files (`konzept-bodyprocess.md`) und DESIGN.md → **DESIGN.md gewinnt**.

---

## Auftrag: Iteration 1 — 3 HIGH-Hebel (4–6h)

### Hebel 1 — Hero radikal enttemplaten
**Datei:** `src/components/Hero.tsx`

**Ziel:** Editorial-Portrait-Stage statt Split-Hero/Glass-Portrait. "Magazin-Cover", nicht "Funnel".

**Muss:**
- 1 starkes Hochformat-Portrait (freigestellt oder atmosphärisch) als visueller Anker
- 3 Schlagworte als gewichtete Typo-Sequenz, z. B. *"Klarheit. Progression. Ergebnis."*
- **KEIN CTA above-fold**, KEINE Pills, KEINE Counter-Banner (Trust-Zahlen rauslösen — die kommen in TrustSignals weiter unten)
- Inspiration: Isa de Burgh + Vincent Van Duysen (siehe MOODBOARD)

**Anti:** Split-Hero links/rechts, Glass-Morphism, "Jetzt Termin sichern!"-CTA über dem Fold.

---

### Hebel 2 — Flow neu sortieren
**Datei:** `src/app/page.tsx`

**Neue Sektions-Reihenfolge:**
1. Hero
2. Über Justin / Philosophie (Justin früher als Person zeigen, nicht erst unten)
3. Für wen / nicht für wen (Qualifizierung statt Selling)
4. 3 Wege (Vor-Ort / Online / Hybrid) — siehe Hebel 3
5. Ablauf
6. Preise
7. Social Proof / Trust

**Wichtig:** Trust-Zahlen sind aktuell doppelt (Hero + TrustSignals). In Iter 1 nur noch in TrustSignals.

---

### Hebel 3 — Services zu Foto-Entscheidungskarten
**Datei:** `src/components/Services.tsx`

**Aktuell:** 6 Cards im Grid (Q-Review: zu generisch, "AI-Dashboard-Optik").
**Neu:** 3 große Foto-Blöcke (Vor-Ort / Online / Hybrid). Jeweils Foto + 1 Kurztext + dezenter Kupfer-Akzent auf Hover.

**Inspiration:** Ara8-Effekt — ruhig, große Flächen, klare Entscheidung.

---

## Design-Constraints (gilt für alle 3 Hebel)

### Palette (DESIGN.md §3)
- Dominant: Off-White `#F5F1EA` (60 %)
- Sekundär: Graphit `#1C1A18` (30 %)
- Akzent: Kupfer `#B85A2C` (10 %, nur CTAs / Hervorhebungen / Wortmarken)
- System (nur Forms): Rot `#C13525`, Grün `#3D7755`

### Typografie
- **In Iteration 1 NICHT umstellen** — Lexend bleibt vorerst. Typo-Wechsel (Fraunces + Geist + JetBrains Mono) ist Hebel 4 in Iteration 2 (`src/app/layout.tsx` + Tailwind-Config).
- Grund: Iteration 1 soll Struktur und Palette validieren, bevor Font-Swap getestet wird.

### Hard-Nein
- ❌ Card-Grids für Services (6-Spalten oder ähnliches)
- ❌ Counter-Animationen / Awards-Walls / Pills
- ❌ Stocks, unDraw, Storyset, Icon-Sets in der Hauptidentität
- ❌ Glass-Morphism / Gradient-Hero / "Fitness-Studio-Look"
- ❌ Pressure-Sales-Sprache ("Letzte Plätze", Countdowns)

### Bildquellen (echte Fotos Pflicht)
- `fotos/coaching-gym/` (Justin im Training)
- `fotos/kunde-vorher-nachher/` (Benedict Gläser, 5 Fotos)
- `fotos/ki/` (Kling/Midjourney) — nur ergänzend

---

## Erfolgskriterien Iteration 1

- [ ] Hero hat kein CTA above-fold, kein Counter, ein Portrait, drei Schlagworte
- [ ] page.tsx in neuer Reihenfolge (Justin/Philosophie direkt nach Hero)
- [ ] Services.tsx auf 3 Foto-Entscheidungskarten reduziert
- [ ] Trust-Zahlen NICHT doppelt (nur in TrustSignals)
- [ ] Palette in Tailwind erweitert (Off-White / Graphit / Kupfer als Tokens hinzufügen, alte Navy/Orange parallel lassen — Swap kommt in Iter 2)
- [ ] Lighthouse A11y bleibt ≥ 90
- [ ] Mobile bleibt < 2 s Ladezeit
- [ ] Pushed nach `coderift7/body-process-demo` Pages — Demo-Link funktioniert
- [ ] Kein Push in `main` ohne Doc-Sichtung (Justin-Mail mit Demo-Link folgt durch Doc)

---

## Was Q NICHT machen soll

- Typo nicht umstellen (Iter 2)
- Tailwind alte Tokens nicht löschen (parallel halten)
- Justin-Mail nicht schreiben — das macht Doc nach Demo-Push
- `code/DESIGN.md` nicht editieren (kanonische Quelle, Doc pflegt)
- Brain-Files nicht editieren (`~/silverbullet/...`)

---

## Brain-Quellen für Kontext (read-only)

- Kunden-Kontext: `~/silverbullet/space/Claude/Projekte/project_bodyprocess_justin.md` (Re-Audit-bereinigt 15.05.)
- Re-Audit-Lesson: `~/silverbullet/space/Claude/Feedback/feedback_termin_zitate_beleg_pflicht.md`
- Q-Review-Cluster: 3 HIGH + 2 MED (in `project_bodyprocess_justin.md` zitiert)

---

## Handover zurück an Doc

Nach Iteration 1:
1. Push auf `coderift7/body-process-demo` Pages
2. Demo-URL bestätigen (https://coderift7.github.io/body-process-demo/)
3. Kurze Notiz an Doc: was gebaut, was offen, was überraschend war
4. Doc übernimmt Justin-Mail mit Demo-Link + Palette-Pivot-Erklärung
