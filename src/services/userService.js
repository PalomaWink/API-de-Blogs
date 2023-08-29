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
  console.log(allUsers);
  return { status: 200, data: allUsers };
};

module.exports = {
    registerNewUser,
    getUser,
};