let now = new Date();
  console.log(now.getDate());

  let li = document.querySelector ("li");
  let date = now.getDate();
  let hours = now.getHours ();
  let minutes = now.getMinutes();
  let year = now.getFullYear();


  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days [now.getDay()];

  let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Now", "Dec"];
  let month = months [now.getMonth()];

  li.innerHTML = `${day},  ${date} ${month} ${year}   ${hours}:${minutes} `;

  function showTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
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

function showPosition (position) {
  console.log = (position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "8059f7da306a5b332766ef35cbbe116a";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiURL).then(showTemperature);
  }

function showForecast(response){
  let forecastElement = document.querySelector ("#forecast");
  let forecast = response.data.list[0];
  
  forecastElement.innerHTML = `
  <div class="col-2">
    <h3>
      12pm
    </h3>
    <img 
      src="http://openweathermap.org/img/wn/10d@2x.png"
      id="icon"
      alt="Clear">
      <br>
    <div id = "temperature">${Math.round(forecast.main.temp_max)}°</div>
  </div>`
}

function searchCity(city) {
  let apiKey = "8059f7da306a5b332766ef35cbbe116a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

apiUrl =`https//api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;
axios.get(apiUrl).then(showForecast);

}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let button = document.querySelector ("#current-location");
  button.addEventListener("click", getCurrentPosition); 

function getCurrentPosition(){
   navigator.geolocation.getCurrentPosition(showPosition);
  }
