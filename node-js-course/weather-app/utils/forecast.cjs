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
      const { temperature, feelslike } = data;

      callback(undefined, {
        description: data,
        temperature,
        feelslike,
      });
    }
  });
};

module.exports = forecast;

module.exports = forecast;
