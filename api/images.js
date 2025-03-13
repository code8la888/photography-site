import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // 讀取 db.json 文件
  const dbPath = path.resolve(process.cwd(), "db.json");
  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  // 根據路由處理請求
  if (req.method === "GET") {
    res.status(200).json(db.images);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
