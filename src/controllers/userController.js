const { userService } = require('../services');

const registerNewUser = async (req, res) => {
  const { status, data } = await userService.registerNewUser(req.body);
  return res.status(status).json(data);
};

const getAllUsers = async (_req, res) => {
  const { status, data } = await userService.getUser();
  return res.status(status).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getUserId(id);
  if (status === 404) {
    return res.status(status).json(data);
  }
  return res.status(status).json(data);
};

module.exports = {
    registerNewUser,
    getAllUsers,
    getUserById,
};