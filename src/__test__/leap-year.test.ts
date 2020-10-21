import request from 'supertest';
import server from '../api/server';

describe('leap-year', () => {
  const endpoint = '/leap-year';
  it('has expected status code', async () => {
    await request(server).get(endpoint).expect(400);
  });

  it('has expected message', async () => {
   await request(server).get(endpoint).query({year:2000}).expect('The year 2000 was a Leap year')
  });

  it('rejects invalid year query param', async () => {
    await request(server).get(endpoint).query({year:10000}).expect(400)
  });

  it('rejects invalid year query param', async () => {
    await request(server).get(endpoint).query({year:-400}).expect(400)
  });

  it('rejects invalid year query param', async () => {
    await request(server).get(endpoint).query({year: 'blah blah'}).expect(400)
  });
});