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
  //console.log("From processData:" + temp);
  return { weatherOutputText, icon, temp, humid, wind, sunrise, location };
}
