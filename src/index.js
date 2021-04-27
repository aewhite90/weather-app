import { getWeather, buildURL } from "./data";

const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", buildURL);

getWeather("Chattanooga");
