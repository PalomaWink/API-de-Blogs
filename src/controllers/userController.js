const { userService } = require('../services');

const registerNewUser = async (req, res) => {
  const { status, data } = await userService.registerNewUser(req.body);
  res.status(status).json(data);
};

module.exports = {
    registerNewUser,
};