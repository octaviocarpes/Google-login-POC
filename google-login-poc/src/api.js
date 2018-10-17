const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.port || 8090, () => {
  console.log("API listening on port 8090!");
});
