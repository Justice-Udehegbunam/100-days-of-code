const request = require("postman-request");

const geoCode = (address, callback) => {
  const url =
    "https://api.opencagedata.com/geocode/v1/json?q=" +
    encodeURIComponent(address) +
    "&key=bf04b86b881842e0898fd7b43bc4c529&limit=1";

  request(url, { json: true }, (error, response) => {
    const data = response.body.results[0];

    if (error) {
      callback("Unable to connect to location services!");
    } else if (response.body.status.code === 400 || data == undefined) {
      callback("Please check your location input and try again!");
    } else {
      callback(undefined, {
        lat: data.geometry.lat,
        long: data.geometry.lng,
        location: data.formatted,
      });
    }
  });
};

module.exports = geoCode;
