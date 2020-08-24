const axios = require('axios');

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

export { getPixabayData };