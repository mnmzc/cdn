const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(15017, () => {
  console.log("Content Delivery Network online.");
});
