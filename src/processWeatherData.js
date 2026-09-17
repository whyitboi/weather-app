export function processData(object, metric) {
  let day = "";
  if (object.datetime > object.sunrise) {
    day = "tomorrow";
  } else day = "today";
  const weatherOutputText =
    "The time is " +
    object.datetime.slice(0, 5) +
    ", the temperature is " +
    object.temp +
    metric +
    " with humidity levels at " +
    object.humidity +
    " and sunrise expected at " +
    object.sunrise.slice(0, 5) +
    " " +
    day +
    ". Overall, " +
    object.description;
  const icon = object.icon;
  return { weatherOutputText, icon };
}
