const path = require("path"); // core node module

const express = require("express");

const app = express();
const publicDir = path.join(__dirname, "../public");
//  Once you load up this public directory you can then get access to all its documents there not just one when you use it in express.static

app.use(express.static(publicDir));

app.get("/weather", (req, res) => {
  res.send({ forecast: "1ts 15 degrees", location: "Kaduna" });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "../public"));
