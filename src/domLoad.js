import "./style.css";
//get static image srcs
import humidityIconSrc from "../icons/humidity.svg";
import sunriseIconSrc from "../icons/sunrise.svg";

function domLoad() {
  const content = document.getElementById("content");

  //create img to hold svg
  const weatherIcon = document.createElement("img");
  Object.assign(weatherIcon, {
    id: "weatherIcon",
    className: "icon",
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
  const toggleTempScalesTempMeasurement = document.createElement("span");
  const toggleTempScalesTempUnit = document.createElement("span");
  const toggleTempScalesTempValue = document.createElement("span");
  const toggleTempScales = document.createElement("label");
  const toggleTempScalesInput = document.createElement("input");
  const toggleTempScalesSpan = document.createElement("span");

  toggleTempScalesSpan.setAttribute("class", "slider");
  toggleTempScalesTempMeasurement.setAttribute("class", "measurementSpan");
  toggleTempScalesTempValue.setAttribute("id", "tempScalesTempValue");
  Object.assign(weatherOutput, {
    id: "output",
    style: "visibility: hidden;",
  });
  Object.assign(toggleTempScales, {
    id: "switch",
    className: "switch",
  });
  Object.assign(toggleTempScalesTempUnit, {
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

  locationName.setAttribute("id", "locationName");
  iconDesc.setAttribute("id", "iconDesc");
  scaleDiv.setAttribute("id", "scaleDiv");

  Object.assign(weatherData, {
    id: "weatherDataContainer",
    className: "weatherDataContainer",
    style: "visibility: hidden;",
  });

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

  //create span to hold values and units
  const windMeasurement = document.createElement("span");
  const humidityMeasurement = document.createElement("span");
  const sunriseMeasurement = document.createElement("span");

  //create spans for humidy and sunrise
  const humidityLabel = document.createElement("label");
  const sunriseLabel = document.createElement("label");

  const humidityValue = document.createElement("span");
  const sunriseValue = document.createElement("span");
  const windValue = document.createElement("span");
  const windUnit = document.createElement("span");
  const windIcon = document.createElement("img");
  const humidityIcon = document.createElement("img");
  const sunriseIcon = document.createElement("img");

  //set attributes
  windMeasurement.setAttribute("class", "measurementSpan");
  humidityMeasurement.setAttribute("class", "measurementSpan");
  sunriseMeasurement.setAttribute("class", "measurementSpan");

  humidityLabel.setAttribute("id", "humidityLabel");
  humidityValue.setAttribute("id", "humidityValue");
  sunriseLabel.setAttribute("id", "sunriseLabel");
  sunriseValue.setAttribute("id", "sunriseValue");
  windValue.setAttribute("id", "windValue");
  windUnit.setAttribute("id", "windUnit");

  Object.assign(humidityMeasurement, {
    id: "sunriseMeasurementSpan",
    className: "measurementSpan",
  });

  Object.assign(sunriseMeasurement, {
    id: "humidityMeasurementSpan",
    className: "measurementSpan",
  });

  Object.assign(humidityIcon, {
    id: "humidityIcon",
    className: "icon",
    src: humidityIconSrc,
  });
  Object.assign(sunriseIcon, {
    id: "sunriseIcon",
    className: "icon",
    src: sunriseIconSrc,
  });
  Object.assign(windIcon, {
    id: "windIcon",
    className: "icon",
  });

  toggleTempScales.append(toggleTempScalesInput, toggleTempScalesSpan);
  scaleDiv.append(toggleTempScales);

  toggleTempScalesTempMeasurement.append(
    toggleTempScalesTempValue,
    toggleTempScalesTempUnit,
  );
  windMeasurement.append(windValue, windUnit, windIcon);
  humidityMeasurement.append(humidityValue, humidityIcon);
  sunriseMeasurement.append(sunriseValue, sunriseIcon);

  //append elements to cards
  weatherDataTemp.append(
    toggleTempScalesTempMeasurement,
    weatherIcon,
    scaleDiv,
  );
  weatherDataHumidity.append(humidityLabel, humidityMeasurement);
  weatherDataSunrise.append(sunriseLabel, sunriseMeasurement);
  weatherDataWind.append(windMeasurement, windIcon);

  //append cards to card container
  weatherData.append(
    weatherDataTemp,
    weatherDataHumidity,
    weatherDataWind,
    weatherDataSunrise,
  );

  search.append(searchInput, searchButton);
  form.appendChild(search);
  content.append(form, locationName, weatherData, weatherOutput);
}
export { domLoad };
