const Router = require('express');
const { handleGetAllUsers, handleGetOneUser, handleCreateUser } = require('./users.controller');

const router = Router();

router.get('/', [], handleGetAllUsers);
router.get('/:id', [], handleGetOneUser);
router.post('/', [], handleCreateUser);

module.exports = router;
