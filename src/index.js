import { domLoad } from "./domLoad.js";

domLoad();

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
    console.log(weatherData);
    const { conditions, datetime, humidity, icon, temp, sunrise } =
      currentConditions;
    return { conditions, datetime, humidity, icon, temp, sunrise, description };
  } catch (error) {
    //can use (error instancesof SyntaxError)
    if (error.name === "SyntaxError") {
      alert("Please enter a valid location");
    } else alert(error);
  }
}
function processData(object) {
  let day = "";
  if (object.datetime > object.sunrise) {
    day = "tomorrow";
  } else day = "today";
  const weatherOutputText =
    "The time is " +
    object.datetime +
    " with humidity levels at " +
    object.humidity +
    " and sunrise expected at " +
    object.sunrise +
    " " +
    day +
    ". Overall, " +
    object.description;
  weatherOutput.textContent = weatherOutputText;
}

btn.addEventListener("click", () => {
  getWeather(search.value).then((response) => {
    processData(response);
  });
  //weatherOutput.appendChild(weatherInfo.description);
});
