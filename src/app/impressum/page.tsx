import Link from "next/link";
import { siteConfig } from "@/config/site";
import { routePath } from "@/lib/paths";

export default function Impressum() {
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
          Impressum
        </h1>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">Angaben zum Anbieter</h2>
            <p className="mt-2">
              {siteConfig.company.responsiblePerson}
              <br />
              {siteConfig.company.address}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Kontakt
            </h2>
            <p className="mt-2">
              Telefon: {siteConfig.company.phone}
              <br />
              E-Mail: {siteConfig.company.email}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Verantwortlich für den Inhalt
            </h2>
            <p className="mt-2">
              Verantwortlich für den Inhalt dieser Website ist {siteConfig.company.responsiblePerson},
              Anschrift wie oben.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Streitbeilegung
            </h2>
            <p className="mt-2">
              Ich bin nicht verpflichtet und nicht bereit, an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Urheberrecht
            </h2>
            <p className="mt-2">
              Inhalte, Texte, Bilder und Gestaltung dieser Website unterliegen
              dem Urheberrecht. Eine Verwendung außerhalb der gesetzlichen
              Grenzen bedarf der vorherigen Zustimmung des Rechteinhabers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
