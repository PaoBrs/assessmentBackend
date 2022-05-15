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
  if (rest.email === '' || !rest.email || rest.password === '' || !rest.password) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }
  if (rest.password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long' });
  }
  try {
    const user = await createUser(rest);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleGetAllUsers,
  handleGetOneUser,
  handleCreateUser,
};
