import Link from "next/link";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-6">
        <Link
          href="/"
          className="text-sm text-accent hover:underline"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-bold text-primary">
          Impressum
        </h1>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-2">
              Justin Doms — Body Process Personal Training
              <br />
              Mainzer Landstraße 54
              <br />
              65589 Hadamar
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Kontakt
            </h2>
            <p className="mt-2">
              Telefon: +49 176 XXXXXXXX
              <br />
              E-Mail: info@body-process.de
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Haftung für Inhalte
            </h2>
            <p className="mt-2">
              Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              kann jedoch keine Gewähr übernommen werden.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Hinweis
            </h2>
            <p className="mt-2">
              Diese Webseite befindet sich im Aufbau. Angaben werden vor
              Veröffentlichung vervollständigt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
