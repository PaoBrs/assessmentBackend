const jwt = require('jsonwebtoken');

const signToken = async (payload) => {
  try {
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });
    return token;
  } catch (error) {
    return null;
  }
};

const login = () => {
  return ('login');
};

module.exports = {
  login,
  signToken,
};
