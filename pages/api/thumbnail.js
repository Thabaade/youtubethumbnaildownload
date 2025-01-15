import { extractVideoId } from "../../utils/youtube";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    // Extract the video ID
    const videoId = extractVideoId(url);

    if (!videoId) {
      return res.status(400).json({ error: "Invalid YouTube URL" });
    }

    // Generate URLs for all resolutions
    const resolutions = {
      default: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      medium: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      high: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
      maxres: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    };

    // Validate URLs
    const validatedResolutions = {};
    for (const [quality, imageUrl] of Object.entries(resolutions)) {
      try {
        const response = await fetch(imageUrl, { method: "HEAD" });
        if (response.ok) {
          validatedResolutions[quality] = imageUrl;
        }
      } catch (err) {
        console.error(`Validation failed for ${imageUrl}:`, err);
      }
    }

    return res.status(200).json({ resolutions: validatedResolutions });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
