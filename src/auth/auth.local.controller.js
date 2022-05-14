const User = require('../api/users/users.model');
const { signToken } = require('./auth.local.service');

const handlerLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      msg: 'Email or password is incorrect - user',
    });
  }

  const isCorrectPassword = await user.comparePassword(password);

  if (!isCorrectPassword) {
    return res.status(400).json({
      msg: 'Email or password is incorrect - password',
    });
  }

  try {
    const token = await signToken({ email: user.email, _id: user._id.toString() });

    return res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Something went wrong with token',
    });
  }
};

module.exports = {
  handlerLogin,
};
