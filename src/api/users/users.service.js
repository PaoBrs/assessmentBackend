const crypto = require('crypto');
const User = require('./users.model');
const FavList = require('../favList/favList.model');

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getOneUser = async (id) => {
  const user = await User.findById(id);
  return user;
};

const createUser = async (user) => {
  const newUser = await User.create(user);
  newUser.passwordResetToken = crypto.randomBytes(20).toString('hex');
  newUser.passwordResetExpires = Date.now() + 3600000 * 24;

  await newUser.save();
  return newUser;
};

const createOneItem = async (_id, userId, body) => {
  const updatedFavList = await FavList.findOneAndUpdate(
    { _id, userId },
    { $push: { items: body } },
    { new: true },
  );
  return updatedFavList;
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  createOneItem,
};
