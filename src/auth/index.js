const { Router } = require('express');
const { handlerLogin } = require('./auth.local.controller');

const router = Router();

router.post('/login', [], handlerLogin);

module.exports = router;
