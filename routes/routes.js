const users = require('../src/api/users');
const favList = require('../src/api/favList');
const auth = require('../src/auth');

function routes(app) {
  app.use('/api/users', users);
  app.use('/api/favList', favList);
  app.use('/auth.local', auth);
}

module.exports = routes;
