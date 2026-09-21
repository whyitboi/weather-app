import "./style.css";

function domLoad() {
  const content = document.getElementById("content");

  //create img to hold svg
  const weatherIcon = document.createElement("img");
  Object.assign(weatherIcon, {
    id: "weatherIcon",
    className: "weatherIcon",
  });

  //create the form
  const form = document.createElement("form");
  Object.assign(form, {
    method: "get",
    noValidate: true,
  });

  //create search bar and button
  //create search
  const search = document.createElement("search");

  //input
  const searchInput = document.createElement("input");
  Object.assign(searchInput, {
    id: "searchBar",
    type: "search",
    placeholder: "Enter Location",
    required: true,
  });
  //create button
  const searchButton = document.createElement("button");
  Object.assign(searchButton, {
    type: "submit",
    textContent: "Get Forecast",
  });
  //create display div
  const weatherOutput = document.createElement("div");
  weatherOutput.setAttribute("id", "output");

  //create temperature scale toggle
  const toggleTempScalesTemp = document.createElement("span");
  const toggleTempScales = document.createElement("label");
  const toggleTempScalesInput = document.createElement("input");
  const toggleTempScalesSpan = document.createElement("span");

  toggleTempScalesSpan.setAttribute("class", "slider");

  Object.assign(toggleTempScales, {
    id: "switch",
    className: "switch",
  });
  Object.assign(toggleTempScalesTemp, {
    id: "temperature",
    textContent: "\u00B0F",
  });
  Object.assign(toggleTempScalesInput, {
    id: "tempScale",
    type: "checkbox",
    value: "us",
  });

  //Create container divs for locationName, iconDescriotion
  //and weatherData [humidity, sunrise]
  const locationName = document.createElement("div");
  const iconDesc = document.createElement("div");
  const scaleDiv = document.createElement("div");
  const weatherData = document.createElement("div");

  //create the data cards
  const weatherDataTemp = document.createElement("div");
  const weatherDataHumidity = document.createElement("div");
  const weatherDataWind = document.createElement("div");
  const weatherDataSunrise = document.createElement("div");

  weatherData.setAttribute("class", "weatherDataContainer");

  Object.assign(weatherDataTemp, {
    id: "tempCard",
    className: "weatherDataCard",
  });
  Object.assign(weatherDataHumidity, {
    id: "humidityCard",
    className: "weatherDataCard",
  });
  Object.assign(weatherDataWind, {
    id: "windCard",
    className: "weatherDataCard",
  });
  Object.assign(weatherDataSunrise, {
    id: "sunriseCard",
    className: "weatherDataCard",
  });

  //create labels and paragraphs for humidy and sunrise

  const humidityLabel = document.createElement("label");
  const sunriseLabel = document.createElement("label");
  const windLabel = document.createElement("label");
  const humidityPara = document.createElement("p");
  const sunrisePara = document.createElement("p");
  const windPara = document.createElement("p");

  //set attributes
  locationName.setAttribute("id", "locationName");
  iconDesc.setAttribute("id", "iconDesc");

  scaleDiv.setAttribute("id", "scaleDiv");

  //append elements to cards
  weatherDataTemp.append(toggleTempScalesTemp, weatherIcon);
  weatherDataHumidity.append(humidityLabel, humidityPara);
  weatherDataSunrise.append(sunriseLabel, sunrisePara);
  weatherDataWind.append(windLabel, windPara);

  //append cards to card container
  weatherData.append(
    weatherDataTemp,
    weatherDataHumidity,
    weatherDataWind,
    weatherDataSunrise,
  );

  toggleTempScales.append(toggleTempScalesInput, toggleTempScalesSpan);
  scaleDiv.append(toggleTempScales);

  search.append(searchInput, searchButton);
  form.appendChild(search);
  content.append(form, locationName, weatherData, scaleDiv, weatherOutput);
}
export { domLoad };
