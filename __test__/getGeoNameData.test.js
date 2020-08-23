import 'babel-polyfill';

import { getGeoNameData } from '../src/client';

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the getGeoNameData function", () => {
  test("Tuse jsdom in this test file", () => {
    expect(getGeoNameData('http://api.geonames.org/searchJSON?q=boston&maxRows=1&username=rdeyo1129').data.geonames[0]).toBe('42.35843');
  })
  test('true is truthy', () => {
    expect(true).toBe(true)
  })
});