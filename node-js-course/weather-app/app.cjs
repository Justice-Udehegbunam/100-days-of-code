const geoCode = require("./utils/geoCode.cjs");
const forecast = require("./utils/forecast.cjs");

const process = require("process");

const input = process.argv[2];

// Callback chaining
// This is where the real impact of modularization and code splitting is really felt whereby you can really abstract core functionalities but still link the processes together using ES6 callback chaining

geoCode(input, (error, data) => {
  if (!input) {
    return console.log("Did you provide an input!!");
  }
  if (error) {
    return console.log(`Error in geocode: ${error}`);
  }

  forecast(data.lat, data.long, (error, foreCast) => {
    if (error) {
      return console.log(`Error in forecast: ${error}`);
    }

    console.log(`Location: ${data.location}`);
    console.log("foreCast", foreCast);
  });
});
