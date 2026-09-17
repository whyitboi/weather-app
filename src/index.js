import { domLoad } from "./domLoad.js";
import { getWeather, processData } from "./getWeather.js";

domLoad();

const btn = document.querySelector("button");
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
      weatherOutput.textContent = processData(
        response,
        metricDisplay.textContent,
      );
    });
    metricDisplay.textContent = "\u00B0C";
  } else {
    metric.value = "us";
    metricDisplay.textContent = "\u00B0F";
    getWeather(search.value, metric.value).then((response) => {
      if (response === undefined) return;
      weatherOutput.textContent = processData(
        response,
        metricDisplay.textContent,
      );
    });
  }
});

btn.addEventListener("submit", (button) => {
  console.log(search.validity);
  if (!search.validity) {
    search.setCustomValidity("This needs a value"); //.log("location cannot be empty")
  } else search.setCustomValidity("");
  search.reportValidity();
  getWeather(search.value, metric.value).then((response) => {
    if (response === undefined) return;
    weatherOutput.textContent = processData(
      response,
      metricDisplay.textContent,
    );
  });
  //weatherOutput.textContent = );
});

export { metric };
