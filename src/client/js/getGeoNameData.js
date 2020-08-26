const axios = require('axios');

// geoname GET request
const getGeoNameData = async (url, city) => {
  try {
    return await axios.get(url)
      .then(res => {

        console.log('!!!!!', res)

        document.getElementById('cityname').innerHTML = `<h1>Weather Results for ${city}</h1>`

        return {
          lat: res.data.geonames[0].lat,
          lng: res.data.geonames[0].lng
        }
      });
  } catch (err) {
    console.log(err);
  }
}

export { getGeoNameData };