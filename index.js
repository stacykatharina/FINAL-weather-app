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

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

      function convertToFahrenheit(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature");
        temperatureElement.innerHTML = 87.8;
      }
      
      function convertToCelsius(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature");
        temperatureElement.innerHTML = 31;
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

function showTemperature(response) {
document.querySelector("#city").innerHTML = response.data.name;
document.querySelector("#temperature").innerHTML = Math.round(
  response.data.main.temp);
}

function searchCity(city) {
let apiKey = "8059f7da306a5b332766ef35cbbe116a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
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


       

      
