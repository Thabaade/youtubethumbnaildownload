import Head from "next/head";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Head>
        <title>Über uns | YouTube Thumbnail Downloader</title>
        <meta
          name="description"
          content="Erfahren Sie mehr über unser Team und die Mission hinter dem YouTube Thumbnail Downloader. Wir helfen Ihnen, Thumbnails einfach und schnell herunterzuladen."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Über uns | YouTube Thumbnail Downloader" />
        <meta
          property="og:description"
          content="Erfahren Sie mehr über unser Team und die Mission hinter dem YouTube Thumbnail Downloader."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Über uns</h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          Willkommen bei unserem <strong>YouTube Thumbnail Downloader</strong>. Wir sind ein engagiertes Team, das es
          sich zur Aufgabe gemacht hat, das Herunterladen von YouTube-Thumbnails so einfach und zugänglich wie möglich
          zu gestalten. Mit unserer benutzerfreundlichen Anwendung können Sie hochwertige Thumbnails in Sekundenschnelle
          herunterladen.
        </p>
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          Unsere Mission ist es, jedem die Möglichkeit zu geben, schnell und unkompliziert auf visuelle Inhalte
          zuzugreifen, sei es für persönliche oder berufliche Zwecke. Wir verstehen, wie wichtig hochwertige Bilder
          sind, und deshalb arbeiten wir kontinuierlich daran, unsere Plattform zu verbessern.
        </p>
        <p className="text-gray-500 text-lg leading-relaxed">
          Haben Sie Feedback oder Fragen? Zögern Sie nicht, uns zu kontaktieren. Wir freuen uns, von Ihnen zu hören!
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="bg-red-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition"
          >
            Zurück zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}
