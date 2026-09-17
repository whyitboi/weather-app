export function displayWeatherData(object, element) {
  const weatherIcon = document.getElementById("weatherIcon");
  element.textContent = object.weatherOutputText;
  //use dynamic import to return a promise and set src of the img
  //to the default value of the promise after it is resolved
  import(`../icons/${object.icon}.svg`).then((iconModule) => {
    //${object.icon}
    weatherIcon.src = iconModule.default;
  });
}
