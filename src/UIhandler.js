const weatherPage = document.querySelector("section");
const weatherContainer = document.createElement("div");
weatherContainer.classList.add("weather-container");

const cityName = (city, temp, conditions) => {
  while (weatherContainer.firstChild) {
    weatherContainer.removeChild(weatherContainer.firstChild);
  }

  while (weatherPage.firstChild) {
    weatherPage.removeChild(weatherPage.firstChild);
  }

  const cityTemp = document.createElement("div");
  cityTemp.classList.add("city-temp");

  const currentConditionContainer = document.createElement("div");

  const name = document.createElement("h2");
  name.classList.add("city");
  name.textContent = city;

  const currentTemp = document.createElement("h1");
  currentTemp.textContent = "|" + temp + "°|";

  const weatherDay = conditions;
  const dayDesc = document.createElement("img");
  dayDesc.classList.add("large-weather-pic");
  dayDesc.src = getWeatherPic(weatherDay);

  cityTemp.appendChild(name);
  cityTemp.appendChild(currentTemp);
  cityTemp.appendChild(dayDesc);

  weatherPage.appendChild(cityTemp);

  currentConditionContainer.classList.add("current-container");
  weatherContainer.appendChild(currentConditionContainer);

  weatherPage.appendChild(weatherContainer);
};

const cityConditions = (desc, condition) => {
  const currentConditionContainer = document.querySelector(
    ".current-container"
  );

  const condContainer = document.createElement("div");
  condContainer.classList.add("flex-container");
  const description = document.createElement("span");
  description.classList.add("condition-desc");
  description.textContent = desc;
  const currentCondition = document.createElement("span");
  currentCondition.textContent = condition + "°";

  condContainer.appendChild(description);
  condContainer.appendChild(currentCondition);

  currentConditionContainer.appendChild(condContainer);
};

const displayForecast = (forecast) => {
  const forecastContainer = document.createElement("div");
  forecastContainer.classList.add("forecast-container");
  forecast.forEach((day) => {
    const forecastDay = day.dt.slice(0, 3);
    const weatherDay = day.weather[0].icon;
    const high = day.temp.max;
    const low = day.temp.min;

    const dayContainer = document.createElement("div");
    dayContainer.classList.add("forecast-card");
    const dayName = document.createElement("h4");
    dayName.textContent = forecastDay;
    const dayDesc = document.createElement("img");
    dayDesc.classList.add("weather-pic");
    dayDesc.src = getWeatherPic(weatherDay);
    const dayHigh = document.createElement("span");
    dayHigh.textContent = "High: " + high + "°";
    const dayLow = document.createElement("span");
    dayLow.textContent = "Low: " + low + "°";

    dayContainer.appendChild(dayName);
    dayContainer.appendChild(dayDesc);
    dayContainer.appendChild(dayHigh);
    dayContainer.appendChild(dayLow);

    forecastContainer.appendChild(dayContainer);
  });
  weatherContainer.appendChild(forecastContainer);
};

const getWeatherPic = (weather) => {
  if (weather === "01d") {
    return "./assets/01d.png";
  } else if (weather === "01n") {
    return "./assets/01n.png";
  } else if (weather === "02d") {
    return "./assets/02d.png";
  } else if (weather === "02n") {
    return "./assets/02n.png";
  } else if (weather === "03d") {
    return "./assets/03d.png";
  } else if (weather === "03n") {
    return "./assets/03n.png";
  } else if (weather === "04d") {
    return "./assets/04d.png";
  } else if (weather === "04n") {
    return "./assets/04n.png";
  } else if (weather === "09d") {
    return "./assets/09d.png";
  } else if (weather === "09n") {
    return "./assets/09n.png";
  } else if (weather === "10d") {
    return "./assets/10d.png";
  } else if (weather === "10n") {
    return "./assets/10n.png";
  } else if (weather === "11d") {
    return "./assets/11d.png";
  } else if (weather === "11n") {
    return "./assets/11n.png";
  } else if (weather === "13d") {
    return "./assets/13d.png";
  } else if (weather === "13n") {
    return "./assets/13n.png";
  } else if (weather === "50d") {
    return "./assets/50d.png";
  } else {
    return "./assets/50n.png";
  }
};

export { cityName, cityConditions, displayForecast };
