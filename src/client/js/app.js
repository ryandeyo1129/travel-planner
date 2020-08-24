import { getGeoNameData } from './getGeoNameData';
import { getWeatherBitData } from './getWeartherBitData';
import { getPixabayData } from './getPixabayData';

const selectButton = () => {
  document.getElementById('button').addEventListener('click', (e) => {
    event.preventDefault();
  
    document.getElementById('weatherdata').innerHTML = '';
  
    const city = document.getElementById('city').value;
    const geoNameUrl = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=rdeyo1129`;
  
    getGeoNameData(geoNameUrl)
      .then(data => {
        let weatherBitUrl = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${data.lat}&lon=${data.lng}&key=715e2a2bb7ac4908bcb797ac9f57dcc4`;
        getWeatherBitData(weatherBitUrl);
      })
      .then(() => {
        let pixabayUrl = `https://pixabay.com/api/?key=18007146-e1835a4e9a2f2bb8b223c6700&q=${city}&image_type=photo`;
        getPixabayData(pixabayUrl);
      })
  })
}

export { selectButton }
