const jwt = require('jsonwebtoken');
const { User } = require('../models');

const registerNewUser = async (user) => {
    const newUser = await User.findOne({ where: { email: user.email } });
    if (newUser) {
        return { status: 409, data: ({ message: 'User already registered' }) };
    }
  const newUserCreated = await User.create(user);
  const jwtPayload = {
    sub: newUserCreated.id,
    name: newUserCreated.name,
    role: 'newUserCreated',
  };
  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
    algorithm: 'HS256',
  });
  return {
    status: 201,
    data: { token },
  };
};

const getUser = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, data: allUsers };
};

const getUserId = async (id) => {
  const userId = await User.findOne({ attributes: { exclude: ['password'] }, where: { id } });
  if (!userId) {
    return { status: 404, data: { message: 'User does not exist' } };
  }
  return { status: 200, data: userId };
};

module.exports = {
    registerNewUser,
    getUser,
    getUserId,
};