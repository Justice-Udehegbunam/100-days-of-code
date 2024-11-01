/* Making HTTP Requests */

const request = require("postman-request");

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

// Geocoding api

const geoAPI =
  "https://api.opencagedata.com/geocode/v1/json?q=ikki&key=bf04b86b881842e0898fd7b43bc4c529&limit=1";
request(geoAPI, { json: true }, (error, response) => {
  if (error) {
    console.log("Poor internet connectivity!");
  } else if (response.body.status.code === 400) {
    console.log("Please check your location input again!");
  } else {
    const data = response.body.results[0];

    console.log(
      "The geometry is " +
        data.geometry.lat +
        " by " +
        data.geometry.lng +
        " for " +
        data.formatted
    );
  }
});
