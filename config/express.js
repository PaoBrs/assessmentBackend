const express = require('express');
const morgan = require('morgan');

function configureExpress(app) {
  app.use(express.json());
  app.use(morgan('dev'));
}

module.exports = configureExpress;
