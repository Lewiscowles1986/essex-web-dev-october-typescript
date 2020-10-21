import request from 'supertest';
import server from '../api/server';

describe('hello-world', () => {
  it('has expected status code', async () => {
    await request(server).get('/').expect(200);
  });

  it('has expected status code', async () => {
   await request(server).get('/').expect('Hello World')
  });

  it('contains a name parameter', async () => {
   await request(server).get('/')
    .query({name: 'Lewis'})
    .expect('Hello Lewis')
  });

  it('rejects unknown query param', async () => {
    await request(server).get('/')
    .query({llamas: 'Lewis'})
    .expect(400)
  });
});