import request from 'supertest';
import httpServer from '../server';

jest.mock('../../libs/logger');

describe('Base HTTP routes', () => {
  let server = httpServer;

  beforeAll(() => {
    server = server.listen();
  });

  afterAll(() => {
    server.close();
  });

  test('check server response', async () => {
    expect.assertions(3);

    const res = await request(server).get('/');

    expect(res.status).toBe(200);
    expect(res.type).toBe('text/plain');
    expect(res.text).toBe('Hello World!');
  });

  test('check server response for undefined path', async () => {
    expect.assertions(2);

    const res = await request(server).get('/undef');

    expect(res.type).toBe('text/plain');
    expect(res.status).toBe(404);
  });

  test('check server response for throw 400 error path', async () => {
    expect.assertions(3);

    const res = await request(server).get('/throw-error-400');

    expect(res.type).toBe('text/plain');
    expect(res.status).toBe(400);
    expect(res.res.text).toBe('name required');
  });

  test('check server response for throw 500 error path', async () => {
    expect.assertions(3);

    const res = await request(server).get('/throw-error');

    expect(res.type).toBe('text/plain');
    expect(res.status).toBe(500);
    expect(res.res.text).toBe('Internal Server Error');
  });
});
