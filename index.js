const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/`);
});
module.exports = app;
