const { loginUserService } = require('../services');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const { status, data } = await loginUserService.login(email, password);
    if (status === 400) {
        return res.status(status).json(data);
    }
   res.status(status).json(data);
};

module.exports = {
    loginUser,
};