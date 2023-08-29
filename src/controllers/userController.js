const { userService } = require('../services');

const registerNewUser = async (req, res) => {
  const { status, data } = await userService.registerNewUser(req.body);
  return res.status(status).json(data);
};

const getAllUsers = async (_req, res) => {
  const { status, data } = await userService.getUser();
  console.log(data);
  return res.status(status).json(data);
};

module.exports = {
    registerNewUser,
    getAllUsers,
};