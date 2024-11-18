const path = require("path");

const express = require("express");
const hbs = require("hbs");

const app = express();

const viewsFolder = path.join(__dirname, "../views");
const partialsPath = path.join(__dirname, "../field");
hbs.registerPartials(partialsPath);

app.set("view engine", "hbs");
app.set("views", viewsFolder);

console.log(viewsFolder);

app.get("", (req, res) => {
  res.render("index", {
    title: "Test page",
    name: "Please work",
  });
});

app.listen(4500, () => {
  console.log("Started successfully!!");
});
