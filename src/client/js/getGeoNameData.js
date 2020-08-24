const axios = require('axios');

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

export { getGeoNameData };