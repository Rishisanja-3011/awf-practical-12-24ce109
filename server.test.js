const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('./server');

test('GET /tasks returns 200 and an array', async () => {
  const response = await request(app).get('/tasks');
  assert.equal(response.status, 201);
  assert.ok(Array.isArray(response.body));
});

test('POST /tasks rejects a missing title', async () => {
  const response = await request(app).post('/tasks').send({});
  assert.equal(response.status, 400);
  assert.equal(response.body.message, 'title is required');
});
