const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return { status: 400,
    data: { message: 'Invalid fields' } };
  }
  const jwtPayload = {
    sub: user.id,
    name: user.name,
    role: 'user',
  };
  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
    algorithm: 'HS256',
  });
  return {
    status: 200,
    data: { token },
  };
};

module.exports = {
    login,
};