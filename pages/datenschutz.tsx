import Head from "next/head";
import Link from "next/link";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Head>
        <title>Datenschutz | YouTube Thumbnail Downloader</title>
        <meta
          name="description"
          content="Erfahren Sie, wie wir Ihre Daten bei der Nutzung des YouTube Thumbnail Downloaders schützen. Transparenz und Sicherheit stehen bei uns an erster Stelle."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Datenschutz | YouTube Thumbnail Downloader" />
        <meta
          property="og:description"
          content="Erfahren Sie, wie wir Ihre Daten bei der Nutzung des YouTube Thumbnail Downloaders schützen."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Datenschutz</h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie darüber,
          wie wir mit Ihren Daten umgehen, wenn Sie unsere Dienste nutzen.
        </p>

        <h2 className="text-2xl font-bold text-gray-700 mb-4">Erhebung und Verarbeitung von Daten</h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          Wir speichern keine personenbezogenen Daten von unseren Nutzern. Alle übermittelten Daten, wie die YouTube-URL,
          werden nur temporär verarbeitet, um den gewünschten Service bereitzustellen. Nach Abschluss des Vorgangs
          werden diese Daten sofort gelöscht.
        </p>

        <h2 className="text-2xl font-bold text-gray-700 mb-4">Cookies</h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          Unsere Website verwendet keine Cookies, um persönliche Informationen zu speichern. Wir setzen nur notwendige
          Cookies ein, die für die Funktion der Website erforderlich sind.
        </p>

        <h2 className="text-2xl font-bold text-gray-700 mb-4">Google Analytics</h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          Wir verwenden Google Analytics, um die Nutzung unserer Website zu analysieren und zu verbessern. Dabei werden
          keine persönlichen Informationen gespeichert. Sie können die Datenverarbeitung durch Google Analytics
          jederzeit deaktivieren, indem Sie entsprechende Browser-Erweiterungen verwenden.
        </p>

        <h2 className="text-2xl font-bold text-gray-700 mb-4">Kontakt</h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          Wenn Sie Fragen oder Bedenken zu unserer Datenschutzerklärung haben, kontaktieren Sie uns bitte über unsere
          E-Mail-Adresse: <a href="mailto:support@youtubethumbnaildownload.de" className="text-red-600 hover:underline">support@youtubethumbnaildownload.de</a>.
        </p>

        <div className="mt-8">
          <Link href="/" className="bg-red-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
