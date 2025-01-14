// pages/api/download.js
export default async function handler(req, res) {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { url } = req.query;
  
    if (!url) {
      return res.status(400).json({ error: "Missing URL parameter" });
    }
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Failed to fetch the image.");
      }
  
      const buffer = await response.arrayBuffer();
      const headers = Object.fromEntries(response.headers.entries());
  
      res.setHeader("Content-Type", headers["content-type"] || "application/octet-stream");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${url.split("/").pop()}`
      );
  
      return res.status(200).send(Buffer.from(buffer));
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to download the file." });
    }
  }
  