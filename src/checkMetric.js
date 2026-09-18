export function checkMetric(element, elementDisplay) {
  if (element.value === "us") {
    element.value = "metric";
    elementDisplay.textContent = "\u00B0C";
  } else if (element.value === "metric") {
    element.value = "us";
    elementDisplay.textContent = "\u00B0F";
  }
}
