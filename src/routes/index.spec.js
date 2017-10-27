/* eslint no-param-reassign: "off" */
import test from 'ava';
import request from 'supertest';
import httpServer from '../http-server';

let server = httpServer;

test.before(() => {
  server = server.listen();
});

test('check server response', async (t) => {
  t.plan(3);

  const res = await request(server).get('/');

  t.is(res.status, 200, 'Response status is OK');
  t.is(res.type, 'text/plain', 'Response type is equal to text/plain');
  t.is(res.text, 'Hello World!', 'Corrent response body');
});

test('check server response for undefined path', async (t) => {
  t.plan(2);

  const res = await request(server).get('/undef');

  t.is(res.type, 'text/plain', 'Response type is equal to text/plain');
  t.is(res.status, 404, 'Response status is "Not Found"');
});

test('check server response for throw error path', async (t) => {
  t.plan(2);

  const res = await request(server).get('/throw-error');

  t.is(res.type, 'text/plain', 'Response type is equal to text/plain');
  t.is(res.status, 400, 'Response status is "Bad request"');
});

test.after(() => {
  server.close();
});
