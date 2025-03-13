const jsonServer = require("json-server");
const express = require("express");
const cors = require("cors");
const server = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 5000;

server.use(cors()); // 允許跨域請求
server.use(middlewares); // 使用 json-server 的預設中間件
server.use("/api", router); // 設定 /api 路徑作為 JSON Server API

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
