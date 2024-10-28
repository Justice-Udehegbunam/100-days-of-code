/* Making HTTP Requests */

const request = require("postman-request");

const url =
  "https://api.weatherstack.com/current?access_key=<my-key>&query=6.8570,7.3834";

request(url, {}, (error, response) => {
  const data = JSON.parse(response.body);

  console.log(data.current);
});
