const supertest = require('supertest');
const mongoose = require('mongoose');

const app = require('../../../../app');
const connectDB = require('../../../../config/database');
const Users = require('../../../api/users/users.model');

const request = supertest(app);

const initialUsers = [{
  email: 'test1@test.com',
  password: '12345678',
},
{
  email: 'test2@test.com',
  password: '12345678',
},
{
  email: 'test3@test.com',
  password: '12345678',
}];
let userId;
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
    const allResponse = await Promise.all(usersPromises);
    userId = allResponse[0].body.user._id;

    const response = await request
      .get('/api/users');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(initialUsers.length);
  });

  test('should get user by id', async () => {
    const response = await request
      .get(`/api/users/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body.user._id).toBe(userId);
  });
});
