import "./style.css";

function domLoad() {
  const content = document.getElementById("content");

  //create search bar label and button
  //create search
  const search = document.createElement("search");
  //create label
  const searchLabel = document.createElement("label");
  Object.assign(searchLabel, {
    for: "cats",
    textContent: "Enter your location",
  });
  //input
  const searchInput = document.createElement("input");
  Object.assign(searchInput, {
    id: "cats",
    type: "search",
  });
  //create button
  const searchButton = document.createElement("button");
  Object.assign(searchButton, {
    type: "button",
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
  toggleTempScales.setAttribute("class", "switch");
  toggleTempScales.setAttribute("id", "switch");
  toggleTempScalesSpan.setAttribute("class", "slider");
  Object.assign(toggleTempScalesLabel, {
    id: "switch",
    textContent: "\u00B0F",
  });
  Object.assign(toggleTempScalesInput, {
    id: "tempScale",
    type: "checkbox",
    value: "us",
  });

  toggleTempScales.append(toggleTempScalesInput, toggleTempScalesSpan);

  search.append(searchLabel, searchInput, searchButton);
  content.appendChild(search);
  content.append(toggleTempScalesLabel, toggleTempScales);
  content.appendChild(weatherOutput);
}
export { domLoad };
