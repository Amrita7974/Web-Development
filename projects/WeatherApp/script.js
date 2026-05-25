// const API_KEY = "51e9098af58407236f8acb3a14c8cd30";
// async function getWeather() {
//   const cityName = document.getElementById("cityName").value.trim();

//   const { Lattitude, Longitude } = await getGeoLocation(cityName);

//   //   console.log({ Lattitude, Longitude });

//   const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

//   const response = await fetch(WEATHER_API);
//   const data = await response.json();
//   const data1 = await response.json();

//   //console.log(data);

//   const temperature = data.main.temp - 273.15;

//   document.getElementById("Temperature").innerText = temperature.toFixed(2);
// }

// async function getGeoLocation(city) {
//   const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

//   const response = await fetch(GEO_LOC_API);
//   const data = await response.json();

//   //   console.log(data);

//   const Lattitude = data[0].lat;
//   const Longitude = data[0].lon;

//   return { Lattitude, Longitude };
// }

const API_KEY = "";

async function getWeather() {
  
  const cityname = document.getElementById("city").value.trim();
  if (!cityname) return;

  
  const { Lattitude, Longitude } = await getGeoLocation(cityname);

 
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

  const response = await fetch(WEATHER_API);
  const data = await response.json();

  
  const temperature = data.main.temp - 273.15;

  document.getElementById("WeatherData").innerHTML = `
    <div class="text-primary-emphasis py-2">
      <h3 class="fs-2 fw-bold mb-1">${data.name}</h3>
      <p class="text-capitalize text-muted small mb-3">${data.weather[0].description}</p>
      <div class="display-3 fw-bold text-primary mb-0">${temperature.toFixed(2)}°C</div>
    </div>
  `;
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();


  const Lattitude = data[0].lat;
  const Longitude = data[0].lon;

  return { Lattitude, Longitude };
}