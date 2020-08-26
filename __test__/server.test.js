import 'babel-polyfill';
import request from 'supertest';
import app from '../src/server/index';
   
describe('get /person data', () => {
  test('call to api', async () => {
    request(app).get('/person').then((res) => {
      expect(res.location).toBe('Boston');
    });
  })
});