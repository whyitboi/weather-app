export function processData(object) {
  let day = "";
  if (object.datetime > object.sunrise) {
    day = "tomorrow";
  } else day = "today";
  const weatherOutputText =
    "The time is " +
    object.datetime.slice(0, 5) +
    " humidity levels are at " +
    object.humidity +
    " and sunrise expected at " +
    object.sunrise.slice(0, 5) +
    " " +
    day +
    ". Overall, " +
    object.description;
  const icon = object.icon;
  const temp = object.temp;
  const humid = object.humidity;
  const wind = object.windspeed;
  const sunrise = object.sunrise.slice(0, 5);
  const location = object.address.toUpperCase();
  const windDir = getWindDir(object.winddir);
  //console.log("From processData:" + temp);
  return {
    weatherOutputText,
    icon,
    temp,
    humid,
    wind,
    windDir,
    sunrise,
    location,
  };
}

function getWindDir(winddir) {
  if (winddir >= 337.5 || winddir < 22.5) return "n";
  if (winddir < 67.5) return "ne";
  if (winddir < 112.5) return "e";
  if (winddir < 157.5) return "se";
  if (winddir < 202.5) return "s";
  if (winddir < 247.5) return "sw";
  if (winddir < 292.5) return "w";
}
