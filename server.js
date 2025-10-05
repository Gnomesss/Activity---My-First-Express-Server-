const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello, this is my first Express server!");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page.");
});