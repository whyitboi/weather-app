const btn = document.querySelector("button");
const search = document.getElementById("cats");
const weatherOutput = document.getElementById("output");

async function getWeather(location) {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        encodeURIComponent(location) +
        "?unitGroup=us&key=DM97HHAYYJMKM9SQ5X2U985K4&contentType=json",
    );

    const weatherData = await response.json();
    const { currentConditions, description } = weatherData;
    //remember to destruct curentConditions as well to get only what you want
    return { currentConditions, description };
    //console.log(weatherData.description);
  } catch (error) {
    //can use (error instancesof SyntaxError)
    if (error.name === "SyntaxError") {
      alert("Please enter a valid location");
    } else alert(error);
  }
}
function displayWeather(object) {
  //console.log(object);
  weatherOutput.textContent = object.description;
  // /weatherOutput.appendChild(object);
}

btn.addEventListener("click", () => {
  getWeather(search.value).then((response) => {
    displayWeather(response);
  });
  //weatherOutput.appendChild(weatherInfo.description);
});
