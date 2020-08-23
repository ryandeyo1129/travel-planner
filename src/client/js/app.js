const axios = require('axios');

let selectButton = document.getElementById('button')

// add event listener to button
selectButton.addEventListener('click', (e) => {
  event.preventDefault();

  document.getElementById('weatherdata').innerHTML = '';

  const city = document.getElementById('city').value;
  const geoNameUrl = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=rdeyo1129`;

  getGeoNameData(geoNameUrl)
    .then(data => {
      const weatherBitUrl = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${data.lat}&lon=${data.lng}&key=715e2a2bb7ac4908bcb797ac9f57dcc4`;
      getWeatherBitData(weatherBitUrl);
    })
    .then(() => {
      let pixabayUrl = `https://pixabay.com/api/?key=18007146-e1835a4e9a2f2bb8b223c6700&q=${city}&image_type=photo`;
      getPixabayData(pixabayUrl);
    })
}) 

// geoname GET request
const getGeoNameData = async (url) => {
  try {
    return await axios.get(url)
      .then(res => {
        return {
          lat: res.data.geonames[0].lat,
          lng: res.data.geonames[0].lng
        }
      });
  } catch (err) {
    console.log(err);
  }
}

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

// pixabay GET request
const getPixabayData = async (url) => {
  try {
    return await axios.get(url)
      .then(res => {
        let div = document.getElementById('cityphoto');
        div.innerHTML = `<img id="cityImage" src="${res.data.hits[0].largeImageURL}" />`;
      })
  } catch (err) {
    console.log(err);
  }
}

export { selectButton, getGeoNameData, getWeatherBitData, getPixabayData }
