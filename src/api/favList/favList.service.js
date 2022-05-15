const FavList = require('./favList.model');

const getAllFav = async (_id) => {
  const favLists = await FavList.find({ userId: _id });
  return favLists;
};
const createOneFav = async (body) => {
  const newFavList = await FavList.create(body);
  return newFavList;
};
const getOneFav = async (_id, userId) => {
  const favList = await FavList.findOne({ _id, userId });
  return favList;
};

module.exports = {
  getAllFav,
  createOneFav,
  getOneFav,
};
