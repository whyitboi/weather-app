const content = document.getElementById("content");

//create search bar label and button
//create search
const search = document.createElement("search");
//create label
const searchLabel = document.createElement("label");
searchLabel.setAttribute("for", "cats");
searchLabel.textContent = "Enter your location";
//input
const searchInput = document.createElement("input");
searchInput.setAttribute("type", "search");
searchInput.setAttribute("id", "cats");
//create button
const getWeatherButton = document.createElement("button");
getWeatherButton.setAttribute("type", "button");
getWeatherButton.textContent = "Get Weather Forecast";
//create display div
const weatherOutput = document.createElement("div");
weatherOutput.setAttribute("id", "output");

//create temperature scale toggle
const toggleTempScales = document.createElement("label");
const toggleTempScalesInput = document.createElement("input");
const toggleTempScalesSpan = document.createElement("span");
toggleTempScales.setAttribute("class", "switch");
toggleTempScalesInput.setAttribute("type", "checkbox");
toggleTempScalesSpan.setAttribute("class", "slider round");

toggleTempScales.append(toggleTempScalesInput, toggleTempScalesSpan);

search.append(searchLabel);
content.appendChild(search);
content.appendChild(weatherOutput);

export { domLoad };
