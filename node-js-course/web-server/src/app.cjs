const path = require("path");

const express = require("express");
const hbs = require("hbs");

const app = express();

//  Express config paths
const publicDir = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
//  Once you load up this public directory you can then get access to all its documents there not just one when you use it in express.static

//  Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath); // the first param is the type of express setting you want and the second is the package that should handle that
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDir));

app.get("", (req, res) => {
  // this is used to render the views that you have in your "views" folder
  res.render("index", {
    title: "Weather",
    name: "Justice",
  });
  // this object is passed to the rendered file (which is an hbs file) and can be used like so "{{title}}"
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Weather", name: "Justice" });
});
app.get("/help", (req, res) => {
  res.render("help", {
    message: "Do you need help!",
    title: "Help",
    name: "Justice",
  });
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "1ts 15 degrees", location: "Kaduna" });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
