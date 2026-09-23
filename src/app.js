import { getWeather } from "./getWeather.js";
import { processData } from "./processWeatherData.js";
import { displayWeatherData } from "./displayWeatherData.js";
import { checkMetric } from "./checkMetric.js";

function app() {
  const content = document.getElementById("content");
  const form = document.querySelector("form");
  const search = document.getElementById("searchBar");
  const weatherOutput = document.getElementById("output");

  const metric = document.getElementById("tempScale");
  const metricDisplay = document.getElementById("temperature");

  const loading = document.getElementById("loading");

  metric.addEventListener("change", () => {
    checkMetric(metric, metricDisplay);
    // if (metric.value === "us") {
    //   metric.value = "metric";
    // } else if (metric.value === "metric") {
    //   metric.value = "us";
    // }

    if (search.value === "") {
      return;
    } else {
      // content.classList.add("loading");
      // loading.style.display = "flex";
      getWeather(search.value, metric.value)
        .then((response) => {
          if (response === undefined) return;
          const processedData = processData(response);
          displayWeatherData(processedData, metricDisplay, weatherOutput);
        })
        .finally(() => {
          loading.style.display = "none";
          content.classList.remove("loading");
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
    content.classList.add("loading");
    loading.style.display = "flex";
    getWeather(search.value, metric.value)
      .then((response) => {
        if (response === undefined) return;
        const processedData = processData(response);
        displayWeatherData(processedData, metricDisplay, weatherOutput);
      })
      .finally(() => {
        setTimeout(() => {
          loading.style.display = "none";
          content.classList.remove("loading");
        }, 1000);
      });
  });
}
export { app };
