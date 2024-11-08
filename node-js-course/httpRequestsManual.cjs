// In this note that depending on whether you are making a request to a secure server "https"/ a normal (local server) "http" there are two different Node packages for each that is: htttps and htttp respectively

const https = require("https");

const url = `https://api.weatherstack.com/current?access_key=53d5c6d178d53ebcb753860c72a59132&query=60,80`;

// the function is assigned to a variable so as to access a method from it required to  actually start the program
const request = https.request(url, (response) => {
  // Http data could be streamed in multiple parts meaning it doesnt have a complete .body object to access
  let data = "";

  // This is used to register a handler
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  // this runs when chunk is finished and baiscally ends the program
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

// Error Handling
request.on("error", (error) => {
  console.log(`Error Happened: ${error}`);
});

request.end();

// Mehn this method is
