/* Making HTTP Requests */

const request = require("postman-request");
const geoCode = require("./utils/geoCode.cjs");
const forecast = require("./utils/forecast.cjs");

// const url = "https://api.weatherstack.com/current?access_key=53d5c6d178d53ebcb753860c72a59132&query=6.8570,7.3834";
// // json - sets body to JSON representation of value and adds Content-type: application/json header. Additionally, parses the response body as JSON.
// request(url, { json: true }, (error, response) => {
//   // const data = JSON.parse(response.body);

//   if (error) {
//     console.log("No network detected");
//   } else if (response.body.success === false) {
//     console.log("Unable to find location!");
//   } else {
//     const data = response.body.current;

//     console.log(
//       data.weather_descriptions[0] +
//         ` Its ${data.temperature} degrees, It feel's like ${data.feelslike} degrees out.`
//     );
//   }
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(75.7088, 4.1545, (error, data) => {
  console.log("Data", data);
  console.log("Error", error);
});

// geoCode("odim nsukka", (error, data) => {
//   console.log(error);
//   console.log(data);
// });
