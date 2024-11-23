// Working with Fetch API

const formEl = document.querySelector("form");
const searchInput = document.querySelector("input");
const messageOne = document.querySelector("#message-one");
const messageTwo = document.querySelector("#message-two");
const displayContainer = document.querySelector(".container");
const icon = document.createElement("img");
const description = document.createElement("span");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = searchInput.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  icon.src = "";
  icon.alt = "";
  description.textContent = "";

  const URL = `http://localhost:5000/weather?address=${location}`;

  fetch(URL).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.classList.add("error-message"); // Add error styling
        return (messageOne.textContent = data.error);
      }

      const { Location, foreCast } = data;
      messageOne.classList.remove("error-message"); // Remove error styling if no error
      messageOne.textContent = Location;
      messageTwo.textContent = "Temperature: " + foreCast.temperature + "°C";

      icon.src = foreCast.description.weather_icons[0];
      icon.alt = foreCast.description.weather_descriptions[0];

      description.classList.add("span-style");
      description.textContent = foreCast.description.weather_descriptions[0];

      displayContainer.appendChild(icon);
      displayContainer.appendChild(description);
    });
  });
});
