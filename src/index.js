import { domLoad } from "./domLoad.js";
import { getWeather } from "./getWeather.js";
import { processData } from "./processWeatherData.js";
import { displayWeatherData } from "./displayWeatherData.js";

domLoad();

const btn = document.querySelector("button");
const form = document.querySelector("form");
const search = document.getElementById("searchBar");
const weatherOutput = document.getElementById("output");

const metric = document.getElementById("tempScale");
const metricDisplay = document.getElementById("switch");

metric.addEventListener("change", () => {
  // console.log(metric.value);
  if (metricDisplay.textContent === "\u00B0F") {
    metric.value = "metric";
    getWeather(search.value, metric.value).then((response) => {
      if (response === undefined) return;
      displayWeatherData(
        processData(response, metricDisplay.textContent),
        weatherOutput,
      );
    });
    metricDisplay.textContent = "\u00B0C";
  } else {
    metric.value = "us";
    metricDisplay.textContent = "\u00B0F";
    getWeather(search.value, metric.value).then((response) => {
      if (response === undefined) return;
      displayWeatherData(
        processData(response, metricDisplay.textContent),
        weatherOutput,
      );
    });
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (search.validity.valueMissing) {
    search.setCustomValidity("Location cannot be empty");
    search.reportValidity();
    return;
  } else search.setCustomValidity("");

  getWeather(search.value, metric.value).then((response) => {
    if (response === undefined) return;
    displayWeatherData(
      processData(response, metricDisplay.textContent),
      weatherOutput,
    );
  });
  //weatherOutput.textContent = );
});

export { metric };
