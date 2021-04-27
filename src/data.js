import { currentConditions, weekForecast } from "./conditionsHandler";

const inputCity = document.querySelector(".user-input");

async function buildURL() {
  const weather = await getWeather(inputCity.value);
}

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bfb0bf7cbddbc82c8afdb99f216e5f4f`, {
        mode: 'cors'
      }
    );
    const weatherData = await response.json();
    const lon = await weatherData.coord.lon;
    const lat = await weatherData.coord.lat;
    const forecast = await forecasting(lat, lon);
    const forecastData = await forecast.json();
    currentConditions(
      weatherData.name,
      weatherData.main,
      weatherData.weather[0].icon
    );
    weekForecast(forecastData.daily);
  } catch (err) {
    alert(err);
  }
}

async function forecasting(lat, lon) {
  const forecast = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=bfb0bf7cbddbc82c8afdb99f216e5f4f`, {
      mode: 'cors'
    }
  );
  return forecast;
}

export { getWeather, buildURL };
