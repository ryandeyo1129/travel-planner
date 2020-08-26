import 'babel-polyfill';
import { getGeoNameData } from '../src/client/js/getGeoNameData';

describe("Testing the getGeoNameData function", () => {
  test("Testing geonamedata function", () => {
    getGeoNameData('http://api.geonames.org/searchJSON?q=boston&maxRows=1&username=rdeyo1129').then(res => expect(res.lat).toBe('42.35843'));
  })
  test('true is truthy', () => {
    expect(true).toBe(true)
  })
});