let weather = {
  recife: {
    temp: 19.7,
    humidity: 80,
  },
  maceio: {
    temp: 27,
    humidity: 50,
  },
  lisbon: {
    temp: 30,
    humidity: 8,
  },
  london: {
    temp: 20,
    humidity: 10,
  },
  lisboa: {
    temp: 17,
    humidity: 10,
  },
};

let city = prompt("Enter a city? 🏙️");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city 😔 try going to https://www.google.com/search?q=weather+${city}`
  );
}
