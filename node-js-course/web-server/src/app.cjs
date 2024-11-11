const path = require("path"); // core node module

const express = require("express");

const app = express();
const publicDir = path.join(__dirname, "../public");
//  Once you load up this public directory you can then get access to all its documents there not just one when you use it in express.static

app.use(express.static(publicDir));

app.set("view engine", "hbs"); // the first param is the type of express setting you want and the second is the package that should handle that
app.set("views", path.join(__dirname, "../views"));

app.get("", (req, res) => {
  // this is used to render the views that you have in your "views" folder
  res.render("index", {
    title: "Weather",
    name: "Justice",
  });
  // this object is passed to the rendered file (which is an hbs file) and can be used like so "{{title}}"
});

app.get("/about", (req, res) => {
  res.render("about", {});
});
app.get("/help", (req, res) => {
  res.render("help", { message: "Do you need help!" });
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "1ts 15 degrees", location: "Kaduna" });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
