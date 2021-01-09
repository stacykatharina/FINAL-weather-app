function formatDate(timestamp) {
  let date = new Date(timestamp);

  let dateInput = date.getDate();

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

  months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Now", "Dec"];
  month = months [date.getMonth()];

  let year = date.getFullYear();

  return `${day}, ${dateInput} ${month} ${year}, ${formatHours(timestamp)}`;
}
  function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${hours}:${minutes}`;
  }

  function showTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
  
    celsiusTemperature = response.data.main.temp;
  
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
  }

        function convertToFahrenheit(event) {
          event.preventDefault();
          let temperatureElement = document.querySelector("#temperature");
          let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
          temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
        }
        
        function convertToCelsius(event) {
          event.preventDefault();
          let temperatureElement = document.querySelector("#temperature");
          temperatureElement.innerHTML = Math.round(celsiusTemperature);
        }
      
        let fahrenheitLink = document.querySelector("#fahrenheit-link");
        fahrenheitLink.addEventListener("click", convertToFahrenheit);
        
        let celsiusLink = document.querySelector("#celsius-link");
        celsiusLink.addEventListener("click", convertToCelsius);


function showForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecast = response.data.list[0];
  console.log(forecast);

    forecastElement.innerHTML = `
    <div class="col">
      <h3>
        ${formatHours(forecast.dt * 1000)}
      </h3>
      <img
        src="http://openweathermap.org/img/wn/${forecast.weather[0].icon
        }@2x.png"
      />
      <div class="weather-forecast-temperature">
          ${Math.round(forecast.main.temp_max)}°
      </div>
    </div>`;

    forecast = response.data.list[1];
      forecastElement.innerHTML += `
      <div class="col">
        <h3>
          ${formatHours(forecast.dt * 1000)}
        </h3>
        <img
          src="http://openweathermap.org/img/wn/${forecast.weather[0].icon
          }@2x.png"
        />
        <div class="weather-forecast-temperature">
            ${Math.round(forecast.main.temp_max)}°
        </div>
      </div>`;


    forecast = response.data.list[2];
    forecastElement.innerHTML += `
    <div class="col">
      <h3>
        ${formatHours(forecast.dt * 1000)}
      </h3>
      <img
        src="http://openweathermap.org/img/wn/${forecast.weather[0].icon
        }@2x.png"
      />
      <div class="weather-forecast-temperature">
          ${Math.round(forecast.main.temp_max)}°
      </div>
    </div>`;

    forecast = response.data.list[3];
    forecastElement.innerHTML += `
    <div class="col">
      <h3>
        ${formatHours(forecast.dt * 1000)}
      </h3>
      <img
        src="http://openweathermap.org/img/wn/${forecast.weather[0].icon
        }@2x.png"
      />
      <div class="weather-forecast-temperature">
          ${Math.round(forecast.main.temp_max)}°
      </div>
    </div>`;

    forecast = response.data.list[4];
    forecastElement.innerHTML += `
    <div class="col">
      <h3>
        ${formatHours(forecast.dt * 1000)}
      </h3>
      <img
        src="http://openweathermap.org/img/wn/${forecast.weather[0].icon
        }@2x.png"
      />
      <div class="weather-forecast-temperature">
          ${Math.round(forecast.main.temp_max)}°
      </div>
    </div>`;
  }

function searchCity(city) {
  let apiKey = "8059f7da306a5b332766ef35cbbe116a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  searchCity(city.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function showPosition (position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "8059f7da306a5b332766ef35cbbe116a";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiURL).then(showTemperature);
  }

function getCurrentPosition(){
    navigator.geolocation.getCurrentPosition(showPosition);
   }

let locationButton = document.querySelector ("#current-location");
  locationButton.addEventListener("click", getCurrentPosition); 

