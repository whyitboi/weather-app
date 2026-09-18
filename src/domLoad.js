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

  //create search bar label and button
  //create search
  const search = document.createElement("search");
  //create label
  const searchLabel = document.createElement("label");
  Object.assign(searchLabel, {
    for: "searchBar",
    textContent: "Enter your location",
  });
  //input
  const searchInput = document.createElement("input");
  Object.assign(searchInput, {
    id: "searchBar",
    type: "search",
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
  const toggleTempScalesLabel = document.createElement("span");
  const toggleTempScales = document.createElement("label");
  const toggleTempScalesInput = document.createElement("input");
  const toggleTempScalesSpan = document.createElement("span");

  toggleTempScalesSpan.setAttribute("class", "slider");

  Object.assign(toggleTempScales, {
    id: "switch",
    className: "switch",
  });

  Object.assign(toggleTempScales, {
    id: "switch",
    classname: "switch",
  });
  Object.assign(toggleTempScalesLabel, {
    id: "switch",
    textContent: "\u00B0F",
  });
  Object.assign(toggleTempScalesInput, {
    id: "tempScale",
    type: "checkbox",
    value: "us",
  });

  //Create container divs for locationName, iconDescriotion
  //and [humidity, sunrise]
  const locationName = document.createElement("div");
  const iconDesc = document.createElement("div");
  const humiditySunrise = document.createElement("div");
  const scaleDiv = document.createElement("div");

  //create labels and paragraphs for humidy and sunrise
  const humidityLabel = document.createElement("label");
  const sunriseLabel = document.createElement("label");
  const humidityPara = document.createElement("p");
  const sunrisePara = document.createElement("p");

  //set attributes
  locationName.setAttribute("id", "locationName");
  iconDesc.setAttribute("id", "iconDesc");
  humiditySunrise.setAttribute("id", "humiditySunrise");
  scaleDiv.setAttribute("id", "scaleDiv");

  humiditySunrise.append(
    humidityLabel,
    sunriseLabel,
    humidityPara,
    sunrisePara,
  );

  toggleTempScales.append(toggleTempScalesInput, toggleTempScalesSpan);
  scaleDiv.append(toggleTempScales);

  search.append(searchLabel, searchInput, searchButton);
  form.appendChild(search);
  content.append(
    form,
    locationName,
    toggleTempScalesLabel,
    iconDesc,
    humiditySunrise,
    scaleDiv,
    weatherIcon,
    weatherOutput,
  );
}
export { domLoad };
