import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('endpoint', (): void=> {
  it('gets the api endpoint', async (): Promise<void> => {
    const response = await request.get(
      '/api/images/?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
  it('calls get images without filename ', async (): Promise<void> => {
    const response = await request.get('/api/images/?width=200&height=200');
    expect(response.status).toBe(400);
  });
});
