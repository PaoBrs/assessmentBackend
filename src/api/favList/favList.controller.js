const { createOneItem } = require('../users/users.service');
const { createOneFav, getAllFav, getOneFav } = require('./favList.service');

const handlerGetAllFav = async (req, res) => {
  const { user } = req;
  try {
    const favLists = await getAllFav(user._id.toString());
    return res.status(200).json(favLists);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const handlerCreateOneFav = async (req, res) => {
  const { body } = req;
  try {
    const newFavList = await createOneFav(body);
    return res.status(201).json(newFavList);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const handlerGetOneFav = async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  try {
    const favList = await getOneFav(id, user._id.toString());
    return res.status(200).json(favList);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const handlerAddOneFavItem = async (req, res) => {
  const { id } = req.params;
  const { user, body } = req;
  try {
    const updatedFavList = await createOneItem(id, user._id.toString(), body);
    return res.status(201).json(updatedFavList);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  handlerGetAllFav,
  handlerCreateOneFav,
  handlerGetOneFav,
  handlerAddOneFavItem,
};
