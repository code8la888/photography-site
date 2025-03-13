import fs from "fs";
import path from "path";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const dbPath = path.resolve(process.cwd(), "db.json");
  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  if (req.method === "GET") {
    return res.status(200).json(db.images);
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
