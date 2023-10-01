//Display Date

let now = new Date();
console.log(now);
console.log(now.getMilliseconds());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getMonth());

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
let date = now.getDate();
let year = now.getFullYear();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let displayDate = document.querySelector("#date");
displayDate.innerHTML = `${month} ${date} ${year} ${hour}:${minute}`;

// Change City and Temp
function updateWeather(response) {
  console.log(response.data.main);

  let temperature = Math.round(response.data.main.temp);
  let cityName = response.data.name;
  let description = Math.round(response.data.main.feels_like);

  let localCity = document.querySelector("#local-city");
  localCity.innerHTML = `${cityName}`;
  let updateTemp = document.querySelector("#local-temp");
  updateTemp.innerHTML = `${temperature}°`;
  let localDescription = document.querySelector("#description");
  localDescription.innerHTML = `Feels like ${description}°`;
}

function buildUrl(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let cityName = searchInput.value;
  let apiKey = "ce144f0cf51fa43f03431f0488a36728";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  console.log(searchInput.value);
  console.log(url);
  axios.get(url).then(updateWeather);
}

let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("submit", buildUrl);

// Current Temp button\
let searchCurrent = document.querySelector("button");
searchCurrent.addEventListener("click", runNavigator);

function runNavigator(event) {
  console.log("Cheryl");
  navigator.geolocation.getCurrentPosition(handlePosition);
}

function handlePosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "ce144f0cf51fa43f03431f0488a36728";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(url).then(updateWeather);
}

// Celsius to Fahrenheit conversion

/* function tempSwitchCelsius(click) {
  let localTemp = document.querySelector("#local-temp");
  localTemp.innerHTML = "14°";
  console.log("celsius");
}

function tempSwitchFahrenheit(click) {
  let localTemp = document.querySelector("#local-temp");
  localTemp.innerHTML = "57°";
  console.log("fahrenheit");
} */

// Celsius to farenheight conversion week 4

/* let changeCelsius = document.querySelector("#celsius");
changeCelsius.addEventListener("click", tempSwitchCelsius);

let changeFarenheit = document.querySelector("#fahrenheit");
changeFarenheit.addEventListener("click", tempSwitchFahrenheit); */
