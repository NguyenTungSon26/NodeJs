const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});

const server = app.listen((port = 3000), (req, res) => {
  console.log(`Server running on port ${port}`);
});
