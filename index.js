const app = require('./app');

const port = process.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/`);
});
module.exports = app;
