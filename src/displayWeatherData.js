export function displayWeatherData(object, tempSpan, weatherOutputDiv) {
  const content = document.getElementById("content");

  const weatherIcon = document.getElementById("weatherIcon");
  const metric = document.getElementById("tempScale").value;

  const humidityLabel = document.getElementById("humidityLabel");
  const humidityPara = document.getElementById("humidityPara");

  const windLabel = document.getElementById("windLabel");
  const windPara = document.getElementById("windPara");

  const sunriseLabel = document.getElementById("sunriseLabel");
  const sunrisePara = document.getElementById("sunrisePara");

  const locationName = document.getElementById("locationName");

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

  content.className = object.icon;
  locationName.textContent = object.location;

  humidityLabel.textContent = "Humidity";
  humidityPara.textContent = object.humid;

  sunriseLabel.textContent = "Sunrise";
  sunrisePara.textContent = object.sunrise;

  windLabel.textContent = "Wind";
  windPara.textContent = object.wind;
}
