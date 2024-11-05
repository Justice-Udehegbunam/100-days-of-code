const geoCode = require("./utils/geoCode.cjs");
const forecast = require("./utils/forecast.cjs");

geoCode("odim nsukka", (error, data) => {
  error !== undefined && console.log(error);
  data !== undefined && console.log(data);
});

forecast(75.7088, 4.1545, (error, data) => {
  data !== undefined && console.log("Data", data);
  error !== undefined && console.log("Error", error);
});
