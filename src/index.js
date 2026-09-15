const btn = document.querySelector("button");
const search = document.getElementById("cats");

async function getWeather(location) {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      encodeURIComponent(location) +
      "?unitGroup=us&key=DM97HHAYYJMKM9SQ5X2U985K4&contentType=json",
  );

  const weatherData = await response.json();
  console.log(weatherData);
}

btn.addEventListener("click", () => {
  getWeather(search.value);
});
