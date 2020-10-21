import request from 'supertest';
import server from '../server';

describe('hello-world', () => {
  it('has expected status code', async () => {
    await request(server).get('/').expect(200);
  })

  it('has expected status code', async () => {
   await request(server).get('/').expect('Hello World')
  })
});