import express from "express";
import https from "https";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Request, Response } from "express";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const ___rootDir = path.dirname(__filename);

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(___rootDir, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(___rootDir, "cert", "cert.pem")),
  },
  app
);

// Define paths
const publicPath = path.join(___rootDir, "/public");
const srcPath = path.join(___rootDir, "/src");

// Serve static files
app.use(express.static(publicPath));
app.use(express.static(srcPath));


app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(___rootDir, "public", "index.html"));
});

sslServer.listen(4000, () => {
  console.log("SSL Server is running on https://localhost:4000");
});
