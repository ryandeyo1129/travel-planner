const axios = require('axios');

// weatherbit GET request
const getWeatherBitData = async (url, current, date) => {
  try {
    return await axios.get(url)
      .then(res => {
        let div = document.getElementById('weatherdata');
        let array = res.data.data;

        if (current === true) {
          console.log('!!!!!', res)
          div.innerHTML +=
          `
          <div class="currentWeatherContainer">
            <span class="currentWeather">Current Weather</span>
            <div class="temp">
              <span class="high">Current Temperature: ${array[0].temp}°C</span>
            </div>
            <span class="description">Current Forecast: ${array[0].weather.description}</span>
          </div>
          `
        } else {
          array.map(day => {
            if (day.datetime === date) {
              div.innerHTML +=
              `
              <span>TRAVEL DAY</span>
              <div class="weather travel">
                <span class="date">date: ${day.datetime}</span>
                <div class="temp">
                  <span class="high">high: ${day.high_temp}°C</span>
                  <span class="low">low: ${day.low_temp}°C</span>
                </div>
                <span class="description">forecast: ${day.weather.description}</span>
              </div>
              `;
            } else {
              div.innerHTML +=
              `
              <div class="weather">
                <span class="date">date: ${day.datetime}</span>
                <div class="temp">
                  <span class="high">high: ${day.high_temp}°C</span>
                  <span class="low">low: ${day.low_temp}°C</span>
                </div>
                <span class="description">forecast: ${day.weather.description}</span>
              </div>
              `;
            }
          })
        }
      })
  } catch (err) {
    console.log(err);
  }
}

export { getWeatherBitData };