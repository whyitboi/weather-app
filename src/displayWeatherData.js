export function displayWeatherData(object, tempSpan, weatherOutputDiv) {
  const weatherIcon = document.getElementById("weatherIcon");
  const metric = document.getElementById("tempScale").value;
  let metricIcon;
  if (metric === "us") {
    metricIcon = "\u00B0F";
  } else metricIcon = "\u00B0C";
  tempSpan.textContent = object.temp + metricIcon;
  weatherOutputDiv.textContent = object.weatherOutputText;
  //use dynamic import to return a promise and set src of the img
  //to the default value of the promise after it is resolved
  import(`../icons/${object.icon}.svg`).then((iconModule) => {
    //${object.icon}
    weatherIcon.src = iconModule.default;
  });
}
