const request = require("postman-request");

const forecast = (lat, long, callback) => {
  const url = `https://api.weatherstack.com/current?access_key=53d5c6d178d53ebcb753860c72a59132&query=${lat},${long}`;

  request(url, { json: true }, (error, response) => {
    if (error) {
      callback("No network detected!");
    } else if (response.body.success === false) {
      callback("Unable to find a location!", undefined);
    } else {
      const data = response.body.current;

      callback(undefined, {
        description: data,
        temperature: data.temperature,
        feelsLike: data.feelslike,
      });
    }
  });
};

module.exports = forecast;

module.exports = forecast;
