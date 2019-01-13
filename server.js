// NextJS Server
const express = require("express");
const next = require("next");

const { resolve } = require("path");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

let PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    // register service worker
    server.get("/sw.js", (req, res) => {
      app.serveStatic(req, res, resolve("./static/service-worker.js"));
    });

    // pretty url
    server.get("/product/:id", (req, res) => {
      const actualPage = "/product";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/category/:name", (req, res) => {
      const actualPage = "/category";
      const queryParams = { name: req.params.name };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
