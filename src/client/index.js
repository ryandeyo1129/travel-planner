import { selectButton } from './js/app'
import { getGeoNameData } from './js/getGeoNameData';
import { getWeatherBitData } from './js/getWeartherBitData';
import { getPixabayData } from './js/getPixabayData';

import './styles/style.scss';

selectButton();

export { selectButton, getGeoNameData, getWeatherBitData, getPixabayData }