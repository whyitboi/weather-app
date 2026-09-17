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
      console.log(error.name);
      alert("Please enter a valid location");
    } else if (location === "undefined") {
      console.log("error.name");
    } else alert(error);

    return;
  }
}
function processData(object, metric) {
  let day = "";
  if (object.datetime > object.sunrise) {
    day = "tomorrow";
  } else day = "today";
  const weatherOutputText =
    "The time is " +
    object.datetime +
    ", the temperature is " +
    object.temp +
    metric +
    " with humidity levels at " +
    object.humidity +
    " and sunrise expected at " +
    object.sunrise +
    " " +
    day +
    ". Overall, " +
    object.description;
  return weatherOutputText;
}

export { getWeather, processData };
