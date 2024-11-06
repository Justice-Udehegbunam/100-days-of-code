const request = require("postman-request");

const geoCode = (address, callback) => {
  const url =
    "https://api.opencagedata.com/geocode/v1/json?q=" +
    encodeURIComponent(address) +
    "&key=bf04b86b881842e0898fd7b43bc4c529&limit=1";

  request(url, { json: true }, (error = undefined, response) => {
    if (!response) {
      callback("Unable to connect to location services!");
    } else {
      const body = response.body;
      const data = body.results[0];

      if (body.status.code === 400 || data === undefined) {
        callback("Please check your location input and try again!");
      } else {
        const { geometry, formatted } = data;
        callback(undefined, {
          lat: geometry.lat,
          long: geometry.lng,
          location: formatted,
        });
      }
    }
  });
};

module.exports = geoCode;
