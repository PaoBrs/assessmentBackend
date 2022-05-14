const supertest = require('supertest');
const mongoose = require('mongoose');

const app = require('../../../app');
const connectDB = require('../../../config/database');
const Users = require('../../../api/users/users.model');

const request = supertest(app);

const initialUsers = [{
  email: 'test01@test.com',
  password: '12345678',
},
{
  email: 'test02@test.com',
  password: '12345678',
},
{
  email: 'test3@test.com',
  password: '12345678',
}];

const token = '';
const _id = '';

describe('Users enpoints tests', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await Users.deleteMany();
    await mongoose.connection.close();
  });
  test('should create 3 users', async () => {
    const usersPromises = initialUsers.map((user) => request.post('/api/users').send(user));
    await Promise.all(usersPromises);

    const response = await request
      .get('/api/users');

    expect(response.status).toBe(200);
    expect(response.body.results.length).toBe(initialUsers.length);
  });
});
