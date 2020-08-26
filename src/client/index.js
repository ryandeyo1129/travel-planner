import { getGeoNameData } from './js/getGeoNameData';
import { getWeatherBitData } from './js/getWeartherBitData';
import { getPixabayData } from './js/getPixabayData';

import './styles/style.scss';

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('button').addEventListener('click', (e) => {
    event.preventDefault();
  
    document.getElementById('weatherdata').innerHTML = '';
  
    const requestedDate = document.getElementById('date').value
    const city = document.getElementById('city').value;
    const geoNameUrl = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=rdeyo1129`;
  
    if (date.length === 0 || city.length === 0) {
      console.log('invalid input, enter a city and travel date');
    } else {
      getGeoNameData(geoNameUrl, city)
      .then(data => {
        let currentWeatherBitUrl = `http://api.weatherbit.io/v2.0/current?lat=${data.lat}&lon=${data.lng}&key=715e2a2bb7ac4908bcb797ac9f57dcc4`;
        let weatherBitUrl = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${data.lat}&lon=${data.lng}&key=715e2a2bb7ac4908bcb797ac9f57dcc4`;

        getWeatherBitData(currentWeatherBitUrl, true);
        getWeatherBitData(weatherBitUrl, false, requestedDate);
      })
      .then(() => {
        let pixabayUrl = `https://pixabay.com/api/?key=18007146-e1835a4e9a2f2bb8b223c6700&q=${city}&category=places&image_type=photo`;
        getPixabayData(pixabayUrl);
      })
    }
  })
})

export { getGeoNameData, getWeatherBitData, getPixabayData }