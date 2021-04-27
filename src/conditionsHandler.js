import { cityConditions, displayForecast, cityName } from "./UIhandler";
import { format } from "date-fns";

const currentConditions = (city, temp, conditions) => {
  temp.temp = tempConvert(temp.temp);
  temp.temp_max = tempConvert(temp.temp_max);
  temp.temp_min = tempConvert(temp.temp_min);
  temp.feels_like = tempConvert(temp.feels_like);

  cityName(city, temp.temp, conditions);
  cityConditions("High Temp: ", temp.temp_max);
  cityConditions("Low Temp: ", temp.temp_min);
  cityConditions("Feels Like: ", temp.feels_like);
};

const tempConvert = (temp) => {
  return Math.floor((temp - 273.15) * 1.8 + 32);
};

const weekForecast = (forecast) => {
  forecast.forEach((day) => {
    day.dt = format(new Date(day.dt * 1000), "EE MM/dd/yyyy");
    day.temp.min = tempConvert(day.temp.min);
    day.temp.max = tempConvert(day.temp.max);
  });
  displayForecast(forecast);
};

export { currentConditions, weekForecast };
