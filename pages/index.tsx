import { useState } from "react";
import Head from "next/head";


export default function Home() {
  const [url, setUrl] = useState("");
  const [thumbnails, setThumbnails] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setThumbnails(null);
  
    try {
      const response = await fetch("/api/thumbnail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setThumbnails(data.resolutions);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
    }
  };

  const handleDownload = async (imageUrl: string, quality: string) => {
    try {
      console.log("Image URL:", imageUrl); // Debugging log
  
      // Call the download API
      const response = await fetch(`/api/download?url=${encodeURIComponent(imageUrl)}`);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
      }
  
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `youtube-thumbnail-${quality}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href); // Free up memory
    } catch (err: unknown) {
      console.error("Download failed:", err);
      const errorMessage = err instanceof Error ? err.message : "Unbekannter Fehler";
      alert(`Fehler beim Herunterladen der Datei: ${errorMessage}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Head>
        {/* SEO Meta Tags */}
        <title>YouTube Thumbnail Downloader | Laden Sie Thumbnails kostenlos herunter</title>
        <meta
          name="description"
          content="Laden Sie hochauflösende Thumbnails von YouTube-Videos kostenlos herunter. Einfacher, schneller und effizienter YouTube Thumbnail Downloader."
        />
        <meta
          name="keywords"
          content="YouTube Thumbnail herunterladen, YouTube Miniaturbilder speichern, YouTube Thumbnail kostenlos, Miniaturbilder herunterladen kostenlos"
        />
        <meta name="author" content="YoutubeThumbnailDownload.de" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="YouTube Thumbnail Downloader" />
        <meta
          property="og:description"
          content="Laden Sie hochauflösende Thumbnails von YouTube-Videos kostenlos herunter."
        />
        <meta property="og:image" content="/assets/thumbnail-preview.jpg" />
        <meta property="og:url" content="https://YoutubeThumbnailDownload.de" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Youtube Thumbnail Downloader",
              "url": "https://YoutubeThumbnailDownload.de",
              "description":
                "Laden Sie kostenlos Thumbnails von YouTube-Videos in hoher Qualität herunter.",
              "inLanguage": "de",
            }),
          }}
        />
      </Head>

      {/* Form Section */}
      <div className="w-full max-w-lg text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        Youtube Thumbnail Download
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
        Mit dieser Anwendung kannst du Thumbnails in höchster Qualität herunterladen. Füge einfach die URL des Videos in das untenstehende Eingabefeld ein und klicke auf „Thumbnail herunterladen“. Schneller, einfacher und kostenlos!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg mb-8 flex flex-col space-y-4 items-center justify-center">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="YouTube-Video-URL eingeben"
            className="border-2 border-red-500 rounded-full py-3 px-6 text-gray-700 text-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md"
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-3 px-10 rounded-full shadow-lg hover:bg-red-700 transition"
          >
            Thumbnail Download
          </button>
        </form>

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}
      </div>

      {/* Thumbnails Section */}
      {thumbnails && (
        <div className="w-full max-w-4xl space-y-6">
          {["maxres", "high", "medium", "default"].map((quality, index) => {
            if (!thumbnails[quality]) return null;

            return (
              <div
                key={quality}
                className={`bg-white shadow-md rounded-lg p-4 flex flex-col items-center ${
                  index === 0 ? "space-y-6" : "space-y-4"
                }`}
              >
                <h3 className="text-lg font-bold text-gray-800 capitalize">
                  {quality === "maxres"
                    ? "Maximale Qualität"
                    : quality === "high"
                    ? "Hohe Qualität"
                    : quality === "medium"
                    ? "Mittlere Qualität"
                    : "Standardqualität"}
                </h3>
                <img
                  src={thumbnails[quality]}
                  alt={`${quality} resolution`}
                  className={`rounded-lg shadow-lg ${
                    index === 0 ? "w-full max-w-2xl" : "w-full max-w-md"
                  }`}
                />
                <button
                  onClick={() => handleDownload(thumbnails[quality], quality)}
                  className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition"
                >
                  Herunterladen
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
