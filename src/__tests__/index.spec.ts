import supertest from 'supertest';
import app from '../server';
import Model from '../models/Model';

const request = supertest(app);

describe('test basic endpoint server', () => {
  it('fet the / endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
