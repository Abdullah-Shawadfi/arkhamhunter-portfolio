import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Proxy for Medium RSS to avoid CORS issues
  app.get("/api/medium-feed", async (_req, res) => {
    try {
      const response = await fetch("https://medium.com/feed/@abdullmst");
      const data = await response.text();
      res.header("Content-Type", "application/xml");
      res.send(data);
    } catch (error) {
      console.error("Error fetching Medium feed:", error);
      res.status(500).json({ error: "Failed to fetch Medium feed" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
