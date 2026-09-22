export function displayWeatherData(object, tempUnitSpan, weatherOutputDiv) {
  const output = document.getElementById("output");
  const weatherData = document.getElementById("weatherDataContainer");
  const weatherIcon = document.getElementById("weatherIcon");
  const windIcon = document.getElementById("windIcon");
  const metric = document.getElementById("tempScale").value;
  const tempValueSpan = document.getElementById("tempScalesTempValue");

  const humidityLabel = document.getElementById("humidityLabel");
  const humidityValue = document.getElementById("humidityValue");

  const windValue = document.getElementById("windValue");
  const windUnit = document.getElementById("windUnit");

  const sunriseLabel = document.getElementById("sunriseLabel");
  const sunriseValue = document.getElementById("sunriseValue");

  const locationName = document.getElementById("locationName");

  let metricTemp;
  let metricWind;
  if (metric === "us") {
    metricTemp = "\u00B0F";
    metricWind = "mph";
  } else {
    metricTemp = "\u00B0C";
    metricWind = "km/h";
  }
  tempUnitSpan.textContent = metricTemp;
  tempValueSpan.textContent = object.temp;
  weatherOutputDiv.textContent = object.weatherOutputText;
  //use dynamic import to return a promise and set src of the img
  //to the default value of the promise after it is resolved
  import(`../icons/${object.icon}.svg`).then((iconModule) => {
    //${object.icon}
    weatherIcon.src = iconModule.default;
  });

  //dynamic import for wind direction
  import(`../icons/wind-direction-${object.windDir}.svg`).then((iconModule) => {
    windIcon.src = iconModule.default;
  });

  document.body.className = object.icon;
  locationName.textContent = object.location;

  humidityLabel.textContent = "Humidity";
  humidityValue.textContent = object.humid;

  sunriseLabel.textContent = "Sunrise";
  sunriseValue.textContent = object.sunrise;

  windUnit.textContent = metricWind;
  windValue.textContent = object.wind;
  output.style.visibility = "visible";
  weatherData.style.visibility = "visible";
}
