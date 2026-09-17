// to change the completed status of the todo
export async function getWeather(location, scale) {
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
