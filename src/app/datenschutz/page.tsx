import Link from "next/link";
import { siteConfig } from "@/config/site";
import { routePath } from "@/lib/paths";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-6">
        <Link
          href={routePath("/")}
          className="text-sm text-accent transition-colors duration-200 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-bold text-primary">
          Datenschutzerklärung
        </h1>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              1. Verantwortlicher
            </h2>
            <p className="mt-2">
              {siteConfig.company.responsiblePerson}
              <br />
              {siteConfig.company.address}
              <br />
              E-Mail: {siteConfig.company.email}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              2. Zugriff auf die Website
            </h2>
            <p className="mt-2">
              Beim Aufruf dieser Website verarbeitet der technische Hoster
              üblicherweise Verbindungsdaten wie IP-Adresse, Datum und Uhrzeit
              des Zugriffs, Browserinformationen sowie angefragte Dateien in
              Server-Log-Dateien. Diese Verarbeitung erfolgt, um die Website
              sicher und stabil bereitzustellen.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              3. Kontaktaufnahme
            </h2>
            <p className="mt-2">
              Wenn Sie per E-Mail, Telefon oder WhatsApp Kontakt aufnehmen,
              werden die von Ihnen übermittelten Angaben ausschließlich zur
              Bearbeitung Ihrer Anfrage und für mögliche Rückfragen verwendet.
              Bei der Kontaktaufnahme über WhatsApp gelten zusätzlich die
              Datenschutzbestimmungen des jeweiligen Diensteanbieters.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              4. Cookies und Analyse
            </h2>
            <p className="mt-2">
              Auf dieser Website werden derzeit keine eigenen Analyse- oder
              Marketing-Tools eingesetzt. Soweit der technische Betrieb durch
              den Hoster technisch notwendige Speicherungen oder Log-Dateien
              erfordert, geschieht dies auf Grundlage des berechtigten
              Interesses an einer sicheren Bereitstellung der Website.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              5. Ihre Rechte
            </h2>
            <p className="mt-2">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie
              auf Widerspruch gegen die Verarbeitung und auf Datenübertragbarkeit,
              soweit die gesetzlichen Voraussetzungen vorliegen. Bei Fragen
              wenden Sie sich an: {siteConfig.company.email}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              6. Beschwerderecht
            </h2>
            <p className="mt-2">
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
              beschweren. Zuständig ist für Hessen insbesondere der Hessische
              Beauftragte für Datenschutz und Informationsfreiheit,
              Gustav-Stresemann-Ring 1, 65189 Wiesbaden.
            </p>
            <p className="mt-2">
              Quelle für die Behördenangabe:{" "}
              <a
                href="https://hessen.de/Datenschutz"
                target="_blank"
                rel="noreferrer"
                className="text-accent underline decoration-accent/30 transition-colors duration-200 hover:decoration-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                Hessen.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              7. Hinweis zum Launch
            </h2>
            <p className="mt-2">
              Vor der Live-Schaltung sollten hosting- oder tool-spezifische
              Ergänzungen noch einmal geprüft werden, falls weitere Dienste,
              Einbindungen oder Tracking-Tools hinzukommen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
