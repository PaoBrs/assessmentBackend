const Router = require('express');
const { validateJwtMw } = require('../../middleWares/tokenValidator');
const { handleGetAllUsers, handleGetOneUser, handleCreateUser } = require('./users.controller');

const router = Router();

router.get('/', [], handleGetAllUsers);
router.get('/:id', [validateJwtMw], handleGetOneUser);
router.post('/', [], handleCreateUser);

module.exports = router;
