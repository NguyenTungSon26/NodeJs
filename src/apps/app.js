const express = require("express");
const config = require("config");
const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use("/static", express.static(config.app.static_url));
app.use(require("../routers/web"));

module.exports = app;
