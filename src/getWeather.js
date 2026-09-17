// to change the completed status of the todo
async function getWeather(location, scale) {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        encodeURIComponent(location) +
        "?unitGroup=" +
        encodeURIComponent(scale) +
        "&key=DM97HHAYYJMKM9SQ5X2U985K4&contentType=json",
    );

    const weatherData = await response.json();
    const { currentConditions, description } = weatherData;
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
function processData(object, metric) {
  let day = "";
  if (object.datetime > object.sunrise) {
    day = "tomorrow";
  } else day = "today";
  const weatherOutputText =
    "The time is " +
    object.datetime.slice(0, 5) +
    ", the temperature is " +
    object.temp +
    metric +
    " with humidity levels at " +
    object.humidity +
    " and sunrise expected at " +
    object.sunrise.slice(0, 5) +
    " " +
    day +
    ". Overall, " +
    object.description +
    " " +
    object.icon;
  return weatherOutputText;
}

export { getWeather, processData };
