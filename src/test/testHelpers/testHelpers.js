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

const initialFavourites = [{
  name: 'music',
  userId: null,
}, {
  name: 'movies',
  userId: null,
}, {
  name: 'cars',
  userId: null,
}];

const initialFavouritesItems = [{
  title: 'song 1',
  description: 'song 1 description',
  link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
}, {
  title: 'song 2',
  description: 'song 2 description',
  link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
}, {
  title: 'song 3',
  description: 'song 3 description',
  link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
}];

module.exports = {
  initialUsers,
  initialFavourites,
  initialFavouritesItems,
};
