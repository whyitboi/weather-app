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
  //console.log("From processData:" + temp);
  return { weatherOutputText, icon, temp };
}
