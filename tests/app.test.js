const request = require('supertest');
const app = require('../src/app');

describe('Test homepage', () => {
  it('should response with the 200 status', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});
