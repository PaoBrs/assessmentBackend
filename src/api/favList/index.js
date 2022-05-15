const Router = require('express');
const { validateJwtMw } = require('../../middleWares/tokenValidator');
const {
  handlerGetAllFav,
  handlerCreateOneFav,
  handlerGetOneFav,
  handlerAddOneFavItem,
} = require('./favList.controller');

const router = Router();

router.get('/', [validateJwtMw], handlerGetAllFav);

router.post('/', [validateJwtMw], handlerCreateOneFav);

router.get('/:id', [validateJwtMw], handlerGetOneFav);

router.post('/:id/add', [validateJwtMw], handlerAddOneFavItem);

module.exports = router;
