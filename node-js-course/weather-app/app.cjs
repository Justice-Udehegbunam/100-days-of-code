/* Making HTTP Requests */

const request = require("postman-request");

const url =
  "https://api.weatherstack.com/current?access_key=&query=6.8570,7.3834";

// json - sets body to JSON representation of value and adds Content-type: application/json header. Additionally, parses the response body as JSON.
request(url, { json: true }, (error, response) => {
  // const data = JSON.parse(response.body);

  const data = response.body.current;

  // console.log(
  //   data.weather_descriptions[0] +
  //     ` Its ${data.temperature} degrees, It feel's like ${data.feelslike} degrees out.`
  // );
});

// Geocoding api

const geoAPI =
  "https://api.opencagedata.com/geocode/v1/json?q=Nsukka&key=&limit=1";

request(geoAPI, { json: true }, (error, response) => {
  const data = response.body.results[0];

  console.log(
    "The geometry is " +
      data.geometry.lat +
      " by " +
      data.geometry.lng +
      " for " +
      data.formatted
  );

  // console.log(data);
});
