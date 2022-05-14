const { createUser, getAllUsers, getOneUser } = require('./users.service');

const handleGetAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleGetOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getOneUser(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleCreateUser = async (req, res) => {
  const {
    _id, __v, updatedAt, createdAt, ...rest
  } = req.body;
  try {
    const user = await createUser(rest);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleGetAllUsers,
  handleGetOneUser,
  handleCreateUser,
};
