const path = require("path");

const express = require("express");
const hbs = require("hbs");

const forecast = require("./utils/forecast.cjs");
const geoCode = require("./utils/geoCode.cjs");

const app = express();

//  Express config paths
const publicDir = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");
const partialsPath = path.join(__dirname, "../field");
hbs.registerPartials(partialsPath);

//  Once you load up this public directory you can then get access to all its documents there not just one when you use it in express.static

//  Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath); // the first param is the type of express setting you want and the second is the package that should handle that

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
  res.render("about", { title: "About", name: "Justice" });
});
app.get("/help", (req, res) => {
  res.render("help", {
    message: "Do you need help!",
    title: "Help",
    name: "Justice",
  });
});

app.get("/weather", (req, res) => {
  const address = req.query.address;

  if (!address) {
    return res.send({
      error: "You didn't provide the address of the requested location",
    });
  }

  geoCode(address, (error, { lat, long, location } = {}) => {
    if (error) {
      return res.send({ error: `There is an error: ${error}` });
    }

    // if (!data || !data.lat || !data.long || !data.location) {
    //   return res.send({
    //     error:
    //       "Unable to find location. Please check the address and try again.",
    //   }); // Return here to stop further execution
    // }

    forecast(lat, long, (error, foreCast) => {
      if (error) {
        return res.send({ error: `Error in forecast: ${error}` }); // Return here to send the forecast error
      }

      return res.send({ Location: location, foreCast: foreCast }); // Finally, send the result if everything is okay
    });
  });
});

// app.get("/products", (req, res) => {
//   console.log(req.query);

//   res.send({ products: [] });
// });

app.get("/help/*", (req, res) => {
  res.render("notfound", {
    error: "Help article not found!",
    title: "404!",
    name: "Justice",
  });
});

app.get("*", (req, res) => {
  res.render("notfound", {
    error: "Page not found!",
    title: "404!",
    name: "Justice",
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
