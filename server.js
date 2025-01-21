// server.js
const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const server = jsonServer.create();
const fs = require("fs");
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")));
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running");
});
