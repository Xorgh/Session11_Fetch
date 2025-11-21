const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=56.2858&longitude=9.4353&current=temperature_2m,rain,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m,snowfall,showers";

const tempElement = document.querySelector("#temperature")
const windspeedElement = document.querySelector("#windspeed")


fetch(URL)
  .then((response) => {
    if (!response.ok) throw new Error("HTTP error: " + response.status);
    return response.json();
  })
  .then((data) => {
    const currenntWeatherData = data.current;

    const tempType = data.current_units["temperature_2m"]
    const windType = data.current_units["wind_speed_10m"]

    const temp = currenntWeatherData.temperature_2m;
    const windspeed = currenntWeatherData.wind_speed_10m;

    tempElement.textContent = "Temperature: " + temp + " " + tempType;
    windspeedElement.textContent = "Windspeed: " + windspeed + " " + windType;
  })
  .catch((error) => {
    errorElement.textContent = "Sorry!";
  });
