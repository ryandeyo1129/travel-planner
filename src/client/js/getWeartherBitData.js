const axios = require('axios');

// weatherbit GET request
const getWeatherBitData = async (url) => {
  try {
    return await axios.get(url)
      .then(res => {
        console.log(res);
        console.log(res.data.data)

        let div = document.getElementById('weatherdata');

        res.data.data.map(day => {
          div.innerHTML +=
            `<div id="weather">
              <span class="date">date: ${day.datetime}</span>
              <span class="high">high: ${day.high_temp}°C</span>
              <span class="low">low: ${day.low_temp}°C</span>
              <span class="description">forecast: ${day.weather.description}</span>
            </div>`;
        })
      })
  } catch (err) {
    console.log(err);
  }
}

export { getWeatherBitData };