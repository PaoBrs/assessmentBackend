const supertest = require('supertest');
const { connection } = require('mongoose');
const {
  initialUsers,
  initialFavourites,
  initialFavouritesItems,
} = require('../../testHelpers/testHelpers');
const app = require('../../../../app');
const connectDB = require('../../../../config/database');
const Users = require('../../../api/users/users.model');
const FavList = require('../../../api/favList/favList.model');

const request = supertest(app);

let token = '';
let userId = '';
let favouriteId = '';

describe('Users enpoints tests', () => {
  beforeAll(async () => {
    await connectDB();
    await request.post('/api/users').send(initialUsers[0]);

    const response = await request
      .post('/auth.local/login')
      .send({
        email: initialUsers[0].email,
        password: initialUsers[0].password,
      });

    token = response.body.token;
    userId = response.body.user._id;
  });

  afterAll(async () => {
    await FavList.deleteMany();
    await Users.deleteMany();
    await connection.close();
  });

  test('should create 3 Favourites list', async () => {
    const favouritesPromises = initialFavourites.map((favourite) => (
      request.post('/api/favList')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: favourite.name,
          userId,
        })));

    const responses = await Promise.all(favouritesPromises);

    favouriteId = responses[0].body._id;

    const response = await request
      .get('/api/favList')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(initialFavourites.length);
  });

  test('should get Favourite list by id', async () => {
    const response = await request
      .get(`/api/favList/${favouriteId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(favouriteId);
  });

  test('should add 3 Favourite item to an Favourite list', async () => {
    const promises = initialFavouritesItems.map((item) => (
      request.post(`/api/favList/${favouriteId}/add`)
        .set('Authorization', `Bearer ${token}`)
        .send(item)));

    await Promise.all(promises);

    const response = await request
      .get(`/api/favList/${favouriteId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.items.length).toBe(initialFavouritesItems.length);
  });
});
